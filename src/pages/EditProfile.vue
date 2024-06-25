<template>
  <div class="edit-profile">
    <h1>Edit Profile</h1>
    <form @submit.prevent="handleUpdateProfile">
      <input v-model="name" type="text" placeholder="Full Name" required>
      <input v-model="email" type="email" placeholder="Email" required>
      <!-- Add more fields as necessary -->
      <router-link to="/matching" class="button">Save</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      // Add more fields as needed
    };
  },
  methods: {
    handleUpdateProfile() {
      console.log("Updating profile with:", this.name, this.email);
      // Here you would typically send this data back to your server
    }
  }
}
</script>

<style scoped>
.edit-profile {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  box-sizing: border-box;
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
