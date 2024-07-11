<template>
  <div class="matching">
    <h1>Welcome to the Matching Page</h1>
    <router-link to="/edit-profile" class="button">Edit Profile</router-link>
    <!--<div v-if="users.length">
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
    </div>-->
  </div>
  <button style="font-size:24px" @click="swipeRight()">Like <i class="fa fa-heart"></i></button>
  

</template>




<script>
import {useRouter} from 'vue-router';

export default {
  name: 'Matching',
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
      this.user = await fetch('baseURL/users') //actually connect it to db and check for format
          .then(res => res.json())
          .then(data => this.users = data)
          .catch(err => console.log(err.message));
  },
    async swipeRight(){
      this.matched.push(this.user)
      //send it database as well
      await this.nextUser()
    },
    async swipeLeft(){
      this.noped.push(this.user)
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


