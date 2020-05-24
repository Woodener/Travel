<!--  -->
<template>
  <div>
      <transition>
          <slot></slot>
      </transition>
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
    .v-enter, .v-leave-to {
        opacity 0
    }
    .v-enter-active, .v-leave-active {
        transition opacity  .5s
    }
</style>