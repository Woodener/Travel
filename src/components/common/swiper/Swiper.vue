<!--  -->
<template>
  <div class="wrapper">
    <swiper class="swiper" :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item in swiperList" :key="item.index">
        <img class="swiper-img" :src="item.imgUrl" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        autoplay: 2000,
        loop: true
      }
    };
  },
  props: {
    swiperList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    showSwiper() {
      return this.swiperList.length
    }
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
.wrapper >>> .swiper-pagination-bullet-active {
  background-color: #ffffff;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.2%;
  background-color: #eee;
}

.swiper-img {
  width: 100%;
}
</style>