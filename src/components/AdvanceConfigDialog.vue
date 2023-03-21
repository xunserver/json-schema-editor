<template>
  <el-dialog
    v-if="schema"
    title="提示"
    :visible.sync="dialogVisible"
    width="40%"
  >
    <section>
      <h4>高级设置</h4>
      <!-- <StringConfig v-model="schema"></StringConfig> -->
      <!-- <NumberConfig v-model="schema"></NumberConfig> -->
      <!-- <BooleanConfig v-model="schema"></BooleanConfig> -->
      <component :is="componentByType" v-model="schema"></component>
    </section>
    <section>
      <h4>源码编辑</h4>
      <pre>{{ JSON.stringify(schema, "   ", 2) }}</pre>
    </section>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import NumberConfig from "./advanceConfig/number";
import StringConfig from "./advanceConfig/string"
import BooleanConfig from "./advanceConfig/boolean";
import ArrayConfig from "./advanceConfig/array";

export default {
  name: "AdvanceConfig",
  components: { StringConfig, NumberConfig, BooleanConfig, ArrayConfig },
  props: {
    schema: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialogVisible: false,
      innerSchema: this.defaultSchema
    };
  },
  computed: {
    componentByType() {
        const componentMap = {
            'object': null,
            'array': ArrayConfig,
            'string': StringConfig,
            'boolean': BooleanConfig,
            'number': NumberConfig,
            'integer': NumberConfig,
        }
        if(!componentMap[this.innerSchema.type]) {
            return null
        }
        return componentMap[this.innerSchema.type]
    }
  },
  watch: {
    schema: {
        immediate: true,
        deep: true,
        handler() {
            this.innerSchema = this.schema
        }
    }
  }
};
</script>
