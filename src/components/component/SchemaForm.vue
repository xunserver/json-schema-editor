<template functional>
  <div class="editor-row">
    <div class="editor-col">
      <el-input
        :disabled="!props.nameEnable"
        :value="props.schema.name"
        @change="e => { props.schema.name = e; listeners.changeSchema('name') }"
      ></el-input>
    </div>
    <div class="editor-col editor-col-required">
      <el-checkbox
        v-model="props.schema.required"
        style="width: 40px"
        @change="listeners.change('required')"
      ></el-checkbox>
    </div>
    <div class="editor-col editor-col-type">
      <el-select v-model="props.schema.type" @change="listeners.change('type')">
        <el-option
          v-for="item in $options.typeOptionList"
          :key="item"
          :label="item"
          :value="item"
        ></el-option>
      </el-select>
    </div>
    <div class="editor-col editor-col-title">
      <el-input v-model="props.schema.title"></el-input>
    </div>
    <div class="editor-col editor-col-operator">
      <slot>
        <!-- 操作区 -->
      </slot>
    </div>
  </div>
</template>
<script>
import Operator from "./Operator";
const typeOptionList = [
  "string",
  "number",
  "integer",
  "boolean",
  "object",
  "array",
];
export default {
  name: "SchemaForm",
  functional: true,
  components: { Operator },
  typeOptionList,
  props: {
    schema: {
      type: Object,
      required: true,
    },
    nameEnable: {
      type: Boolean,
      default: true
    }
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
