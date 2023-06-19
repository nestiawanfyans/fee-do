import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/income',
      name: 'income',
      component: () => import('../views/IncomeView.vue')
    },
    {
      path: '/expense',
      name: 'expense',
      component: () => import('../views/ExpenseView.vue')
    }
  ]
})

export default router
