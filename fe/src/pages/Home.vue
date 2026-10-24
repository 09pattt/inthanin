<script setup>
import NavbarBlankSpace from "@/components/Template/NavbarBlankSpace.vue";
import ContentFrame from "@/components/Template/ContentFrame.vue";
import Block from "@/components/Template/Block.vue";
import SideSlider from "@/components/Template/SideSlider.vue";
import Reveal from "@/components/Property/Reveal.vue";
</script>

<template>
  <div class="page">

    <div class="backdrop"></div>

    <header class="header">
      <div style="flex: 0 0 auto;">
        <NavbarBlankSpace/>
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

    <Reveal :threshold="0.5">
      <ContentFrame padding="var(--space-1)">
        <h1 class="heading">Merchandise</h1>
      </ContentFrame>

      <Block class="merchandise">
        <SideSlider height="250px">
          <div class="preview_wrapper">
            <img src="/images/elements/jersey.png" alt="preview" class="preview">
          </div>

          <div style="width: 1rem;"></div>

          <Reveal :threshold="0.2" transform-in="translateY(50%)">
            <div class="information">
              <h2 style="background: var(--c-p3); color: var(--c-w3); text-align: center;">
                Inthanin Jerseyyyyy
              </h2>
              <p style="text-indent: 1rem;">
                เรามากับการเปิดตัว<strong style="color: var(--c-p1);">เสื้อทีมคณะสีอินทนิลปี 2026 </strong>เป็นเสื้อ Jersey สีม่วงมีลวดลายตามธีมของคณะสีในปีนี้
              </p>
              <h1 style="color: var(--c-p1); text-align: end; margin-top: auto;">
                219.-
              </h1>
              <!--<p class="comment-text" style="text-align: end;">เลื่อนดูเพิ่มเติม >></p>-->
            </div>
          </Reveal>

          <div style="width: 1rem;"></div>

          <div class="preview_wrapper">
            <img src="/images/elements/headband.png" alt="preview" class="preview">
          </div>

          <div style="width: 1rem;"></div>

          <Reveal :threshold="0.2" transform-in="translateY(50%)">
            <div class="information">
              <h2 style="background: var(--c-p3); color: var(--c-w3); text-align: center;">
                Inthanin Headband
              </h2>
              <p style="text-indent: 1rem;">
                ครั้งนี้เรามากับ<strong style="color: var(--c-p1);">ผ้าคาดหัวทีมอินทนิล</strong> ไม่ว่าใครก็จับจองเป็นของตัวเองได้ในราคาเพียง
              </p>
              <h1 style="color: var(--c-p1); text-align: end; margin-top: auto;">
                59.-
              </h1>
              <!--<p class="comment-text" style="text-align: end;">เลื่อนดูเพิ่มเติม >></p>-->
            </div>
          </Reveal>

          <div style="width: 1rem;"></div>

          <Reveal :threshold="0.2" transform-in="translateY(50%)">
            <div class="condition">
              <h3 style="color: var(--c-p1);">รายละเอียดการสั่งซื้อ</h3>
              <p>- ผู้สั่งซื้อไม่จำเป็นต้องเป็นสมาชิกคณะสีอินทนิล</p>
              <p>- ไม่สามารถยกเลิกการสั่งซื้อได้</p>
              <p>- ชำระเงินผ่านช่องทางการโอน</p>
              <p>- ตรวจสอบขนาดไซส์เสื้อให้ดีก่อนสั่งซื้อ</p>
              <p>- วันรับเสื้อจะแจ้งผ่านช่องทางไอจีและเว็บไซต์</p>
              <p>- อย่าลืมติดตามข่าวสารหลังทำการสั่งซื้อ</p>
            </div>
          </Reveal>

          <div style="width: 1rem;"></div>

          <Reveal :threshold="0.2" transform-in="translateY(50%)">
            <div class="order">
              <h2 style="color: var(--c-p1);">เพิ่มเติม</h2>
              <p style="text-indent: 1rem;">
                ตรวจสอบรายละเอียดของเสื้อหรือผ้าคาดและกรอกฟอร์มสั่งซื้อ กดดูได้ด้านล่างนี้ได้เลย
              </p>
              <router-link to="/shop/jersey2026"
                           class="hover__no-bg"
                           style="color: var(--c-w3); text-align: center; font-size: 1.5rem; background: var(--c-y1); margin-top: auto;"
              >ดูเพิ่มเติม</router-link>
            </div>
          </Reveal>
        </SideSlider>
      </Block>
    </Reveal>

    <div style="height: 50px;"></div>

    <Reveal :threshold="0.3">
      <ContentFrame padding="var(--space-1)">
        <h1 class="heading">2026 Gallery</h1>
      </ContentFrame>

      <Block class="content_section">
        <img src="/images/elements/inthanin_gallery.png" alt="Banner" class="banner">
        <div class="information">
          <h2>ภาพบรรยากาศวันเตรียม</h2>
          <p style="text-indent: 1rem;">คณะสีอินทนิลเรามีตากล้องช่วยเก็บภาพบรรยากาศการเตรียมงานกีฬาสีประจำปีไว้ด้วย มีตั้งแต่การซ้อมแสตนเชียร์และเชียร์หลีดเดอร์ การเตรียมขบวนพาเหรด และการฝึกซ้อมและคัดเลือกนักกีฬาอินทนิล</p>
          <div style="align-self: end; width: 120px; height: fit-content; border-radius: 0.5rem; background: var(--c-y1);">
            <a href="https://drive.google.com/drive/folders/1YH6XyQYhZdMSr1RW4EpAWEqq9VLekhzx?fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJmZGlkFlEN2n5n_E4B7UT5onBDwi9bW57kff1zcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafqb4Jchs9cVRy4gvBWtymQZtvkU1GDTSVgOIP0NkcpvHUUzAey-d7TBmh4uQ_aem_Z06UrFYG6baNKAMn1Qn9Ag"
               target="_blank"
               style="width: 100%;">
              <h3 style="color: var(--c-w3); text-align: center; font-size: 1.5rem;">
                ดูแกลเลอรี่
              </h3>
            </a>
          </div>
        </div>
      </Block>
    </Reveal>

    <div style="height: 50px;"></div>

    <Reveal :threshold="0.5">
      <ContentFrame padding="var(--space-1)">
        <h1 class="heading">Report</h1>
      </ContentFrame>

      <Block class="content_section">
        <img src="/images/elements/mailsending.png" alt="Banner" class="banner">
        <div class="information">
          <h2>ฟอร์มรายงานปัญหา</h2>
          <p style="text-indent: 1rem;">สำหรับสมาชิกอินทนิล ทุกคนสามารถแจ้งปัญหาภายในคณะสีให้พวกเราได้ผ่านช่องทางนี้เลย</p>
          <div style="align-self: end; width: 120px; height: fit-content; border-radius: 0.5rem; background: var(--c-r1);">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfOeNkDUpoSWVAqh9u9sp4ZURc7Hc1lOkp5H1pC29SXX2k9eg/viewform?pli=1"
               target="_blank"
               style="width: 100%;">
              <h3 style="color: var(--c-w3); text-align: center; font-size: 1.5rem;">
                รายงานปัญหา
              </h3>
            </a>
          </div>
        </div>
      </Block>
    </Reveal>

    <div style="height: 4rem;"></div>

    <div class="rolling_text">
      <ContentFrame>
        <Reveal root-margin="-150px 0px" transform-in="scale(0.8)">
          <h1 class="center-text heading" style="color: var(--c-p2); font-size: 5rem;">I</h1>
          <div style="height: 1rem;"></div>
        </Reveal>
        <Reveal root-margin="-150px 0px" transform-in="scale(0.8)">
          <h1 class="center-text heading" style="color: var(--c-p2); font-size: 5rem;">N</h1>
          <div style="height: 1rem;"></div>
        </Reveal>
        <Reveal root-margin="-150px 0px" transform-in="scale(0.8)">
          <h1 class="center-text heading" style="color: var(--c-p2); font-size: 5rem;">T</h1>
          <div style="height: 1rem;"></div>
        </Reveal>
        <Reveal root-margin="-150px 0px" transform-in="scale(0.8)">
          <h1 class="center-text heading" style="color: var(--c-p2); font-size: 5rem;">H</h1>
          <div style="height: 1rem;"></div>
        </Reveal>
        <Reveal root-margin="-150px 0px" transform-in="scale(0.8)">
          <h1 class="center-text heading" style="color: var(--c-p2); font-size: 5rem;">A</h1>
          <div style="height: 1rem;"></div>
        </Reveal>
        <Reveal root-margin="-150px 0px" transform-in="scale(0.8)">
          <h1 class="center-text heading" style="color: var(--c-p2); font-size: 5rem;">N</h1>
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
          <h1 class="center-text heading" style="color: var(--c-p2); font-size: 5rem;">2</h1>
          <div style="height: 1rem;"></div>
        </Reveal>
        <Reveal root-margin="-150px 0px" transform-in="scale(0.8)">
          <h1 class="center-text heading" style="color: var(--c-p2); font-size: 5rem;">0</h1>
          <div style="height: 1rem;"></div>
        </Reveal>
        <Reveal root-margin="-150px 0px" transform-in="scale(0.8)">
          <h1 class="center-text heading" style="color: var(--c-p2); font-size: 5rem;">2</h1>
          <div style="height: 1rem;"></div>
        </Reveal>
        <Reveal root-margin="-150px 0px" transform-in="scale(0.8)">
          <h1 class="center-text heading" style="color: var(--c-p2); font-size: 5rem;">6</h1>
          <div style="height: 1rem;"></div>
        </Reveal>
      </ContentFrame>

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