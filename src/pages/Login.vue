<template>
  <div class="login-page">
    <div class="login-card">
      <h1 class="header-color">Welcome to Our Dating App!</h1>
      <form @submit.prevent="loginUser">
        <v-text-field
            bg-color="white"
            v-model="email"
            label="Email"
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
import apiClient from '@/axiosConfig'; // Import the Axios configuration
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  name: 'Login',
  setup() {
    const router = useRouter();
    const email = ref('');
    const password = ref('');

    const loginUser = async () => {
      try {
        const response = await apiClient.post('/signin', {
          email: email.value,
          password: password.value
        });
        const { token } = response.data;
        if (token) {
          localStorage.setItem('token', token); // Store the token
          console.log("token in use" + localStorage.getItem('token'));
          apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Set default header
          console.log('Logged in successfully')
          await router.push('/matching'); // Redirect to matching page
        } else {
          console.error('No token received from server');
          alert('Failed to log in, no token received');
        }
      } catch (error) {
        console.error('Login failed:', error.response ? error.response.data : error);
        alert(`Login failed: ${error.response ? error.response.data.message : "Network or server error"}`);
      }
    };

    return { email, password, loginUser };
  }
}

// use apiClient.get to get the resources

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
}
.login-form {
  display: flex;
  flex-direction: column;
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
