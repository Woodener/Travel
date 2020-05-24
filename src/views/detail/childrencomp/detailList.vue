<!--  -->
<template>
  <div>
    <div class="item" v-for="item in list" :key="item.index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{ item.title }}
      </div>
      <div v-if="item.children" class="item-children">
          <detail-list :list="item.children"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailList',
  components: {},
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
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
.item-title {
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.32rem;
  padding: 0 0.2rem;
}

.item-title-icon {
  position relative
  left .06rem
  top .06rem
  display: inline-block;
  width: 0.36rem;
  height: 0.36rem;
  background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat; 
  background-size: 0.4rem 3rem;
}
.item-children {
    padding 0 .2rem
}
</style>