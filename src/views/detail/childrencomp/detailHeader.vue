<!--  -->
<template>
  <div>
    <div class="header-abs" @click="backClick" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </div>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <div class="iconfont header-fixed-back" @click="backClick">&#xe624;</div>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    backClick() {
      this.$router.push("/home");
    },
    handleScroll() {
      const top = document.documentElement.scrollTop
      // console.log(document.documentElement.scrollTop);
      if (top > 60 ) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1:opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
      
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
  activated() {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated() {
    window.removeEventListener('scroll', this.handleScroll)
  }
};
</script>
<style lang="stylus" scoped>
@import '~assets/iconfont/varibles.styl';
.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  border-radius: 0.4rem;
  background-color: rgba(0, 0, 0, 0.8);
}

.header-abs-back {
  color: #fff;
  font-size: 0.4rem;
}

.header-fixed {
  z-index 2
  position: fixed;
  // overflow: hidden;
  top 0;
  left 0;
  right 0;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  background-color: $bgColor;
  font-size: 0.32rem;
}
.header-fixed-back {
  position absolute
  top 0
  left 0
  width .64rem
  text-align: center
  font-size: 0.4rem
}
</style>