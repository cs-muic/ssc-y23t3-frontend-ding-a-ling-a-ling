<script>
  export default {
    props: ['id'],
    data(){
      return{
        user: null
      }
    },
    mounted(){
      fetch('http://localhost:8000/users/' + this.id)
          .then(res => res.json())
          .then(data => this.user = data)
          .catch(err => console.log(err.message))
    },
  }
</script>

<template>
  <div v-if="user">
    <h1>{{user.displayName}}</h1>
    <p>{{user.age}}</p>
    <p>{{user.biography}}</p>
    <p>{{user.preferences}}</p>
  </div>
  <div v-else>
    <p>
      Loading Page
    </p>
  </div>
</template>

<style scoped>
.user {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  text-align: center;
  background-color: #FF0000FF;
  color: white;
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