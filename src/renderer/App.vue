<template>
  <div id="app">
    <x-header></x-header>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
import XHeader from './components/Header'
  export default {
    components:{XHeader}
  }
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
  /* CSS */
</style>
