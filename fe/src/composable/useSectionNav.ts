import { useRoute, useRouter } from 'vue-router'

/** Usage:
 * <script setup lang="ts">
 * import { useSectionNav } from '@/composables/useSectionNav'
 * const { goTo } = useSectionNav()
 * </script>
 *
 * <template>
 *   <a href="/home#gallery" @click.prevent="goTo('home', 'gallery')">แกลเลอรี่</a>
 * </template>
 * */

export function useSectionNav() {
    const route = useRoute()
    const router = useRouter()

    async function goTo(name: string, id: string) {
        // ข้ามหน้า (หรือ Hash เปลี่ยน): ให้ Router จัดการ
        if (route.name !== name || route.hash !== `#${id}`) {
            await router.push({ name, hash: `#${id}` })
            return
        }
        // หน้าเดิมและ Hash เดิม: เลื่อนเอง
        const el = document.getElementById(id)
        if (!el) return
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    }

    return { goTo }
}