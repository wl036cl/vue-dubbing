<template>
  <div class="home">
    <h1>热门推荐</h1>
  <CoverList :list="list"></CoverList>
  </div>
</template>

<script>
import CoverList from '@/components/CoverList'
import {getUrl} from '@/utils/fullUrl'
export default {
  name: 'Home',
  components: {CoverList},
  data () {
    return {
      page: 1,
      list: []
    }
  },
  mounted () {
    this.$store.dispatch('getComicList', this.page).then((res) => {
      this.setList(res)
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    setList (data) {
      if (data && data.length) {
        data = data.map(i => {
          return {id: i.Id, img: getUrl(i.ImgUrl), title: i.Title, updateCount: i.UpdateNum}
        })
        this.list = data.slice(0, 5)
      }
    }
  }
}
</script>

<style scoped lang="less" type="text/less">
h1{
  color: #333;
  width: 219px;
  padding-bottom: 5px;
  margin-bottom: 44px;
  font-size: 32px;
  border-bottom: 1px solid rgb(26,188,156);
}
</style>
