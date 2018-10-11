import Vue from 'vue'
import './plugins/vuetify'
// @ts-ignore
import App from './App.vue'
import router from './router'
import store from './store'
import VueTour from 'vue-tour'
require('vue-tour/dist/vue-tour.css')

Vue.config.productionTip = false

Vue.use(VueTour)

new Vue({
  router,
  store,
  created() {
    this.$store.dispatch("authenticate");
  },
  render: h => h(App)
}).$mount('#app')
