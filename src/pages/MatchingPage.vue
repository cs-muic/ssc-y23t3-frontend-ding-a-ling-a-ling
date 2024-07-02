<template>
  <v-card class="mx-auto" width="1000">
    <v-carousel>
      <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          cover
      ></v-carousel-item>

      <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
          cover
      ></v-carousel-item>

      <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
      ></v-carousel-item>
    </v-carousel>
  </v-card>
  <v-row class="d-flex">
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
  }),
  methods: {
    next () {
      this.onboarding = this.onboarding + 1 > this.length
          ? 1
          : this.onboarding + 1
    },
    prev () {
      this.onboarding = this.onboarding - 1 <= 0
          ? this.length
          : this.onboarding - 1
    },
  },
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


