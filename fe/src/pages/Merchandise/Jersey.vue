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
          <h1 class="title center-text">2026 Jersey</h1>
          <div>
            <img src="/images/elements/jersey.png" alt="Preview" class="preview">
          </div>
        </ContentFrame>
      </div>
    </header>

    <ContentFrame padding="var(--space-1)">
      <section class="details">
        <h2>รายละเอียดการสั่งซื้อ</h2>
        <ul>
          <li>ผู้สั่งซื้อไม่จำเป็นต้องอยู่ในคณะสีอินทนิล</li>
          <li>ชำระเงินผ่านช่องทาง Mobile Banking</li>
          <li>เช็คขนาดไซส์เสื้อที่จะสั่งซื้อให้ดีก่อนสั่งซื้อ (ตารางขนาดอยู่ด้านล่าง)</li>
          <li>เมื่อทำการสั่งซื้อไปแล้ว จะไม่สามารถยกเลิกการสั่งซื้อได้</li>
          <li><strong>วันรับเสื้อ</strong>จะแจ้งภายหลังผ่าน <a href="https://www.instagram.com/inthanin_triamnom?mdxt=MWdiZHl3YWhvenZtZA==">Instagram</a> ของคณะสีอินทนิล</li>
        </ul>
      </section>

      <br>
      <hr>
      <br>

      <section class="table">
        <h2>ตารางขนาดเสื้อ</h2>
        <table>
          <thead>
          <tr>
            <th>ขนาดเสื้อ</th>
            <th>ความยาวรอบอก (นิ้ว)</th>
            <th>ความยาวเสื้อ (นิ้ว)</th>
          </tr>
          </thead>

          <tbody>
          <tr>
            <td>SS</td>
            <td>34"</td>
            <td>25"</td>
          </tr>

          <tr>
            <td>S</td>
            <td>36"</td>
            <td>26"</td>
          </tr>

          <tr>
            <td>M</td>
            <td>38"</td>
            <td>27"</td>
          </tr>

          <tr>
            <td>L</td>
            <td>40"</td>
            <td>28"</td>
          </tr>

          <tr>
            <td>XL</td>
            <td>42"</td>
            <td>29"</td>
          </tr>

          <tr>
            <td>2XL</td>
            <td>44"</td>
            <td>30"</td>
          </tr>

          <tr>
            <td>3XL</td>
            <td>46"</td>
            <td>31"</td>
          </tr>

          <tr>
            <td style="border-bottom: none;">4XL</td>
            <td style="border-bottom: none;">48"</td>
            <td style="border-bottom: none;">32"</td>
          </tr>
          </tbody>
        </table>
      </section>

      <br>
      <hr>
      <br>

      <section class="purchasing">
        <h1>สรุปรายการ</h1>
        <div class="indicator">
          <p class="comment-text">รายการ</p>
          <p class="comment-text">ราคา(พิเศษ)</p>
        </div>
        <div class="information">
          <h2 class="product_name">Inthanin Jersey 2026</h2>
          <h2 class="price">219.-</h2>
        </div>
        <p class="center-text comment-text">
          <!-- ปิดไม่ให้พรีออเดอร์แล้ว
          หมายเหตุ: หากต้องการสั่งเสื้อมากกว่า 5 ตัว สามารถติดต่อได้ที่
          <a href="https://www.instagram.com/inthanin_triamnom?mdxt=MWdiZHl3YWhvenZtZA==">Instagram</a>
          -->
          รายการนี้ปิดการสั่งซื้อรอบ พรี-ออเดอร์ ไปแล้ว
        </p>
        <div class="button">
          <a href=""
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
  background: var(--c-gr2); /* เปลี่ยนกลับเป็น var(--c-w3) ถ้าเปิดให้ซื้อ*/
  color: var(--c-bl3);
  display: flex;
  justify-content: center;
  align-items: center;

  /* ปิดไม่ให้ซื้อแล้ว*/
  pointer-events: none;
}
</style>