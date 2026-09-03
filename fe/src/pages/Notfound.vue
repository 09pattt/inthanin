<script setup>
import NavbarBlankSpace from "@/components/Template/NavbarBlankSpace.vue";
</script>

<template>
  <main class="notfound">
    <NavbarBlankSpace/>
    <h1 class="errorcode center-text heading">
      404
    </h1>

    <h2 class="center-text">
      ไม่พบหน้านี้
    </h2>

    <p class="center-text">
      เรายังไม่มีที่อยู่หน้าเว็บนี้ โปรดตรวจสอบความถูกต้องอีกครั้ง หากคาดว่าเป็นข้อผิดพลาดกรุณาแจ้งผู้ดูแลระบบ
    </p>

    <p class="center-text">
      <router-link to="/home">
        กลับหน้าหลัก
      </router-link>
       |
      <router-link to="/development">
        ติดต่อผู้ดูแลระบบ
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