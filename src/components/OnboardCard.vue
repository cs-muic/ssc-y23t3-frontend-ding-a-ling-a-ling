<script setup lang="ts">

</script>

<template>
  <v-card
    color="primary"
    variant="flat"
    class="border-radius border-thin"
  >
    <div>
      <v-card-item class="px-8">
        <div class="mb-12"></div>
        <div class="text-h2 font-weight-bold text-center text-capitalize">Fall Into Hate</div>
        <div class="my-2"></div>
        <div class="text-h2 font-weight-bold text-center">Hate Into Love</div>
        <div class="mb-4"></div>
        <div class="text-h5 font-weight-light text-center">Helping lovers find soulmates like never before.</div>
        <div class="mb-5"></div>
        <div class="w-100 d-flex">
          <v-btn variant="flat" class="rounded-pill mx-auto border-thin text-lg" to="/signup">Start Finding Love
          </v-btn>
        </div>


        <div class="content w-auto"></div>
        <div class="w-100 d-flex">
          <v-chip class="mx-auto" id="annotation"> Powered by the
            <div class="d-inline-block mx-1"><span class="font-weight-bold "> Hate</span><span class="font-weight-light"
            >Matcher</span>™
            </div>
            <span> world leading, patent pending, cutting edge hate matching technology.</span>
          </v-chip>
        </div>

        <div class="mb-7"></div>
      </v-card-item>
    </div>
  </v-card>
</template>

<style scoped>
.border-radius {
  border-radius: 16px;
}

#annotation {
  border-color: rgba(255, 255, 255, 0.5);
  border-width: 0.5px;
}

.content {
  height: 45vh;
}
</style>
