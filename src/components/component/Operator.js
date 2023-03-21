import { genKey } from "@/utils/utils";
import Vue from "vue";
/**
 * 添加子节点
 * @param {*} schema 
 */
export const addChildSchema = (schema) => {
  if(!schema.hasOwnProperty('properties')) {
    Vue.set(schema, 'properties', {})
  }
  const properties = schema.properties;
  const name = genKey(schema.name);
  Vue.set(properties, name, {
    type: "string",
    name,
    required: true,
    title: "",
  });
}

/**
 * 移除当前schema
 * @param {*} schema 
 * @param {*} parentSchema 
 */
export const removeSchema = (schema, parentSchema) => {
  Vue.delete(parentSchema.properties, schema.name)
}

export default {
  name: "Operator",
  functional: true,
  inject: ['openAdvanceConfig'],
  render(h, context) {
    const {schema, parentSchema, addEnable = false, removeEnable = true } = context.props;
    const settingComponent = h("i", {
      class: "el-icon-setting operator-item",
      on: {
        click: () => context.injections.openAdvanceConfig(schema, parentSchema)
      },
    });
    const removeComponent = h("i", {
      class: "el-icon-remove-outline operator-item",
      on: {
        click: () => removeSchema(schema, parentSchema),
      },
    });
    const addComponent = h("i", {
      class: "el-icon-plus operator-item",
      on: {
        click: () => addChildSchema(schema)
      },
    });
    return h("span", {}, [
      settingComponent,
      removeEnable ? removeComponent : null,
      addEnable ?  addComponent : null,
    ]);
  },
};