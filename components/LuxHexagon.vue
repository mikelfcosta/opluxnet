<template>
  <div class="hexagon" :class="{ [type]: true, ['shadow-'+shadow]: true, cursor: this.state || this.action }"
       :style="{ width: width+'px', height: height+'px', background }" @click="clickEvent">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: ['type', 'shadow', 'width', 'height', 'state', 'action'],
    methods: {
      clickEvent () {
        if (this.state === 'category') return this.$router.push(`/quizz/${this.action}`)
        if (this.state === 'quiz') return this.$router.push(`/quizz/${this.action[0]}/${this.action[1]}`)
        if (this.state) return this.$router.push(this.state)
        if (this.action === 'facebook-login') return this.facebookLogin()
        if (this.action === 'google-login') return this.googleLogin()
      },
      facebookLogin () {
        window.location.href = '/api/auth/facebook'
      },
      googleLogin () {
        window.location.href = '/api/auth/google'
      }
    },
    computed: {
      background () {
        if (this.type === 'image') return 'url(userimage.jpg) no-repeat center'
        else return false
      }
    }
  }
</script>

<style lang="scss">
  @import 'assets/css/variables.scss';

  .cursor {
    cursor: $pointer;
    & > * {
      cursor: $pointer;
    }
  }

  .shaded {
    background: url("/img/hexagon-shaded.svg") no-repeat center;
  }

  .flat {
    background: url("/img/hexagon-flat.svg") no-repeat center;
    &-red {
      background: url("/img/hexagon-flat-red.svg") no-repeat center;
    }
    &-blue {
      background: url("/img/hexagon-flat-blue.svg") no-repeat center;
    }
  }

  .faded {
    background: url("/img/hexagon-faded.svg") no-repeat center;

    &-60 {
      background: url("/img/hexagon-faded-60.svg") no-repeat center;
    }
  }

  .image {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
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
    filter: drop-shadow( 0 0 20px rgba(0,0,0,0.2) );
  }

  .shadow-smaller {
    filter: drop-shadow( 0 0 10px rgba(0,0,0,0.3) );
  }
</style>
