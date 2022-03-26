import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'PatientLogin',
        component: () => import("../views/PatLogin.vue"),
    },
    {
        path: '/patview',
        name: 'PatientView',
        component: () => import("../views/PatView.vue"),
        // meta: {
        //     requiresAuth:true,
        // },
    },
    {
        path: '/book',
        name: 'BookAppt',
        component: () => import("../views/BookAppt.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router