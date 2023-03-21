import { trimEmpty } from "@/utils/utils";
import {
  uniqueItemsFormItem,
  setRenderFunction, 
  minMaxItemsFormItem
} from "./common";

export default {
  name: "ArrayConfig",
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
        uniqueItems: undefined,
        maxItems: undefined,
        minItems: undefined
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
        {uniqueItemsFormItem(this.schema)}
        {minMaxItemsFormItem(this.schema)}
      </div>
    );
  },
};
