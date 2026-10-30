<script setup>
import {onMounted, ref} from "vue"
import {useRoute} from "vue-router"
import { useElementsStore } from "@/stores/elements.ts";
import NavbarBlankSpace from "@/components/Template/NavbarBlankSpace.vue";
import ContentFrame from "@/components/Template/ContentFrame.vue";

const route = useRoute()
const store = useElementsStore()

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
    store.Navbar = navbar
    navbarHeight.value = navbar.value.offsetHeight
  }
})

</script>

<template>
  <nav class="navbar" ref="navbar" @click="toggleMenu">
    <div class="nav__space">
      <div class="nav__title">
        <!--<router-link to="/home" class="hover__no-bg nav__title_link"></router-link>-->
        <img src="/images/logo/inthanin.png" alt="">
        <p>Inthanin</p>
      </div>
      <div class="nav__menu">
        <div class="nav__menu_button">
          <p>{{ isMenuOpened ? 'ปิด' : 'เมนู' }}</p>
          <img src="/images/icon/menu.svg" alt="">
        </div>
      </div>
    </div>

    <div class="nav__path_bar">
      <p>
        คณะสีอินทนิล /
        <strong>{{ route.meta.title }}</strong>
      </p>
    </div>
  </nav>

  <div class="menu" ref="menu_page" :class="{ opened : isMenuOpened }">
    <NavbarBlankSpace/>
    <div @click="isMenuOpened = false" class="menu__space">
      <div class="menu__content_wrapper">
        <ContentFrame pointer-events="none" padding="var(--space-2)">
          <div class="menu__content" ref="menu" :class="{ opened : isMenuOpened }">
            <h1 class="menu__header">เมนู</h1>
            <div class="menu__link" :class="{ active: isMenuOpened }" style="--delay: 300ms;">
              <router-link to="/home" class="hover__no-bg menu__link_router"></router-link>
              <p>หน้าหลัก</p>
            </div>
            <div class="menu__link" :class="{ active: isMenuOpened }" style="--delay: 400ms;">
              <router-link to="/merchandise" class="hover__no-bg menu__link_router"></router-link>
              <p>ร้านค้า</p>
            </div>
            <div class="menu__link" :class="{ active: isMenuOpened }" style="--delay: 500ms;">
              <a href="https://drive.google.com/drive/folders/1YH6XyQYhZdMSr1RW4EpAWEqq9VLekhzx?fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJmZGlkFlEN2n5n_E4B7UT5onBDwi9bW57kff1zcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafqb4Jchs9cVRy4gvBWtymQZtvkU1GDTSVgOIP0NkcpvHUUzAey-d7TBmh4uQ_aem_Z06UrFYG6baNKAMn1Qn9Ag"
                 class="hover__no-bg menu__link_router"
                 target="_blank"></a>
              <p>ภาพวันเตรียม</p>
            </div>
            <div class="menu__link" :class="{ active: isMenuOpened }" style="--delay: 600ms;">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfOeNkDUpoSWVAqh9u9sp4ZURc7Hc1lOkp5H1pC29SXX2k9eg/viewform?pli=1"
                 class="hover__no-bg menu__link_router"
                 target="_blank"></a>
              <p>รายงานปัญหา</p>
            </div>
          </div>
        </ContentFrame>
      </div>
    </div>
  </div>
</template>



<style scoped>
  .navbar {
    z-index: 9005;
    width: 100dvw;
    height: fit-content;
    position: fixed;
    top: 0;
    left: 0;

    overflow: hidden;
  }

  .navbar .nav__space {
    width: 100%;
    height: 50px;
    background-color: var(--c-t1-p2);
    backdrop-filter: blur(1rem);

    display: flex;
    justify-content: space-between;
  }

  .navbar .nav__title {
    width: fit-content;
    height: 100%;
    /*filter: drop-shadow(0px 0px 10px var(--c-t1-w1));*/
    position: relative;

    display: flex;
    justify-content: start;
    align-items: center;
  }

  .navbar .nav__title_link {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .navbar .nav__title img {
    height: 100%;
    padding: 10px;
  }

  .navbar .nav__title p {
    color: var(--c-w1);
    font-size: 32px;
    font-weight: bold;
  }

  .navbar .nav__menu {
    display: flex;
    align-items: center;
  }

  .navbar .nav__menu_button {
    height: 100%;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    cursor: pointer;
  }

  .navbar .nav__menu_button p {
    color: var(--c-w1);
    margin-right: 0.2rem;
  }

  .navbar .nav__path_bar {
    width: 100%;
    height: fit-content;
    background-color: var(--c-t1-w1);
    backdrop-filter: blur(1rem);

    color: var(--c-p3);
    padding: 0 10px;
  }

  .navbar .nav__path_bar p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }



  .menu {
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

  .menu.opened {
    pointer-events: all;
    backdrop-filter: blur(1rem) brightness(0.5);
  }

  .menu .menu__space {
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    position: relative;

    overflow: hidden;
  }

  .menu .menu__content_wrapper {
    position: absolute;
    inset: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .menu .menu__content {
    width: 100%;
    height: fit-content;
    min-height: 200px;
    margin: 0 auto;
    pointer-events: none;
    transform: translateY(-100%);
    transition: transform 0.5s ease-in-out;

    color: var(--c-p1);
  }

  .menu .menu__content.opened {
    pointer-events: all;
    transform: translateY(0);
  }

  .menu .menu__content img {
    width: 100%;
    height: 100%;
    padding: 10%;
    object-fit: contain;
  }

  .menu .menu__header {
    color: var(--c-w1);
    font-size: 4rem;
    filter: drop-shadow(0px 0px 10px var(--c-t1-w1));
  }

  .menu .menu__link {
    width: 100%;
    height: fit-content;
    position: relative;
    transition: all 0.5s ease;
    color: var(--c-t1-w1);
    opacity: 0;
  }

  .menu .menu__link.active {
    animation: slideDown 0.5s ease forwards;
    animation-delay: var(--delay);
  }

  .menu .menu__link:hover {
    transition: all 0.25s ease;
    color: var(--c-bl1);
    background-color: var(--c-w3);
    padding-left: 0.5rem;
  }

  .menu .menu__link_router {
    position: absolute;
    inset: 0;
  }

  .menu .menu__link p {
    font-size: 1.5rem;
  }
</style>