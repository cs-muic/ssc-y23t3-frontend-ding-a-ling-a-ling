<template>
  <div class="content d-flex justify-center align-center">
    <HeroHomeCard/>
<!--    TODO: Add a loop to display onboard cards-->

<!--    <HeroHomeCard/>-->
  </div>
</template>

<script>
import apiClient from '@/axiosConfig'
import { ref, onMounted } from 'vue';
import { router } from '@/router'
import { useAuthStore } from '@/stores';

export default {
  setup() {
  },
}


</script>

<style scoped>
 .content {
   padding-top: 70px;
   padding-right: 80px;
   padding-left: 80px;
   padding-bottom: 55px;
   height: 100vh;
 }

</style>
