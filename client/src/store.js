import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

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
    borrower: ''
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setLends(state, lends) {
      state.lends = lends
    },
    setBorrower(state, borrower) {
      state.borrower = borrower
    }
  },
  actions: {
    //AUTH STUFF
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
          dispatch('getLends', this.state.user._id)
          dispatch('getBorrows', this.state.user._id)
        })
    },
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'profile' })
        })
    },
    logout() {
      auth.delete('logout')
        .then(res => {
          router.push({ name: 'home' })
        })
    },
    //start a new lend
    addLend({ commit, dispatch }, newLend) {
      //most likely going to have to create newLend object above that has a lendId
      api.post('lends', newLend)
        .then(res => {
          dispatch('getAllLends')
          //need this method to build/draw profile
        })
        .catch(err => {
          console.error(err.response.data.message)
        })


    },
    //confirm lend with two parties, lender and lendee, needs two id's and two bools (we think)
    //once item is returned we can move it to history / remove it from active lends
    //gonna be a tricky one I think
    lendConfirm() {

    },
    // I still need to check routes on this to make sure they match up
    deleteLend({ dispatch, commit }, lendId) {
      api.delete('lends/' + lendId)
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
    getLends({ commit, dispatch }, userId) {
      api.get('lends/mylends/' + userId)
        .then(res => {
          commit('setLends', res.data)
        })
        .catch(err => {
          console.error(err.response.data.message)
        })
    },
    getBorrows({ commit }, userId) {
      api.get('lends/myborrows/' + userId)
        .then(res => {
          commit('setBorrows', res.data)
        })
        .catch(err => {
          console.error(err.response.data.message)
        })
    },
    findUserId({ commit, dispatch }, lendBorrower) {
      api.get('user/findByName/' + lendBorrower)
        .then(res => {
          commit('setBorrower', res.data)
        })
    },
    createLend({ commit, dispatch }, lendData) {
      api.post('/lend/createLend/', lendData)
        .then(res => {
          console.log("store works")
        })
    }
  }
})

