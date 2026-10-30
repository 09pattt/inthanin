<script setup>
import ContentFrame from "@/components/Template/ContentFrame.vue";
import Reveal from "@/components/Property/Reveal.vue";
import HomeIndex from "@/components/Object/HomeIndex.vue";
import RollingText from "@/components/Template/RollingText.vue";
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

    <div style="height: 50dvh;"></div>

    <home-index></home-index>

    <div style="height: 4rem;"></div>

    <Reveal :threshold="0.4">

      <ContentFrame padding="var(--space-1)">
        <h1 class="heading">Merchandise</h1>
      </ContentFrame>

      <Block>
        <section class="billboard"
                 id="merchandise"
                 tabindex="-1">
          <SideSlider height="250px" class="slider">
            <Reveal transform-in="translateY(20%)" class="product_block">
              <div class="preview_wrapper">
                <img src="/images/elements/all_merchandise.png" alt="preview" class="preview">
              </div>
              <div class="information">
                <h2 style="background: var(--c-p3); color: var(--c-w3); text-align: center;">
                  2026 Merchandise
                </h2>
                <p>
                  ครั้งนี้เรามีของน่ารัก ๆ สำหรับทุกคนอีกครั้ง ใครที่พลาดเสื้อและผ้าคาดหัว<strong style="color: var(--c-p1);">ทีมอินทนิล</strong> วันนี้ยังพรี-ออเดอร์ของที่ระลึกกันได้!
                </p>
                <h3 class="price comment-text">
                  เลื่อนดูเพิ่มเติม >>
                </h3>
                <!--
                <p class="comment-text" style="text-align: end;">เลื่อนดูเพิ่มเติม >></p>
                -->
              </div>
            </Reveal>
            <Reveal transform-in="translateY(20%)" class="product_block">
              <div class="preview_wrapper">
                <img src="/images/elements/mockup_pins.png" alt="preview" class="preview">
              </div>
              <div class="information">
                <h2 style="background: var(--c-p3); color: var(--c-w3); text-align: center;">
                  Inthanin Pin
                </h2>
                <p>
                  อันนี้เป็น<strong style="color: var(--c-p1);">เข็มกลัดอินทนิล</strong> มีให้เลือกจับจองกัน 3 แบบด้วยกัน เป็นเข็มกลีดขนาด 32 มิลลิเมตร
                </p>
                <h2 class="price join-text">
                  9.-
                </h2>
                <!--
                <p class="comment-text" style="text-align: end;">เลื่อนดูเพิ่มเติม >></p>
                -->
              </div>
            </Reveal>

            <Reveal transform-in="translateY(20%)" class="product_block">
              <div class="preview_wrapper">
                <img src="/images/elements/mockup_stickers.png" alt="preview" class="preview">
              </div>
              <div class="information">
                <h2 style="background: var(--c-p3); color: var(--c-w3); text-align: center;">
                  Inthanin Sticker
                </h2>
                <p>
                  <strong style="color: var(--c-p1);">สติ๊กเกอร์อินทนิล</strong> มีให้เลือกกันได้ 2 แบบ เป็นแผ่นสติ๊กเกอร์ขนาด A6
                </p>
                <h2 class="price">
                  20.-
                </h2>
                <!--
                <p class="comment-text" style="text-align: end;">กดดูรายละเอียดด้านล่าง</p>
                -->
              </div>
            </Reveal>
          </SideSlider>
          <router-link to="/merchandise" class="button">
            <h2 class="center-text">ดูเพิ่มเติม/สั่งซื้อ</h2>
          </router-link>
        </section>
      </Block>
    </Reveal>

    <div style="height: 4rem;"></div>

    <Reveal :threshold="0.4">

      <ContentFrame padding="var(--space-1)">
        <h1 class="heading">Apparel</h1>
      </ContentFrame>

      <Block>
        <section class="billboard"
                 id="apparel"
                 tabindex="-1">
          <SideSlider height="250px" class="slider">
            <Reveal transform-in="translateY(20%)" class="product_block">
              <div class="preview_wrapper">
                <img src="/images/elements/jersey.png" alt="preview" class="preview">
              </div>
              <div class="information">
                <h2 style="background: var(--c-p3); color: var(--c-w3); text-align: center;">
                  Inthanin Jerseyyyyy
                </h2>
                <p>
                  เรามากับการเปิดตัว<strong style="color: var(--c-p1);">เสื้อทีมคณะสีอินทนิลปี 2026 </strong>เป็นเสื้อ Jersey สีม่วงมีลวดลายตามธีมของคณะสีในปีนี้
                </p>
                <h2 class="price">
                  Sold Out
                </h2>
                <!--
                <p class="comment-text" style="text-align: end;">เลื่อนดูเพิ่มเติม >></p>
                -->
              </div>
            </Reveal>

            <Reveal transform-in="translateY(20%)" class="product_block">
              <div class="preview_wrapper">
                <img src="/images/elements/headband.png" alt="preview" class="preview">
              </div>
              <div class="information">
                <h2 style="background: var(--c-p3); color: var(--c-w3); text-align: center;">
                  Inthanin Headband
                </h2>
                <p>
                  ครั้งนี้เรามากับ<strong style="color: var(--c-p1);">ผ้าคาดหัวทีมอินทนิล</strong> ไม่ว่าใครก็จับจองเป็นของตัวเองได้ในราคาเพียง
                </p>
                <h2 class="price">
                  Sold Out
                </h2>
                <!--
                <p class="comment-text" style="text-align: end;">กดดูรายละเอียดด้านล่าง</p>
                -->
              </div>
            </Reveal>
          </SideSlider>
          <router-link :to="{ name: 'merchandise', hash: '#apparel_section' }" class="button">
            <h2 class="center-text">ดูคอลเลกชั่น</h2>
          </router-link>
        </section>
      </Block>
    </Reveal>

    <div style="height: 4rem;"></div>

    <Reveal :threshold="0.2">
      <ContentFrame padding="var(--space-1)">
        <h1 class="heading">2026 Gallery</h1>
      </ContentFrame>

      <Block>
        <section class="banner_section"
                 id="gallery"
                 tabindex="-1">
          <img src="/images/elements/inthanin_gallery.png" alt="Banner" class="banner">
          <div class="information">
            <h2>ภาพบรรยากาศวันเตรียม</h2>
            <p style="text-indent: 1rem;">คณะสีอินทนิลเรามีตากล้องช่วยเก็บภาพบรรยากาศการเตรียมงานกีฬาสีประจำปีไว้ด้วย มีตั้งแต่การซ้อมแสตนเชียร์และเชียร์หลีดเดอร์ การเตรียมขบวนพาเหรด และการฝึกซ้อมและคัดเลือกนักกีฬาอินทนิล</p>
          </div>
          <a href="https://drive.google.com/drive/folders/1YH6XyQYhZdMSr1RW4EpAWEqq9VLekhzx?fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJmZGlkFlEN2n5n_E4B7UT5onBDwi9bW57kff1zcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafqb4Jchs9cVRy4gvBWtymQZtvkU1GDTSVgOIP0NkcpvHUUzAey-d7TBmh4uQ_aem_Z06UrFYG6baNKAMn1Qn9Ag"
             target="_blank"
             class="button"
             style="background: var(--c-y1);">
            <h2 class="center-text">ดูแกลเลอรี่</h2>
          </a>
        </section>
      </Block>
    </Reveal>

    <div style="height: 4rem;"></div>

    <Reveal :threshold="0.2">
      <ContentFrame padding="var(--space-1)">
        <h1 class="heading">Report</h1>
      </ContentFrame>

      <Block>
        <section class="banner_section"
                 id="report"
                 tabindex="-1">
          <img src="/images/elements/mailsending.png" alt="Banner" class="banner">
          <div class="information">
            <h2>ฟอร์มรายงานปัญหา</h2>
            <p style="text-indent: 1rem;">สำหรับสมาชิกอินทนิล ทุกคนสามารถแจ้งปัญหาภายในคณะสีให้พวกเราได้ผ่านช่องทางนี้เลย</p>
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfOeNkDUpoSWVAqh9u9sp4ZURc7Hc1lOkp5H1pC29SXX2k9eg/viewform?pli=1"
             target="_blank"
             class="button"
             style="background: var(--c-y1);">
            <h2 class="center-text">รายงานปัญหา</h2>
          </a>
        </section>
      </Block>
    </Reveal>

    <div style="height: 4rem;"></div>

    <RollingText text="INTHANIN2026" color="var(--c-p2)"/>

    <div style="height: 4rem;"></div>
    <div id="information" tabindex="-1"></div>
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

.page .billboard {
  width: 100%;
  height: fit-content;
  background: var(--c-main-bg2);

  display: grid;
  grid-template-rows: auto;
}

.page .billboard .slider .product_block {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
}

.page .billboard .slider .preview_wrapper {
  height: 100%;
  width: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
}

.page .billboard .slider .preview {
  height: 200px;
  filter: drop-shadow(0 0 2rem var(--c-t1-p2));
}

.page .billboard .slider .information {
  width: 200px;
  height: 100%;

  display: flex;
  flex-direction: column;
}

.page .billboard .slider .information p {
  text-indent: 1rem;
}

.page .billboard .slider .information .price {
  color: var(--c-p1);
  text-align: end;
  margin-top: auto;
}

.page .billboard .button {
  background: var(--c-p3);
  color: var(--c-w3);
}


.page .banner_section {
  width: 100%;
  height: fit-content;
  background: var(--c-main-bg2);

  display: grid;
  grid-template-rows: auto;
}

.page .banner_section .banner {
  width: 100%;
  display: block;
}

.page .banner_section .information {
  padding: var(--space-1);
}

.page .banner_section .button {
  background: var(--c-p3);
  color: var(--c-w3);
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
    animation-range: 20dvh 100dvh;
  }
}

/* ตั้ง margin ให้สำหรับ sections ที่จะรองรับการเลื่อนจาก index*/

#apparel { scroll-margin-top: 10rem; }
#merchandise { scroll-margin-top: 10rem; }
#gallery { scroll-margin-top: 10rem; }
#report { scroll-margin-top: 10rem; }
#information { scroll-margin-top: 10rem; }
</style>