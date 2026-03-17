<script setup lang="ts">
import NavigationTab from "@/components/NavigationTab.vue";
import MainSpace from "@/components/MainSpace.vue";
import Footer from "@/components/Footer.vue";
import { ref, onMounted } from 'vue';

const navHeight = ref(0);

const handleUpdateHeight = (height: number) => {
  navHeight.value = height;
}
</script>

<template>
  <div ref="navbar">
    <NavigationTab @updateHeight="handleUpdateHeight"></NavigationTab>
  </div>
  <MainSpace :topGap="navHeight">
    <h1 class="heading center_text">หน้าพัฒนาเว็บไซต์</h1>
    <h2 class="center_text">ข้อมูลสำหรับ Debug</h2>
    <strong class="center_text">navHeight: {{navHeight}}</strong>
    <iframe src="https://pale-caper-4d8.notion.site/ebd//2fa4bd3c35668064b67aed25486782a3" width="100%" height="600" frameborder="0" allowfullscreen />
    <p>Hello world</p>
    <p>Hello world</p>
    <p>Hello world</p>
    <p>Hello world</p>
    <p>Hello world</p>
    <p>Hello world</p>
    <p>Hello world</p>
  </MainSpace>
  <Footer></Footer>
</template>

<style scoped>
 iframe {
   width: 100%;
   max-height: 75dvh;
   border-radius: 1rem;
   filter: drop-shadow(1rem 1rem 1rem var(--c-t2-bl1));
 }
</style>
