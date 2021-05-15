import { createRouter, createWebHistory } from 'vue-router'
import CountyWeather from '@/views/CountyPage.vue'
import TownPage from '@/views/TownPage.vue'

const routes = [
  
  {
    path: '/',
    name: 'CountyWeather',
    component: CountyWeather,
  },
  {
    path: '/TownWeather',
    name: 'TownWeather',
    component: TownPage,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
