<!--  -->
<template>
  <ul class="list">
    <li
      class="item"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >{{ item }}</li>
  </ul>
</template>

<script>
import { debounce } from "common/utils";
export default {
  components: {},
  props: {
    cities: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  watch: {},
  methods: {
    handleLetterClick(item) {
      // console.log(item.target.innerText);
      this.$bus.$emit("message", item.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 20);
          console.log(index);
          if (index >= 0 && index < this.letters.length) {
            this.$bus.$emit("message", this.letters[index]);
          }
        },16);
        // debounce(() => {
        //   const touchY = e.touches[0].clientY - 79;
        //   const index = Math.floor((touchY - this.startY) / 20);
        //   console.log(index);
        //   if (index >= 0 && index < this.letters.length) {
        //     this.$bus.$emit("message", this.letters[index]);
        //   }
        // },16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  beforeDestroy() {},
  destroyed() {},
  activated() {}
};
</script>
<style lang="stylus" scoped>
@import '~assets/iconfont/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
}

.item {
  line-height: 0.4rem;
  text-align: center;
  color: $bgColor;
}
</style>