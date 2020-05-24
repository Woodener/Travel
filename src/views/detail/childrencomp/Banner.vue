<!--  -->
<template>
  <div>
    <div class="banner" @click="bannerClick">
      <img
        class="banner-img"
        :src="bannerImg"
        alt
      />
      <div class="banner-info">
        <div class="banner-tittle">{{ this.sightName }}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe616;</span>
          {{ this.gallaryImgs.length }}
        </div>
      </div>
    </div>
    <fade>
      <gallary :imgs="gallaryImgs" v-show="showGallary" @close="gallaryClose" />
    </fade>
  </div>
</template>

<script>
import Gallary from "components/common/gallary/Gallary";
import Fade from "components/common/fade/Fade"
export default {
  components: {
    Gallary,
    Fade
  },
  props: {
    sightName: {
      type: String
    },
    bannerImg: {
      type: String
    },
    gallaryImgs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      showGallary: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    bannerClick() {
      this.showGallary = !this.showGallary;
    },
    gallaryClose() {
      this.showGallary = !this.showGallary;
    }
  },
  created() {},
  mounted() {},
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
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
}

.banner-img {
  width: 100%;
}

.banner-info {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 0.6rem;
  color: #fff;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
}

.banner-tittle {
  flex: 1;
  font-size: 0.32rem;
  padding: 0 0.2rem;
}

.banner-number {
  height: 0.32rem;
  padding: 0 0.4rem;
  margin-top: 0.14rem;
  line-height: 0.32rem;
  border-radius: 0.2rem;
  background: rgba(0, 0, 0, 0.8);
  font-size: 0.24rem;
}

.banner-icon {
  font-size: 0.24rem;
}
</style>