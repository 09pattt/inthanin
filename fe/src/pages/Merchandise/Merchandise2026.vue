<script setup lang="ts">
import ContentFrame from "@/components/Template/ContentFrame.vue";
import NavbarBlankSpace from "@/components/Template/NavbarBlankSpace.vue";
</script>

<template>
  <div class="page">
    <header class="header">
      <div style="flex: 0 0 auto;">
        <NavbarBlankSpace/>
      </div>
      <div class="container">
        <ContentFrame>
          <div>
            <img src="/images/elements/all_merchandise.png" alt="Preview" class="preview">
          </div>
        </ContentFrame>
      </div>
    </header>

    <ContentFrame padding="var(--space-1)">
      <section class="details">
        <h2>คำอธิบาย</h2>
        <p style="text-indent: 1rem;">นี่เป็นอีกหนึ่ง Collection ประจำปี 2026 อย่าลืมมาซื้อเข็มกลัดและสติ๊กเกอร์ทีมอินทนิลในราคาน่ารักๆ ก่อนที่จะหมดเขตพรี-ออเดอร์ในวันที่ 2 พฤศจิกายนนี้ หมดแล้วหมดเลยนะคร้าบบบ</p>
      </section>

      <br>
      <hr>
      <br>

      <section class="product_block">
        <img src="/images/elements/preview_pins.png" alt="Pins" class="preview">
        <h2>Inthanin Pin</h2>
        <h3>เข็มกลัดอินทนิล</h3>
        <ul>
          <li>เข็มกลัดจะมีทั้งหมด 3 แบบดังรูปตัวอย่าง</li>
          <li>เป็นเข็มกลัดขนาด 32 มิลลิเมตร</li>
        </ul>
        <div class="price">
          <h3>ราคาต่อชิ้น</h3>
          <h2>9.-</h2>
        </div>
      </section>

      <br>
      <hr>
      <br>

      <section class="product_block">
        <img src="/images/elements/preview_stickers.png" alt="Pins" class="preview">
        <h2>Inthanin Sticker</h2>
        <h3>สติ๊กเกอร์อินทนิล</h3>
        <ul>
          <li>สติ๊กเกอร์จะมีทั้งหมด 2 แบบดังรูปตัวอย่าง</li>
          <li>เป็นแผ่นสติ๊กเกอร์ขนาด A6</li>
        </ul>
        <div class="price">
          <h3>ราคาต่อแผ่น</h3>
          <h2>20.-</h2>
        </div>
      </section>

      <br>
      <hr>
      <br>

      <section class="product_block">
        <h2>Set of Pins</h2>
        <h3>เซตเข็มกลัด</h3>
        <ul>
          <li>จะได้เข็มกลัดครบทั้ง 3 แบบดังรูปข้างต้น</li>
        </ul>
        <div class="price">
          <h3>ราคาต่อเซต</h3>
          <h2>20.-</h2>
        </div>
      </section>

      <br>
      <hr>
      <br>

      <section class="product_block">
        <h2>Starter Pack</h2>
        <h3>เซตเข็มกลัดและสติ๊กเกอร์</h3>
        <ul>
          <li>จะได้เข็มกลัด 1 แบบจากเซตที่จัดให้</li>
          <li>จะได้สติ๊กเกอร์ 1 แบบจากเซตที่จัดให้</li>
        </ul>
        <div class="price">
          <h3>ราคาต่อเซต</h3>
          <h2>25.-</h2>
        </div>
      </section>

      <br>
      <hr>
      <br>

      <section class="details">
        <h2>รายละเอียดการสั่งซื้อ</h2>
        <ul>
          <li>ผู้สั่งซื้อไม่จำเป็นต้องอยู่ในคณะสีอินทนิล</li>
          <li>หากเลือกซื้อเป็นเซต จะได้ของตามเซตที่จัดให้</li>
          <li>ชำระเงินผ่านช่องทาง Mobile Banking</li>
          <li>เมื่อทำการสั่งซื้อไปแล้ว จะไม่สามารถยกเลิกการสั่งซื้อได้</li>
          <li>ติดตามการแจ้งผ่านทาง <a href="https://www.instagram.com/inthanin_triamnom?mdxt=MWdiZHl3YWhvenZtZA==">Instagram</a> คณะสีอินทนิล</li>
        </ul>
      </section>

      <br>
      <hr>
      <br>

      <section class="purchasing">
        <h1>สรุปรายการ</h1>
        <div class="indicator">
          <p class="comment-text">รายการ</p>
          <p class="comment-text">ราคาต่อชิ้น</p>
        </div>
        <div class="information">
          <h2 class="product_name">Pin</h2>
          <h2 class="price">9.-</h2>
        </div>
        <div class="information">
          <h2 class="product_name">Sticker</h2>
          <h2 class="price">20.-</h2>
        </div>
        <p class="center-text comment-text">
          หมายเหตุ: ถ้าติดปัญหาใดๆ สามารถติดต่อได้ที่
          <a href="https://www.instagram.com/inthanin_triamnom?mdxt=MWdiZHl3YWhvenZtZA==">Instagram</a>
        </p>
        <div class="button">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdN8-leTfHI7j2nB4vLe1tVGqpIBpdCsMdGbTv5do47bvCO3g/viewform"
             target="_blank">
            <h3>พรี-ออเดอร์</h3>
          </a>
        </div>
      </section>
    </ContentFrame>

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

.page .header .container {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.page .header .title {
  font-family: Impact, sans-serif;
}

.page .header .preview {
  width: 100%;
  max-height: 350px;
  object-fit: contain;
  filter: drop-shadow(0 0 2rem var(--c-t3-w1));
}

.page .details {
  width: 100%;
}

.page .details ul {
  padding-left: 2rem;
}

.page .product_block {
  width: 100%;
}

.page .product_block .preview {
  width: 100%;
}

.page .product_block ul {
  padding-left: 2rem;
}

.page .product_block .price {
  display: flex;
  justify-content: end;
  align-items: center;
}

.page .product_block .price h2 {
  margin-left: var(--space-1);
  color: var(--c-p1);
}

/* Table */
.page .table table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
  text-align: left;
  color: var(--c-w3);
}

/* Table Header */
.page .table thead {
  background-color: var(--c-bl1);
}

.page .table th {
  padding: 12px 16px;
  border-bottom: 2px solid #dee2e6;
}

/* Table Body */
.page .table td {
  padding: 12px 16px;
  color: var(--c-w3);
  border-bottom: 1px solid #e9ecef;
}

/* Zebra Striping */
.page .table tbody tr:nth-child(odd) {
  background-color: var(--c-bl3);
}

.page .table tbody tr:nth-child(even) {
  background-color: var(--c-bl4);
}

.page .purchasing .indicator {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.page .purchasing .information {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.page .purchasing .button {
  width: 100%;
  display: flex;
}

.page .purchasing .button a {
  width: 100%;
  border-radius: var(--space-1);
  background: var(--c-w3); /* เปลี่ยนกลับเป็น var(--c-gr2) ถ้าปิดให้ซื้อ*/
  color: var(--c-bl3);
  display: flex;
  justify-content: center;
  align-items: center;

  /* ถ้าปิดไม่ให้ซื้อแล้ว
  pointer-events: none;
  */
}
</style>