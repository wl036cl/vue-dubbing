<template>
    <ul class="edit-ul">
      <li v-for="(i,index) in list" :key="index">
        <input-text v-bind="{type:i.type, maxLength:i.maxLength,placeholder:i.placeholder}" v-model="i.value"
                    @input="handleInput(index,...arguments)"
        ></input-text>
        <span v-if="i.extend" v-html="i.extend.html"></span>
      </li>
    </ul>
</template>

<script>
import Text from './text'
export default {
  name: 'TextEdit',
  components: {'input-text': Text},
  props: {
    list: Array
  },
  methods: {
    handleInput (index, val, e) {
      this.$emit('input', index, val, e)
    },
    handleChange (e) {
      console.log('handleChange：' + arguments)
    }
  }
}
</script>

<style scoped>

</style>
