<script setup lang="ts">
import NavigationTab from "@/components/NavigationTab.vue";
import Main from "@/components/Main/Main.vue";
import Footer from "@/components/Footer.vue";
import Home from "@/pages/Home.vue";
import { ref } from 'vue';

const navHeight = ref(0);

const handleUpdateHeight = (height: number) => {
  navHeight.value = height;
}
</script>

<template>
  <div ref="navbar">
    <NavigationTab @updateHeight="handleUpdateHeight"/>
  </div>
  <Main :topGap="navHeight">
    <router-view/>
  </Main>
  <Footer/>
</template>

<style scoped>
</style>
