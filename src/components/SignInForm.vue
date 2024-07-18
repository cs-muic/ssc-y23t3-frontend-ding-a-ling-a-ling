<script>
import apiClient from '@/axiosConfig'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores';

export default {
  setup() {
    const router = useRouter();
    const username = ref('');
    const password = ref('');

    const handleSignIn = async () => {
      const authStore = useAuthStore();
      await authStore.signIn(username.value, password.value);
    }
    return { username: username, password: password, handleSignIn };
  }
}
</script>

<template>
  <v-form @submit.prevent="handleSignIn">
      <div>
        <v-card-item class="px-8">

          <v-row dense
          >
            <v-col cols="12" md="6">
              <v-text-field v-model="username" label="Username" type="username" required></v-text-field>
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


<style scoped>
#btm {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}
</style>

