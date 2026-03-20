<script setup>
import {onMounted, ref} from "vue"
import {useRoute} from "vue-router"
import { useElementsStore } from "@/stores/elements.ts";
import NavbarBlankSpace from "@/components/Template/NavbarBlankSpace.vue";

const route = useRoute()
const store = useElementsStore()
const emit = defineEmits(["updateHeight"])

const navbar = ref(null)
const navbarHeight = ref(0)
const isMenuOpened = ref(false)
const menu_page = ref(null)
const menu = ref(null)

const toggleMenu = () => {
  isMenuOpened.value = !isMenuOpened.value
  console.log("store.NavbarHeight : " + store.NavbarHeight)
  if (isMenuOpened.value === true) {
    openMenu()
  } else if (isMenuOpened.value === false) {
    closeMenu()
  }
}

const openMenu = () => {
  console.log('open : ' + isMenuOpened.value)
}

const closeMenu = () => {
  console.log('close : ' + isMenuOpened.value)
}

onMounted(() => {
  if (navbar.value) {
    store.NavbarHeight = navbar.value.offsetHeight
    navbarHeight.value = navbar.value.offsetHeight
    emit('updateHeight', navbar.value.offsetHeight)
  }
})

</script>

<template>
  <nav ref="navbar" @click="toggleMenu">
    <div class="mobile_nav_space">
      <div class="title_space">
        <img src="/images/logo/inthanin.png" alt="">
        <p>INTHANIN</p>
      </div>
      <div class="menu_hub">
        <!--<div class="profile">
          <p>แถบตรงนี้กดได้</p>
          <img src="/images/icon/login.svg" alt="">
        </div>-->
        <div class="menu_button">
          <p>{{ isMenuOpened ? 'ปิด' : 'เมนู' }}</p>
          <img src="/images/icon/menu.svg" alt="">
        </div>
      </div>
    </div>

    <div class="path_bar">
      <p>
        คณะสีอินทนิล >>
        <strong>{{ route.meta.title }}</strong>
      </p>
    </div>
  </nav>

  <div ref="menu_page" class="menu_page" :class="{ opened : isMenuOpened }">
    <NavbarBlankSpace></NavbarBlankSpace>
    <div class="menu_space">
      <div @click="isMenuOpened = false" class="menu_close_space"></div>
      <div class="menu_cover">
        <div ref="menu" class="menu" :class="{ opened : isMenuOpened }">
          <img src="/images/elements/launchingsoon.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
  nav {
    z-index: 9005;
    width: 100dvw;
    height: fit-content;
    position: fixed;
    top: 0;
    left: 0;

    overflow: hidden;
  }

  .path_bar {
    width: 100%;
    height: fit-content;
    background-color: var(--c-t1-w1);
    backdrop-filter: blur(1rem);

    color: var(--c-p3);
    padding: 0 10px;
  }

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mobile_nav_space {
    width: 100%;
    height: 50px;
    background-color: var(--c-t1-p2);
    backdrop-filter: blur(1rem);

    display: flex;
    justify-content: space-between;
  }

  .title_space {
    width: fit-content;
    height: 100%;
    filter: drop-shadow(0px 0px 10px var(--c-t1-w1));

    display: flex;
    justify-content: start;
    align-items: center;
  }

  .title_space img {
    height: 100%;
    padding: 10px;
  }

  .title_space p {
    color: var(--c-w1);
    font-size: 32px;
    font-weight: bold;
  }

  .menu_hub {
    display: flex;
    align-items: center;
  }

  .profile {
    margin-right: 1rem;

    height: 100%;
    background-color: var();

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
  }

  .profile p {
    color: var(--c-w1);
    margin-right: 0.2rem;
  }

  .menu_button {
    height: 100%;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    cursor: pointer;
  }

  .menu_button p {
    color: var(--c-w1);
    margin-right: 0.2rem;
  }

  .menu_page {
    z-index: 9004;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    pointer-events: none;
    backdrop-filter: none;
    transition: backdrop-filter 1s ease;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }

  .menu_page.opened {
    pointer-events: all;
    backdrop-filter: blur(1rem);
  }

  .menu_space {
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    position: relative;
  }

  .menu_close_space {
    position: absolute;
    inset: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }

  .menu_cover {
    position: absolute;
    inset: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    padding: var(--space-2);
    pointer-events: none;
  }

  .menu {
    width: 100%;
    max-width: 640px;
    height: 30dvh;
    min-height: 200px;
    max-height: 400px;
    margin: 0 auto;
    border-radius: var(--space-2);
    background-color: var(--c-t1-w1);
    pointer-events: none;
    opacity: 0;
    transform: translateY(-50dvh) scale(0.5);
    transition: opacity 0.5s ease, transform 0.5s ease;

    padding: var(--space-2);
    color: var(--c-p1);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu.opened {
    pointer-events: all;
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .menu img {
    width: 100%;
    object-fit: contain;
  }
</style>