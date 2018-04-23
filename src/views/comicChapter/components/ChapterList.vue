<template>
<div v-if="list!=null&&list.length!==0" class="list-wrap">
  <h5 class="title"><img src="@/assets/u62.png"/><span>章节列表</span></h5>
  <ul class="list-ul small-font">
    <router-link class="title ellipsis" tag="li" v-for="(i,index) in list" :key="index" :to="'/reader/'+cid+'&'+i.id">
      <span>{{i.title}}</span>
    </router-link>
  </ul>
</div>
</template>

<script>
export default {
  name: 'ChapterList',
  props: {
    cid: Number,
    list: Array
  }
}
</script>

<style scoped lang="less" type="text/less">
  @boder-color:rgb(204,204,204);
  @list-color:#4c4646;
  .title{
    img{
      width: 14px;height: 14px;
      padding-right: 10px;
    }
    span{
      display: inline-block;
      vertical-align: middle;
      font-weight: 600;
    }
  }
.list-wrap{
  color:@list-color;
  background-color: #fff;
  border: 1px solid @boder-color;
  h5{
    font-size: 16px;
    padding: 15px 0 10px 30px;
  }
}
  .list-ul{
    width:95.6%;
    margin: 0 auto;
    padding-top: 20px;
    border-top:1px solid @boder-color;
    li{
      position: relative;
      display: inline-block;
      padding-bottom: 30px;
      width: 23.5%;
      cursor: pointer;
      span{
        display: inline-block;
        vertical-align: middle;
      }
    }
    li:before{
      content: '';
      display: inline-block;
      vertical-align: middle;
      width: 4px;
      height: 4px;
      margin-right: 5px;
      background-color: rgb(221,221,221);
      border-radius: 9999px;
    }
    li:nth-child(4n+1){
      margin-left: 3%;
    }
  }
</style>
