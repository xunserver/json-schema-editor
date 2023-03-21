import { trimEmpty } from "@/utils/utils";
import {
  booleanDefaultValue,
  setRenderFunction 
} from "./common";

export default {
  name: "BooleanConfig",
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
        {booleanDefaultValue(this.schema)}
      </div>
    );
  },
};
