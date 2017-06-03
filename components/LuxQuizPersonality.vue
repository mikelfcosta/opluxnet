<template>
  <div>
    <div class="quiz" v-if="!end">
      <!--<lux-hexagon width="394" height="462" type="flat" shadow="blurred"></lux-hexagon>-->
      <div class="question open-sans">
        <h1>{{ current.question }}</h1>
        <div class="answers">
          <lux-hexagon width="58" height="67" type="flat" shadow="blurred" class="mid-aligner hexagon-choice"
                       v-for="(answer, index) in current.answers" key="index">
            <lux-indicator-right class="hexagon-question open-sans">
              <p class="margin-10">{{ answer }}</p>
            </lux-indicator-right>
            <h1 class="hexagon-icon mid-aligner" @click="next(index)">
              {{ String.fromCharCode(65 + index) }}
            </h1>
          </lux-hexagon>
        </div>
      </div>
    </div>
    <div class="result" v-else>
      <lux-hexagon width="395" height="463" type="flat" shadow="blurred"></lux-hexagon>
      <div class="result-details mid-aligner">
        <h1 class="open-sans">Você é <b style="text-transform: uppercase">{{ result.result }}</b></h1>
        <p class="open-sans">{{ result.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import LuxHexagon from '~components/LuxHexagon.vue'
  import LuxIndicatorRight from '~components/LuxIndicatorRight.vue'
  export default {
    name: 'LuxQuizPersonality',
    props: ['end', 'current', 'result'],
    components: {
      LuxHexagon,
      LuxIndicatorRight
    }
  }
</script>

<style lang="scss" scoped>
  .quiz {
    position: relative;
    width: 500px;
  }

  .hexagon-icon {
    width: 58px;
    height: 67px;
    font-size: 24px;
    font-weight: bold;
    margin: 0;
  }

  .question {
  /*padding-left: 40px;*/

  & > h1 {
        font-family: "Open Sans", sans-serif;
        font-weight: bold;
        font-style: italic;
        font-size: 24px;
        margin-bottom: 20px;
        color: white;
        text-transform: uppercase;
      }
  }

  .hexagon-choice {
    position: relative;
    margin-bottom: -10px;
  &:nth-of-type(2n) {
     right: -30px;
   }
  }

  .result {
    display: flex;
    align-items: center;

  &-details {
     margin-left: 40px;
     flex-direction: column;
     justify-content: left;
     align-items: flex-start;
   }

  h1 {
    color: white;
  }

  p {
    max-width: 400px;
    color: white;
  }
  }
</style>
