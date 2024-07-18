<template>
    <div class="cursor"></div>
    <div class="cursor2"></div>
  <div class="content d-flex h-100 w-100 justify-center align-center">
    <div class="trigger-left">
    </div>
      <v-card class="bg-white w-50 h-75"></v-card>
    <div class="trigger-right">
    </div>
  </div>
</template>

<script lang="ts">

</script>

<style scoped>

trigger-left, trigger-right {
    width: 100%;
    height: 100%;
    position: fixed;
    background: black;
    position: absolute;
    z-index: 999;
}

trigger-left {
  left: 0;
}

trigger-right {
  right: 0;
}
.content {
  padding-top: 70px;
  padding-right: 80px;
  padding-left: 80px;
  padding-bottom: 55px;
  height: 100vh;
}

body {
    margin: 0;
    height: 100vh;
    display: grid;
    place-content: center;
    font-family: 'Bebas Neue';
}

h1 {
    font-size: 13em;
    cursor:pointer;
    line-height: 0;
}


.cursor, .cursor2, .hand {
    position: fixed;
    left: 0;
    border-radius: 50%;
    pointer-events: none;
    /* transition: transform .1s; */
}

.cursor{
    background: rgba(255, 214, 214, 0.0);
    top: 0;
    width: 40px;
    height: 40px;
    z-index: 10;
    /* border-radius: 1px; */
    border-style: solid;
    backdrop-filter: blur(10px);
    border-width: 1px;
    border-color: rgba(256, 256, 256, 1.0);
}

.cursor2 {
    background: rgba(255, 214, 214, 0.0);
    top: -8px;
    left: -8px;
    width: 16px;
    height: 16px;
    z-index: 11;
    /* border-radius: 1px; */
    border-style: solid;
    backdrop-filter: blur(10px);
    border-width: 1px;
    /* transition: transform .05s; */

}

.hand {
    background: rgb(155,0,255);
    top: 50%;
    width: 150px;
    height: 150px;
    z-index: 9999;
    display: grid;
    place-content: center;
    transform: rotate(45deg);
    opacity: 0;

    svg {
        width: 80px;
    }
}
</style>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import apiClient from "@/axiosConfig";
import { gsap } from 'gsap'

export default {
  mounted() {
  gsap.set('.cursor',{xPercent:-50, yPercent: -50})

  let cursor = document.querySelector('.cursor')
  let cursor2 = document.querySelector('.cursor2')
  let hand = document.querySelector('.hand')
  let title = document.querySelector('h1')

  let mouseX;
  let mouseY;

  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(cursor, 0.5, {x: mouseX, y:mouseY})
    gsap.to(cursor2, 0.2, {x: mouseX, y:mouseY})
  })

  // title.addEventListener('mouseenter', () => {
  //  gsap.to(hand, 1, {
  //       scale: 1,
  //       opacity: 1,
  //       top: '-75px',
  //       left: '-75px',
  //       rotate: 0,
  //       ease: Elastic.easeOut.config(1, 0.3)
  //   })
  // })

  // title.addEventListener('mousemove', () => {
  //   gsap.to(hand, 1, {
  //       x: mouseX,
  //       y: mouseY
  //   })
  // })

  // title.addEventListener('mouseleave', () => {
  //   gsap.to(hand, 0.2, {
  //       scale: 0,
  //       opacity: 0,
  //       top: '10',
  //       left: '40',
  //       rotate: 45,
  //   })
  // })
  },
};




</script>
