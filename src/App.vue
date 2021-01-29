<template>
  <div id="app">
    <HelloWorld/>
    <router-view />
    <div id="nav" >
      <router-link to="/">剧集</router-link>
      <!-- <router-link to="/about">About</router-link> -->
      <router-link to="/book">书籍</router-link>
      <router-link to="/music">音乐</router-link>
      <router-link to="/chat">聊天</router-link>
    </div>

  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld';
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["curMenu"]),
  },
  components:{
    HelloWorld,
  },
  methods: {
    ...mapMutations(["setCurMenu"]),
    switchMenu(menu) {
      this.setCurMenu(menu)
    },
  },
}
</script>
<style lang="scss">
#app {
  color: #2c3e50;
}
#nav {
  background: #a1beb1;
  display: flex;
  justify-content: space-around;
  height: 50px;
  width: 375px;
  line-height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
