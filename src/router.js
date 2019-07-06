import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Labs from './views/Labs.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/labs',
      name: 'labs',
      component: Labs
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }

  ]
})
