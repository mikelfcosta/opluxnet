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
          { state: 'home', active: this.$route.name === 'home' },
          { state: 'quiz', active: this.$route.name === 'quiz' },
          { state: 'quizresult', active: this.$route.name === 'quizresult' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .top {
    padding: 20px 0;

    &-orb {
      width: 7px;
      height: 7px;
      background-color: rgba(50,50,50,0.5);
      border-radius: 50%;
      margin: 0 3px;
      transition: all 200ms ease;

      &__active {
        width: 12px;
        height: 12px;
        background-color: black;
      }
    }
  }
</style>
