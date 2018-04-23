<template>
  <div class="recharge">
    <h1>会员续费</h1>
    <ul class="recharge-ul">
      <li v-for="(i,index) in list" :key="index" :class="{active:i.checked}" @click="choose(index)">
        <p class="price">￥{{i.price}}</p>
        <p class="old-price" :class="{hide:i.oldPrice===i.price}">{{i.oldPrice}}</p>
        <p class="desc">{{i.desc}}</p>
      </li>
    </ul>
    <a class="btn green-btn" @click="recharge">购买</a>
  </div>
</template>

<script>
export default {
  name: 'Recharge',
  data () {
    return {
      list: [
        {price: '19.8', oldPrice: '19.8', desc: '包月', checked: false},
        {price: '58', oldPrice: '60', desc: '包季', checked: false},
        {price: '220', oldPrice: '240', desc: '包年', checked: false}
      ]
    }
  },
  methods: {
    choose (index) {
      this.list.map((i, _index) => {
        i.checked = index === _index
        return i
      })
      console.log(this.list)
    },
    recharge () {
      let item = this.list.find((i) => {
        return i.checked
      })
      if (item) {
        console.log(this)
        window.location.href = 'https://auth.alipay.com/login/index.htm'
      } else {
        alert('请选择类型')
      }
    }
  }
}
</script>

<style scoped lang="less" type="text/less">
  @green-bg:#1abc9c;
.recharge{
  width:800px;
  margin:0 auto;
  background-color: #fff;
  padding:45px 0 150px;
  text-align: center;
}
  h1{
    font-size:32px;
  }
  .recharge-ul{
    width: 96%;
    margin:72px auto 100px;
    text-align: left;
    li{
      padding:15px 0 12px;
      display: inline-block;
      border:1px solid rgb(204,204,204);
      border-radius: 7px;
      width:26%;
      margin-left: 5%;
      text-align: center;
      cursor: pointer;
      overflow: hidden;
    }
  }

.hide{
  text-indent: -9999px;
}
  .price{
    color:#fc0;
    font-size: 48px;
  }
  .old-price{
    font-size: 16px;
    line-height: 16px;
    color:#949494;
    padding:12px 0;
    text-decoration: line-through;
  }
  .desc{
    font-size: 24px;
  }
.active{
  background-color: @green-bg ;
  .old-price{
    color:#eee;
  }
  .desc{
    color:#fff;
  }
}
  .green-btn{
    width: 260px;
    height: 34px;
    line-height: 34px;
    background-color:  @green-bg;
    border-radius: 90px;
    font-size: 16px;
    color: #fff;
  }
</style>
