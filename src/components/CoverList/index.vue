<template>
    <ul class="cover-ul">
      <router-link tag="li" v-for="(i,index) in list" :key="index" :to="'/chapter/'+i.id">
        <div class="img-wrap"><img :src="i.img" alt="封面">
        <p class="msg">更新至{{i.updateCount}}话</p></div>
        <p class="title ellipsis">{{i.title}}</p>
      </router-link>
    </ul>
</template>

<script>
export default {
  name: 'CoverList',
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="less" type="text/less">
.cover-ul{
  li{
    width: 15.6%;
    margin-left: 4.4%;
    margin-bottom: 44px;
    display: inline-block;
    cursor: pointer;
    img{width:100%}
  }
  li:nth-child(5n+1){
    margin-left: 2.2%;
  }
}
  .img-wrap{
    position: relative;
    overflow: hidden;
    .msg{
      position: absolute;
      font-size:14px;
      bottom: 0;
      padding: 2px 0;
      width: 100%;
      text-indent: .5em;
      color: #fff;
      background-color: #434343bf;
    }
  }
  .title{
     font-size:20px;
    margin-top: 10px;
    color:#333;
   }

</style>
