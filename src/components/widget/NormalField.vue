<template>
  <SchemaForm :schema="schema" @change="changeSchema">
    <Operator :schema="schema" :parentSchema="parentSchema" :removeEnable="parentSchema && parentSchema.type !== 'array'"></Operator>
  </SchemaForm>
</template>
<script>
import SchemaForm from "../component/SchemaForm.vue";
import Operator from "../component/Operator.js";
export default {
  name: "NormalField",
  props: {
    schema: {
      type: Object,
      required: true,
    },
    parentSchema: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    Operator,
    SchemaForm
  },
  methods: {
    setInnerSchema() {
      this._schema = {

      }
    },
    changeSchema(type) {
      if(type === 'name') {
        this.$listeners.changeName(this.schema)
      }
    },
  },
};
</script>
<style lang="less">
.editor-row {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
}
.editor-col {
  margin-left: 20px;
  flex: 1 1 auto;
}

.editor-col-type,
.editor-col-title {
  flex: 0 0 150px;
}

.editor-col-required {
  flex: 0 0 40px;
}

.editor-col-operator {
  flex: 0 0 100px;

  .operator-item {
    display: inline-block;
    padding: 8px;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
  }
}
</style>
