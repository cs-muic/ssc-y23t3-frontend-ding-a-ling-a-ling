<template>
  <v-col class="mx-auto" cols="12" sm="8" md="8" lg="8" xl="8"
  >
    <v-card
        color="red-lighten-1"
        variant="flat"
        class="mb-2"
    >
      <v-card-title class="text-h4 mt-3">Edit Profile</v-card-title>
      <div class="mb-3"></div>
    </v-card>

    <form @submit.prevent="editProfile">
      <v-card
          color="red-darken-1"
          variant="outlined"
          class="mb-2"
      >
        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-item>
          <div class="text-h6">Profile Details</div>
        </v-card-item>
        <v-card-item>
          <v-text-field v-model="user.firstName" type="text" placeholder="First Name" required></v-text-field>
        </v-card-item>
        <v-card-item>
          <v-text-field v-model="user.lastName" type="text" placeholder="Last Name" required></v-text-field>
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
                  v-model="user.profilePicture"
                  accept="image/png, image/jpeg, image/bmp"
                  label="Profile Picture"
                  placeholder="Upload Profile Picture"
                  prepend-icon="mdi-camera"
              ></v-file-input>
            </v-col>
          </div>
        </v-card-item>
        <v-card-item>
          <v-text-field v-model="user.displayName" type="text" placeholder="Display Name" required></v-text-field>
        </v-card-item>

        <v-card-item>
          <v-text-field v-model="user.phoneNumber" type="tel" placeholder="Phone Number" required></v-text-field>
        </v-card-item>

        <v-card-item>
          <v-text-field v-model="user.height" type="number" placeholder="Height (cm)" required></v-text-field>
        </v-card-item>

        <v-card-item>
          <v-text-field v-model="user.height" type="text" placeholder="Address" required></v-text-field>
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
          <v-text-field v-model="user.contact" type="text" placeholder="Contact Information" required></v-text-field>
        </v-card-item>
        <v-card-item>
          <v-text-field v-model="user.biography" type="text" placeholder="Biography" required></v-text-field>
        </v-card-item>

      </v-card>

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
                      v-model="selectedPreferences"
                      label="Male"
                      value="Male"
                      hide-details
                  ></v-checkbox>
                  <v-checkbox
                      v-model="selectedPreferences"
                      label="Female"
                      value="Female"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-container>
        </v-card-item>

        <v-card-title class="text-h4 mt-3">Dislikes</v-card-title>
        <div class="mb-2"></div>
        <v-card-item>
          <v-card-item required >
            <v-container fluid>
              <v-row mt-3>
                <v-col
                    cols="12"
                    md="4"
                    sm="4"
                >
                  <v-checkbox
                      v-model="selectedDislikes"
                      label="Smoking"
                      value="Smoking"
                      hide-details
                  ></v-checkbox>
                  <v-checkbox
                      v-model="selectedDislikes"
                      label="Drinking"
                      value="Drinking"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-container>
          </v-card-item>
        </v-card-item>
        <v-card-text class="text-md-subtitle-2">Powered by our patent pending love matching algorithm.</v-card-text>
        <div class="mb-3"></div>
      </v-card>

      <v-card color="red-darken-1" variant="tonal">
        <v-card-actions>
          <v-btn size="large" class="d-block flex-fill">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </form>
  </v-col>
</template>


<script>
export default {
  data() {
    return {
      photo: '', // Replace with actual photo path or URL
      activeTab: 'personal',
      user: {
        email: '',
        address: '',
        phoneNumber: '',
        age: '',
        height: '',
        displayName: '',
        profilePicture: '',
        contact: '',
        biography: '',
        preferences: new Set(),
        dislikes: new Set()
      },
      selectedDislikes: [],
      selectedPreferences: [],


    };
  },
  methods: {
    updatePrefAndDislikes() {
      this.user.dislikes = new Set(this.selectedDislikes);
      this.user.preferences = new Set(this.selectedDislikes);
    },
    editProfile() {
      this.updatePrefAndDislikes();
      // do smth
      alert('Profile saved successfully!');
    },
    changePhoto() {
      // Handle photo change logic
    }
  }
};

</script>

