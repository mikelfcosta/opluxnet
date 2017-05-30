<template>
  <div class="row top mid-aligner">
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
          { state: 'login', active: this.$route.name === 'login' },
          { state: 'home', active: this.$route.name === 'home' },
          { state: 'quiz', active: this.$route.name !== 'login' || this.$route.name !== 'home' }
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
      border-radius: 50%;
      margin: 0 3px;
      border: 2px solid white;
      transition: all 200ms ease;

      &__active {
        width: 12px;
        height: 12px;
        background-color: white;
      }
    }
  }
</style>
