import { trimEmpty } from "@/utils/utils";
import {
  defaultValueFormItem,
  exclusiveMinMaxFormItem,
  minMaxNumFormItem,
  enumFormItem,
  setRenderFunction,
} from "./common";

export default {
  name: "NumberConfig",
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      schema: {
        ...this.value,
        default: undefined,
        minimum: undefined,
        maximum: undefined,
        exclusiveMinimum: undefined,
        exclusiveMaximum: undefined,
        enum: [],
        enumDesc: '',
        enumEnable: false
      },
    };
  },
  watch: {
    schema: {
      deep: true,
      handler() {
        this.$emit(
          "input",
          trimEmpty({
            ...this.schema,
          })
        );
      },
    },
  },
  render(h) {
    setRenderFunction(h);
    return (
      <div>
        {defaultValueFormItem(this.schema)}
        {exclusiveMinMaxFormItem(this.schema)}
        {minMaxNumFormItem(this.schema)}
        {enumFormItem(this.schema)}
      </div>
    );
  },
};