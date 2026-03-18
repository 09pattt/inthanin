<script setup>
import {onMounted, ref} from "vue"
import {useRoute} from "vue-router"

const route = useRoute()

const emit = defineEmits(["updateHeight"])
const navbar = ref(null)

onMounted(() => {
  if (navbar.value) {
    emit('updateHeight', navbar.value.offsetHeight);
  }
})
</script>

<template>
  <nav ref="navbar">
    <div id="mobile_nav_space">
      <div id="title_space">
        <img src="/images/logo/inthanin.png" alt="">
        <p>INTHANIN</p>
      </div>
      <div id="menu_hub">
        <div id="profile">
          <p>เข้าสู่ระบบ</p>
          <img src="/images/icon/login.svg" alt="">
        </div>
        <div id="menu_button">
          <p>เมนู</p>
          <img src="/images/icon/stack.svg" alt="">
        </div>
      </div>
    </div>

    <div id="path_bar">
      <p>
        คณะสีอินทนิล >>
        <strong>{{ route.meta.title }}</strong>
      </p>
    </div>
  </nav>
</template>



<style scoped>
  nav {
    z-index: 9000;
    width: 100dvw;
    height: fit-content;
    position: fixed;
    top: 0;
    left: 0;

    overflow: hidden;
  }

  #path_bar {
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

  #mobile_nav_space {
    width: 100%;
    height: 50px;
    background-color: var(--c-t1-p2);
    backdrop-filter: blur(1rem);

    display: flex;
    justify-content: space-between;
  }

  #title_space {
    width: fit-content;
    height: 100%;
    filter: drop-shadow(0px 0px 10px var(--c-t1-w1));

    display: flex;
    justify-content: start;
    align-items: center;
  }

  #title_space img {
    height: 100%;
    padding: 10px;
  }

  #title_space p {
    color: var(--c-w1);
    font-size: 32px;
    font-weight: bold;
  }

  #menu_hub {
    display: flex;
    align-items: center;
  }

  #profile {
    margin-right: 1rem;

    height: 100%;
    background-color: var();

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
  }

  #profile p {
    color: var(--c-w1);
    margin-right: 0.2rem;
  }

  #menu_button {
    height: 100%;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  #menu_button p {
    color: var(--c-w1);
    margin-right: 0.2rem;
  }
</style>