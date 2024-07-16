<template>
  <div class="content over">
    <v-card
      color="primary"
      variant="flat"
      class="border-thin mb-5 align-center border-radius border-thin w-100 h-100 my-auto px-8 overflow-scroll"
      id="top"
    >
      <div>
        <v-card-item class="px-8 mb-4">
          <div class="mb-9"></div>
          <div class="text-h2 font-weight-bold text-center text-capitalize">Sign In</div>
          <div class="mb-4"></div>
          <div class="text-h5 font-weight-light text-center">Back for more?</div>
        </v-card-item>

        <SignInForm />

        <v-card-item class="px-8">
          <hr class="mb-5 opacity-50"/>
          <div class="w-100 d-flex justify-center ga-2">
            <div class="text-subtitle-1 font-weight-light text-center my-auto">Don't have an account?</div>
            <v-icon class="my-auto">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                   fill="#e8eaed"
              >
                <path
                  d="M727-440H160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h567l-55-56q-12-12-11.5-28t12.5-28q12-11 28.5-11.5T729-632l123 124q12 12 12 28t-12 28L728-328q-11 11-27.5 11T672-328q-12-12-12-28.5t12-28.5l55-55Z"
                />
              </svg>
            </v-icon>
            <v-btn variant="flat" class="rounded-pill border-thin text-caption px-2 py-1" to="/signup">Sign Up
            </v-btn>
          </div>
          <div class="mb-4"></div>
        </v-card-item>      </div>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import SignInForm from '@/components/authorization/SignInForm.vue'
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
  padding-bottom: 55px;
  height: 100vh;

}

.border-radius {
  border-radius: 16px;
}

#top {
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}

#annotation {
  border-color: rgba(255, 255, 255, 0.5);
  border-width: 0.5px;
}
</style>
