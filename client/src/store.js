import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'
// SOCKETS
import io from 'socket.io-client'
let socket = {}


let auth = axios.create({
  baseURL: "//localhost:3000/auth/",
  timeout: 3000,
  withCredentials: true
})

let api = axios.create({
  baseURL: '//localhost:3000/api/',
  timeout: 3000,
  withCredentials: true
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    lends: [],
    borrows: [],
    borrower: '',
    // SOCKETS
    joined: false,
    name: '',
    messages: [],
    roomData: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setLends(state, lends) {
      state.lends = lends
    },
    setBorrows(state, borrows) {
      state.borrows = borrows
    },
    setBorrower(state, borrower) {
      state.borrower = borrower
    },
    // SOCKETS
    setJoined(state, payload) {
      state.joined = true
      state.name = payload;
    },
    setRoom(state, payload) {
      state.roomData = payload
    },
    newUser(state, payload) {
      Vue.set(state.roomData.connectedUsers, payload.userName, payload.userName)
    },
    userLeft(state, payload) {
      Vue.set(state.roomData.connectedUsers, payload, undefined)
    },
    addMessage(state, payload) {
      state.messages.push(payload)
    },
    leave(state) {
      state.joined = false,
        state.name = '',
        state.messages = [],
        state.roomData = {}
    }
  },
  actions: {
    //AUTH STUFF
    // @ts-ignore
    register({ commit, dispatch }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'profile' })
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'profile' })
          // @ts-ignore
          dispatch('getLends', this.state.user._id)
          // @ts-ignore
          dispatch('getBorrows', this.state.user._id)
          // @ts-ignore
          dispatch('join', this.state.user._id)
        })
    },
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'profile' })
          // @ts-ignore
          dispatch('getLends', this.state.user._id)
          // @ts-ignore
          dispatch('getBorrows', this.state.user._id)
        })
    },
    logout({ commit }) {
      auth.delete('logout')
        // @ts-ignore
        .then(res => {
          router.push({ name: 'home' })
          commit('setUser', {})
        })
    },
    //start a new lend
    // @ts-ignore
    addLend({ commit, dispatch }, newLend) {
      //most likely going to have to create newLend object above that has a lendId
      api.post('lend', newLend)
        .then(res => {
          dispatch('getLends')
          dispatch('sendMessage', newLend.borrower.userId)
          //need this method to build/draw profile
        })
        .catch(err => {
          console.error(err.response.data.message)
        })
      //socket time



    },
    //confirm lend with two parties, lender and lendee, needs two id's and two bools (we think)
    //once item is returned we can move it to history / remove it from active lends
    //gonna be a tricky one I think
    lendConfirm() {

    },
    // I still need to check routes on this to make sure they match up
    // @ts-ignore
    deleteLend({ dispatch, commit }, lendId) {
      api.delete('lend/' + lendId)
        // @ts-ignore
        .then(res => {
          dispatch('getAllLends')
        })
        .catch(err => {
          console.error(err.response.data.message)
        })
    },
    updateProfilePicture({ dispatch }, userData) {
      api.put('user/edit', userData)
        .then(() => {
          dispatch('getUser')
        })
    },
    getUser({ commit }) {
      api.get('user')
        .then(res => {
          console.log(res.data[0])
          commit('setUser', res.data[0])
        })
    },
    // @ts-ignore
    getLends({ commit, dispatch }, userId) {
      api.get('lend/mylends/' + userId)
        .then(res => {
          commit('setLends', res.data)
        })
        .catch(err => {
          console.error(err.response.data.message)
        })
    },
    getBorrows({ commit }, userId) {
      api.get('lend/myborrows/' + userId)
        .then(res => {
          commit('setBorrows', res.data)
        })
        .catch(err => {
          console.error(err.response.data.message)
        })
    },
    // @ts-ignore
    findUserId({ commit, dispatch }, lendBorrower) {
      api.get('user/findByName/' + lendBorrower)
        .then(res => {
          commit('setBorrower', res.data)
        })
    },
    // @ts-ignore
    createLend({ commit, dispatch }, lendData) {
      api.post('/lend/createLend/', lendData)
        .then(res => {
          dispatch('getLends')
          dispatch('sendMessage', lendData.borrower.userId)
          //need this method to build/draw profile
        })
        .catch(err => {
          console.error(err.response.data.message)
        })
    },
    // @ts-ignore
    validateLend({ commit, dispatch }, borrow) {
      api.put('/lend/mylends/' + borrow._id, { lendr: { lent: borrow.lendr.lent = true } })
        .then(() => {
          dispatch('authenticate')
        })
    },
    // @ts-ignore
    validateReturn({ commit, dispatch }, lend) {
      api.put('/lend/myBorrows/' + lend._id, lend.borrower.returned = true)
        .then(() => {
          dispatch('authenticate')
        })
      // SOCKETS
    },
    join({ commit, dispatch }, payload) {
      commit('setJoined', payload);
      dispatch('socket', payload)
    },
    socket({ commit, dispatch }, payload) {
      //establish connection with socket
      socket = io('//localhost:3000')
      //register socket event listeners
      socket.on('CONNECTED', data => {
        console.log('Connected to socket')
        //connect to room 
        socket.emit('join', { name: payload })
      })

      socket.on('joinedRoom', data => {
        commit('setRoom', data)
      })

      socket.on('newUser', data => {
        commit('newUser', data)
      })

      socket.on('left', data => {
        console.log('user left', data)
        commit('userLeft', data)
      })

      socket.on('newMessage', data => {
        // @ts-ignore
        if (data == this.state.user._id) {
          dispatch('getBorrows', data)
          console.log("You have a new borrow!")
        }
        // This needs to target a specific user and refresh with borrows by ID.
      })
    },
    sendMessage({ commit, dispatch }, payload) {
      socket.emit('message', payload)
    },
    leaveRoom({ commit, dispatch }, payload) {
      socket.emit('leave')
      socket.close()
      commit('leave')
    }
  }
})

