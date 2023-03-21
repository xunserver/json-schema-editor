<template>
  <div>
    <SchemaForm
      :schema="schema"
      @change="schemaChange"
      :nameEnable="parentSchema && parentSchema.type !== 'array'"
    >
      <Operator
        :schema="schema"
        :parentSchema="parentSchema"
        addEnable
        :removeEnable="parentSchema && parentSchema.type !== 'array'"
      ></Operator>
    </SchemaForm>
    <div style="padding-left: 20px">
      <template v-if="schema.properties">
        <SchemaField
          v-for="subSchema in schema.properties"
          :key="subSchema.name"
          :schema="subSchema"
          :parentSchema="schema"
          @changeName="changeName(subSchema.name, $event)"
        ></SchemaField>
      </template>
    </div>
  </div>
</template>

<script>
import SchemaForm from "../component/SchemaForm.vue";
import Operator from "../component/Operator.js";

export default {
  name: "ObjectField",
  components: { SchemaForm, Operator, SchemaField: () => import("./SchemaField.js")},
  props: {
    schema: {
      type: Object,
      required: true,
    },
    parentSchema: Object,
  },
  methods: {
    schemaChange(type) {
      if (type === "name") {
        this.$listeners.changeName(this.schema);
      }
      if (type === "type") {
        this.$delete(this.schema.properties);
      }
    },
    changeName(name, subSchema) {
      if (name !== subSchema.name) {
        this.$set(this.schema.properties, subSchema.name, subSchema);
        this.$delete(this.schema.properties[name]);
      }
    },
  },
};
</script>
