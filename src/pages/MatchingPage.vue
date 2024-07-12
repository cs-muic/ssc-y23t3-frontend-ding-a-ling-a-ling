<template>
  <div class="matching">
    <h1>Welcome to the Matching Page</h1>
    <router-link to="/edit-profile" class="button">Edit Profile</router-link>
  </div>
  <button style="font-size:24px" @click="swipeRight()">Like <i class="fa fa-heart"></i></button>
  <router-link to="/mymatches" class="button">See My Matches</router-link>


</template>




<script>
import {useRouter} from 'vue-router';
import apiClient from "@/axiosConfig";
import VueTinder from 'vue-tinder';

export default {
  name: 'Matching',
  components: {
    VueTinder
  },
  data(){
    return{
      user: "",
      noped: new Set(),
      matched: new Set(),
      users: [
      ]
    }
  },
  async created(){
    await this.nextUser()
  },
  methods:{
    async nextUser(){
      this.user = await fetch('baseURL/users')
          .then(res => res.json())
          .then(data => this.users = data)
          .catch(err => console.log(err.message));
      //actually connect it to db and check for format
  },
    async swipeRight(){
      //send it database as well
      try {
        const response = await apiClient.post('baseURL', this.user);
        console.log('Liked response:', response.data); // Logging response data
        // grabbing the token back from the server (which will be in local storage)
        const { token } = response.data;
      } catch (error) {
        console.error('liked failed:', error.response ? error.response.data : error);
        alert(`liked failed: ${error.response ? error.response.data.message : "Network or server error"}`);
      }
    },
    async swipeLeft(){
      //send it database as well, also double check how to handle so we dont get duplicate users
      await this.nextUser()
    },
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

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>


