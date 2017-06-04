<template>
  <div class="container mid-aligner" style="height: 100vh">
    <lux-header>
    </lux-header>
    <lux-circle-button :size="50" class="top-right" v-if="!end">
      <img src="/img/ico-back.svg" alt="Voltar" width="25">
    </lux-circle-button>
    <lux-share-buttons class="top-right" v-else>

    </lux-share-buttons>
    <component :is="quizType" :end="end" :quiz="quiz">

    </component>
  </div>
</template>

<script>
  import LuxHeader from '~components/LuxHeader.vue'
  import LuxCircleButton from '~components/LuxCircleButton.vue'
  import LuxShareButtons from '~components/LuxShareButtons.vue'
  import LuxQuizDates from '~components/LuxQuizDates.vue'
  import LuxQuizNames from '~components/LuxQuizNames.vue'
  import LuxQuizPersonality from '~components/LuxQuizPersonality.vue'
  export default {
    components: {
      LuxHeader,
      LuxCircleButton,
      LuxShareButtons,
      LuxQuizDates,
      LuxQuizNames,
      LuxQuizPersonality
    },
    data () {
      return {
        end: false,
        result: ''
      }
    },
    computed: {
      category () {
        return this.$store.state.quiz.filter(c => c.name === this.$route.params.category)[0]
      },
      quiz () {
        return this.category.quizzes.filter(q => q.link === this.$route.params.id)[0]
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
