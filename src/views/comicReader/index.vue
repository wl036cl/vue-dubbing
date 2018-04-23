<template>
  <div class="reader-wrap">
    <div v-if="comic!=null&&chapter!=null" class="nav-wrap">
      <router-link to="/home">主页</router-link>
      <span>></span>
      <router-link :to="'/chapter/'+this.cid">{{comic.name}}</router-link>
      <span>></span>
      <span>{{chapter.name}}</span>
    </div>
    <div class="swipe-wrap">
      <div class="around-wrap">
        <!--<a class="btn btn-pre">上一页</a>-->
        <select ref="pageSelect" v-model="imgIndex">
          <option v-for="(i,index) in imgList" :key="index" :value="(index)">第{{index+1}}/{{totalCount}}页</option>
        </select>
        <!--<a class="btn btn-next">下一页</a>-->
      </div>
      <Swiper :list="imgList" :showIndicators="false" @change="handleChange"></Swiper>
    </div>
  </div>
</template>

<script>
import {getUrl} from '@/utils/fullUrl'
import {getComicImgList} from '@/api/comic'
import Swiper from '@/components/Swiper'
export default {
  name: 'ComicReader',
  components: {Swiper},
  data () {
    return {
      totalCount: 0,
      totalPage: 0,
      cid: Number(this.$route.params.cid),
      ccid: Number(this.$route.params.ccid),
      comic: null,
      chapter: null,
      imgIndex: 0,
      imgList: []
    }
  },
  mounted () {
    if (this.cid && this.ccid) {
      this.getImgList(1)
    }
  },
  methods: {
    handleChange (opt) {
      this.imgIndex = opt.next
    },
    setComic (data) {
      this.comic = {name: data.Title, id: this.cid}
    },
    setChapter (data) {
      this.chapter = {name: data.Title, id: this.ccid}
    },
    setList (data) {
      if (data && data.length) {
        this.imgList = data.map(i => {
          let arr = i.ImgUrl.split(',')
          return {id: i.Id, img: getUrl(arr[arr.length - 1]), sort: i.Sort}
        })
      }
    },
    getImgList (page) {
      if (page <= this.totalPage || this.totalPage === 0) {
        getComicImgList({cid: this.cid, ccid: this.ccid, page}).then(res => {
          res = res.data
          if (res.code === 1) {
            this.totalCount = res.totalCount
            this.totalPage = res.totalPage
            this.setComic(res.comic)
            this.setChapter(res.chapter)
            this.setList(res.data)
          } else {
            alert(res.hasOwnProperty('msg') ? res.msg : '服务器返回错误')
          }
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
}
</script>

<style scoped lang="less" type="text/less">
  @link-color:#3e3ea2;
  .reader-wrap {
    width: 100%;
    padding-bottom: 40px;
  }
.nav-wrap{
  a{color:@link-color}
}
  .around-wrap {
    text-align: center;
    margin: 45px auto 35px;
  }

  .btn {
    background-color: #fff;
    border-radius: 3px;
    font-size: 13px;
    width: 60px;
    height: 29px;
    line-height: 29px;
    border: 1px solid #949494;
  }

  .btn-pre {
    margin-right: 80px;
  }

  .btn-next {
    margin-left: 80px;
  }
  .swipe-wrap .swipe{
    height: 450px;
  }
</style>
