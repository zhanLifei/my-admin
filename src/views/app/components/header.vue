<template>
  <!-- 头部 -->
    <header class="header fixed-top" :style="background">
        <van-icon name="arrow-left" class="arrow-left" v-if="left_icon"></van-icon>
        <div class="search" v-if="search">
            <van-icon name="search" class="search-icon"></van-icon>
            <span class="search-text">请输入您要搜索的商品</span>
        </div>
        <div class="title" v-if="title.length > 0 ? true: false ">{{title}}</div>
        <van-icon name="chat-o" class="arrow-right" v-if="right_icon"></van-icon>
    </header>
</template>

<script>
export default {
    props:{
        // 背景颜色
        background:{
            type: String,
            default: 'background-color: #f3424c'
        },
        title:{
            type: String,
            default: ''                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
        },
        left_icon:{
            type: Boolean,
            default: false
        },
        right_icon:{
            type: Boolean,
            default: false
        },
        search:{
            type: Boolean,
            default: false
        }
    },
    data(){
        return{

        }
    }
}
</script>

<style scoped lang="scss">
// 头部
.header.fixed-top{
    position: fixed!important;
    top: 0!important;
    bottom: auto!important;
    z-index: 100;
    width: 100%;
    height: 10.2vw!important;
    box-sizing: border-box;
    border-bottom: none!important;
    box-shadow: none!important;
    display: flex;
    justify-content: space-between;
    .arrow-left,.arrow-right{
        line-height: 10vw;
        font-size: 5vw;
        color: #fff;
    }
    .arrow-right{
        margin-right: 1.5vw;
    }
    .search{
        position: relative;
        height: 7.7333vw;
        margin: 1.333vw;
        box-sizing: border-box;
        overflow: hidden;
        background-color: #f2f2f2;
        border-radius: 4vw;
        flex:1;
        .search-icon{
            position: absolute;
            top: 1.5vw;
            left: 2vw;
            font-size: 4.3vw;
        }
        .search-text {
            width: 100%;
            height: 7.733vw;
            margin: 0 auto;
            padding-left: 8vw;
            color: #a2a6ad;
            font-size: 3.2vw;
            font-weight: 400;
            line-height: 7.733vw;
        }
    }
    .title{
        line-height: 10.2vw;
        color: #fff;
        font-size: 4vw;
    }
}

</style>