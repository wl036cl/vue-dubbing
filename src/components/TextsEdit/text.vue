<template>
  <input ref="input" v-bind="{name:name,type:type,placeholder:placeholder,maxlength:maxLength,max:max,min:min}"
         :value="inputValue"
         @change="handleChange"
         @input="handleInput"
         >
</template>

<script>
export default {
  name: 'input-text',
  props: {
    name: {type: String},
    type: {type: String, default: 'text'},
    placeholder: String,
    value: {},
    max: Number,
    min: Number,
    maxLength: Number
  },
  data () {
    return {
      charLength: 0,
      inputValue: this.value
    }
  },
  methods: {
    handleInput (e) {
      this.inputValue = e.target ? e.target.value : e
      //  //  此处最先执行，修改inputValue不能改变input上的值，此处只为了触发watch
      // let charLength = val.length

      // if ((this.type === 'number' || this.type === 'tel') && charLength && /\D*$/.test(val)) {
      //   //  tel和number，禁止其他字符输入
      //   val = val.replace(/\D*/g, '')
      // }
      // if (this.maxLength && charLength && this.maxLength < charLength) {
      //   //  超长移除（兼容不支持input maxlength的浏览器）
      //   val = val.substr(0, this.maxLength)
      // }
      // this.inputValue = val
      // console.log(this.inputValue, val)
      // this.$emit('input', e, val)
    },
    handleChange (e) {
      //  blur后检测到发生改变时触发
      this.$emit('change', e.target.value, e)
    }
  },
  watch: {
    value (val) {
      //  监听父组件修改value
      //  console.log('watch：' + this.inputValue, this.value)
      this.inputValue = val
    },
    inputValue (val) {
      let charLength = val ? val.length : 0
      let rightVal = val
      if ((this.type === 'number' || this.type === 'tel') && charLength && /\D*$/.test(val)) {
        //  tel和number，禁止其他字符输入
        rightVal = val.replace(/\D*/g, '')
      }
      if (this.maxLength && charLength && this.maxLength < charLength) {
        //  超长移除（兼容不支持input maxlength的浏览器）
        rightVal = val.substr(0, this.maxLength)
      }
      if (rightVal !== val) {
        //  纠正超长和不符合类型的数据
        this.inputValue = rightVal
        return false
      }

      this.charLength = String(this.inputValue) ? String(this.inputValue).length : 0
      this.$emit('input', val) // 该方法触发父组件input事件（默认修改value），再触发watch中value（放在handleInput最后会导致inputValue=InputEvent）
    }
  }
}
</script>

<style scoped>

</style>
