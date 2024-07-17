<script>

export default{
  props: ["index", "visibleSlide"],

}
</script>

<template>
  <div v-show="visibleSlide === index" carousel="carousel-slide"></div>
</template>

<style scoped>

</style>
