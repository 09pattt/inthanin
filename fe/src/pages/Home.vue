<script setup>
import Logo from "@/components/Objects/Logo.vue";
import CenterFrame from "@/components/Template/CenterFrame.vue";
import QuickAccessTab from "@/components/Objects/QuickAccessTab/QuickAccessTab.vue";
import NavbarBlankSpace from "@/components/Template/NavbarBlankSpace.vue";
import SideSlideFrame from "@/components/Template/SideSlideFrame.vue";
import StatisticsItem from "@/components/Template/StatisticsItem.vue";
</script>

<template>
  <main>
    <div class="top">
      <NavbarBlankSpace/>

      <CenterFrame>
        <br>
        <Logo/>
        <h1 class="center-text heading" style="color: var(--c-p1);">คณะสีอินทนิล</h1>
        <div style="height: var(--space-3);"></div>
      </CenterFrame>
    </div>

    <QuickAccessTab/>

    <SideSlideFrame>
      <template #header>
        <h1 style="color: var(--c-y1); filter: drop-shadow(0 0 var(--space-1) var(--c-t1-y1));">ข้อมูลและสถิติ</h1>
      </template>
      <StatisticsItem>
        <h2>สมาชิกคณะสี</h2>
        จำนวนสมาชิกทั้งหมด
        <template #bottom>
          <h1 style="color: var(--c-b1); filter: drop-shadow(0 0 var(--space-2) var(--c-b1));">585</h1>
        </template>
      </StatisticsItem>
    </SideSlideFrame>
  </main>
</template>

<style scoped>
.top {
  width: 100%;
  height: fit-content;
  filter: drop-shadow(0 0 var(--space-2) var(--c-t1-p2));
  animation: topOpening 1s;
}

@keyframes topOpening {
  0% {
    transform: scale(1.2);
    opacity: 0;
  }
  80% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}
</style>