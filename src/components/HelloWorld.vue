<template>
  <header>
    <span @click="goHome">《 首页</span>
    {{curMenu.name}}
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["curMenu"]),
  },
  methods: {
    ...mapMutations(["setCurMenu"]),
    goHome() {
      this.$router.push("/");
       this.setCurMenu({
        name: "剧集",
        
      });
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background: #a1beb1;
  font-weight: bold;
  height: 50px;
  width: 100%;
  line-height: 50px;
  position: fixed;
  top:0;
  text-align: center;
  font-size: 20px;
  span{
    position: absolute;
    left: 0;
    font-size: 16px;
  }
  }

</style>