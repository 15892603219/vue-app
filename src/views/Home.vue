<template>
  <div class="home">
    <!-- <HelloWorld/>; -->
    <div v-for="tv in tvList" :key="tv.id" class="tv" @click="getDetail(tv.id,event)">
      
      <!-- <div class="img">
        <img :src="imgs" alt="" width="110px" height="168px" />
      </div> -->
      <div class="img">
        <img :src="'https://images.weserv.nl/?url='+tv.cover.url" alt="" width="110px" height="168px">
      </div>
      <div class="info">
        <p id="title">{{tv.title}}</p>
        <p id="info">{{tv.info}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";
// import yang from "@/assets/imgs/yangguangzhixia.png";
// import shan from "@/assets/imgs/shanhaiqing.png";
// import qi from "@/assets/imgs/qihun.png";

export default {
  name: "Home",
  // components: {
  //   HelloWorld,
  // },
   created() {
      this.getData();
    },
    mounted() {
      this.lazyLoad();
    },
  methods: {
    getData() {
      this.axios
        .get(
          "https://bird.ioliu.cn/v2?url=https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?&start=0&count=18 ",
        // {
        //   params:{
        //     start:this.start,
        //     count:10
        //   }
        // }
        )
        
        .then((res) => {
        this.tvList=res.data.subject_collection_items;
        });
    },
     getDetail(id) {
          this.$router.push('/tvDetail/'+id);
        },
    // lazyLoad(){
    //   let htmlDom=document.documentElement;
    //   let fullHeight=0;

    //   let deviceHeight=htmlDom.clientHeight;
    //   console.log(deviceHeight);

    //   let scrollHeight=0;
    //   window.onscroll= () => {
    //     fullHeight=htmlDom.offsetHeight;
    //     scrollHeight=htmlDom.scrollTop;
    //     console.log(scrollHeight);
    //     console.log(fullHeight);

    //     if(fullHeight=deviceHeight+scrollHeight){
    //       this.start++;
    //       this.getData();
    //     }
    //   };
    // },
  },
  data() {
    return {
      start:0,
      tvList: [
        // {
        //   path: "/a",
        //   name: "阳光之下",
        //   info: "中国大陆 / 爱情 犯罪 悬疑 / 闫宇彤 / 蔡文静 刘凯",
        //   imgs: yang,
        // },
        // {
        //   path: "/b",
        //   name: "山海情",
        //   info: "中国大陆 / 剧情 / 孔笙 / 黄轩 张嘉益",
        //   imgs: shan,
        // },
        // {
        //   path: "/c",
        //   name: "棋魂 ",
        //   info: "中国大陆 / 剧情 奇幻 运动 / 刘畅 / 胡先煦 张超",
        //   imgs: qi,
        // },
        // {
        //   path: "/d",
        //   name: "暗黑",
        //   info:
        //     "德国 / 科幻 悬疑 / 巴伦·博·欧达尔 / 奥利弗·马苏奇 卡罗利内·艾希霍恩",
        // },
      ],
    };
  },
};
</script>
<style>
/* .home {
  margin: 15px;
}
.tv {
  position: relative;
  top: 20px;
}
.tv a {
  text-decoration: none;
  color: #2c3e50;
  display: block;
  text-align: center;
  position: relative;
  top: 35px;
}
#name a {
  font-weight: bold;
}
#info a {
  font-size: 14px;
}
.tv {
  display: flex;
} */
.home{
  margin: 0 15px;
}
.tv{
  display: flex;
  position: relative;
  top:50px;
  padding: 10px 0;
  border-bottom: rgb(143, 188, 171) 1px solid;
}
.info{
  margin: 0 10px;
}
.info p{
  display: block;
  text-align: center;
  position: relative;
  top: 35px;
}
.info #title{
  font-weight: bold;
}
.info #info{
  font-size: 14px;
}
</style>