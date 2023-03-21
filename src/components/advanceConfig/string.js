import { trimEmpty } from '@/utils/utils';
import { defaultValueFormItem, formatFormItem, enumFormItem, minAndMaxLengthFormItem, setRenderFunction } from './common';

export default {
    name: 'StringSetting',
    props: {
        value: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
           schema: {
                ...this.value,
                default: undefined,
                minLength: undefined,
                maxLength: undefined,
                pattern: undefined,
                enum: [],
                enumEnable: false,
                enumDesc: '',
                format: undefined
           } 
        }
    },
    watch: {
        schema: {
            deep: true,
            handler() {
                this.$emit('input', trimEmpty({
                    ...this.schema
                }))
            }
        }
    },
    render(h) {
        setRenderFunction(h)
        return (
            <div>
                { defaultValueFormItem (this.schema) }
                { minAndMaxLengthFormItem (this.schema) }
                { enumFormItem(this.schema) }
                { formatFormItem(this.schema) }
            </div>
        )
    },
    
}