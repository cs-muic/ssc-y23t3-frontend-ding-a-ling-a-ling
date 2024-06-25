<template>
  <div class="home">
    <h1>Welcome to Our Site</h1>
    <router-link to="/login" class="button">Login</router-link>

    <router-link to="/signup" class="button">SignUp</router-link>

  </div>
</template>

<script>
export default {
  name: 'homepage'
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.button {
  padding: 10px 20px;
  margin: 10px;
  background-color: #FF0000FF;
  color: #ffffff;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
}

.button:hover {
  background-color: #333;
}
</style>
