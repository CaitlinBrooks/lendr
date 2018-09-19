import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import Profile from './views/Profile.vue'
// @ts-ignore
import Lends from './views/Lends.vue'
import FriendProfile from './views/FriendProfile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: FriendProfile
    },
    {
      path: '/lends',
      name: 'lends',
      component: Lends
    }
  ]
})
