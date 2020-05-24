<!--  -->
<template>
  <div class="header">
    <div class="left">
      <slot name="left"></slot>
      <!-- <div class="iconfont back-icon">&#xe624;</div> -->
    </div>
    <div class="center">
      <slot name="center"></slot>
      <!-- <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题 -->
    </div>
    <router-link to="/city">
      <div class="right">
        <slot name="right"></slot>
        <!-- {{ this.city }} -->
        <!-- <span class="iconfont arrow-icon">&#xe6aa;</span> -->
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    city: String
  },
  data() {
    return {};
  },
  computed: {
  },
  watch: {},
  methods: {},
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

.header {
  display: flex;
  height: 0.86rem;
  line-height: 0.86rem;
  background-color: $bgColor;
  color: #fff;
}

.left {
  width: 0.64rem;
}

.center {
  flex: 1;
  height: 0.64rem;
  margin: 0.12rem 0.2rem;
  background-color: #fff;
  border-radius: 0.1rem;
  color: #ccc;
  line-height: 0.64rem;
}

.right {
  min-width: 1.04rem;
  padding .1rem
  text-align: center;
  color: #fff
}
</style>