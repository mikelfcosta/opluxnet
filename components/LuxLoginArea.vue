<template>
  <div class="login">
    <img class="avatar" :src="avatar">
    <div class="connector"></div>
    <div class="facebook-connected"></div>
    <div class="connector"></div>
    <div class="google-connected"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        avatar: '/img/avatar-default.png'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login {
    height: 300px;
    right: 10px;
    position: absolute;
    top: 13%;
    width: 65px;

    .avatar {
      border: 1px solid black;
      border-radius: 50%;
      padding: 5px;
    }
  }

  .connector {
    height: 15px;
    width: 32px;
    border-right: 2px solid black;
  }

  .facebook-connected {
    width: 30px;
    height: 30px;
    border: 1px solid black;
    border-radius: 50%;
    margin-left: 16px;
  }

  .google-connected {
    width: 30px;
    height: 30px;
    border: 1px solid black;
    border-radius: 50%;
    margin-left: 16px;
  }
</style>
