import { createRouter, createWebHistory } from 'vue-router'

import Home from "@/pages/Home.vue";
import Development from "@/pages/Development.vue";
import Notfound from "@/pages/Notfound.vue";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            title: 'หน้าหลัก'
        }
    },
    {
        path: '/development',
        name: 'development',
        component: Development,
        meta: {
            title: 'การพัฒนา'
        }
    },
    {

        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: Notfound,
        meta: {
            title: 'ไม่พบหน้า'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return {
                ...savedPosition,
                behavior: 'smooth'
            }
        } else {
            return {
                top: 0,
                left: 0,
                behavior: 'smooth'
            }
        }
    },
})

export default router