<template>
  <div class="main">
    <h1>书籍</h1>
    <div class="cycle" v-loading.fullscreen="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
    <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in imgList" :key="item">
      <img :src="'https://images.weserv.nl/?url=' + item" alt="">
    </el-carousel-item>
  </el-carousel>
  </div>
    <div class="book-list">
      <el-tabs
        v-model="activeName"
        :stretch="true"
        @tab-click="changeList"
      >
        <el-tab-pane
          label="虚构类"
          name="book_fiction"
        ></el-tab-pane>
        <el-tab-pane
          label="非虚构类"
          name="book_nonfiction"
        ></el-tab-pane>
      </el-tabs>
     <div
          class="book-item"
          v-for="book in bookList"
          :key="book.id"
        >
          <div class="img-box">
            <img
              :src="'https://images.weserv.nl/?url=' + book.cover.url"
              alt=""
            >
          </div>
          <div class="content">
            <p id="title">{{book.title}}</p>
            <p id="info">{{book.info}}</p>
            <el-rate
              :value="book.rating.value/2"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            >
            </el-rate>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Book",
  created() {
    this.getData();
  },
  data() {
    return {
      imgList: [],
      bookList: [],
      activeName: "book_fiction",
      loading: false,
    };
  },
  methods: {
    getData() {
      this.loading = true;
      this.axios
        .get(
          "https://bird.ioliu.cn/v2?url=https://m.douban.com/rexxar/api/v2/subject_collection/" +
            this.activeName +
            "/items?start=0&count=8"
        )
        .then((res) => {
          this.bookList = res.data.subject_collection_items;
          this.imgList = this.bookList.map((item) => {
            return item.cover.url;
          });
          this.loading = false ;
        });
    },
    changeList() {
      this.getData();
    },
  },
};
</script>

<style lang="scss" scoped>
.main{
  margin: 0 15px;
}
.cycle{
  position: relative;
  top:50px;
}
.el-carousel__item {
  img {
    width: 100%;
  }
}
.book-list{
  position: relative;
  top:60px;

}
.book-item {
  display: flex;
  padding: 10px 0;
  border-bottom: #548977 1px solid;
  .img-box {
    flex: 3;
    img {
      width: 100%;
      height: 202px;
    }
  }
  .content {
    flex: 5;
    text-align: center;
    
    #title{
    font-weight: bold;
  }
  }
  .content #info{
    font-size: 14px;
  }
}

</style>