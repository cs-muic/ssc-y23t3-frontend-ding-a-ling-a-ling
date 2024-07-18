<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import apiClient from '@/axiosConfig';


export default {
  setup: function () {
    const router = useRouter()
    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')
     const password = ref('')
    const confirmPassword = ref('')
    const username = ref('')
    const address = ref('')
    const phoneNumber = ref('')
    const age = ref(null)
    const height = ref(null)
    const displayName = ref('')
    const profilePicture = ref('')
    const contact = ref('')
    const biography = ref('')
    const dislikes = ref([])
    const preferences = ref([])

    let preferenceOptions = []
    let dislikeOptions = []

    try {
      dislikeOptions = ['Option 1', 'Option 2']
      preferenceOptions = ['Male', 'Female']

      if (false) {
        preferenceOptions = apiClient.get('/signup/preferences', {
          params: {
            category: 'preference'
          }
        })
        dislikeOptions = apiClient.get('/signup/dislikes', {
          params: {
            category: 'dislikes'
          }
        })
      }
    } catch (error) {
      console.error('Getting preferences and dislikes failed:', error.response ? error.response.data : error)
      alert(`Getting preferences and dislikes failed:: ${error.response ? error.response.data.message : 'Network or server error'}`)
    }

    const onSubmit = async () => {
      try {
        if (password.value !== confirmPassword.value) {
          alert('Passwords do not match');
          return;
        }

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
        })

        console.log('Sign Up response:', response.data) // Logging response data

        // grabbing the token back from the server (which will be in local storage)
        const { token } = response.data;

        if (token) {
          localStorage.setItem('token', token) // Store the token
          apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}` // Set default header
          console.log('Signed up successfully')
          await router.push('/user') // Redirect to matching page

        } else {
          console.error('No token received from server')
          alert('Failed to sign up, no token received')
        }

      } catch (error) {
        console.error('Signup failed:', error.response ? error.response.data : error)
        alert(`Signup failed: ${error.response ? error.response.data.message : 'Network or server error'}`)
      }
    }

    return {
      firstName,
      lastName,
      email,
      password,
      address,
      profilePicture,
      phoneNumber,
      age,
      height,
      displayName,
      contact,
      biography,
      dislikes,
      preferences,
      username,
      dislikeOptions,
      confirmPassword,
      onSubmit,
      preferenceOptions
    }
  }
}
</script>

<template>
  <v-form @submit.prevent="onSubmit">

    <v-card color="white" variant="flat" class="border-thin mb-5">
      <div>
        <v-card-item class="px-8">
          <div id="category" class="text-h6 border-b border-opacity-50 mb-5 mt-4 pb-2 text-primary">
            Personal Details
          </div>
          <v-row dense>
            <v-col dense cols="12" md="6">
              <v-text-field v-model="firstName" label="First Name" required></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="lastName" label="Last Name" required></v-text-field>
            </v-col>
          </v-row>
        </v-card-item>
      </div>
    </v-card>


    <v-card color="white" variant="flat" class="
 border-thin mb-5">
      <div>
        <v-card-item class="px-8">
          <div id="category" class="text-h6 border-b border-opacity-50 mb-5 mt-4 pb-2 text-primary">
            Account Details
          </div>
          <v-row dense>
            <v-col cols="12" md="6">
              <v-text-field v-model="username" label="Username" required></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="confirmPassword" label="Confirm Password" type="password" required></v-text-field>
            </v-col>
          </v-row>
        </v-card-item>
      </div>
    </v-card>


    <v-card color="white" variant="flat" class="
 border-thin mb-5">
      <div>
        <v-card-item class="px-8">
          <div id="category" class="text-h6 border-b border-opacity-50 mb-5 mt-4 pb-2 text-primary">
            Profile
          </div>
          <v-row dense>

            <v-col cols="12" md="6">
              <v-text-field v-model="displayName" label="Display Name"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-file-input accept="image/png, image/jpeg, image/bmp" prepend-icon="mdi-photo" v-model="profilePicture"
                label="Profile Picture"></v-file-input>
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
              <v-text-field v-model="height" label="Height (cm)" type="number"></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-textarea v-model="biography" label="Biography"></v-textarea>
            </v-col>

            <v-col cols="12">
              <v-text-field v-model="contact" label="Contact Information"></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-select v-model="preferences" :items="preferenceOptions" label="Preferences" multiple></v-select>
            </v-col>
          </v-row>
        </v-card-item>
      </div>
    </v-card>

    <v-card color="primary" variant="flat" id="btm" class="border-thin mb-5">
      <div>
        <v-card-item class="px-8">
          <div class="mb-12"></div>
          <div class="text-h4 font-weight-bold text-center text-capitalize">Tell Us What You Hate</div>

          <div class="mb-4"></div>
          <div class="text-h5 font-weight-light text-center">Its important to be honest for us to perform our magic.
          </div>
        </v-card-item>
        <v-card-item class="px-8">

          <v-row dense>
            <v-col cols="12">
              <!--              <v-select v-model="dislikes" :items="dislikeOptions" label="Lifestyle" multiple ></v-select>-->
              <!--              <v-select v-model="dislikes" :items="dislikeOptions" label="Hobbies" multiple ></v-select>-->
              <!--              <v-select v-model="dislikes" :items="dislikeOptions" label="What You Hate" multiple ></v-select>-->
              <!--              <v-select v-model="dislikes" :items="dislikeOptions" label="What You Hate" multiple ></v-select>-->
              <!--              <v-select v-model="dislikes" :items="dislikeOptions" label="What You Hate" multiple ></v-select>-->
              <v-select v-model="dislikes" :items="dislikeOptions" label="What You Hate" multiple></v-select>
            </v-col>
          </v-row>
          <div class="mb-5"></div>

          <div class="d-flex mb-12">
            <v-btn variant="flat" height="50"
              class="rounded-pill mx-auto flex font-weight-regular border-thin text-h5 px-8" type="submit"> Sign Up
            </v-btn>
          </div>

          <div
            class="w-100 d-inline-flex  mt-auto bottom-0 mx-auto mt-auto text-center text-lg-body-1 text-caption text-break">
            <v-chip class="mx-auto text-break" id="annotation"> Powered by the
              <div class="d-inline-block mx-1"><span class="font-weight-bold"> Hate</span><span
                  class="font-weight-light">Matcher</span>™
              </div>
              <span> world leading, patent pending, cutting edge hate matching technology.</span>
            </v-chip>
          </div>

          <div class="mb-8"></div>
        </v-card-item>
      </div>


    </v-card>



  </v-form>
</template>

<style scoped>

#btm {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}

</style>

