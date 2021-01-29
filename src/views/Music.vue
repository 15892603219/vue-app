<template>
  <div class="main">
    <div class="box">
      <aplayer :audio="audio" :lrcType="0"  />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import APlayer from "@moefe/vue-aplayer";

Vue.use(APlayer, {
  defaultCover: "https://github.com/u3u.png",
  productionTip: true,
});
export default {
  name: "Music",
  created() {
    this.getdata();
  },
  data() {
    return {
      audio: [],
      playList: [],
    };
  },
  methods: {
    getdata() {
      this.axios
        .get("https://bird.ioliu.cn/netease/playlist?id=746872")
        .then((res) => {
          console.log(res);
          this.playList = res.data.playlist.tracks;
          this.audio = this.playList.map((element,index) => {
            this.getSong(element.id,index);
            return {
              name: element.name,
              artist: "张学友",
              url: this.mp3Url,
              cover: element.al.picUrl,
              id: element.id,
            };
          });
        });
    },
    getSong(id, index) {
      this.axios
        .get("https://bird.ioliu.cn/netease/song?id=" + id)
        .then((res) => {
          this.audio[index].url = res.data.data.mp3.url;
        });
    },
  },
};
</script>
<style>
.box {
  position: absolute;
  top: 50px;
  width: 375px;
}
</style>