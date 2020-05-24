<!--  -->
<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link 
        class="item" 
        v-for="(item, index) in recommend" 
        :key="index"
        tag="li" 
        :to="'/detail/' + item.id">
        <img class="item-img" :src="item.imgUrl" alt />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    recommend: {
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
@import '~common/mixins.styl';

.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #ccc;
  text-indent: 0.2rem;
}

.item {
  display: flex;
  height: 2.4rem;
  // background-color: red;
  overflow: hiddem;
  border-bottom: 1px solid #eee;
}

.item-img {
  width: 2rem;
  hight: 2rem;
  padding: 0.1rem;
}

.item-info {
  flex: 1;
  padding: 0.1rem;
  min-width: 0;
}

.item-title {
  line-height: 0.54rem;
  font-size: 0.32rem;
}

.item-desc {
  line-height: 0.4rem;
  color: #ccc;
  ellipsis();
}

.item-button {
  margin-top: 0.2rem;
  background: #ff9300;
  padding: 0 0.2rem;
  border-radius: 0.06rem;
  color: #fff;
}
</style>