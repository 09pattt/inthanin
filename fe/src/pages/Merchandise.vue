<script setup lang="ts">
import NavbarBlankSpace from "@/components/Template/NavbarBlankSpace.vue";
import ContentFrame from "@/components/Template/ContentFrame.vue";
import Reveal from "@/components/Property/Reveal.vue";
import Window from "@/components/Template/Window.vue";
</script>

<template>
  <div class="page">
    <header class="header">
      <div style="flex: 0 0 auto;">
        <NavbarBlankSpace/>
      </div>
      <div style="flex: 1; min-height: 0; display: flex; flex-direction: column; justify-content: center;">
        <ContentFrame>
          <div style="padding: 0 2rem;">
            <img src="/images/elements/merchandise2026.png" alt="" style="width: 100%; filter: drop-shadow(1rem 1rem 8px var(--c-t2-bl1));">
          </div>
        </ContentFrame>
      </div>
    </header>

    <div style="height: 50px;"></div>

    <ContentFrame padding="var(--space-1)">
      <h1 style="font-family: Impact, sans-serif;">2026 Collection</h1>
      <hr>
      <div style="height: var(--space-1);"></div>
      <h2 id="merchandise_section">Merchandise - ของที่ระลึก</h2>
    </ContentFrame>

    <Window>
      <section class="product_window">
        <header>
          <h2>Pin & Sticker</h2>
          <h2>เริ่มต้น 9.-</h2>
        </header>
        <Reveal class="container" transform-in="translateX(20%)">
          <img src="/images/elements/inthanin_stickers_mockup.png" alt="Preview" class="preview">
          <div class="content">
            <div class="information">
              <p style="text-indent: 1rem;">
                -
              </p>
            </div>
            <div class="button_area">
              <p class="comment-text">ดูรายละเอียดและสั่งซื้อ</p>
              <div style="width: var(--space-1);"></div>
              <router-link to="merchandise/merchandise2026" class="button">
                <img src="/images/icon/shopping_cart.svg" alt="Checkout">
              </router-link>
            </div>
          </div>
        </Reveal>
      </section>
    </Window>

    <ContentFrame padding="var(--space-1)">
      <div style="height: var(--space-1);"></div>
      <h2 id="apparel_section">Apparel - เครื่องแต่งกาย</h2>
    </ContentFrame>

    <Window>
      <section class="product_window">
        <header>
          <h2>Inthanin Jersey 2026</h2>
          <h2>Sold Out</h2>
        </header>
        <Reveal class="container" transform-in="translateX(20%)">
          <img src="/images/elements/jersey.png" alt="Preview" class="preview">
          <div class="content">
            <div class="information">
              <p style="text-indent: 1rem;">
                เรามากับการเปิดตัว<strong style="color: var(--c-p1);">เสื้อทีมคณะสีอินทนิลปี 2026 </strong>เป็นเสื้อ Jersey สีม่วงมีลวดลายตามธีมของคณะสีในปีนี้ ถึงไม่ได้เป็น<strong style="color: var(--c-p1);">ชาวอินทนิล</strong>ก็สามารถเป็นเจ้าของตัวนี้กันได้!
              </p>
            </div>
            <div class="button_area">
              <p class="comment-text">ดูไซส์/รายละเอียด</p>
              <div style="width: var(--space-1);"></div>
              <router-link to="/merchandise/jersey"
                           class="button"
                           style="background: var(--c-y1);
                           filter: drop-shadow(0 0 2rem var(--c-y1));">
                <img src="/images/icon/add.svg" alt="Checkout">
              </router-link>
            </div>
          </div>
        </Reveal>
      </section>
    </Window>

    <div style="height: var(--space-1);"></div>

    <Window>
      <section class="product_window">
        <header>
          <h2>Headband</h2>
          <h2>Sold Out</h2>
        </header>
        <Reveal class="container" transform-in="translateX(20%)">
          <img src="/images/elements/headband.png" alt="Preview" class="preview">
          <div class="content">
            <div class="information">
              <p style="text-indent: 1rem;">
                ครั้งนี้เรามากับ<strong style="color: var(--c-p1);">ผ้าคาดหัวทีมอินทนิล</strong> ไม่ว่าใครก็จับจองเป็นของตัวเองได้ในราคาเพียง <strong style="color: var(--c-y1);">59 บาท</strong>
              </p>
            </div>
            <div class="button_area">
              <p class="comment-text">ดูรายละเอียด</p>
              <div style="width: var(--space-1);"></div>
              <router-link to="/merchandise/headband"
                           class="button"
                           style="background: var(--c-y1);
                           filter: drop-shadow(0 0 2rem var(--c-y1));">
                <img src="/images/icon/add.svg" alt="Checkout">
              </router-link>
            </div>
          </div>
        </Reveal>
      </section>
    </Window>

    <footer style="height: 100dvh; display: flex; align-items: center;">
      <ContentFrame>
        <div style="padding: 0 2rem;">
          <img src="/images/elements/merchandise_hero.png" alt="" style="width: 100%;">
        </div>
      </ContentFrame>
    </footer>
  </div>
</template>

<style scoped>
.page {
  min-height: 100dvh;
  background: #120812;
  color: var(--c-w3);
}

.page .header {
  width: 100%;
  height: fit-content;
  min-height: 100dvh;
  /*filter: drop-shadow(0 0 var(--space-2) var(--c-t1-p2));*/
  animation: fadeIn 2s ease;

  display: flex;
  flex-direction: column;
}

.page .product_window {
  width: 100%;
  height: fit-content;
  background: #282828;
}

.page .product_window header {
  width: 100%;
  height: fit-content;
  background: var(--c-p3);
  padding: 0 var(--space-2);
  display: flex;
  justify-content: space-between;
}

.page .product_window .container {
  padding: var(--space-1);
  display: flex;
}

.page .product_window .container .preview {
  flex: 0 0 auto;
  width: 150px;
  height: 200px;
  object-fit: contain;
}

.page .product_window .container .content {
  flex: 1;
  min-width: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.page .product_window .container .button_area {
  display: flex;
  justify-content: end;
  align-items: center;
}

.page .product_window .container .button {
  width: 40px;
  aspect-ratio: 1/1;
  background: var(--c-b1);
  border-radius: 50%;
  filter: drop-shadow(0 0 2rem var(--c-b1));

  padding: var(--space-1);
  display: flex;
  justify-content: center;
  align-items: center;
}

#merchandise_section { scroll-margin-top: 10rem; }
#apparel_section { scroll-margin-top: 6rem; }
</style>