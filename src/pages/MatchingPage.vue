<template>
  <section class="container">
    <div class="matching">
      <h1>Welcome to the Matching Page</h1>
      <router-link to="/edit-profile" class="button">Edit Profile</router-link>
    </div>
    <v-window
        v-model="onboarding"
        reverse
        show-arrows
    >
      <v-window-item
          v-for="n in length"
          :key="`card-${n}`"
      >
        <v-card
            class="d-flex align-center justify-center ma-2"
            elevation="2"
            height="200"
        >
          <h1
              class="text-h2"
          >
            Slide {{ n }}
          </h1>
        </v-card>
      </v-window-item>
    </v-window>
  </section>

</template>

<script setup>
import { ref } from 'vue'

const length = ref(3)
const onboarding = ref(0)
</script>


<script>
import { useRouter } from 'vue-router';


export default {
  name: 'MatchingPage',
  setup() {
    const router = useRouter();

    function goToEditProfile() {
      router.push('/edit-profile');
    }

    return { goToEditProfile };
  },
  data: () => ({
    length: 3,
    onboarding: 0,
  })
}
</script>




<style scoped>
.matching {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

.button {
  padding: 10px 20px;
  margin: 10px;
  background-color: #FF0000FF;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
}

</style>


