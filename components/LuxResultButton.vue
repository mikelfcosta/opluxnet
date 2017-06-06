<template>
  <div class="mid-aligner" style="flex-direction: column" :class="{inactive: !isResultUnlocked}">
    <div class="lux-circle-btn__outer" :style="{ width: size + 6 + 'px', height: size + 6 + 'px' }" @click="doAction">
      <div class="lux-circle-btn__inner mid-aligner" :style="{ width: size + 'px', height: size + 'px' }">
        <img src="/img/play-button.svg" alt="Go" :width="size - 45" class="play-button">
      </div>
    </div>
    <p class="view-result" v-if="isResultUnlocked">Visualizar Resultado Completo</p>
    <p class="result-inactive" v-else><b>Realize um Quiz de cada Área <br> para ver o Resultado Completo</b></p>
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
        if (this.isResultUnlocked) return this.$router.push('/result')
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
    text-align: center;
    color: white;
    padding-top: 10px;
    margin: 0;
  }

  .result-inactive {
    color: darkgray;
    text-align: center;
  }

  .inactive {

    & > .lux-circle-btn__outer {
      border-color: rgba(100,100,100,1);
    }

    .lux-circle-btn__inner {
      background-color: rgba(100,100,100,0.6);
    }
  }
</style>
