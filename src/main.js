import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Navbar from './components/Navbar.vue'
Vue.component('navbar', Navbar)

import LabsList from './components/LabsList.vue'
Vue.component('labs-list', LabsList)

import LabItem from './components/LabItem.vue'
Vue.component('labs-item', LabItem)


// Styles
import './sass/styles.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
