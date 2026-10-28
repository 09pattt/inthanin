<script setup lang="ts">
import Block from "@/components/Template/Block.vue";
import Reveal from "@/components/Property/Reveal.vue";

interface IndexItem {
  id: string;
  title: string;
  description: string;
}

const items: readonly IndexItem[] = [
  { id: "merchandise", title: "Merchandise", description: "ของที่ระลึก" },
  { id: "apparel", title: "Apparel", description: "เครื่องแต่งกาย" },
  { id: "gallery", title: "Gallery", description: "ภาพบรรยากาศ" },
  { id: "report", title: "Report", description: "แจ้งปัญหา" },
  { id: "information", title: "Information", description: "ข้อมูลและช่องทางติดต่อ" },
];
</script>

<template>
  <Block>
    <section class="index">
      <div class="item">
        <h3 class="title page-index-title">Page index</h3>
        <div class="description">
          <p class="page-index-subtitle">เลือกดูหัวข้อที่สนใจ</p>
        </div>
      </div>

      <nav aria-label="สารบัญหน้า">
        <template v-for="(item, i) in items" :key="item.id">
          <Reveal transform-in="translateX(20%)">
            <router-link class="item" :to="{ hash: `#${item.id}` }">
              <h1 class="title">{{ item.title }}</h1>
              <div class="description">
                <p>{{ item.description }}</p>
              </div>
            </router-link>
          </Reveal>
          <hr v-if="i < items.length - 1">
        </template>
      </nav>
    </section>
  </Block>
</template>

<style scoped>
.item {
  display: block;          /* router-link เป็น <a> ต้องกำหนดให้เป็น block */
  color: inherit;
  text-decoration: none;
}
.page-index-title {
  color: var(--c-gr2);
  /*font-family: Impact, sans-serif;*/
}
.page-index-subtitle {
  color: var(--c-gr2);
  margin-left: var(--space-1);
  font-weight: bold;
}

.index {
  width: 100%;
  height: fit-content;

  background: var(--c-main-bg2);

  padding: var(--space-1);
}

.index .item {
  width: 100%;
  height: fit-content;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
}

.index .item .description {
  width: fit-content;
  /*height: 100%; ถ้าเอาออกความสูงจะเต็มให้อัตโนมัติ*/

  display: flex;
  align-items: end;
}
</style>