<script setup>
import NavbarBlankSpace from "@/components/Template/NavbarBlankSpace.vue";
import FloatImage from "@/components/Template/FloatImage.vue";
</script>

<template>
  <main class="notfound">
    <NavbarBlankSpace/>
    <div style="height: 3rem;"></div>
    
    <FloatImage>
      <img src="/images/icon/blocked.svg" alt="" style="height: 6rem;" />
    </FloatImage>
    
    <h2 class="center-text">
      ไม่พบหน้านี้
    </h2>

    <p class="center-text">
      ระบบไม่มีที่อยู่หน้าเว็บนี้ อาจเป็นข้อผิดพลาดหรือมีการปิดให้บริการหน้านี้ไปแล้ว
    </p>

    <p class="center-text">
      <router-link to="/home">
        กลับหน้าหลัก
      </router-link>
    </p>

    <p class="center-text">
      Error 404 · Unknown Route
    </p>
  </main>
</template>

<style>
.notfound h1 {
  font-size: 4rem;
}

.notfound h2 {
  font-size: 2rem;
  color: var(--c-text);
}

.notfound p {
  color: var(--c-text);
}
</style>