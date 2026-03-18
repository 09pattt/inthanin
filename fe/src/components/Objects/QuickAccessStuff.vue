<script setup lang="ts">
import QuickAccessItem from "@/components/Template/QuickAccessItem.vue";
</script>

<template>
  <header>
    <h1 class="heading" style="filter: drop-shadow(0 0 var(--space-1) var(--c-t2-p2));">ประกาศ!</h1>
  </header>
  <main>
    <div class="quickAccessSpace">
      <QuickAccessItem>
        <template #header>
          <h1 class="join-text" style="color: var(--c-p1);">
            อินทนิล
          </h1>
          <h1 class="join-text">
            มีเว็บแล้ววว
          </h1>
        </template>
        <p>
          ตั้งแต่วันที่
          <strong>-- ---- พ.ศ.2569</strong>
          หน้าเว็บคณะสีอินทนิลเปิดให้บริการอย่างเป็นทางการ สามารถเข้าใช้งานได้เลย โดยหากยังเจอปัญหาใดๆสามารถติดต่อ
          <a href="">ฝ่ายช่วยเหลือ</a>
          ได้ตลอดเลย
        </p>
        <p>ช่องทางติดต่อผู้พัฒนาดูได้จากช่วงเนื้อหาด้านล่าง</p>
      </QuickAccessItem>
      <QuickAccessItem>
        <template #header>
          <h1 class="join-text">
            โหวตเลือก
          </h1>
          <h1 class="join-text" style="color: var(--c-b1);">
            ธีม
          </h1>
          <h1 class="join-text">
            คณะสี๊
          </h1>
        </template>
        มาแล้ววว สำหรับการร่วมกันตัดสินใจเลือกธีมประจำคณะสี ที่จะใช้ภายในงานกีฬาสีเบญจรงค์เกม ประจำปีพ.ศ.2569
      </QuickAccessItem>
      <QuickAccessItem>
        <template #header>
          <h1 class="join-text">
            สมัคร
          </h1>
          <h1 class="join-text" style="color: var(--c-g1);">
            นักกีฬา
          </h1>
        </template>
        ตอนนี้คณะสีอินทนิลรับสมัครนักกีฬาในงานกีฬาสีเบญจรงค์เกม ประจำปีพ.ศ.2569 สามารถลงสมัครได้แล้วตั้งแต่วันนี้จนถึงวันปิดรับสมัครของแต่ละรายการ
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