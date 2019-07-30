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
          name: 'Weather App',
          component: WeatherApp,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, cumque debitis exercitationem facilis fugiat nostrum sit velit voluptas! Aut labore laudantium odit quisquam sequi similique veniam veritatis? Doloremque, iusto, provident?',
          image: 'http://placekitten.com/400/300',
          tags: {
            github: 'github.com/',
            wip: true
          }
        },
        {
          path: '/labs/currency-convertor',
          name: 'Currency Converter',
          component: WeatherApp,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, cumque debitis exercitationem facilis fugiat nostrum sit velit voluptas! Aut labore laudantium odit quisquam sequi similique veniam veritatis? Doloremque, iusto, provident?',
          image: 'http://placekitten.com/400/300',
          tags: {
            github: 'github.com/',
            wip: true
          }
        },
        {
          path: '/labs/bttf-clock',
          name: 'Back to the Future clock',
          component: WeatherApp,
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, cumque debitis exercitationem facilis fugiat nostrum sit velit voluptas! Aut labore laudantium odit quisquam sequi similique veniam veritatis? Doloremque, iusto, provident?',
          image: 'http://placekitten.com/400/300',
          tags: {
            github: 'github.com/',
            wip: false
          }
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
