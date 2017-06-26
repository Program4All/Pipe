<template>
  <div class="header">
    <div class="header-item header-logo">PIPE</div>
    <div class="header-item" v-for="option in options">{{option}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: ['新建', '打开', '保存', '执行']
    }
  }
}
</script>

<style scoped>
.header{
  display: flex;
  background-color: #DDD;
}

.header-item {
  width: 50px;
  text-align: center;
  flex: none;
}

.header-logo {
  font-size: 1.3em;
  background-color: #AAD;
}
</style>
