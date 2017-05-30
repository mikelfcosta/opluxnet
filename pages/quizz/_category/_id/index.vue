<template>
  <div class="container mid-aligner" style="height: 100vh">
    <lux-header :breadcrumbs="['home', '>', 'login', '>', 'quizz', '>', this.$route.params.category, '>', this.$route.params.id]">
    </lux-header>
    <div class="quiz mid-aligner">
      <lux-hexagon width="394" height="462" type="flat" shadow="blurred"></lux-hexagon>
      <div class="question open-sans">
        <h1>Pergunta</h1>
        <div class="answers">
          <lux-hexagon width="58" height="67" type="flat" shadow="blurred" class="mid-aligner">
            <lux-indicator-right class="hexagon-question open-sans">
              <p>Teste</p>
            </lux-indicator-right>
            1
          </lux-hexagon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LuxHexagon from '~components/LuxHexagon.vue'
  import LuxHeader from '~components/LuxHeader.vue'
  import LuxIndicatorRight from '~components/LuxIndicatorRight.vue'
  export default {
    components: {
      LuxHexagon,
      LuxHeader,
      LuxIndicatorRight
    },
    computed: {
      category () {
        return this.$store.state.quiz.filter(c => c.name === this.$route.params.category)[0]
      },
      quiz () {
        return this.category.quizzes.filter(q => q.id === this.$route.params.id)[0]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .quiz {
    position: relative;
    left: -200px;
  }

  .question {
    padding: 20px;
  }
</style>
