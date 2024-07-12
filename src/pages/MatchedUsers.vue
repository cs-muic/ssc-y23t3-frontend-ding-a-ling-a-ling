<script>
export default {
  data(){
    return{
      users: []
    }
  },
  mounted(){
    fetch('http://localhost:8000/users')
        .then(res => res.json())
        .then(data => this.users = data)
        .catch(err => console.log(err.message))
  },
}
</script>

<template>
  <div v-if="users.length">
  <div v-for="user in users" :key="user.id" class="user">
    <router-link :to="{ name: 'Matches', params: { id: user.id }}">
      <v-img>
        {{user.profilePicture}}
      </v-img>
      <h2>
        {{user.displayName}}
      </h2>
    </router-link>
  </div>
</div>
<div v-else>
  Loading Page
</div>
</template>

<style scoped>

</style>