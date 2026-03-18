<script setup>
import Logo from "@/components/Objects/Logo.vue";
import ContentFrame from "@/components/Template/ContentFrame.vue";
</script>

<script>
const copyTel = (number) => {
  navigator.clipboard.writeText(number)
  alert('คัดลอก ' + number + ' แล้ว')
}
</script>

<template>
  <footer>
    <ContentFrame padding="var(--space-1">
      <div style="display: flex; justify-content: center; align-items: center;">
        <h1 class="join-text" style="color: var(--c-p1);">inthanin</h1>
        <h2 class="join-text" style="color: var(--c-gr4);">.xyz</h2>
      </div>
      <hr>
      <br>

      <h2>เว็บไซต์คณะสีอินทนิล</h2>
      <p><strong>โดเมน : </strong>(www.)inthanin.xyz</p>
      <p><strong>Git repository (ไฟล์ซอฟต์แวร์และเอกสาร) : </strong><a href="https://github.com/09pattt/inthanin" target="_blank">@github.com/09pattt/inthanin</a></p>
      <p><strong>ผู้จัดทำ : </strong>นายณภัทร โตสวาท</p>
      <p><strong>โทรศัพท์ : </strong><a @click="copyTel('0863629871')" style="color: var(--c-y1); cursor: pointer;">086 362 9871</a></p>
      <p><strong>อีเมล : </strong><a href="mailto:your@email.com?subject=From inthanin.xyz&body=เรียน นายณภัทร โตสวาท">09pattt@gmail.com</a> หรือ <a href="mailto:your@email.com?subject=From inthanin.xyz&body=เรียน นายณภัทร โตสวาท">26094@tun.ac.th</a></p>
      <br>
      <h2>โรงเรียนเตรียมอุดมศึกษาน้อมเกล้า</h2>
      <p>78 ถนนรามคำแหง แขวงราษฎร์พัฒนา เขตสะพานสูง จังหวัดกรุงเทพมหานคร 10240</p>
      <p><strong>เว็บไซต์ : </strong><a href="https://tun.ac.th">@tun.ac.th</a></p>

      <br>
      <hr>
      <br>
      <strong class="comment-text center-text">Copyright 2026 Napat Tosawat</strong>
      <p class="comment-text center-text">ภายใต้เงื่อนไขการรักษาลิขสิทธิ์และข้อกำหนดของ MIT License</p>
    </ContentFrame>
  </footer>
</template>

<style scoped>
  footer {
    width: 100%;
    height: fit-content;
    background-color: var(--c-bl1);
    color: var(--c-w1);
  }
</style>