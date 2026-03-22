<script setup>
import NavbarBlankSpace from "@/components/Template/NavbarBlankSpace.vue";
import ContentFrame from "@/components/Template/ContentFrame.vue";
import SideSlideFrame from "@/components/Template/SideSlideFrame.vue";
import StatisticsItem from "@/components/Template/StatisticsItem.vue";
</script>

<template>
  <main class="page">
    <div class="header__space">
      <NavbarBlankSpace/>
      <ContentFrame>
        <div class="header__video_wrapper">
          <video autoplay muted loop playsinline poster="/images/elements/development_preview_poster.png" style="animation: slideDown 2s ease">
            <source src="/videos/elements/development_preview.mov">
          </video>
        </div>
      </ContentFrame>
    </div>

    <ContentFrame padding="var(--space-1)">
      <div style="height: 2rem;"></div>
      <h1 class="center-text" style="color: var(--c-b1); filter: drop-shadow(0 0 var(--space-1) var(--c-b1));">- การพัฒนา -</h1>

      <div style="height: 2rem;"></div>
      <h2>เกี่ยวกับหน้านี้ :</h2>
      <p style="text-indent: 2rem">
        หน้านี้คือหน้าที่อธิบายข้อมูลวิธีการพัฒนาเพื่อให้ได้มาซึ่งหน้าเว็บที่สามารถตอบสนองได้เร็ว มีประสิทธิภาพสูงและมีความปลอดภัยตามมาตรฐาน สำหรับผู้ต้องการศึกษาสามารถไล่อ่านตามหัวข้อที่เน้นไว้ได้เลย
      </p>
    </ContentFrame>

    <SideSlideFrame>
      <template #header>
        <h1 style="color: var(--c-y1); filter: drop-shadow(0 0 var(--space-1) var(--c-t1-y1));">ข้อมูลระบบ</h1>
      </template>

      <StatisticsItem animation="slideDown 0.5s ease, fadeIn 1s forwards" animation-delay="0s" >
        <h2>เวอร์ชั่นหน้าเว็บ</h2>
        เวอร์ชั่นที่ดีพลอยล่าสุด
        <template #bottom>
          <h2 style="color: var(--c-r1); filter: drop-shadow(0 0 var(--space-2) var(--c-r1));">A1.0.0</h2>
        </template>
      </StatisticsItem>
      <StatisticsItem animation="slideDown 0.5s ease, fadeIn 1s forwards" animation-delay="0.2s" >
        <h2>วันที่อัปเดต</h2>
        วันที่มีการปล่อยเวอร์ชั่นนี้
        <template #bottom>
          <h2 style="color: var(--c-b1); filter: drop-shadow(0 0 var(--space-2) var(--c-b1));">23/03/26</h2>
        </template>
      </StatisticsItem>
      <StatisticsItem animation="slideDown 0.5s ease, fadeIn 1s forwards" animation-delay="0.4s" >
        <h2>พื้นที่จัดเก็บ</h2>
        ขนาดไฟล์ระบบ
        <template #bottom>
          <h2 style="color: var(--c-y1); filter: drop-shadow(0 0 var(--space-2) var(--c-y1));">126.5MB</h2>
        </template>
      </StatisticsItem>
    </SideSlideFrame>

    <ContentFrame padding="var(--space-1)">
      <div style="height: 2rem;"></div>

      <div class="info__blocks">
        <h2 style="color: var(--c-y1);">Framework :</h2>
        <h3>Vue</h3>
        <p>จัดการหน้าเว็บ ควบคุมการเรนเดอร์ และระบบฝั่งไคลเอนต์เบื้องต้น</p>
        <h3>Node JS</h3>
        <p>จัดการระบบเบื้องหลังฝั่งเซิร์ฟเวอร์ แอปพลิเคชั่นโปรแกรมมิ่งอินเทอเฟซ ความปลอดภัยทางไซเบอร์</p>
        <h3>MySQL Database</h3>
        <p>ฐานข้อมูลประเภท SQL ที่เลือกใช้เก็บข้อมูลเรกคอร์ดต่างๆ</p>

        <div style="height: 1rem;"></div>
        <hr>
        <div style="height: 1rem;"></div>

        <h2 style="color: var(--c-r1);">Development tools :</h2>
        <h3>Vite</h3>
        <p>ช่วยจัดการการพัฒนาหน้าเว็บด้วย Vue จัดการการโฮส</p>
        <h3>Metalias</h3>
        <p>ซอฟต์แวร์ที่สร้างขึ้นมาจากผู้พัฒนาเว็บไซต์นี้ ทำงานเป็นอุปกรณ์บนคอมมานไลน์ช่วยจัดการสคริปต์คำสั่ง</p>

        <div style="height: 1rem;"></div>
        <hr>
        <div style="height: 1rem;"></div>

        <h2 style="color: var(--c-b1);">Service provider :</h2>
        <h3>Render</h3>
        <p>เซิร์ฟเวอร์สำหรับโฮสหน้าเว็บระบบและการจัดการตัวแปร</p>
        <h3>Railway</h3>
        <p>เซิร์ฟเวอร์สำหรับโฮสฐานข้อมูล</p>
      </div>

      <div style="height: 1rem;"></div>

      <div class="info__blocks">
        <h2 style="color: var(--c-b1);">Staff :</h2>
        <h3>นายณภัทร โตสวาท</h3>
        <p>เป็นผู้พัฒนาหน้าเว็บและระบบทั้งหมดไม่รวมระบบที่เป็นโอเพนซอร์สที่นำมาใช้พัฒนาต่อยอด และเป็นผู้รับผิดชอบด้านการเมนเทนแนนซ์ระบบ ปรับปรุงแก้ไขและดำเนินการตามที่กำหนด</p>
      </div>

      <div style="height: 1rem;"></div>

      <div class="license__block">
        <h2 class="center-text" style="color: var(--c-y1);">- MIT LICENSE -</h2>
        <h3 class="center-text" style="color: var(--c-gr3)">Copyright 2026 Napat Tosawat</h3>
        <div style="height: var(--space-1);"></div>
        <p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so.</p>
        <div style="height: var(--space-1);"></div>
        <p>THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
      </div>

      <div style="height: 1rem;"></div>
    </ContentFrame>
  </main>
</template>

<style scoped>
.page .header__space {
  width: 100%;
  height: fit-content;
  background-color: var(--c-main-bg2);
  filter: drop-shadow(0 var(--space-1) var(--space-2) var(--c-t3-bl1));
  overflow: hidden;
}

.page .header__video_wrapper {
  width: 100%;
  height: fit-content;

  padding: var(--space-2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.page .header__video_wrapper video {
  width: 100%;
  max-width: 360px;
  background-color: var(--c-bl2);
  filter: drop-shadow(var(--space-1) var(--space-1) var(--space-2) var(--c-t2-bl1));
  border-radius: var(--space-2);
}

.page .info__blocks {
  border-radius: var(--space-2);
  background-color: var(--c-main-bg2);
  padding: var(--space-2);
}

.page .info__blocks h3 {
  padding-left: 1rem;
}

.page .info__blocks p {
  padding-left: 2rem;
  color: var(--c-gr3);
}

.page .license__block {
  border-radius: var(--space-2);
  background-color: var(--c-main-bg2);
  padding: var(--space-2);
}
</style>