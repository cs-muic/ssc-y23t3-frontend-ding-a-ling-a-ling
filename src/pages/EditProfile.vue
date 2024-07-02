<template>
  <div class="edit-profile">
    <h2>Edit your Profile</h2>
    <div class="profile-form">
      <div class="photo-section">
        <img src="../../public/logo.png" alt="Profile Photo" class="profile-photo" />
        <button class="changed" @click="changePhoto">Change Photo</button>
      </div>
      <div class="tabs">
        <button :class="{ active: activeTab === 'personal' }" @click="activeTab = 'personal'">Personal</button>
        <button :class="{ active: activeTab === 'datingProfile' }" @click="activeTab = 'datingProfile'">Dating Profile</button>
        <button :class="{ active: activeTab === 'datingPreferences' }" @click="activeTab = 'datingPreferences'">Dating Preferences</button>
      </div>
      <form @submit.prevent="saveProfile">
        <div v-if="activeTab === 'personal'">
          <label>
            Display Name:
            <input type="text" v-model="user.displayName" />
          </label>
          <label>
            Phone Number:
            <input type="text" v-model="user.phoneNumber" />
          </label>
          <label>
            Email:
            <input type="email" v-model="user.email" />
          </label>
        </div>
        <div v-if="activeTab === 'datingProfile'">
          <label>
            Biography:
            <input type="text" v-model="user.biography" />
          </label>
          <label>
            Contact:
            <input type="text" v-model="user.contact" />
          </label>
        </div>
        <div v-if="activeTab === 'datingPreferences'">
          <label>
            Preferences:
            <div class="checkbox-group">
              <div class="checkbox-container">
                <input type="checkbox" id="idk" value="idk" v-model="selectedDislikes" @change="updatePreferences('preferences')" />
                <label for="idk">IDK</label>
              </div>

              <div class="checkbox-container">
                <input type="checkbox" id="idk2" value="idk2" v-model="selectedDislikes" @change="updatePreferences('preferences')" />
                <label for="idk2">IDK2</label>
              </div>

            </div>

          </label>
          <label>
            Dislikes:

            <div class="checkbox-group">
              <div class="checkbox-container">
                <input type="checkbox" id="smoking" value="Smoking" v-model="selectedDislikes" @change="updatePreferences('dislikes')" />
                <label for="smoking">Smoking</label>
              </div>

              <div class="checkbox-container">
                <input type="checkbox" id="loudNoise" value="Loud Noise" v-model="selectedDislikes" @change="updatePreferences('dislikes')" />
                <label for="loudNoise">Loud Noise</label>
              </div>

              <div class="checkbox-container">
                <input type="checkbox" id="crowds" value="Crowds" v-model="selectedDislikes" @change="updatePreferences('dislikes')" />
                <label for="crowds">Crowds</label>
              </div>

              <div class="checkbox-container">
                <input type="checkbox" id="fastFood" value="Fast Food" v-model="selectedDislikes" @change="updatePreferences('dislikes')" />
                <label for="fastFood">Fast Food</label>
              </div>
            </div>

          </label>

        </div>
        <div class="form-actions">
          <button type="button" @click="cancelEdit">Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  </div>

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
      selectedPreferences: []

    };
  },
  methods: {
    changePhoto() {
      // Handle photo change logic
    },
    saveProfile() {
      // Handle profile save logic
      if (this.activeTab === 'personal') {
        this.activeTab = 'datingProfile';
      } else if (this.activeTab === 'datingProfile') {
        this.activeTab = 'datingPreferences';
      } else {
        // Assuming "dating preferences" is the last tab, you can add any final save logic here
        alert('Profile saved successfully!');
      }
    },
    updatePreferences(type) {
      if (type === 'dislikes') {
        this.user.dislikes = new Set(this.selectedDislikes);
      }
      else {
        this.user.preferences = new Set(this.selectedDislikes);
      }
    },
    cancelEdit() {
      // Handle cancel logic
    }
  }
};

</script>

<style scoped>

.edit-profile {
  padding: 20px;
  max-width: 600px;
  margin: auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #dc6565;
}

.profile-form {
  display: flex;
  flex-direction: column;
}

.photo-section {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.profile-photo {
  width: 25%;
  height: 25%;
  border-radius: 50%;
  margin-right: 20px;
}

.changed {
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  background-color: rgb(177, 38, 38);
  color: #fff;
  margin-right: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: flex-end;
}

.tabs {
  display: flex;
  margin-bottom: 20px;
  color: #dc6565;
}

.tabs button {
  flex: 1;
  padding: 10px;
  border: none;
  cursor: pointer;
  background-color: #f1f1f1;
  margin-right: 5px;
  border-radius: 10px;

}

.tabs button.active {
  background-color: #efa0b8;
  color: #fbfbfb;

}

.checkbox-group {

  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.checkbox-container {
  display: flex;
  align-items: center;
}

.checkbox-container input[type="checkbox"] {
  margin-right: 10px;
}


form label {
  display: block;
  margin-bottom: 10px;
}

form input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
}

.form-actions button {
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.form-actions button[type="button"] {
  background-color: #817f7f;
  margin-right: 10px;
  border-radius: 10px;
}

.form-actions button[type="submit"] {
  background-color: #ff0404;
  color: #fff;
}
</style>
