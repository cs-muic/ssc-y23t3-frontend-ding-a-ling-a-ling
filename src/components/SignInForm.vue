<template>
  <v-form @submit.prevent="handleSignIn">
      <div>
        <v-card-item class="px-8">

          <v-row dense
          >
            <v-col cols="12" md="6">
              <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
            </v-col>
          </v-row>
          <div class="mb-5"></div>
          <div class="d-flex mb-1">
            <v-btn variant="flat" height="50" class="rounded-pill mx-auto flex font-weight-regular border-thin text-h5 px-8" type="submit"
            > Sign In
            </v-btn>
          </div>
<!--          <div class="mb-8"></div>-->
        </v-card-item>
      </div>
  </v-form>
</template>

<script>
import apiClient from '@/axiosConfig' // Import the Axios configuration
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter();
    const email = ref('');
    const password = ref('');

    const handleSignIn = async () => {
      try {
        const formData = new FormData();
        formData.append('email', email.value);
        formData.append('password', password.value);

        const reply = await apiClient.post('/signin', formData);

        // Destructure the token and reply from the response data
        const { token, response } = reply.data;

        if (token) {
          localStorage.setItem('token', token); // Store the token
          useRouter
          console.log("token in use" + localStorage.getItem('token'));
          apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Set default header
          console.log(response)
          await router.push('/index'); // Redirect to matching page
        } else {
          console.error('No token received from server');
        }
      } catch (error) {
        console.error('Login failed:', error.response ? error.response.data : error);
      }
    };
    return { email, password, handleSignIn };
  }
}
</script>

<style scoped>
#btm {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}
</style>

