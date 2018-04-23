<template>
  <swipe v-if="list&&list.length" class="swipe" :showIndicators="showIndicators" @change="change">
    <swipe-item v-for="i in list" :key="i.id">
      <img :src="i.img" alt="漫画"/>
      <span></span>
    </swipe-item>
  </swipe>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe'
import 'vue-swipe/dist/vue-swipe.css'
export default {
  name: 'Swpier',
  props: {
    showIndicators: {
      type: Boolean,
      default: true
    },
    list: Array
  },
  components: {'swipe': Swipe, 'swipe-item': SwipeItem},
  data () {
    return {}
  },
  methods: {
    change (next, pre) {
      this.$emit('change', {next, pre})
    }
  }
}
</script>

<style lang="less" type="text/less">
.swipe{
  text-align: center;
  img{
    max-width: 100%;
    max-height: 100%;}
  span{
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
}
</style>
