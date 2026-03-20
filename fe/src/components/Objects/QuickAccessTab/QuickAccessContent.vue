<script setup lang="ts">
import QuickAccessItem from "@/components/Objects/QuickAccessTab/QuickAccessItem.vue";
</script>

<template>
  <header>
    <h1 style="color: var(--c-b1); filter: drop-shadow(0 0 var(--space-1) var(--c-t1-b1));">
      ประกาศๆ
    </h1>
  </header>
  <main>
    <div class="quickAccessSpace">
      <QuickAccessItem>
        <template #header>
          <h1 class="join-text">
            ลงทะเบียน
          </h1>
          <h1 class="join-text" style="color: var(--c-y1);">
            เร็วๆนี้
          </h1>
        </template>
        <p>
          หน้าเว็บมีแล้ว การใช้งานทั่วไปก็มีแล้ว ต่อไปคือ
          <strong>ระบบบัญชีสมาชิก</strong>
          เพื่อใช้ระบุตัวตนและใช้สำหรับการดำเนินการประสานงานต่างๆ เพื่อให้เราร่วมกันทำหน้าที่ในคณะสีได้สะดวก ทั้งการแข่งกีฬา การเตรียมงานกีฬาสีและอื่นๆ
        </p>
      </QuickAccessItem>
      <QuickAccessItem>
        <template #header>
          <h1 class="join-text">
            โหวต
          </h1>
          <h1 class="join-text" style="color: var(--c-p1);">
            เลือกธีม
          </h1>
          <h1 class="join-text">
            คณะสี๊
          </h1>
        </template>
        มาแล้ววว สำหรับการร่วมกันตัดสินใจเลือกธีมประจำคณะสี ที่จะใช้ภายในงานกีฬาสีเบญจรงค์เกม ประจำปีพ.ศ.2569 ดูรายละเอียดเพิ่มเติมที่แบนเนอร์ด้านล่างได้เลย
      </QuickAccessItem>
      <QuickAccessItem>
        <template #header>
          <h1 class="join-text">
            การพัฒนา
          </h1>
          <h1 class="join-text" style="color: var(--c-b1);">
            ซอฟต์แวร์
          </h1>
        </template>
        แน่นอนว่าหน้าเว็บแบบนี้ต้องมีทั้งโค้ดและโปรแกรมทำงานอยู่ ถ้าหากอยากรู้ว่าทั้งหมดนี้มีอะไรอยู่เบื้องหลังสามารถดูได้ที่
        <a href="https://github.com/09pattt/inthanin">Inthanin Git-Repository</a>
        นอกจากนี้ก็ยังมีเอกสารเกี่ยวกับเว็บไซต์อยู่ด้วย
      </QuickAccessItem>
    </div>
  </main>
</template>

<style scoped>
header {
  padding: var(--space-1) var(--space-1) 0 var(--space-1);
}

main {
  width: 100%;
  height: 360px;
  position: relative;
  overflow-x: scroll;
  overflow-y: hidden;
  background-color: var(--c-main-bg2);
  filter: drop-shadow(0 var(--space-2) var(--space-2) var(--c-t3-bl1));
}

.quickAccessSpace {
  height: 100%;
  position: absolute;

  display: grid;
  grid-auto-flow: column;
  gap: var(--space-1);
  padding: var(--space-1);
}

@media (min-width: 1024px) {
  main {
    height: 480px;
  }
}
</style>