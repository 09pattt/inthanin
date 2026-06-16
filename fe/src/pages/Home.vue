<script setup>
import Logo from "@/components/Objects/Logo.vue";
import ContentFrame from "@/components/Template/ContentFrame.vue";
import AnnounceItem from "@/components/Template/AnnounceItem.vue";
import NavbarBlankSpace from "@/components/Template/NavbarBlankSpace.vue";
import SideSlideFrame from "@/components/Template/SideSlideFrame.vue";
import StatisticsItem from "@/components/Template/StatisticsItem.vue";
</script>

<template>
  <main class="home">
    <div class="page__header">
      <NavbarBlankSpace/>

      <ContentFrame>
        <br>
        <Logo/>
        <h1 class="center-text heading" style="color: var(--c-p1);">คณะสีอินทนิล</h1>
        <!--<h1 class="center-text heading" style="color: var(--c-p1); font-size: 200px;">43</h1>-->
        <div style="height: var(--space-3);"></div>
      </ContentFrame>
    </div>


    <SideSlideFrame>
      <template #header>
        <h1 style="color: var(--c-b1); filter: drop-shadow(0 0 var(--space-1) var(--c-t1-b1));">ประกาศๆ</h1>
      </template>

      <AnnounceItem animation="slideUp 1s ease, fadeIn 1s forwards" animation-delay="0s" >
        <template #header>
          <h1 class="join-text">
            การพัฒนา
          </h1>
          <h1 class="join-text" style="color: var(--c-b1);">
            ซอฟต์แวร์
          </h1>
        </template>
        <p>
          แน่นอนว่าหน้าเว็บแบบนี้ต้องมีทั้งโค้ดและโปรแกรมทำงานอยู่ ถ้าหากอยากรู้ว่าทั้งหมดนี้มีอะไรอยู่เบื้องหลังสามารถดูได้ที่
          <a href="https://github.com/09pattt/inthanin">Inthanin Git-Repository</a>
          นอกจากนี้ก็ยังมีเอกสารเกี่ยวกับเว็บไซต์อยู่ด้วย
        </p>
      </AnnounceItem>
      <AnnounceItem animation="slideUp 1s ease, fadeIn 1s forwards" animation-delay="0.2s" >
        <template #header>
          <h1 class="join-text">
            สวัสดี
          </h1>
          <h1 class="join-text" style="color: var(--c-y1);">
             จ๊ะจ๋า
          </h1>
        </template>
        <p>
          อันนี้พัดพิมพ์นะครับ ถ้าจ๊ะจ๋าสนใจบอกพัดเลยครับ เว็บใช้ได้ทุกอย่างแล้วเหลือใส่เนื้อหาอย่างเดียวละครับ
        </p>
      </AnnounceItem>
      <AnnounceItem animation="slideUp 1s ease, fadeIn 1s forwards" animation-delay="0.4s" >
        <template #header>
          <h1 class="join-text">
            ช่องว่าง
          </h1>
          <h1 class="join-text" style="color: var(--c-p1);">
            ไม่มีไร
          </h1>
        </template>
        <p>
          ถ้าไม่มีช่องนี้เดี๋ยวเว็บไม่สวย
        </p>
      </AnnounceItem>
    </SideSlideFrame>


    <ContentFrame padding="var(--space-1)">

      <div style="height: 4rem;"></div>
      <h2>คำชี้แจง :</h2>
      <p>
        ข้อมูลและประกาศจากคณะสีในหน้าเว็บนี้เป็นการเขียนขึ้นเองทั้งหมด(เว้นแต่ข้อมูลด้านการพัฒนา) เพื่อเป็นการจำลองหน้าเว็บให้เห็นการจัดวางเลย์เอาท์และการใช้งาน เพื่อให้ทั้งผู้ใช้ได้ทดลองใช้
        <strike>และสามารถแนะนำหรือรายงานปัญหาให้ผู้พัฒนาทราบและ</strike>
        จะดำเนินการปรับปรุงแก้ไขหากมีการปรับใช้จริงในอนาคต
      </p>
      <div style="height: 2rem;"></div>

      <hr>

      <div style="height: 2rem;"></div>
      <div class="content__development_container">
        <div class="content__development_items" style="background-color: var(--c-r1);">
          <router-link to="/development" class="hover__no-bg content__development_links"></router-link>
          <header>
            <h1>เบื้องหลัง</h1>
          </header>
          <main>
            <p>
              <strong>คลิ๊ก</strong>เพื่อไปที่หน้า /development ดูเบื้องหลังกว่าจะออกมาเป็นหน้าเว็บไซต์นี้และสามารถ Response ได้ทำยังไงใช้อะไรบ้าง
            </p>
          </main>
        </div>
        <div class="content__development_items" style="background-color: var(--c-b1);">
          <a href="https://github.com/09pattt/inthanin" target="_blank" class="hover__no-bg content__development_links"></a>
          <header>
            <h1>ซอร์สโค้ด</h1>
          </header>
          <main>
            <p>
              <strong>คลิ๊ก</strong>เพื่อเพิ่มแท็บใหม่เป็น github.com/09pattt/inthanin ซึ่งเป็นไฟล์ต้นทางของหน้าเว็บไซต์นี้และระบบเบื้องหลังทั้งหมด
            </p>
          </main>
        </div>
      </div>

      <div style="height: 2rem;"></div>

    </ContentFrame>


    <SideSlideFrame>
      <template #header>
        <h1 style="color: var(--c-y1); filter: drop-shadow(0 0 var(--space-1) var(--c-t1-y1));">ข้อมูลและสถิติ</h1>
      </template>

      <StatisticsItem animation="slideDown 0.5s ease, fadeIn 1s forwards" animation-delay="0s" >
        <h2>งบคณะสี</h2>
        งบประมาณปีนี้
        <template #bottom>
          <h1 style="color: var(--c-y1); filter: drop-shadow(0 0 var(--space-2) var(--c-y1));">6.7ล้าน</h1>
        </template>
      </StatisticsItem>
      <StatisticsItem animation="slideDown 0.5s ease, fadeIn 1s forwards" animation-delay="0.2s" >
        <h2>กีฬาสีอีก</h2>
        -
        <template #bottom>
          <h1 style="color: var(--c-g1); filter: drop-shadow(0 0 var(--space-2) var(--c-g1));">140วัน</h1>
        </template>
      </StatisticsItem>
      <StatisticsItem animation="slideDown 0.5s ease, fadeIn 1s forwards" animation-delay="0.4s" >
        <h2>สมาชิกคณะสี</h2>
        จำนวนสมาชิกทั้งหมด
        <template #bottom>
          <h1 style="color: var(--c-p1); filter: drop-shadow(0 0 var(--space-2) var(--c-p1));">585คน</h1>
        </template>
      </StatisticsItem>
      <StatisticsItem animation="slideDown 0.5s ease, fadeIn 1s forwards" animation-delay="0.6s" >
        <h2>การเข้าชม</h2>
        ยอดการเปิดหน้าเว็บ
        <template #bottom>
          <h1 style="color: var(--c-b1); filter: drop-shadow(0 0 var(--space-2) var(--c-b1));">6767</h1>
        </template>
      </StatisticsItem>
    </SideSlideFrame>

    <ContentFrame padding="var(--space-1)">
      <div style="height: 2rem;"></div>
      <h1 style="color: var(--c-r1); filter: drop-shadow(0 0 var(--space-1) var(--c-t1-r1));">ฟอร์มรายงานผู้พัฒนา</h1>
      <div style="height: var(--space-1);"></div>
      <div style="width: 100%; background-color: var(--c-main-bg2); border-radius: var(--space-1); padding: var(--space-1); filter: drop-shadow(var(--space-1) var(--space-1) var(--space-2) var(--c-t3-bl1));">
        <h2 class="center-text">เร็วๆนี้</h2>
        <p class="center-text">สำหรับการกรอกแนะนำหรือรายงานปัญหา</p>
      </div>
    </ContentFrame>

  </main>
</template>

<style scoped>
.home .page__header {
  width: 100%;
  height: fit-content;
  filter: drop-shadow(0 0 var(--space-2) var(--c-t1-p2));
  animation: topOpening 1s;
}

.home .content__development_container {
  width: 100%;
  height: fit-content;
  border-radius: var(--space-2);
  background-color: var(--c-main-bg2);
  filter: drop-shadow(var(--space-1) var(--space-1) var(--space-2) var(--c-t3-bl1));

  padding: var(--space-1);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-1);
}

.home .content__development_items {
  width: 100%;
  height: fit-content;
  background-color: var(--c-main-bg3);
  border-radius: var(--space-1);
  overflow: hidden;
  position: relative;

  padding: var(--space-1);
  color: var(--c-w1);
}

.home .content__development_links {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.home .content__development_links:active {
  background-color: var(--c-t1-w1);
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