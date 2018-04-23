<template>
  <transition name="fade" mode="out-in">
    <div class="container">
      <div class="main">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"/>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"/>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style scoped lang="less" type="text/less">
  .container{
    background-color: #f2f2f2;
  }
  .main {
    padding: 54px 0;
    margin: 0 auto;
    min-height: 673px;
    width: 1000px;
  }
</style>
