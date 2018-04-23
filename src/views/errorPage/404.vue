<template>
  <div class="err">
    <img :src="fullImgUrl" alt="">
    <p>{{this.msg}}</p>
  </div>
</template>

<script>
import {getUrl} from '@/utils/fullUrl'
export default {
  name: 'err404',
  props: {
    imgUrl: {type: String, default: 'web/face_cry_mid.png'},
    msg: {type: String, default: '404，页面不存在'}
  },
  computed: {
    fullImgUrl () {
      return getUrl(this.imgUrl)
    }
  }
}
</script>

<style scoped lang="less" type="text/less">
.err{
  text-align: center;
  padding-top: 50px;
  img{
    width: 200px;
  }
  p{
    padding-top: 50px;
  }
}
</style>
