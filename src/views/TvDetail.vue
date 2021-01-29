<template>
    <div>
        <div class="content">
            <h1>{{this.tvobj.title}}</h1>
            <p>{{this.tvobj.info}}</p>
        </div>
        <div class="img">
            <img :src="'https://images.weserv.nl/?url='+this.tvobj.img" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tvobj:{
                img:'',
                title:'',
                info:''
            }
        }
    },
    created() {
        this.getData();
    },
    methods: {
        getData(){
            this.axios.get('https://bird.ioliu.cn/v2?url=https://m.douban.com/rexxar/api/v2/tv/'+this.$route.params.id
            ).then((res)=>{
                
                this.tvobj.img=res.data.cover_url;
                this.tvobj.title=res.data.title;
                this.tvobj.info=res.data.intro;
            });
        },
    },
}
</script>