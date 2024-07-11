<template>
  <div class="matching">
    <h1>Welcome to the Matching Page</h1>
    <router-link to="/edit-profile" class="button">Edit Profile</router-link>
    <router-link to="/imgTest" class="nav-button">ImageTest</router-link>
  </div>


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
  }
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


