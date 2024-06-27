<template>
  <div class="login-page">
    <div class="login-card">
      <h1 class="header-color">Welcome to Our Dating App!</h1>
      <form @submit.prevent="handleLogin" class="login-form">

        <v-form @submit.prevent="handleLogin">
          <v-text-field
              bg-color="white"
              v-model="username"
              label="Username"
              required
              class="login-form"
          ></v-text-field>
<!--          <v-btn class="login-button" type="submit" block>Submit</v-btn>-->
        </v-form>

<!--        <input v-model="username" type="text" placeholder="Username" required>-->
<!--        <input v-model="password" type="password" placeholder="Password" required>-->
<!--        <button type="submit" class="login-button">Login</button>-->

        <v-form @submit.prevent="handleLogin">
          <v-text-field
              bg-color="white"
              v-model="password"
              label="Password"
              type="password"
              required
              class="login-form"
          ></v-text-field>
          <!--          <v-btn class="login-button" type="submit" block>Submit</v-btn>-->
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


export default {
  name: 'Login',
  setup() {
    const username = ref('');
    const password = ref('');
    const router = useRouter();

    const handleLogin = () => {
      console.log(`Login attempt with email: ${password.value} and password: ${username.value}`);
      // Add your routing or authentication logic here
      router.push('/matching');
    };

    return { username, password, handleLogin };
  }
}
</script>


<style scoped>



.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8d2a9; /* Example background color */
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
  flex-direction: column; /* Stacks the children (input and button) vertically */
  width: 100%;
}

input[type="text"], input[type="password"] {
  margin-bottom: 10px; /* Adds space between the inputs and the button */
  padding: 15px;
  color: #680037;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%; /* Ensures inputs take full width of the form */
}

.login-button {
  background-color: #810046; /* Red color for the button */
  color: white;
  border: none;
  padding: 12px;
  cursor: pointer;
  border-radius: 4px;
}

.login-button:hover {
  background-color: #cc537f; /* Darker shade of red on hover */
}

.header-color {
  color: #ffffff; /* Custom color for the header */
  margin-bottom: 30px;

}
</style>
