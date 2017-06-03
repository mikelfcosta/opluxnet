<template>
  <div>
    <div class="quiz" v-if="!end">

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
  export default {
    name: 'LuxQuizNames',
    props: ['end', 'current', 'result'],
    component: {
      LuxHexagon,
      LuxIndicatorRight
    }
  }
</script>

<style>

</style>
