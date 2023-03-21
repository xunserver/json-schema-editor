<template>
  <div>
    <SchemaForm
      :schema="schema"
      @change="schemaChange"
      :nameEnable="nameEnable"
    >
      <Operator
        :schema="schema"
        :parentSchema="parentSchema"
        :removeEnable="parentSchema && parentSchema.type !== 'array'"
      ></Operator>
    </SchemaForm>
    <div style="padding-left: 20px">
      <SchemaField :schema="schema.items" :parentSchema="schema" :nameEnable="false"></SchemaField>
    </div>
  </div>
</template>

<script>
import SchemaForm from "../component/SchemaForm.vue";
import Operator from "../component/Operator.js";

export default {
  name: "ArrayField",
  components: { SchemaForm, Operator, SchemaField:() => import("./SchemaField.js") },
  props: {
    schema: {
      type: Object,
      required: true,
    },
    parentSchema: Object,
    nameEnable: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    schemaChange(type) {
      if (type === "name") {
        this.$listeners.changeName(this.schema);
      }
      if (type === "type") {
        this.$delete(this.schema.items);
      }
    },
  },
  created() {
    if (!this.schema.items) {
      this.$set(this.schema.items, {
        type: "string",
        name: "items",
        required: true,
      });
    }
  },
};
</script>
