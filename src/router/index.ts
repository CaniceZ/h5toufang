import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '投放',
        keepAlive: true
      },
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'keyalive',
        keepAlive: false
      },
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
