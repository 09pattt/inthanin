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
    <ContentFrame padding="var(--space-1)">
      <div style="display: flex; justify-content: center; align-items: center;">
        <h1 class="join-text" style="color: var(--c-p1);">inthanin</h1>
        <h2 class="join-text" style="color: var(--c-gr4);">.xyz</h2>
      </div>
      <hr>
      <br>

      <h2>คณะสีอินทนิล</h2>
        <p><strong>Instagram : </strong><a href="https://www.instagram.com/inthanin_triamnom?mdxt=MWdiZHl3YWhvenZtZA==">inthanin_triamnom</a></p>
        <p><strong>แบบฟอร์มรายงานปัญหา : </strong><a href="https://docs.google.com/forms/d/e/1FAIpQLSfOeNkDUpoSWVAqh9u9sp4ZURc7Hc1lOkp5H1pC29SXX2k9eg/viewform?pli=1">Google Forms</a></p>
      <br>

      <h2>เกี่ยวกับเว็บไซต์</h2>
      <p><strong>โดเมน : </strong>(www.)inthanin.xyz</p>
      <p><strong>Git repository (ไฟล์ซอฟต์แวร์และเอกสาร) : </strong><a href="https://github.com/09pattt/inthanin" target="_blank">@github.com/09pattt/inthanin</a></p>
      <p><strong>ผู้พัฒนา : </strong>นายณภัทร พรภัทรนนท์</p>
      <p><strong>โทรศัพท์ : </strong><a @click="copyTel('0863629871')" style="color: var(--c-y1); cursor: pointer;">086 362 9871</a></p>
      <p><strong>อีเมล : </strong><a href="">phonpatt@icloud.com</a> หรือ <a href="">26094@tun.ac.th</a></p>

      <br>

      <h2>โรงเรียนเตรียมอุดมศึกษาน้อมเกล้า</h2>
      <p><strong>ที่อยู่ : </strong>78 ถนนรามคำแหง แขวงราษฎร์พัฒนา เขตสะพานสูง จังหวัดกรุงเทพมหานคร 10240</p>
      <p><strong>เว็บไซต์ : </strong><a href="https://tun.ac.th">@tun.ac.th</a></p>
      <p><strong>โทรศัพท์ : </strong><a @click="copyTel('023731473')" style="color: var(--c-y1); cursor: pointer;">02 373 1473</a></p>
      <p><strong>อีเมล : </strong><a href="">sarabun@tun.ac.th</a></p>

      <br>
      <hr>
      <br>
      <strong class="comment-text center-text">Copyright 2026 Napat Phonpattaranon | MIT License</strong>
      <br>
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