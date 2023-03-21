<template>
  <div>
    <JsonSchemaEditor v-model="schema"/>
    <pre style="">
      {{ JSON.stringify(schema, '  ', 2) }}
    </pre>
  </div>
</template>

<script>
import JsonSchemaEditor from './components/JsonSchemaEditor.vue'

export default {
  name: 'App',
  components: {
    JsonSchemaEditor
  },
  data() {
    return {
      schema: {}
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
