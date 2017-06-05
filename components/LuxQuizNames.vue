<template>
  <div>
    <div class="quiz" v-if="!current.end">
      <lux-hexagon width="300" height="350" type="flat" shadow="blurred" class="mid-aligner" style="flex-direction: column">
        <h3>{{ current.quiz.result.questions[0] }}</h3>
        <b-form-input style="width: 250px"></b-form-input>
      </lux-hexagon>
    </div>
    <div class="result" v-else>
      <lux-hexagon width="395" height="463" type="flat" shadow="blurred"></lux-hexagon>
      <div class="result-details mid-aligner">
        <h1 class="open-sans">Você seria <b style="text-transform: uppercase">{{ result.result }}</b></h1>
        <p class="open-sans">{{ result.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import LuxHexagon from '~components/LuxHexagon.vue'
  import LuxIndicatorRight from '~components/LuxIndicatorRight.vue'
  import { mapGetters } from 'vuex'
  export default {
    name: 'LuxQuizNames',
    props: ['quiz'],
    created () {
      this.$store.dispatch('setQuiz', { quiz: this.quiz, category: this.$route.params.category })
    },
    computed: {
      ...mapGetters({current: 'getCurrentQuiz', result: 'setAndGetResult'})
    },
    components: {
      LuxHexagon,
      LuxIndicatorRight
    }
  }
</script>

<style>

</style>
