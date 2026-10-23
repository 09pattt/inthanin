<script setup>
import NavbarBlankSpace from "@/components/Template/NavbarBlankSpace.vue";
import FloatImage from "@/components/Template/FloatImage.vue";
import ContentFrame from "@/components/Template/ContentFrame.vue";
import Block from "@/components/Template/Block.vue";
import SideSlider from "@/components/Template/SideSlider.vue";
</script>

<template>
  <div class="page">

    <header class="header">
      <NavbarBlankSpace/>
      <ContentFrame>
        <div style="height: 3rem;"></div>

        <FloatImage>
          <img src="/images/logo/inthanin.png" alt="Inthanin 42nd" style="height: 8rem;" />
        </FloatImage>

        <h1 class="center-text heading" style="color: var(--c-p2);">คณะสีอินทนิล</h1>
        <div style="height: 3rem;"></div>
      </ContentFrame>
    </header>

    <ContentFrame padding="var(--space-1)">
      <h1 class="heading">Merchandise</h1>
    </ContentFrame>

    <Block class="merchandise">
      <SideSlider>
        <div class="preview_wrapper">
          <img src="/images/elements/jersey.png" alt="preview" class="preview">
        </div>

        <div style="width: 1rem;"></div>

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

        <div style="width: 1rem;"></div>

        <div class="preview_wrapper">
          <img src="/images/elements/headband.png" alt="preview" class="preview">
        </div>

        <div style="width: 1rem;"></div>

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

        <div style="width: 1rem;"></div>

        <div class="condition">
          <h3 style="color: var(--c-p1);">รายละเอียดการสั่งซื้อ</h3>
          <p>- ผู้สั่งซื้อไม่จำเป็นต้องเป็นสมาชิกคณะสีอินทนิล</p>
          <p>- ไม่สามารถยกเลิกการสั่งซื้อได้</p>
          <p>- ชำระเงินผ่านช่องทางการโอน</p>
          <p>- ตรวจสอบขนาดไซส์เสื้อให้ดีก่อนสั่งซื้อ</p>
          <p>- วันรับเสื้อจะแจ้งผ่านช่องทางไอจีและเว็บไซต์</p>
          <p>- อย่าลืมติดตามข่าวสารหลังทำการสั่งซื้อ</p>
        </div>

        <div style="width: 1rem;"></div>

        <div class="order">
          <h2 style="color: var(--c-p1);">ของมันต้องมีอะค้าบ</h2>
          <p style="text-indent: 1rem;">
            ตรวจสอบรายละเอียดของเสื้อหรือผ้าคาดและกรอกฟอร์มสั่งซื้อ กดดูได้ด้านล่างนี้ได้เลย
          </p>
          <router-link to="/shop/jersey2026"
                       class="hover__no-bg"
                       style="color: var(--c-w3); text-align: center; font-size: 1.5rem; background: var(--c-y1); margin-top: auto;"
          >สั่งซื้อ</router-link>
        </div>
      </SideSlider>
    </Block>

    <div style="height: 50px;">
    </div>

    <ContentFrame padding="var(--space-1)">
      <h1 class="heading">2026 Gallery</h1>
    </ContentFrame>

    <Block class="gallery">
      <img src="/images/elements/inthanin_gallery.png" alt="Banner" class="banner">
    </Block>
  </div>
</template>

<style scoped>
.page .header {
  width: 100%;
  height: fit-content;
  filter: drop-shadow(0 0 var(--space-2) var(--c-t1-p2));
  animation: fadeIn 2s ease;
}

.page .merchandise .preview_wrapper {
  height: 240px;
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
  height: 240px;

  display: flex;
  flex-direction: column;
}

.page .merchandise .condition {
  height: 240px;
  width: fit-content;
  background: var(--c-main-bg3);
  border-radius: var(--space-1);

  padding: var(--space-1);
  display: flex;
  flex-direction: column;
}

.page .merchandise .order {
  height: 240px;
  width: 200px;

  padding: var(--space-1);
  display: flex;
  flex-direction: column;
}

.page .gallery .banner {
  width: 100%;
}
</style>