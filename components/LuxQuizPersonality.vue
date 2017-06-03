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
    component: {
      LuxHexagon,
      LuxIndicatorRight
    }
  }
</script>

<style>

</style>
