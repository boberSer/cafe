import {createRouter, createWebHistory} from 'vue-router'

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
        meta: {requiresAuth: true}
    },
    {
        path: '/shifts',
        name: 'shifts',
        component: () => import('@/views/ShiftListView.vue'),
        meta: {requiresAuth: true}
    },
    {
        path: '/orders',
        name: 'orders',
        component: () => import('@/views/OrdersListView.vue'),
        meta: {requiresAuth: true}
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
        meta: {requiresAuth: true}
    }


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')

    if (to.meta.requiresAuth && !token) {
        next('/')
    } else {
        next()
    }
})




export default router
