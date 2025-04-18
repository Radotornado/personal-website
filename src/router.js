import { createRouter, createWebHistory } from 'vue-router'
import Loading from '@/components/Loading'
import Main from '@/sections/Main'

const routes = [
  {
    path: '/',
    name: 'loading',
    component: Loading
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
