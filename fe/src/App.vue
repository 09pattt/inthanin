<script setup lang="ts">
import NavigationTab from "@/components/NavigationTab.vue";
import Content from "@/components/Content.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <NavigationTab/>
  <main>
    <Content>
      <router-view/> <!--App.js COMPLETED REFACTORING. CONTINUE REFACTOR IN COMPONENT 'Home'--> <!--REFACTORING-->
    </Content>
    <Footer/>
  </main>
</template>

<style scoped>
</style>