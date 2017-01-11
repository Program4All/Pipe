<template>
    <div class="layout" :style="{height: height, width: width}">
      <slot></slot>
    </div>
</template>

<style scoped>
  .layout {
    margin: 0;
    padding: 0;
  }
</style>

<script>
    export default{
      props: ['height', 'width']
    }
</script>
