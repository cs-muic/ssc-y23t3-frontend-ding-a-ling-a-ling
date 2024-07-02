<template>
  <v-card class="mx-auto" width="1000">
    <v-window
        v-model="onboarding"
        reverse
        show-arrows
    >
      <v-window-item
          v-for="n in length"
          :key="`card-${n}`"
      >
        <v-img
            color="surface-variant"
            height="500"
            src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
            cover
        >
        </v-img>

      </v-window-item>
    </v-window>
  </v-card>
  <v-row class="justify-end">
    <v-card-text>
      <div class="matching">
        <h1>Welcome to the Matching Page</h1>
        <router-link to="/edit-profile" class="button">Edit Profile</router-link>
      </div>
    </v-card-text>
    <v-btn
        class="mx-2"
        color="pink"
        size="small"
        dark
        fab
    >
      <v-icon dark>
        mdi-heart
      </v-icon>
    </v-btn>
  </v-row>
</template>


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


