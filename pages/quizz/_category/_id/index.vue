<template>
  <div class="container mid-aligner" style="height: 100vh">
    <lux-header>
    </lux-header>
    <lux-circle-button :size="50" class="top-right" v-if="!end">
      <img src="/img/ico-back.svg" alt="Voltar" width="25">
    </lux-circle-button>
    <lux-share-buttons class="top-right" v-else>

    </lux-share-buttons>
    <component :is="quizType" :end="end" :current="current" :result="result">

    </component>
    <lux-quiz-progress :current="currentIndex" :total="quiz.questions.length" v-if="!end"></lux-quiz-progress>
  </div>
</template>

<script>
  import LuxHeader from '~components/LuxHeader.vue'
  import LuxQuizProgress from '~components/LuxQuizProgress.vue'
  import LuxCircleButton from '~components/LuxCircleButton.vue'
  import LuxShareButtons from '~components/LuxShareButtons.vue'
  import LuxQuizDates from '~components/LuxQuizDates.vue'
  import LuxQuizNames from '~components/LuxQuizNames.vue'
  import LuxQuizPersonality from '~components/LuxQuizPersonality.vue'
  import { mapMutations } from 'vuex'
  export default {
    components: {
      LuxHeader,
      LuxCircleButton,
      LuxQuizProgress,
      LuxShareButtons,
      LuxQuizDates,
      LuxQuizNames,
      LuxQuizPersonality
    },
    data () {
      return {
        currentIndex: 0,
        answeredList: [],
        end: false,
        result: ''
      }
    },
    methods: {
      next (index) {
        this.answeredList.push(index)

        if (this.currentIndex + 1 === this.quiz.questions.length) {
          this.currentIndex += 1
          this.end = true
          this.setResult()
        } else this.currentIndex += 1
      },
      setResult () {
        let arr = this.answeredList
        let result = arr.sort((a, b) =>
          arr.filter(v => v === a).length - arr.filter(v => v === b).length
        ).pop()
        this.result = this.quiz.results[result]
        this.setAsDone(this.$route.params)
      },
      ...mapMutations({
        setAsDone: 'setAsDone'
      })
    },
    computed: {
      category () {
        return this.$store.state.quiz.filter(c => c.name === this.$route.params.category)[0]
      },
      quiz () {
        return this.category.quizzes.filter(q => q.link === this.$route.params.id)[0]
      },
      current () {
        return this.quiz.questions[this.currentIndex]
      },
      quizType () {
        switch (this.$route.params.category) {
          case 'personalidades': return 'LuxQuizPersonality'
          case 'nomes': return 'LuxQuizNames'
          case 'datas': return 'LuxQuizDates'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .top-right {
    position: absolute;
    right: 0;
    top: 20px;
    flex-direction: column;
  }
</style>
