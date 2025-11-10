import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/employees',
    name: 'employees',
    component: () => import('@/views/EmployeesListView.vue'),
  },
  {
    path: '/shifts',
    name: 'shifts',
    component: () => import('@/views/ShiftListView.vue'),
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('@/views/OrdersListView.vue'),
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/views/AuthView.vue'),
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
