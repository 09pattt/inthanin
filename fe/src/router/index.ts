import { createRouter, createWebHistory } from 'vue-router'

import Home from "@/pages/Home.vue";
import Development from "@/pages/Development.vue";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: 'หน้าหลัก'
        }
    },
    {
        path: '/development',
        component: Development,
        meta: {
            title: 'การพัฒนา'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router