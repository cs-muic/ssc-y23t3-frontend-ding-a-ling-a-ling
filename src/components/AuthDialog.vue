<template>
  <v-dialog v-model="dialog" max-width="600px" persistent>
    <v-card>
      <v-card-title>
        <span class="headline">Login / Sign Up</span>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="email" label="Email" />
        <v-text-field v-model="password" label="Password" type="password" />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="blue darken-1" text @click="login">Login</v-btn>
        <v-btn color="green darken-1" text @click="signup">Sign Up</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'AuthDialog',
    setup () {
      const dialog = ref(false)
      const email = ref('')
      const password = ref('')

      const login = () => {
        // Implement login logic
        console.log('Logging in with', email.value, password.value)
      }

      const signup = () => {
        // Implement signup logic
        console.log('Signing up with', email.value, password.value)
      }

      return {
        dialog,
        email,
        password,
        login,
        signup,
      }
    },
  })
</script>
