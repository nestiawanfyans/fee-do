import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => HomeView
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
