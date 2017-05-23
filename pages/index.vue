<template>
  <div class="mid-aligner countdown">
    <img src="/logo.png" alt="op.LUXX.net">
    <h1>Aguarde!</h1>
    <p>{{ countdown }}</p>
  </div>
</template>

<script>
  export default {
    created () {
      let self = this
      setInterval(function () {
        console.log('updating ticker')
        self.$data.now = new Date().getTime()
      }, 1000)
    },
    data () {
      return {
        now: new Date().getTime()
      }
    },
    computed: {
      countdown () {
        const countDownDate = new Date(`May 29, 2017 12:00:00`).getTime()
        let distance = countDownDate - this.now
        let days = Math.floor(distance / (1000 * 60 * 60 * 24))
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((distance % (1000 * 60)) / 1000)
        return `${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`
      }
    }
  }

</script>

<style>
  @import "https://fonts.googleapis.com/css?family=Space+Mono";
  html {
    text-align: center;
    min-height: 100%;
    background: rgba(45, 200, 176, 1);
    background: -moz-linear-gradient(top, rgba(45, 200, 176, 1) 0%, rgba(29, 53, 52, 1) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(45, 200, 176, 1)), color-stop(100%, rgba(29, 53, 52, 1)));
    background: -webkit-linear-gradient(top, rgba(45, 200, 176, 1) 0%, rgba(29, 53, 52, 1) 100%);
    background: -o-linear-gradient(top, rgba(45, 200, 176, 1) 0%, rgba(29, 53, 52, 1) 100%);
    background: -ms-linear-gradient(top, rgba(45, 200, 176, 1) 0%, rgba(29, 53, 52, 1) 100%);
    background: linear-gradient(to bottom, rgba(45, 200, 176, 1) 0%, rgba(29, 53, 52, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#2dc8b0', endColorstr='#1d3534', GradientType=0);
  }

  img {
    padding-top: 6%;
    width: 383px;
  }

  .countdown {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    min-height: 80vh;
  }

  h1, p {
    font-size: 3em;
    font-family: 'Space Mono', monospace;
    color: #FFF;
    margin: 0;
  }

  p {
    font-size: 2em;
  }

  body {
    background-color: transparent;
  }
</style>
