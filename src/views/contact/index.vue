<template>
    <div class="contact">
      <h4>联系方式</h4>
      <div>
        <h5>配音秀广告合作</h5>
        <p>王女士</p>
        <p>QQ：3198017835</p>
      </div>
      <div>
        <h5>配音秀商务媒体合作</h5>
        <p>王女士</p>
        <p>QQ：3213370235</p>
      </div>
      <div>
        <h5>配音秀新浪微博</h5>
        <p class="green">配音秀APP</p>
        <p>PS：做掉无聊，干掉无趣</p>
      </div>
      <div>
        <h5>配音秀微信订阅号</h5>
        <p class="green">配音秀精选</p>
        <p>PS：秀友基地，好基喔</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped lang="less" type="text/less">
.contact{
  width:620px;
  background-color: #fff;
  margin: 0 auto;
  padding:45px 90px 90px;
  font-size: 18px;
  div {
    margin-top: 40px;
    line-height:1.5;
  }
}
  h4,h5{
    font-weight: 400;
    font-size: 18px;
  }
  h5{
    color:#fc0;
  }
  .green{
    color:#1ABC9C;
  }
</style>
