<script>
  export default{
    props: [
        'user'
    ],
    data: () => {
      return {
        activeImg: ''
      }
    },
    beforeMount() {
      this.activeImg = this.user.profilePicture[0];
    },
    methods: {
      closeProfile(){
        this.$emit('close');
      }
    }
  }
</script>

<template>
  <div class="container">
    <i class="fas fa-angle-left" @click="closeProfile">
    </i>
    <i class="fas fa-heart" v-if=profile.like_user()>

    </i>
  </div>
</template>

<style scoped>

</style>