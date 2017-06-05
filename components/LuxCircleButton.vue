<template>
  <div class="outer" :style="{ width: size + 6 + 'px', height: size + 6 + 'px' }" @click="doAction">
    <div class="inner mid-aligner" :style="{ width: size + 'px', height: size + 'px' }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['size', 'action', 'state'],
    methods: {
      doAction () {
        if (this.action === 'goBack') return this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .outer {
    border: 1px dashed white;
    border-radius: 50%;
  }

  .inner {
    background-color: rgba(255,255,255,0.3);
    border-radius: 50%;
    position: relative;
    top: 2px;
    left: 2px;
  }
</style>
