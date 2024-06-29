<template>
  <div class="login-page">
    <div class="login-card">
      <h1 class="header-color">Welcome to Our Dating App!</h1>
      <form @submit.prevent="validLogin" class="login-form">
        <v-form @submit.prevent="validLogin">
          <v-text-field
              bg-color="white"
              v-model="profile"
              label="Username"
              required
              class="login-form"
          ></v-text-field>
          <v-text-field
              bg-color="white"
              v-model="password"
              label="Password"
              type="password"
              required
              class="login-form"
          ></v-text-field>
        </v-form>
        <v-btn
            type="submit"
            height="50"
            min-width="160"
            class="login-button"
        >
          Login
        </v-btn>
      </form>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

import UserService from '@/router/GetService';

export default {
  name: 'Login',

  data() {
    return {
      profile: '',
      password: '',
      router: useRouter(),
    };
  },

  methods: {

    validLogin() {
      // get profile because we want user to input their username and password
      UserService.getProfile(this.profile, this.password)
          .then((response) => {
            console.log(response);
            if (response.data) {
              this.router.push('/matching');
            } else {
              console.log('Invalid login');
            }
          })
          .catch((error) => {
            console.log(error);
          });
    }
  }
}

</script>


<style scoped>

.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8d2a9;
}

.login-card {
  padding: 30px;
  background-color: #c35a5a;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 60%;
}

.login-form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

input[type="text"], input[type="password"] {
  margin-bottom: 10px;
  padding: 15px;
  color: #680037;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

.login-button {
  background-color: #810046;
  color: white;
  border: none;
  padding: 12px;
  cursor: pointer;
  border-radius: 4px;
}

.login-button:hover {
  background-color: #cc537f;
}

.header-color {
  color: #ffffff;
  margin-bottom: 30px;

}
</style>
