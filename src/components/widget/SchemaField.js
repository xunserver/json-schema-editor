import NormalField from "./NormalField.vue";
import ObjectField from "./ObjectField.vue";
import ArrayField from "./ArrayField.vue";

export default {
  name: "SchemaField",
  functional: true,
  render(h, context) {
    const schemaType = context.props.schema.type;
    let component;
    switch (schemaType) {
      case "object":
        component = ObjectField;
        break;
      case "array":
        component = ArrayField;
        break;
      default:
        component = NormalField;
    }
    return h(component, context.data);
  },
};