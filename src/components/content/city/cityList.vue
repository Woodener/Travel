<!--  -->
<template>
  <div class="city-list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="(item, index) in hotCities"
            :key="index"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{ item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            class="item border-topbottom"
            v-for="inneritem in item"
            :key="inneritem.id"
            @click="handleCityClick(inneritem.name)"
          >{{ inneritem.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapState, mapMutations } from 'vuex'
export default {
  components: {},
  props: {
    hotCities: {
      type: Array,
      default() {
        return [];
      }
    },
    cities: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      scroll: null,
      alphabet: "",
      element: null
    };
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  watch: {
    alphabet() {
      if (this.alphabet) {
        this.element = this.$refs[this.alphabet][0];
        this.scroll.scrollToElement(this.element);
      }
    }
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(['changeCity'])
  },
  created() {},
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {});
    this.$bus.$on("message", res => {
      // console.log(res);

      this.alphabet = res;
    });
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
@import '~assets/iconfont/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.city-list {
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  height: 100%;
  overflow: hidden;
}

.title {
  line-height: 0.54rem;
  background-color: #eee;
  padding-left: 0.2rem;
  color: #666;
  font-size: 0.26rem;
}

.button-list {
  overflow: hidden;
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
}

.button-wrapper {
  float: left;
  width: 33.33%;
}

.button {
  margin: 0.1rem;
  padding: 0.1rem 0;
  text-align: center;
  margin: 0.1rem;
  border: 0.02rem solid #ccc;
  border-radius: 0.06rem;
}

.item {
  line-height: 0.76rem;
  padding-left: 0.2rem;
}
</style>