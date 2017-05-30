<template>
  <ul>
    <li v-for="path in paths" v-if="path !== '>'">
      {{ path }}
    </li>
    <li v-else><i class="fa fa-caret-right" aria-hidden="true"></i></li>
  </ul>
</template>

<script>
  export default {
    props: ['paths']
  }
</script>

<style lang="scss" scoped>
  ul {
    display: inline-block;

    :nth-child(2n-1):not(i) {
      background-color: rgba(0,0,0,0.75);
      color: white;
      padding: 5px 10px;
    }

    li {
      display: inline-block;
      padding: 5px;

      font-family: "Open Sans", sans-serif;

      i {
        position: relative;
        top: 4px;
        padding: 5px 10px;
        font-size: 32px;
        color: rgba(0,0,0,0.75);
      }
    }
  }
</style>
