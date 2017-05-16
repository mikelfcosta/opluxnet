<template>
  <div class="row top d-flex justify-content-center">
    <div v-for="i in orbs" class="top-orb" :class="{ 'top-orb__active': i.active }"></div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {}
    },
    computed: {
      orbs () {
        return [
          { state: 'Home', active: this.$route.name === 'Home' },
          { state: 'Quiz', active: this.$route.name === 'Quiz' },
          { state: 'QuizResult', active: this.$route.name === 'QuizResult' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .top {
    padding: 20px 0;

    &-orb {
      width: 12px;
      height: 12px;
      border: 1px solid black;
      border-radius: 50%;
      margin: 0 5px;

      &__active {
        background-color: black;
      }
    }
  }
</style>
