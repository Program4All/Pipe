<template>
  <div id="app">
    <div class="layout">

      <div class="layout-head">
        <x-header></x-header>
      </div>

      <div class="layout-content">

        <div class="layout-left">
        </div>
        <div class="layout-right">
          <div class="layout-right-toolbox">
          </div>
          <div class="layout-right-console">
          </div>
        </div>

      </div>


    </div>
  </div>
</template>

<script>
  import XHeader from 'components/XHeader.vue'

  export default {
    name: 'app',
    data(){
      return {
        msg: 'hello'
      }
    },
    components: {XHeader}
  }
</script>

<style lang="less">

  @import 'assets/color.less';

  html, body, #app {
    margin: 0;
  .x-header {
    width: 100%;
    height: 100%;
  }
    padding: 0;
    width: 100%;
    height: 100%;
  }

  .layout {
    width: 100%;
    height: 100%;

    .layout-head {
      width: 100%;
      height: 9%;
      background-color: @silver;
      overflow: hidden;
    }

    .layout-content {
      width: 100%;
      height: 91%;
      overflow: hidden;

      .layout-left {
        width: 61.8%;
        height: 100%;
        float: left;
        background-color: @dark-white;
        overflow: hidden;
      }

      .layout-right {
        width: 38.2%;
        height: 100%;
        float: left;
        overflow: hidden;

        .layout-right-toolbox {
          width: 100%;
          height: 61.8%;
          background-color: @extra-light-gray;
          overflow: hidden;
        }

        .layout-right-console {
          width: 100%;
          height: 38.2%;
          background-color: @light-black;
          overflow: hidden;
        }

      }

    }

  }
</style>
