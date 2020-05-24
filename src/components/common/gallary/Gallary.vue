<!--  -->
<template>
  <div class="container" @click="gallaryClick">
    <div class="wrapper">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="item in imgs" :key="item.index">
            <img class="swiper-img" :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
      imgs: {
          type: Array,
          default() {
              return []
          }
      }
  },
  data() {
    return {
        swiperOption: {
            pagination: '.swiper-pagination',
            paginationType : 'fraction',
            observer:true,
            observeParents:true,
            loop: true
        }
    };
  },
  computed: {},
  watch: {},
  methods: {
      gallaryClick() {
          this.$emit('close')
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
.container >>> .swiper-container {
    overflow: inherit
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
}

.wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background-color: #fff
}
.swiper-img {
    width: 100%
    // height 100%
}
.swiper-pagination {
    color #fff
    bottom -1rem
}
</style>