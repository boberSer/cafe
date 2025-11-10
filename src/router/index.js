import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from "@/views/AuthView.vue";

const routes = [
    {
        path: '/',
        name: 'auth',
        component: () => import('@/views/AuthView.vue'),
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
        path: '/home',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
    }


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
