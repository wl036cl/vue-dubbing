<template>
<div class="sign-wrap small-font">
  <Slogan class="slogan-img"></Slogan>
  <TextsEdit class="edits-wrap" :list="textList" @input="handleInput"></TextsEdit>
  <a class="btn green-btn" @click="login">登录</a>
  <p class="link-p">
    <span>还没有帐号？</span>
    <router-link to="/signUp">立即注册</router-link>
  </p>
</div>
</template>

<script>
import TextsEdit from '@/components/TextsEdit'
import Slogan from './components/slogan'
import './style/index.less'
export default {
  name: 'SignIn',
  components: {Slogan, TextsEdit},
  data () {
    return {
      textList: [
        {icon: '', type: 'tel', placeholder: '请输入手机号', errMsg: '', value: '', maxLength: 11},
        {icon: '', type: 'password', placeholder: '请输入密码', errMsg: '', value: '', maxLength: 20}
      ]
    }
  },
  methods: {
    handleInput (index, val) {
      let err = ''
      switch (index) {
        case 0:
          if (val && !/^[1][3,4,5,7,8,9][0-9]{9}$/.test(val)) {
            err = '手机号码不正确'
          }
          break
        case 1:
          if (val && val.length < 6) {
            err = '密码错误'
          }
          break
        default:
          break
      }
      this.textList[index].errMsg = err
    },
    login () {
      let err = ''
      this.textList.forEach(i => {
        if (i.errMsg) {
          err += i.errMsg + '，'
        }
      })
      if (err) {
        alert(err.substr(0, err.length - 1))
      } else {
        this.$store.dispatch('signIn', {phone: encodeURI(this.textList[0].value), psd: encodeURI(this.textList[1].value)}).then((res) => {
          this.$router.replace('/home')
          console.log(res)
        }).catch(err => {
          alert(err.message || err)
          console.log(err)
        })
      }
    }
  }
}
</script>

<style lang="less" type="text/less">

</style>
