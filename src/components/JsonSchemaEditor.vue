<template>
  <div>
    <SchemaField v-if="isValid" :schema="schema"></SchemaField>
    <AdvanceConfigDialog
      :schema="currentConfigSchema"
      ref="advanceConfigDialog"
    ></AdvanceConfigDialog>
  </div>
</template>
<script>
import { isEmpty } from "../utils/utils";
import SchemaField from "./widget/SchemaField";
import AdvanceConfigDialog from "./AdvanceConfigDialog";

export default {
  name: "JsonSchemaEditor",
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  components: {
    SchemaField,
    AdvanceConfigDialog,
  },
  data() {
    return {
      schema: {},
      currentConfigSchema: {},
    };
  },
  provide() {
    const self = this;
    return {
      openAdvanceConfig(schema, parentSchema) {
        self.currentConfigSchema = schema;
        self.$refs.advanceConfig.dialogVisible = true;
      },
    };
  },
  computed: {
    isValid() {
      return !isEmpty(this.schema);
    },
  },
  watch: {
    schema: {
      handler() {
        this.$emit("input", this.schema);
      },
    },
    value: {
      immediate: true,
      handler() {
        this.schema = this.value;
        if (isEmpty(this.schema)) {
          this.schema = {
            type: "object",
            required: true,
            title: "",
            name: "root",
            properties: {
              85: { type: "string", name: 85, required: true, title: "" },
            },
          };
        }
      },
    },
  },
  methods: {
    typeChange({ schema, parentSchema }) {},

    nameChange({ schema, parentSchema }) {},
  },
};
</script>
<style></style>
