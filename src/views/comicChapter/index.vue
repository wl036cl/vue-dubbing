<template>
<div class="chapter-wrap">
  <ChapterInfo v-if="chapterList.length!==0" class="info-wrap" :info="comic" :cid="cid" :cfid="chapterList[0].id"></ChapterInfo>
  <ChapterList :cid="cid" :list="chapterList"></ChapterList>
</div>
</template>

<script>
import ChapterList from './components/ChapterList'
import ChapterInfo from './components/ChapterInfo'
import {getUrl} from '@/utils/fullUrl'
export default {
  name: 'ComicChapter',
  components: {ChapterList, ChapterInfo},
  data () {
    return {
      page: 1,
      cid: Number(this.$route.params.cid),
      comic: null,
      chapterList: []
    }
  },
  mounted () {
    if (this.page && this.cid) {
      this.$store.dispatch('getComicChapterList', {page: this.page, cid: this.cid}).then((res) => {
        this.setModel(res.comic)
        this.setList(res.data)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  methods: {
    setModel (m) {
      if (m) {
        this.comic = {
          cid: m.Id,
          img: getUrl(m.ImgUrl),
          title: m.Title,
          desc: m.Summary,
          author: m.Remark.hasOwnProperty('author') ? (m.Remark.author) : '匿名',
          type: m.Remark.hasOwnProperty('type') ? (m.Remark.type) : '无',
          playCount: m.PlayCount
        }
      }
    },
    setList (data) {
      if (data && data.length) {
        this.chapterList = data.map(i => {
          return {id: i.Id, title: i.Title}
        })
      }
    }
  }
}
</script>

<style scoped lang="less" type="text/less">
.chapter-wrap{
  width:850px;margin: 0 auto;
}
  .info-wrap{
    margin-bottom: 40px;
  }
</style>
