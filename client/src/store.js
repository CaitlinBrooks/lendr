import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'
// SOCKETS
import io from 'socket.io-client'
import { userInfo } from 'os';
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
    roomData: {},
    snackbar: false,
    rating: null
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
    changeSnackbar(state, snackbar) {
      state.snackbar = snackbar
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
    leave(state) {
      state.joined = false,
        state.name = '',
        state.messages = [],
        state.roomData = {}
    },
    setRating(state, rating) {
      state.rating = rating
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
          commit('setRating', (res.data.rating.reduce((a, b) => a + b, 0) / res.data.rating.length))
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
          commit('setRating', (res.data.rating.reduce((a, b) => a + b, 0) / res.data.rating.length))
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
    getUser({ commit, dispatch }) {
      api.get('user')
        .then(res => {
          console.log(res.data[0])
          commit('setUser', res.data[0])
          commit('setRating', (res.data[0].rating.reduce((a, b) => a + b, 0) / res.data[0].rating.length))
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
      api.get('/user/findByName/' + lendBorrower)
        .then(res => {
          commit('setBorrower', res.data)
        })
    },
    // @ts-ignore
    createLend({ commit, dispatch }, lendData) {
      api.post('/lend/createLend/', lendData)
        .then(res => {
          dispatch('getLends', lendData.lendr.userId)
          dispatch('sendMessage', lendData.borrower.userId)
          //need this method to build/draw profile
        })
        .catch(err => {
          console.error(err.response.data.message)
        })
    },
    // @ts-ignore
    validateLend({ commit, dispatch }, borrow) {
      borrow.lendr.lent = true
      api.put('/lend/myBorrows/update/' + borrow._id, borrow)
        .then(() => {
          dispatch('getBorrows', borrow.borrower.userId)
        })
    },
    // @ts-ignore
    validateReturn({ commit, dispatch }, lend) {
      lend.lendr.lent = true
      api.put('/lend/myLends/update/' + lend._id, lend)
        .then(() => {
          dispatch('getLends', lend.lendr.userId)
        })
    },
    hideSnackbar({ commit }) {
      commit('changeSnackbar', false)
    },
    showSnackbar({ commit, dispatch }) {
      commit('changeSnackbar', true)
      setTimeout(() => {
        dispatch('hideSnackbar')
      }, 6000);
    },
    sendRating({ commit, dispatch }, userInfo) {
      api.put('/user/rating', userInfo)
        .then(() => {
          dispatch('getUser', userInfo.userId)
        })
    },
    // SOCKETS
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


      socket.on('newMessage', data => {
        // @ts-ignore
        console.log("message for" + data)
        // @ts-ignore
        if (data == this.state.user._id) {
          dispatch('getBorrows', data)
          dispatch('showSnackbar')
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
  },
  getters: {
    dueDates(state) {
      let dates = []
      state.lends.forEach(lend => dates.push(lend.dueDate))
      state.borrows.forEach(borrow => dates.push(borrow.dueDate))
      return dates
    }
  }
})

