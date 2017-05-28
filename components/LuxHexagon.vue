<template>
  <div class="hexagon" :class="{ [type]: true, ['shadow-'+shadow]: true }"
       :style="{ width: width+'px', height: height+'px' }" @click="changeState">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: ['type', 'shadow', 'width', 'height', 'state'],
    methods: {
      changeState () {
        if (!this.state) return null
        return this.$router.push(this.state)
      }
    }
  }
</script>

<style lang="scss">
  .shaded {
    background: url("/img/hexagon-shaded.svg") no-repeat center;
  }

  .flat {
    background: url("/img/hexagon-flat.svg") no-repeat center;
  }

  .border {
    background: url("/img/hexagon-border.svg") no-repeat center;
  }

  .border-hover {
    background: url("/img/hexagon-border.svg") no-repeat center;
    transition: all 200ms ease;

    &:hover {
      background: url("/img/hexagon-flat.svg") no-repeat center;
      background-size: contain;
    }
  }

  .border-gray {
    background: url("/img/hexagon-border-gray.svg") no-repeat center;
  }

  .hexagon {
    position: relative;
    background-size: contain;
  }

  .shadow-blurred {
    filter: drop-shadow( 0 0 20px rgba(0,0,0,0.2) )
  }

  .shadow-smaller {
    filter: drop-shadow( 0 0 10px rgba(0,0,0,0.3) )
  }
</style>
