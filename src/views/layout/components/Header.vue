<template>
  <div class="header">
    <h-progress class="progress-wrap" :type="$store.getters.headerProgressType" :percent="$store.getters.headerProgressPercent"></h-progress>
    <ul class="header-ul">
      <li><img class="logo" src="@/assets/logo_white.png" alt="logo"></li>
      <router-link class="link-li" v-if="((index===4||index===5)?!$store.getters.uid:true)"
                   tag="li" v-for="(i,index) in menuList"
                   :key="index" :to="i.path">{{i.text}}
      </router-link>
      <li class="user-li" v-show="!!$store.getters.uid" @click="signOut">
        <img :src="getHeadUrl($store.getters.head)"/>
        <span class="ellipsis small-font">{{$store.getters.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {getUrl} from '@/utils/fullUrl'
import Progress from '@/components/progress'
export default {
  name: 'Header',
  components: {'h-progress': Progress},
  data () {
    return {
      menuList: [
        {text: '首页', path: '/home'},
        {text: '动漫作品', path: '/comic'},
        {text: '会员充值', path: '/recharge'},
        {text: '联系我们', path: '/contact'},
        {text: '用户注册', path: '/signUp'},
        {text: '会员登录', path: '/signIn'}
      ]
    }
  },
  mounted () {
    if (!this.$store.getters.uid) {
      this.$store.dispatch('checkSignIn').then().catch(err => {
        console.log(err)
      })
    }
  },
  methods: {
    getHeadUrl (img) {
      return getUrl(img || process.env.DEFAULT_HEAD)
    },
    signOut () {
      if (confirm('是否确定退出登录？')) {
        this.$store.dispatch('signOut').then((res) => {
          alert('退出成功')
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
}
</script>

<style scoped lang="less" type="text/less">
  @menu-bg: #FF615E;
  .header {
    background-color: #4C4646;
    color: #fff;
    position: relative;
  }

  .header-ul {
    width: 1000px;
    margin: 0 auto;
    height: 56px;
    line-height: 56px;
    font-size: 16px;
    position: relative;
    li {
      text-align: center;
      display: inline-block;
      vertical-align: middle;
    }
    li:first-child {
      width: 200px;
      text-align: left;
    }
    .user-li {
      width: auto;
    }
  }

  .link-li {
    width: 96px;
    height: 32px;
    line-height: 32px;
    cursor: pointer;
    border-radius: 90px;
  }

  .link-li:hover {
    background-color: @menu-bg;
    color: #fff;
  }

  .router-link-active {
    background-color: @menu-bg;
    color: #fff;
    cursor: default;
  }

  .user-li {
    position: absolute;
    height: 100%;
    right: 0;
    top: 0;
    cursor: pointer;
    img {
      width: 32px;
      height: 32px;
      border-radius: 999px;
      margin-right: 5px;
    }
    span {
      vertical-align: middle;
      display: inline-block;
      max-width: 100px;
    }
  }
.progress-wrap{
  position: absolute;
}
  .logo {
    width: 108px;
  }
</style>
