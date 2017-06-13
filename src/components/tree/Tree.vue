<template>

  <div>
    <h1>{{node.name}}</h1>
    <ul v-if="node.children && node.children.length">
      <node v-for="child in node.children" :node="child" :key="child.name"></node>
    </ul>
  </div>


</template>

<script>
import Node from './Node'
export default {
  components: {Node},
  props: ['node'],
}
</script>