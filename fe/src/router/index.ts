import {
    createRouter,
    createWebHistory,
    type RouteRecordRaw,
    type RouterScrollBehavior,
} from 'vue-router'

import Home from "@/pages/Home.vue";
import Merchandise from "@/pages/Merchandise.vue";
import Notfound from "@/pages/Notfound.vue";
import Jersey from "@/pages/Merchandise/Jersey.vue";
import Headband from "@/pages/Merchandise/Headband.vue";

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
        path: '/merchandise/jersey',
        name: 'jersey',
        component: Jersey,
        meta: {
            title: 'ร้านค้า / เจอร์ซี'
        }
    },
    {
        path: '/merchandise/headband',
        name: 'headband',
        component: Headband,
        meta: {
            title: 'ร้านค้า / ผ้าคาดหัว'
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

// รอจน Element ที่มี id นี้ปรากฏใน DOM (หรือหมดเวลา)
function waitForElement(id: string, timeout = 1500): Promise<HTMLElement | null> {
    return new Promise((resolve) => {
        const existing = document.getElementById(id)
        if (existing) return resolve(existing)

        const timer = window.setTimeout(() => {
            observer.disconnect()
            resolve(null)
        }, timeout)

        const observer = new MutationObserver(() => {
            const el = document.getElementById(id)
            if (el) {
                window.clearTimeout(timer)
                observer.disconnect()
                resolve(el)
            }
        })
        observer.observe(document.body, { childList: true, subtree: true })
    })
}

const scrollBehavior: RouterScrollBehavior = async (to, from, savedPosition) => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const smooth: ScrollBehavior = reduceMotion ? 'auto' : 'smooth'

    // 1) Back/Forward
    if (savedPosition) {
        return { ...savedPosition, behavior: smooth }
    }

    // 2) มี Hash: รอ Element แล้วเลื่อนไป
    if (to.hash) {
        const id = decodeURIComponent(to.hash.slice(1))
        const el = await waitForElement(id)

        // ไม่พบ Element (id ผิดหรือหมดเวลา): ขึ้นบนสุดดีกว่าค้างตำแหน่งเดิม
        if (!el) return { top: 0, left: 0, behavior: 'auto' }

        const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0
        return {
            el,
            top: margin,
            // ข้ามหน้า: เลื่อนทันที / หน้าเดิม: เลื่อนนุ่มนวล
            behavior: to.path === from.path ? smooth : 'auto',
        }
    }

    // 3) เปลี่ยนหน้าปกติ: ขึ้นบนสุด
    return { top: 0, left: 0, behavior: to.path === from.path ? smooth : 'auto' }
}

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior,
})

export default router