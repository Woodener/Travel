<!--  -->
<template>
  <div>
    <home-header>
      <div slot="left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div slot="center" class="iconcenter">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
      </div>
      <div slot="right" @click="cityClick">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </home-header>
    <swiper :swiper-list="swiperList" />
    <icons :icon-list="iconList" />
    <recommend :recommend="recommendList"/>
    <weekend :weekend-list="weekendList" />
  </div>
</template>

<script>
import homeHeader from "components/common/navbar/homeHeader";
// import homeSwiper from "views/home/childrencomp/homeSwiper";
import Swiper from "components/common/swiper/Swiper";

// import homeIcons from "views/home/childrencomp/homeIcons";
import Icons from "components/content/icons/Icons";
import Recommend from "components/content/recommend/Recommend";
// import homeWeekend from "views/home/childrencomp/homeWeekend";
import Weekend from "components/content/weekend/Weekend";
import axios from "axios";
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    homeHeader,
    Swiper,
    // homeSwiper,
    // homeIcons,
    Icons,
    Recommend,
    // homeWeekend
    Weekend
  },
  data() {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: []
    };
  },
  computed: {
    ...mapState(["city"]),
    ...mapGetters(['doubleCity']),
  },
  watch: {},
  methods: {
    getCityInfo() {
      axios.get("api/city.json").then(res => {
        res = res.data;
        if (res.ret && res.data) {
        }
      });
    },
    getHomeInfo() {
      axios.get("api/index.json?city="+this.city).then(res => {
        // console.log(res);
        res = res.data;
        if (res.ret && res.data) {
          this.swiperList = res.data.swiperList;
          this.iconList = res.data.iconList;
          this.recommendList = res.data.recommendList;
          this.weekendList = res.data.weekendList;
        }
      });
    },
    cityClick() {
      this.$router.push("/city").catch(() => {});
    },
  },
  created() {},
  mounted() {
    this.getCityInfo();
    this.getHomeInfo();
    // console.log('mounted');
    this.lastCity = this.city
    
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {
    // console.log('actived');
    if (this.lastCity !== this.city){
      this.lastCity = this.city
      this.getHomeInfo()
    }
    
  }
};
</script>
<style lang="stylus" scoped>
.back-icon {
  text-align: center;
  font-size: 0.4rem;
}

.iconcenter {
  padding-left: 0.2rem;
}

.arrow-icon {
  font-size: 0.24rem;
  margin-left: -0.04rem;
}
</style>