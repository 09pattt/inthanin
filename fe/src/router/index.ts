import {
    createRouter,
    createWebHistory,
    type RouteRecordRaw,
    type RouterScrollBehavior,
} from 'vue-router'

import Home from "@/pages/Home.vue";
import Merchandise from "@/pages/Merchandise.vue";
import Notfound from "@/pages/Notfound.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        // คง hash ไว้เมื่อ redirect เช่น /#gallery -> /home#gallery
        redirect: (to) => ({ path: '/home', hash: to.hash })
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
        path: '/merchandise',
        name: 'merchandise',
        component: Merchandise,
        meta: {
            title: 'ร้านค้า'
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

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
    // เคารพการตั้งค่า "ลดการเคลื่อนไหว" ของผู้ใช้ (Accessibility)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const smooth: ScrollBehavior = reduceMotion ? 'auto' : 'smooth'

    // 1) กดปุ่ม Back/Forward: กลับไปตำแหน่งเดิม
    if (savedPosition) {
        return { ...savedPosition, behavior: smooth }
    }

    // 2) URL มี Hash: เลื่อนไปที่ Element โดยเผื่อระยะตาม scroll-margin-top
    if (to.hash) {
        const el = document.getElementById(decodeURIComponent(to.hash.slice(1)))
        const margin = el ? parseFloat(getComputedStyle(el).scrollMarginTop) || 0 : 0
        return { el: to.hash, top: margin, behavior: smooth }
    }

    // 3) เปลี่ยนไปหน้าอื่น: ขึ้นบนสุดทันที
    //    ถ้าอยู่หน้าเดิม (เช่น เปลี่ยน query) ให้เลื่อนแบบนุ่มนวล
    return {
        top: 0,
        left: 0,
        behavior: to.path === from.path ? smooth : 'auto'
    }
}

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior,
})

export default router