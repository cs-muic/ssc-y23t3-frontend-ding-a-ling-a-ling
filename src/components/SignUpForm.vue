<template>
  <v-container>
    <v-form @submit.prevent="handleSignUp">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="firstName" label="First Name" required></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="lastName" label="Last Name" required></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="username" label="Username" required></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="address" label="Address"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="phoneNumber" label="Phone Number"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="age" label="Age" type="number"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="height" label="Height" type="number"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="displayName" label="Display Name"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea v-model="biography" label="Biography"></v-textarea>
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="profilePicture" label="Profile Picture URL"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="contact" label="Contact Information"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-select
            v-model="dislikes"
            :items="dislikeOptions"
            label="Dislikes"
            multiple
          ></v-select>
        </v-col>
        <v-col cols="12">
          <v-select
            v-model="preferences"
            :items="preferenceOptions"
            label="Preferences"
            multiple
          ></v-select>
        </v-col>
        <v-col cols="12">
          <v-btn type="submit" color="primary">Sign Up</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import apiClient from '@/axiosConfig'; // Import the Axios configuration
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'SignUp',
  setup() {
    const router = useRouter();
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const password = ref('');
    const username = ref('');
    const address = ref('');
    const phoneNumber = ref('');
    const age = ref(null);
    const height = ref(null);
    const displayName = ref('');
    const profilePicture = ref('');
    const contact = ref('');
    const biography = ref('');
    const dislikes = ref([]);
    const preferences = ref([]);

    const dislikeOptions = ['Option 1', 'Option 2', 'Option 3'];
    const preferenceOptions = ['Option A', 'Option B', 'Option C'];

    const handleSignUp = async () => {
      try {
        const response = await apiClient.post('/signup', {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          password: password.value,
          username: username.value,
          address: address.value,
          phoneNumber: phoneNumber.value,
          age: age.value,
          height: height.value,
          displayName: displayName.value,
          profilePicture: profilePicture.value,
          contact: contact.value,
          biography: biography.value,
          dislikes: dislikes.value,
          preferences: preferences.value
        });
        console.log('Sign Up response:', response.data); // Logging response data
        // grabbing the token back from the server (which will be in local storage)
        const { token } = response.data;
        if (token) {
          localStorage.setItem('token', token); // Store the token
          apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Set default header
          console.log('Signed up successfully');
          await router.push('/matching'); // Redirect to matching page
        } else {
          console.error('No token received from server');
          alert('Failed to sign up, no token received');
        }
      } catch (error) {
        console.error('Signup failed:', error.response ? error.response.data : error);
        alert(`Signup failed: ${error.response ? error.response.data.message : "Network or server error"}`);
      }
    };

    return {
      firstName, lastName, email, password, address, profilePicture,
      phoneNumber, age, height, displayName, contact, biography,
      dislikes, preferences,
      username,
      handleSignUp,
      dislikeOptions,
      preferenceOptions
    };
  }
};
</script>
