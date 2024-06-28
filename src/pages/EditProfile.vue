<template>
  <div class="app-container">
  <v-card >
  <div class="edit-profile">
    <h1>Edit Profile</h1>
      <v-form @submit.prevent="handleUpdateProfile">
        <!-- Username -->
        <input class="box" v-model="user.username" type="text" placeholder="Username" required>

        <!-- Email -->
        <input class="box" v-model="user.email" type="text" placeholder="Email" required>

        <!-- First Name -->
        <input class="box" v-model="user.firstname" type="text" placeholder="First Name" required>

        <!-- Last Name -->
        <input class="box"  v-model="user.lastname" type="text" placeholder="Last Name" required>

        <!-- Address -->
        <input class="box"  v-model="user.address" type="text" placeholder="Address">

        <!-- Password (Be cautious about how you handle passwords) -->
        <input class="box"  v-model="user.password" type="password" placeholder="Password" required>

        <!-- Phone Number -->
        <input class="box"  v-model="user.phoneNumber" type="tel" placeholder="Phone Number">

        <!-- Age -->
        <input class="box"  v-model.number="user.age" type="number" placeholder="Age">

        <!-- Height in CM -->
        <input class="box"  v-model.number="user.height" type="number" placeholder="Height in CM">

        <!-- Display Name -->
        <input class="box"  v-model="user.displayName" type="text" placeholder="Display Name">

        <!-- Profile Picture URL -->
        <input class="box" v-model="user.profilePicture" type="text" placeholder="Profile Picture URL">

        <input class="box" v-model="user.contact" type="text" placeholder="Contact Information">

        <!-- Biography -->
        <input class="box" v-model="user.biography" placeholder="Biography"></input>

        <!-- Preferences -->
<!--        <label class="box" for="preferences">Preferences:</label>-->
        <input class="box" type="text" v-model="user.preferences" placeholder="Preferences" >

        <!-- Dislikes -->
<!--        <label for="dislikes">Dislikes:</label>-->
        <input class="box" type="text" v-model="user.dislikes" placeholder="Dislikes">

        <!-- Submit Button -->
        <button class="button" type="submit">Update Profile</button>

      </v-form>
  <div v-if="user">
    <p>{{reply}}</p>
    <!-- Display other user details -->
  </div>

  </div>
  </v-card>
  </div>
</template>


<style scoped>
.edit-profile {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #EDE5E0;
  border-radius: 15px;
}

h1 {
  color: #dc6565;
}
.box {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  color: #000000;
  box-sizing: border-box;
  text-decoration-color: #000000;
  border:3px solid rgb(220, 101, 101);
  border-radius:5px
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

<script>
  import UserService from '@/router/GetService';

export default {
  data() {
    return {
      user: {
        username: '',
        email: '',
        firstname: '',
        lastname: '',
        address: '',
        password: '',
        phoneNumber: '',
        age: 0,
        height: 0.0,
        displayName: '',
        profilePicture: '',
        biography: '',
        preferences: '',
        dislikes: '',
        contact: '',
      },
      reply: null
    };
  },
  methods: {
    handleUpdateProfile() {
      UserService.updateUser(this.user).then(response => {
        this.reply = response.data;
      }).catch(error => {
        console.error('Error fetching user:', error);
      });
    }
  }
};

</script>
