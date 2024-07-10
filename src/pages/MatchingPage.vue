<template>
  <div class="matching">
    <v-btn id="Next" type="button" @click="goNext" class="float-right btn btn-danger">
      Next
    </v-btn>
    <h1>Welcome to the Matching Page</h1>
    <router-link to="/edit-profile" class="button">Edit Profile</router-link>
  </div>
  <div class="profile" v-for="(user, index) in this.users" :key ="index"
       @click="setProfile(index)"
  >
    <h2>{{user.displayName}}</h2>
    <h2>{{user.biography}}</h2>
  </div>
  <Profile v-if="active" :profile="activeProfile" @close="closeProfile">

  </Profile>

</template>




<script>
import { useRouter } from 'vue-router';
import apiClient from "@/axiosConfig";
import router from "@/router";


let i = -1;
let user = "";

export default {
  name: 'users',
  data(){
    return{
      active: false,
      activeProfile: {},
      users: [
        {
          id: 1,
          email: '',
          address: '',
          phoneNumber: '11',
          age: '18',
          height: '178',
          displayName: 'Flame Author',
          profilePicture: '',
          contact: '',
          biography: '',
          preferences: new Set(),
          dislikes: new Set()
        },
        {
          id: 2,
          email: '',
          address: '',
          phoneNumber: '',
          age: '36',
          height: '162',
          displayName: 'Sindy Clasue',
          profilePicture: '',
          contact: '',
          biography: '',
          preferences: new Set(),
          dislikes: new Set()
        },
        {
          id: 3,
          email: '',
          address: '',
          phoneNumber: '',
          age: '18',
          height: '178',
          displayName: 'Austin Author',
          profilePicture: '',
          contact: '',
          biography: '',
          preferences: new Set(),
          dislikes: new Set()
        }
      ]
    }
  },
  setup() {
    const router = useRouter();

    function goToEditProfile() {
      router.push('/edit-profile');
    }

    return { goToEditProfile };
  },
  mounted(){
    this.getUsers;
  },
  methods:{
    loadUser(){
      fetch("API_BASE_URL").then(({data}) => (this.users = data.data))
          .catch(error => console.log(error.message))
    },
    setProfile(index){
      this.activeProfile=this.users[index],
      this.active=true
    },
    tester(){
      this.users = mockUserList
    },
    next_user(){
      this.tester()
      i=(i+1)%(this.users.length);
      user = this.users[i];
      console.log(user)
      apiClient.post("/matching/"+user.id, {
        firstName: user.firstName.value,
        lastName: user.lastName.value,
        email: user.email.value,
        password: user.password.value,
        username: user.username.value,
        address: user.address.value,
        phoneNumber: user.phoneNumber.value,
        age: user.age.value,
        height: user.height.value,
        displayName: user.displayName.value,
        profilePicture: user.profilePicture.value,
        contact: user.contact.value,
        biography: user.biography.value,
        dislikes: user.dislikes.value,
        preferences: user.preferences.value
      }).then(response => console.log(response)).catch(error => console.log(error.message))
    },
    goNext(){
      this.next_user();
      router.push('/edit-profile' + user.id);
    },
    closeProfile(){
      this.active = false;
    },
    like_user(){

    }
    //need to make an api call where liking stores it there

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


