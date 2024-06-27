<template>
  <div class="app-container">
    <header class="app-header">
      <router-link to="/login" class="nav-button">Login</router-link>
      <router-link to="/signup" class="nav-button">SignUp</router-link>
    </header>
    <div class="main-content">
      <h1 class="header">Welcome to Our Site</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homepage',
}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  background-color: #c35a5a;
  height: 100vh;
}

.app-header {
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  width: 100%;
  background-color: #ffe9d1; /* Dark background for better visibility */
}

.nav-button {
  padding: 10px 20px;
  margin-left: 10px; /* Space between buttons */
  background-color: #FF0000FF;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
}

.nav-button:hover {
  background-color: #333;
}

.main-content {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.header {
  margin-top: 10px; /* Ensure margin only affects the top spacing */
  color: #ffe9d1; /* Adjust as per your color scheme */
}
</style>
