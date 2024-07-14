<script setup lang="ts">

</script>

<template>
  <v-card
    color="primary"
    variant="flat"
    class="border-radius border-thin"
  >
    <div>
        <v-card-text class="px-8">
          <div class="mb-4"></div>
          <div class="text-h2 font-weight-bold">FALL INTO HATE</div>
          <div class="my-2"></div>
          <div class="text-h3 font-weight-bold">HATE INTO LOVE</div>
          <div class="mb-4"></div>
<!--      <div-->
<!--        class="text-caption ga-1 text-break bg-white px-2  rounded-pill border-thin mx-auto flex-shrink-0 d-inline-block"-->
<!--      >-->
<!--        Powered by the-->
<!--        <div class="d-inline-block"><span class="font-weight-bold"> Hate</span><span class="font-weight-light"-->
<!--        >Matcher</span>™-->
<!--        </div>-->
<!--        world leading, patent pending, cutting edge hate matching technology.-->
<!--      </div>-->
<!--      <div class="mb-2"></div>-->
<!--      </div>-->
<!--      <div>-->
          <v-chip> Powered by the
            <div class="d-inline-block mx-1"> <span class="font-weight-bold"> Hate</span><span class="font-weight-light"
            >Matcher</span>™
            </div>
            <span> world leading, patent pending, cutting edge hate matching technology.</span>
          </v-chip>
        </v-card-text>
        </div>
      <v-card-item>
        <v-card-item>
          <v-btn variant="outlined" class="rounded-pill border-thin bg-white text-lg" to="/signup" >Start Finding Love</v-btn>
        </v-card-item>
      </v-card-item>
    <div class="mb-3"></div>
  </v-card>
</template>

<style scoped>
.border-radius {
  border-radius: 12px;
}
</style>
