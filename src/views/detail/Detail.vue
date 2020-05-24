<!--  -->
<template>
  <div>
    <banner :sight-name="sightName" :banner-img="bannerImg" :gallary-imgs="gallaryImgs"/>
    <detail-header/>
    <div class="content">
      <detail-list :list="list"/>
    </div>
  </div>
</template>

<script>
import Banner from 'views/detail/childrencomp/Banner'
import detailHeader from 'views/detail/childrencomp/detailHeader'
import detailList from 'views/detail/childrencomp/detailList'
import { getDetails } from 'network/city'
export default {
  name: 'Detail',
  components: {
    Banner,
    detailHeader,
    detailList
  },
  data() {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: [],
      id: null
    };
  },
  computed: {},
  watch: {},
  methods: {
    getDetails() {
      getDetails(this.$route.params.id).then(res => {
        res = res.data;
        if (res.ret && res.data) {
          const data =res.data
          console.log(data);
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.list = data.categoryList
        }
        
      })
    }
  },
  created() {},
  mounted() {
    this.getDetails()
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {}
};
</script>
<style lang="stylus" scoped>
  .content {
    height: 50rem;
  }
</style>