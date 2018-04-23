<template>
  <div class="sign-wrap small-font">
    <Slogan class="slogan-img"></Slogan>
    <TextsEdit class="edits-wrap" :list="textList"></TextsEdit>
    <a class="btn green-btn" @click="register">注册</a>
    <p class="link-p">
      <input type="checkbox" id="agree-check" v-model="agreed">
      <label for="agree-check">
        <span>我已阅读并同意</span>
        <router-link to="/agree">《用户服务协议》</router-link>
      </label>
    </p>
    <p class="link-p">
      <span>已有帐号？</span>
      <router-link to="/signIn">立即登录</router-link>
    </p>
  </div>
</template>

<script>
import TextsEdit from '@/components/TextsEdit'
import Slogan from './components/slogan'
import './style/index.less'
export default {
  name: 'SignUp',
  components: {Slogan, TextsEdit},
  data () {
    return {
      agreed: false,
      textList: [
        {icon: '', type: 'text', placeholder: '请输入真实姓名', errMsg: '', value: '', maxLength: 10},
        {icon: '', type: 'text', placeholder: '请输入身份证号码', errMsg: '', value: '', maxLength: 18},
        {icon: '', type: 'tel', placeholder: '请输入手机号', errMsg: '', value: '', maxLength: 11},
        // {icon: '', type: 'tel', placeholder: '请输入验证码', errMsg: '', value: '', maxLength: 6, extend: {html: '<a>免费获取验证码</a>', fn: ''}},
        {icon: '', type: 'password', placeholder: '请输入密码', errMsg: '', value: '', maxLength: 20},
        {icon: '', type: 'password', placeholder: '请再次输入密码', errMsg: '', value: '', maxLength: 20},
        {icon: '', type: 'text', placeholder: '请输入昵称', errMsg: '', value: '', maxLength: 20}
      ]
    }
  },
  methods: {
    handleInput (index, val) {
      let err = ''
      switch (index) {
        case 0:
          if (val && val.length < 2) {
            err = '真实姓名不合格'
          }
          break
        case 1:
          if (val && !/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(val)) {
            err = '身份证号码不正确'
          }
          break
        case 2:
          if (val && !/^[1][3,4,5,7,8,9][0-9]{9}$/.test(val)) {
            err = '手机号码不正确'
          }
          break
        case 3:
          if (val && val.length < 6) {
            err = '密码不能少于6位数'
          }
          break
        case 4:
          if (val && val.length < 6) {
            err = '密码不合格'
          } else if (val && val !== this.textList[index - 1].value) {
            err = '两次密码不一致'
          }
          break
        case 5:
          if (val && val.length < 2) {
            err = '昵称太短'
          }
          break
        default:
          break
      }
      this.textList[index].errMsg = err
    },
    register () {
      if (!this.agreed) {
        alert('请先阅读并同意《用户服务协议》')
      } else {
        let err = ''
        this.textList.forEach(i => {
          if (i.errMsg) {
            err += i.errMsg + '，'
          }
        })
        if (err) {
          alert(err.substr(0, err.length - 1))
        } else if (this.textList[3].value !== this.textList[4].value) {
          alert('两次密码不一致')
        } else {
          let data = {
            realName: this.textList[0].value,
            code: this.textList[1].value,
            phone: this.textList[2].value,
            psd: this.textList[3].value,
            nickName: this.textList[5].value
          }
          this.$store.dispatch('signUp', data).then((res) => {
            alert(res.msg)
            this.$router.replace('/signIn')
          }).catch(err => {
            alert(err.message || err)
            console.log(err)
          })
        }
      }
    }
  }
}
</script>

<style lang="less" type="text/less">

</style>
