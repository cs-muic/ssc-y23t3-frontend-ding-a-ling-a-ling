<template>
  <SignUpHeader/>
  <div class="content">
    <v-card
      color="primary"
      variant="flat"
      class="border-radius border-thin mb-5"
    >
      <div>
        <v-card-item class="px-8">
          <div class="mb-12"></div>
          <div class="text-h2 font-weight-bold text-center text-capitalize">Sign Up</div>

          <div class="mb-4"></div>
          <div class="text-h5 font-weight-light text-center">A step towards true love</div>
        </v-card-item>
        <v-card-item class="px-8">
          <div class="mb-5"></div>
          <hr class="mb-5 opacity-50"/>
          <div class="w-100 d-flex justify-center ga-2">
            <div class="text-subtitle-1 font-weight-light text-center my-auto">Already a user?</div>
            <v-icon></v-icon>
            <v-btn variant="flat" class="rounded-pill border-thin text-caption px-1 py-1" to="/signin">Sign In
            </v-btn>
          </div>

          <div class="mb-4"></div>
        </v-card-item>
      </div>
    </v-card>


    <SignUpForm/>
  </div>
</template>

<script lang="ts" setup>
import SignUpForm from '@/components/SignUpForm.vue'
import SignUpHeader from '@/components/SignUpHeader.vue'
</script>

<style scoped>

hr {
  border: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.5);
}
.content {
  padding-top: 70px;
  padding-right: 80px;
  padding-left: 80px;
}

.border-radius {
  border-radius: 16px;
}

#annotation {
  border-color: rgba(255, 255, 255, 0.5);
  border-width: 0.5px;
}
</style>

