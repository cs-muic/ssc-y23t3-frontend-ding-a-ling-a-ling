<template>
  <v-col class="mx-auto" cols="12" sm="8" md="8" lg="8" xl="8"
  >
    <v-card
        color="red-lighten-1"
        variant="flat"
        class="mb-2"
    >
      <v-card-title class="text-h4 mt-3">Sign Up</v-card-title>
      <v-card-text>The first step to finding the love of your life.</v-card-text>
      <div class="mb-3"></div>
    </v-card>

    <form @submit.prevent="handleSignUp">
      <v-card
          color="red-darken-1"
          variant="outlined"
          class="mb-2"
      >

        <v-card-item>
          <div class="text-h6">Account Details</div>
        </v-card-item>
        <v-card-item>
          <v-row
              class="d-flex flex-row justify-space-between"
          >
            <v-card-item class="flex-fill">
              <v-text-field v-model="username" type="text" placeholder="Username" required></v-text-field>
            </v-card-item>
            <div class="px-1"></div>
            <v-card-item class="flex-fill">
              <v-text-field v-model="email" type="text" placeholder="Email" required></v-text-field>
            </v-card-item>
          </v-row>
        </v-card-item>
        <v-card-item>
          <v-text-field v-model="password" type="password" placeholder="Password" required></v-text-field>
        </v-card-item>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-item>
          <div class="text-h6">Profile Details</div>
        </v-card-item>
        <v-card-item>
          <v-text-field v-model="firstName" type="text" placeholder="First Name" required></v-text-field>
        </v-card-item>
        <v-card-item>
          <v-text-field v-model="address" type="text" placeholder="Address" required></v-text-field>
        </v-card-item>
        <v-card-item>
          <v-text-field v-model="lastName" type="text" placeholder="Last Name" required></v-text-field>
        </v-card-item>

        <v-card-item class="my-5 ">
          <div class="mx-auto d-flex flex-row">
            <div class="mx-5">
              <v-avatar color="red-lighten-2" size="100">
                <v-icon size="80" color="red-lighten-4" icon="mdi-account-circle"></v-icon>
              </v-avatar>
            </div>
            <v-col class="flex-0-1">
              <v-file-input
                  v-model="profilePicture"
                  accept="image/png, image/jpeg, image/bmp"
                  label="Profile Picture"
                  placeholder="Upload Profile Picture"
                  prepend-icon="mdi-camera"
              ></v-file-input>
            </v-col>
          </div>
        </v-card-item>

        <v-card-item>

        </v-card-item>

        <v-card-item>
          <v-text-field v-model="phoneNumber" type="text" placeholder="Phone Number" required></v-text-field>
        </v-card-item>
        <v-card-item>
          <v-slider
              v-model="age"
              :max="100"
              :step="1"
              class="ma-4"
              label="Age"
              color="red-lighten-2"
              hide-details
          >
            <template v-slot:append>
              <v-text-field
                  v-model="age"
                  density=comfortable
                  style="width: 80px"
                  type="number"
                  label="Age"
                  variant="outlined"
                  hide-details
              ></v-text-field>
            </template>
          </v-slider>
        </v-card-item>
        <v-card-item>
          <v-text-field v-model="height" type="number" placeholder="Height (cm)" required></v-text-field>
        </v-card-item>
        <v-card-item>
          <v-text-field v-model="displayName" type="text" placeholder="Display Name" required></v-text-field>
        </v-card-item>
      </v-card>


      <v-card
          color="red-darken-1"
          variant="outlined"
          class="mb-2"
      >

        <v-card-item>
          <div class="text-h6">Account Details</div>
        </v-card-item>
        <v-card-item>
          <v-text-field v-model="contact" type="text" placeholder="Contact Information" required></v-text-field>
        </v-card-item>
        <v-card-item>
          <v-text-field v-model="biography" type="text" placeholder="Biography" required></v-text-field>
        </v-card-item>
<!--        <v-card-item>-->
<!--          <v-text-field v-model="preferences" type="text" placeholder="Preferences" required></v-text-field>-->
<!--        </v-card-item>-->
        <v-card
            color="red-lighten-1"
            class="mb-2"
            variant="elevated"
        >
        <v-card-title class="text-h4 mt-3">Gender Preferences</v-card-title>
        <v-card-item required >
          <v-container fluid mb-2>
            <v-row mt-3>
              <v-col
                  cols="12"
                  md="4"
                  sm="4"
              >
                <v-checkbox
                    v-model="preferences"
                    label="Male"
                    value="Male"
                    hide-details
                ></v-checkbox>
                <v-checkbox
                    v-model="preferences"
                    label="Female"
                    value="Female"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-container>
        </v-card-item>


        <v-card-title class="text-h4 mt-3">What Do You Hate?</v-card-title>
        <v-card-text class="text-md-subtitle-2">
          Tell us what you hate and we will match you with someone who hates the same things.
        </v-card-text>
        <div class="mb-2"></div>

        <v-card-item required >
          <v-container fluid>
            <v-row mt-3>
              <v-col
                  cols="12"
                  md="4"
                  sm="4"
              >
                <v-checkbox
                    v-model="dislikes"
                    label="Smoking"
                    value="Smoking"
                    hide-details
                ></v-checkbox>
                <v-checkbox
                    v-model="dislikes"
                    label="Drinking"
                    value="Drinking"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-container>
        </v-card-item>
        <v-card-text class="text-md-subtitle-2">Powered by our patent pending love matching algorithm.</v-card-text>
        <div class="mb-3"></div>
      </v-card>



<!--        <v-card-item>-->
<!--          <v-combobox-->
<!--              v-model="dislikes"-->
<!--              :items="items"-->
<!--              label="Things you hate!"-->
<!--              prepend-icon="mdi-filter-variant"-->
<!--              variant="solo-filled"-->
<!--              color="red-lighten-1"-->
<!--              chips-->
<!--              clearable-->
<!--              multiple-->
<!--              item-color="red-darken-2"-->
<!--              base-color="red-darken-2"-->
<!--              bg-color="red-lighten-4"-->

<!--          >-->
<!--            <template v-slot:selection="{ attrs, item, select, selected }">-->
<!--              <v-chip-->
<!--                  v-bind="attrs"-->
<!--                  :model-value="selected"-->
<!--                  closable-->
<!--                  @click="select"-->
<!--                  @click:close="remove(item)"-->
<!--                  color="red-darken-2"-->
<!--              >-->
<!--                <strong>{{ item }}</strong>&nbsp;-->
<!--                <span>(interest)</span>-->
<!--              </v-chip>-->
<!--            </template>-->
<!--          </v-combobox>-->
<!--        </v-card-item>-->
          <v-card-text class="text-md-subtitle-2">Powered by our patent pending love matching algorithm.</v-card-text>
        <div class="mb-3"></div>
      </v-card>

      <v-card color="red-darken-1" variant="tonal">
        <v-card-actions>
          <v-btn size="large" class="d-block flex-fill" type="submit">
            Sign Up
          </v-btn>
        </v-card-actions>
      </v-card>
    </form>
  </v-col>
</template>


<script>
import apiClient from '@/axiosConfig'; // Import the Axios configuration
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Sign Up',
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
    const profilePicture = ref(null);
    const contact = ref('');
    const biography = ref('');
    const dislikes = ref([]);
    const preferences = ref([]);

    const handleSignUp = async () => {
      try {
        const formData = new FormData();
        formData.append('profilePicture', profilePicture.value);
        formData.append('firstName', firstName.value);
        formData.append('lastName', lastName.value);
        formData.append('email', email.value);
        formData.append('password', password.value);
        formData.append('username', username.value);
        formData.append('address', address.value);
        formData.append('phoneNumber', phoneNumber.value);
        formData.append('age', age.value);
        formData.append('height', height.value);
        formData.append('displayName', displayName.value);
        formData.append('contact', contact.value);
        formData.append('biography', biography.value);
        formData.append('dislikes', dislikes.value);
        formData.append('preferences', preferences.value);

        const reply = await apiClient.post('/signup', formData);

        // Destructure the token and reply from the response data
        const { token, response } = reply.data;

        // You can now use the token and reply as needed
        alert('Signup successful:'+ response);
        // console.log('Token:', token);

        // For example, you might store the token in localStorage or cookies
        localStorage.setItem('authToken', token);

        // grabbing the token back from the server (which will be in local storage)
        if (token) {
          localStorage.setItem('token', token); // Store the oken
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

    return { firstName, lastName, email, password, address, profilePicture,
      phoneNumber, age, height, displayName, contact, biography,
      dislikes, preferences,
      username,
      handleSignUp };
  }

};
</script>




