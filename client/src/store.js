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
    user: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
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
          router.push({ name: 'login' })
        })
    },
    //start a new lend
    addLend({ commit, dispatch }, newLend) {
      api.post('lends', newLend)
        .then(res => {
          dispatch('getAllLends')
        })
        .catch(err => {
          console.error(err.response.data.message)
        })

      //this.$store.dispatch("addLend", lendId);   not sure on second param
    },
    //confirm lend with two parties, lender and lendee, needs two id's and two bools (we think)
    lendConfirm() {

    },
    //once item is returned we can move it to history / remove it from active lends
    deleteLend() { },

  }

})

