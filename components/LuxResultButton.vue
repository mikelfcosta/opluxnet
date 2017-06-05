<template>
  <div class="mid-aligner" style="flex-direction: column">
    <div class="lux-circle-btn__outer" :style="{ width: size + 6 + 'px', height: size + 6 + 'px' }" @click="doAction">
      <div class="lux-circle-btn__inner mid-aligner" :style="{ width: size + 'px', height: size + 'px' }">
        <img src="/img/play-button.svg" alt="Go" :width="size - 45" class="play-button">
      </div>
    </div>
    <p class="view-result">Visualizar Resultado Completo</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    props: ['size'],
    computed: {
      ...mapGetters(['isResultUnlocked'])
    },
    methods: {
      doAction () {
        console.log(this.isResultUnlocked)
        return false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .play-button {
    position: relative;
    left: 4px;
  }

  .view-result {
    font-family: "Open Sans", sans-serif;
    color: white;
    text-align: center;
    padding-top: 10px;
  }
</style>
