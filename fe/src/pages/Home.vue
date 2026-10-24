<script setup>
import ContentFrame from "@/components/Template/ContentFrame.vue";
import Reveal from "@/components/Property/Reveal.vue";
</script>

<template>
  <div class="page">

    <div class="backdrop"></div>

    <header class="header">
      <div style="flex: 0 0 auto;">
        <!-- เอาพื้นที่ออกถ้าไม่มี NavigationTab แสดงผล
        <NavbarBlankSpace/>
        -->
      </div>
      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; justify-content: center;">
        <ContentFrame>
          <div style="padding: 0 2rem;">
            <img src="/images/elements/inthanin_hero.svg" alt="" style="width: 100%; filter: drop-shadow(1rem 1rem 8px var(--c-t2-bl1));">
          </div>
        </ContentFrame>
      </div>
    </header>

    <div style="height: 4rem;"></div>

    <div class="rolling_text">
      <ContentFrame>
        <Reveal root-margin="-150px 0px" transform-in="scale(0.8)">
          <h1 class="center-text heading" style="color: var(--c-p2); font-size: 5rem;">C</h1>
          <div style="height: 1rem;"></div>
        </Reveal>
        <Reveal root-margin="-150px 0px" transform-in="scale(0.8)">
          <h1 class="center-text heading" style="color: var(--c-p2); font-size: 5rem;">O</h1>
          <div style="height: 1rem;"></div>
        </Reveal>
        <Reveal root-margin="-150px 0px" transform-in="scale(0.8)">
          <h1 class="center-text heading" style="color: var(--c-p2); font-size: 5rem;">M</h1>
          <div style="height: 1rem;"></div>
        </Reveal>
        <Reveal root-margin="-150px 0px" transform-in="scale(0.8)">
          <h1 class="center-text heading" style="color: var(--c-p2); font-size: 5rem;">I</h1>
          <div style="height: 1rem;"></div>
        </Reveal>
        <Reveal root-margin="-150px 0px" transform-in="scale(0.8)">
          <h1 class="center-text heading" style="color: var(--c-p2); font-size: 5rem;">N</h1>
          <div style="height: 1rem;"></div>
        </Reveal>
        <Reveal root-margin="-150px 0px" transform-in="scale(0.8)">
          <h1 class="center-text heading" style="color: var(--c-p2); font-size: 5rem;">G</h1>
          <div style="height: 1rem;"></div>
        </Reveal>
        <Reveal root-margin="-150px 0px" transform-in="scale(0.8)">
          <h1 class="center-text heading" style="color: var(--c-p2); font-size: 5rem;">S</h1>
          <div style="height: 1rem;"></div>
        </Reveal>
        <Reveal root-margin="-150px 0px" transform-in="scale(0.8)">
          <h1 class="center-text heading" style="color: var(--c-p2); font-size: 5rem;">O</h1>
          <div style="height: 1rem;"></div>
        </Reveal>
        <Reveal root-margin="-150px 0px" transform-in="scale(0.8)">
          <h1 class="center-text heading" style="color: var(--c-p2); font-size: 5rem;">O</h1>
          <div style="height: 1rem;"></div>
        </Reveal>
        <Reveal root-margin="-150px 0px" transform-in="scale(0.8)">
          <h1 class="center-text heading" style="color: var(--c-p2); font-size: 5rem;">N</h1>
          <div style="height: 1rem;"></div>
        </Reveal>
        <Reveal root-margin="-150px 0px" transform-in="scale(0.8)">
          <h1 class="center-text heading" style="color: var(--c-p2); font-size: 5rem;">!</h1>
          <div style="height: 1rem;"></div>
        </Reveal>
      </ContentFrame>

      <div style="height: 200px;"></div>

    </div>

    <div style="height: 4rem;"></div>
  </div>
</template>

<style scoped>
.page .header {
  width: 100%;
  height: fit-content;
  min-height: 100dvh;
  filter: drop-shadow(0 0 var(--space-2) var(--c-t1-p2));
  animation: fadeIn 2s ease;

  display: flex;
  flex-direction: column;

}

.page .merchandise .preview_wrapper {
  height: 100%;
  width: 180px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.page .merchandise .preview {
  height: 200px;
  filter: drop-shadow(0 0 2rem var(--c-t1-p2));
}

.page .merchandise .information {
  width: 200px;
  height: 100%;

  display: flex;
  flex-direction: column;
}

.page .merchandise .condition {
  height: 100%;
  width: fit-content;
  background: var(--c-main-bg3);
  border-radius: var(--space-1);

  padding: var(--space-1);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}

.page .merchandise .order {
  height: 100%;
  width: 200px;

  padding: var(--space-1);
  display: flex;
  flex-direction: column;
}

.page .content_section .banner {
  width: 100%;
  display: block; /*แก้ปัญหาเกิดช่องว่าง*/
}

.page .content_section .information {
  width: 100%;
  background: var(--c-main-bg2);

  padding: var(--space-1);
  display: flex;
  flex-direction: column;
}

.page .backdrop {
  position: fixed;
  inset: 0;
  opacity: 1;            /* สถานะเริ่มต้น (default) ที่ปลอดภัย */
  pointer-events: none;
  background: var(--c-p3);
}

@supports (animation-timeline: scroll()) {
  @keyframes fade-out {
    from { opacity: 1; }
    to   { opacity: 0; }
  }

  .page .backdrop {
    animation: fade-out linear both;
    animation-timeline: scroll(root block); /* ต้องเขียนหลัง shorthand `animation` */
    animation-range: 0 50dvh;
  }
}
</style>