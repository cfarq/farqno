import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Labs from './views/Labs.vue'
import Contact from './views/Contact.vue'
import WeatherApp from './views/WeatherApp.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/labs',
      name: 'Labs',
      component: Labs,
      children: [
        {
          path: '/labs/weather-app',
          component: WeatherApp
        }
      ]
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
