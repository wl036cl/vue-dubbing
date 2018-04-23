<template>
<ul v-if="info!=null" class="info-ul">
  <li class="img-wrap"><img :src="info.img" alt="封面" /></li>
  <li>
    <h5>{{info.title}}</h5>
    <div class="info-p small-font">
      <p><span class="gray">作者：</span><span>{{info.author}}</span></p>
      <p><span class="gray">类型：</span><span>{{info.type}}</span></p>
      <p><span class="gray">点击量：</span><span>{{info.playCount}}</span></p>
      <p><span class="gray">漫画简介：</span><span>{{info.desc}}</span></p>
    </div>
    <router-link class="btn btn-read" :to="'/reader/'+cid+'&'+cfid">开始阅读</router-link>
  </li>
</ul>
</template>

<script>
export default {
  name: 'ComicInfo',
  props: {
    cid: Number,
    cfid: Number,
    info: Object
  }
}
</script>

<style scoped lang="less" type="text/less">
  @btn-bg:#FF615E;
  .info-ul {
    li {
      display: inline-block;
      vertical-align: middle;
      width: 28%;
      h5 {
        padding: 10px 0 20px;
        font-size: 22px;
      }
      p{
        padding-top:10px;
      }
    }
    li:last-child {
      width: 64%;
    }
  }
  .img-wrap {
    text-align: center;
    padding: 20px 0 0;
    img {
      width: 83%;
      box-shadow:0 0 10px #0000008c;
    }
  }

  .info-p {
    span{display: inline-block;max-width: 85%;vertical-align: top;}
    .gray {
      color: #ababab;
    }
  }

  .btn-read {
    width: 168px;
    height: 40px;
    line-height: 40px;
    background-color:  @btn-bg;
    border-radius: 99px;
    font-size: 13px;
    color: #fff;
    margin-top:35px;
  }
</style>
