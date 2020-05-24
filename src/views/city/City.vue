<!--  -->
<template>
  <div>
    <city-header />
    <city-search :cities="cities"/>
    <city-list :cities="cities" :hot-cities="hotCities"/>
    <alphabet :cities="cities"/>
  </div>
</template>

<script>
import cityHeader from "components/content/city/cityHeader";
import citySearch from "components/content/city/citySearch";
import cityList from "components/content/city/cityList";
import Alphabet from "components/content/city/Alphabet";
import { getCitydata } from "network/city"
export default {
  components: {
    cityHeader,
    citySearch,
    cityList,
    Alphabet
  },
  data() {
    return {
      cities: {},
      hotCities: []
    };
  },
  computed: {},
  watch: {},
  methods: {
    getCitydata() {
      getCitydata().then(res => {
      // console.log(res);
      res= res.data
      if(res.ret && res.data) {
        this.cities = res.data.cities
        this.hotCities = res.data.hotCities
      }
      
    })
    }
  },
  created() {},
  mounted() {
    this.getCitydata()
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
<style lang="stylus" scoped></style>