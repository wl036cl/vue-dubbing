<template>
    <div class="progress">
      <div v-show="show" :class="[type+'-bar',animate?'animate-bar':'']" :style="{width: percentage}"></div>
    </div>
</template>

<script>
export default {
  name: 'Progress',
  props: {
    type: {type: String, default: 'info'}, // info或success或error
    percent: {type: [Number, String], default: 0}, // 90%或0.9
    animate: {type: Boolean, default: true}
  },
  data () {
    return {
      show: true
    }
  },
  computed: {
    percentage () {
      return String(this.percent).endsWith('%') ? this.percent : (Number(this.percent) * 100 + '%')
    }
  },
  watch: {
    percentage (curVal) {
      if (Number(curVal.replace('%', '')) >= 100) {
        setTimeout(() => {
          this.show = false
          // this.percentage = 0
        }, 300)
      } else {
        this.show = true
      }
    }
  }
}
</script>

<style lang="less" type="text/less">
  @animateTime :.3s;
.progress {
  background-color: transparent;
  width: 100%;
  height: 3px;
  overflow: hidden;
  div{
    height: 100%;
  }
  .animate-bar{
    transition: all  @animateTime ease;
  }
  .info-bar{
    background-color: #1abc9c;
  }
  .success-bar{
    background-color: #5cb86c;
  }
  .error-bar{
    background-color: #f0ad4e;
  }
}
</style>
