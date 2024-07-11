<template>
  <div class="matching">
    <h1>Welcome to the Matching Page</h1>
    <router-link to="/edit-profile" class="button">Edit Profile</router-link>
    <div v-if="users.length">
      <div v-for="user in users" :key="user.id" class="user">
        <router-link :to="{ name: 'Matches', params: { id: user.id }}">
          <h2>
            {{user.displayName}}
          </h2>
        </router-link>
      </div>
    </div>
    <div v-else>
      Loading Page
    </div>
  </div>

</template>




<script>
import { useRouter } from 'vue-router';
import apiClient from "@/axiosConfig";
import router from "@/router";


export default {
  name: 'Matching',
  data(){
    return{
      users: [
      ]
    }
  },
  mounted(){
    fetch('http://localhost:8000/users')
        .then(res => res.json())
        .then(data => this.users = data)
        .catch(err => console.log(err.message))
  },
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

.user{
  padding: 10px 20px;
  margin: 10px;
  background-color: #FF0000FF;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
}

</style>


