<!--  -->
<template>
  <div class="city-header">
    <div class="iconfont back-icon" @click="backClick">&#xe624;</div>
    城市选择
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    backClick() {
      this.$router.push('/home')
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
@import '~assets/iconfont/varibles.styl';

.city-header {
  position relative
  overflow: hidden
  height: $headerHeight
  line-height: $headerHeight
  text-align: center
  color: #fff
  background-color: $bgColor
  font-size: 0.32rem
}

.back-icon {
  position absolute
  top 0
  left 0
  width .64rem
  text-align: center
  font-size: 0.4rem
}
</style>