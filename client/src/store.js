import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let api = axios.create({
  baseURL: 'https://.herokuapp.com/api/',
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    //create new user
    addUser() {

    },
    //delete a user
    deleteUser() {

    },
    //start a new lend
    newLend() {

    },
    //confirm lend with two parties, lender and lendee, needs two id's and two bools (we think)
    lendConfirm() {

    },
  }
})
