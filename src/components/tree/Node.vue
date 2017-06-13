<template>

  <li>{{node.name}}
    <ul v-if="node.children && node.children.length">
      <node v-for="child in node.children" :node="child" :key="child.name"></node>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'node',
  props: ['node'],
}
</script>