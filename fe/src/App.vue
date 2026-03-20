<script setup lang="ts">
import NavigationTab from "@/components/NavigationTab.vue";
import Main from "@/components/Main/Main.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <NavigationTab/>
  <main>
    <Main>
      <router-view/>
    </Main>
    <Footer/>
  </main>
</template>

<style scoped>
</style>
