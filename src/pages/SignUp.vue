<template>
  <div class="signup">
    <h1>Sign Up</h1>
    <form @submit.prevent="handleSignUp">
      <input v-model="username" type="text" placeholder="Username" required>
      <input v-model="email" type="email" placeholder="Email" required>
      <input v-model="password" type="password" placeholder="Password" required>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>


<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const handleSignUp = () => {
      console.log("Signup logic here");
      // If signup is successful:
      router.push('/matching');
    };

    return { handleSignUp };
  }
}
</script>


<style scoped>
.signup {
  max-width: 300px;
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

button {
  width: 100%;
  background-color: #FF0000FF;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
}
</style>
