<template>
  <div class="footer x-small-font">
    <p>Copyright&nbsp;©&nbsp;2016 杭州秀秀科技有限公司. All Rights Reserved.</p>
    <p class="gov">
      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602004537">
        <img src="http://img4.peiyinxiu.com/web/images/201607201638a0f4ae29000b5be4.png"/>浙公网安备 33010602004537号
      </a>
      <a target="_blank" href="http://www.miibeian.gov.cn/">浙ICP备13027715号-2&nbsp;&nbsp;浙ICP证：浙B2-20170071</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="less" type="text/less">
.footer{
  text-align: center;
  padding:50px 0;
}
  .gov{
    padding-top: 15px;
    a{
      color:#999;
      text-decoration: none;
    }
  }
</style>
