import Vue from "vue";
let h;
export const setRenderFunction = (renderFn) => (h = renderFn);

export const formItem = (label, slot) => {
  return (
    <div class="flex mb-20 mr-20">
      <span class="flex-0 w-150 text-right mr-20">{label}：</span>
      {slot}
    </div>
  );
};

export const defaultValueFormItem = (schema) => {
  return formItem(
    "默认值",
    <el-input
      value={schema.default}
      vOn:input={(e) => (schema.default = e)}
    ></el-input>
  );
};

export const minAndMaxLengthFormItem = (schema) => {
  return (
    <div class="flex mr-20">
      <div class="flex-1">
        {formItem(
          "最大长度",
          <el-input-number
            value={schema.minLength}
            vOn:change={(e) => (schema.minLength = e)}
            min={0}
            controls-position="right"
          ></el-input-number>
        )}
      </div>
      <div class="flex-1">
        {formItem(
          "最小长度",
          <el-input-number
            value={schema.maxLength}
            vOn:change={(e) => (schema.maxLength = e)}
            min={0}
            controls-position="right"
          ></el-input-number>
        )}
      </div>
    </div>
  );
};

export const patternFormItem = (schema) => {
  return formItem(
    "Pattern",
    <el-input
      value={schema.pattern}
      vOn:input={(e) => (schema.pattern = e)}
    ></el-input>
  );
};

export const enumFormItem = (schema) => {
  const _value = schema.enum.join("\n");
  return (
    <div>
      {formItem(
        <el-checkbox
          value={schema.enumEnable}
          vOn:input={(e) => (schema.enumEnable = e)}
        >
          枚举
        </el-checkbox>,
        <el-input
          disabled={!schema.enumEnable}
          type="textarea"
          value={_value}
          vOn:input={(e) => (schema.enum = e.split("\n"))}
        ></el-input>
      )}
      {schema.enumEnable &&
        formItem(
          "枚举描述",
          <el-input
            disabled={!schema.enumEnable}
            type="textarea"
            value={schema.enumDesc}
            vOn:input={(e) => (schema.enumDesc = e)}
          ></el-input>
        )}
    </div>
  );
};

export const formatFormItem = (schema) => {
  const formatOptionList = [
    "date",
    "date-time",
    "email",
    "hostname",
    "ipv4",
    "ipv6",
    "uri",
  ];
  return formItem(
    "formate",
    <el-select
      value={schema.format}
      vOn:change={(e) => (schema.format = e)}
      clearable={true}
    >
      {formatOptionList.map((item) => (
        <el-option value={item}></el-option>
      ))}
    </el-select>
  );
};

export const exclusiveMinMaxFormItem = (schema) => {
  return (
    <div class="flex mr-20">
      <div class="flex-1">
        {formItem(
          "exclusiveMinimum",
          <el-switch
            value={schema.exclusiveMinimum}
            vOn:change={(e) => (schema.exclusiveMinimum = e)}
          ></el-switch>
        )}
      </div>
      <div class="flex-1">
        {formItem(
          "exclusiveMaximum",
          <el-switch
            value={schema.exclusiveMaximum}
            vOn:change={(e) => (schema.exclusiveMaximum = e)}
          ></el-switch>
        )}
      </div>
    </div>
  );
};

export const minMaxNumFormItem = (schema) => {
  return (
    <div class="flex mr-20">
      <div class="flex-1">
        {formItem(
          "最小值",
          <el-input-number
            style="width: 160px"
            value={schema.minimum}
            vOn:change={(e) => (schema.minimum = e)}
            controls-position="right"
          ></el-input-number>
        )}
      </div>
      <div class="flex-1">
        {formItem(
          "最大值",
          <el-input-number
            style="width: 160px"
            value={schema.maximum}
            vOn:change={(e) => (schema.maximum = e)}
            controls-position="right"
          ></el-input-number>
        )}
      </div>
    </div>
  );
};

/**
 * boolean 类型默认值
 * @param {*} schema
 * @returns
 */
export const booleanDefaultValue = (schema) => {
  return formItem(
    "默认值",
    <el-select
      value={schema.default}
      vOn:change={(e) => (schema.default = e)}
      clearable
    >
      <el-option value={true}></el-option>
      <el-option value={false}></el-option>
    </el-select>
  );
};

export const uniqueItemsFormItem = (schema) => {
  return formItem(
    "uniqueItems",
    <el-switch
      value={schema.uniqueItems}
      vOn:change={(e) => (schema.uniqueItems = e)}
    ></el-switch>
  );
};


export const minMaxItemsFormItem = (schema) => {
  return (
    <div class="flex mr-20">
      <div class="flex-1">
        {formItem(
          "最小元素个数",
          <el-input-number
            style="width: 160px"
            value={schema.minItems}
            vOn:change={(e) => (schema.minItems = e)}
            controls-position="right"
            min={0}
          ></el-input-number>
        )}
      </div>
      <div class="flex-1">
        {formItem(
          "最大元素个数",
          <el-input-number
            style="width: 160px"
            value={schema.maxItems}
            vOn:change={(e) => (schema.maxItems = e)}
            controls-position="right"
            min={0}
          ></el-input-number>
        )}
      </div>
    </div>
  );
};