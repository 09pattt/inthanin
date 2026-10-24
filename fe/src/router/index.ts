import { createRouter, createWebHistory } from 'vue-router'

import Home from "@/pages/Home.vue";

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
    { /** ชี้ทุก path ต่อจากนี้กลับไปที่ /home */
        path: '/:pathMatch(.*)*',
        name: 'home',
        component: Home,
        meta: {
            title: 'หน้าหลัก'
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