<template>
  <div>
    <header-search :right_icon='true' :search='true'></header-search>
    <div class="content">
        <!-- 轮播图 -->
        <div class="swipe">
            <div class="mint-swipe">
                <div class="swipe-img">
                    <van-swipe class="my-swipe" :autoplay="3000">
                        <van-swipe-item v-for="(image, index) in bannersList" :key="index">
                            <img v-lazy="image.photo.large" />
                        </van-swipe-item>
                    </van-swipe>
                </div>
            </div>
            <div class="swipe-botton"></div>
        </div>
        <!-- 4宫格 -->
        <div class="home-menu">
            <div class="menu-item">
                <img class="item-icon" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1037758556,623700135&fm=26&gp=0.jpg" />
                <div class="item-text">热卖</div>
            </div>
            <div class="menu-item">
                <img class="item-icon" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1966856878,816549240&fm=26&gp=0.jpg" />
                <div class="item-text">手机</div>
            </div>
            <div class="menu-item">
                <img class="item-icon" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2491162662,1757694401&fm=26&gp=0.jpg" />
                <div class="item-text">红包</div>
            </div>
            <div class="menu-item">
                <img class="item-icon" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3808236042,1207888271&fm=26&gp=0.jpg" />
                <div class="item-text">积分</div>
            </div>
        </div>
        <!-- 爆款推荐 -->
        <div class="baokuan">
            <div class="title">爆款推荐</div>
            <div class="hot-recommend">
                <div class="left">
                    <img class="hot-recommend-image" src="https://t12.baidu.com/it/u=1158545884,140510399&fm=30&app=106&f=JPEG?w=312&h=208&s=208B9C5D02234B153E9DA0E80300D01B" />
                    <img class="hot-recommend-image" src="https://pics5.baidu.com/feed/1b4c510fd9f9d72ae5dc6feff767753c359bbb59.png?token=8a263093d980febea90616c38b928807" />
                </div>
                <div class="right">
                    <img class="hot-recommend-image" src="https://t12.baidu.com/it/u=1158545884,140510399&fm=30&app=106&f=JPEG?w=312&h=208&s=208B9C5D02234B153E9DA0E80300D01B" />
                    <img class="hot-recommend-image" src="https://pics5.baidu.com/feed/1b4c510fd9f9d72ae5dc6feff767753c359bbb59.png?token=8a263093d980febea90616c38b928807" />
                </div>
            </div>
        </div>
        <!-- 精品推荐, 新品上架, 销量排行 -->
        <div class="baokuan" v-for="(item, index) in productObj" :key="index">
            <div class="title">{{item.name}}</div>
            <div class="rf-floor-index">
                <div class="product-item-main" v-for="(child, index) in productDataList[item.type]" :key="index" @click="goodsDesc(child)">
                    <div class="item-photo">
                        <img :src="child.default_photo.large" lazy="loaded">
                    </div>
                    <div class="item-name">{{child.name}}</div>
                    <div class="item-current-price">
                        ￥{{child.current_price}}
                        <span class="item-price">￥{{child.price}}</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 到底了 -->
        <div class="to-fotter">
            ----全部加载完成----
        </div>
    </div>
  </div>
</template>

<script>
import headerSearch from './header'
import { banners, productDataList } from '@/api/app'
export default {
    components: {headerSearch},
    data(){
        return {
            bannersList:[],
            productObj:[
                {
                    type: 'good_products',
                    name: '精品推荐'
                },
                {
                    type: 'hot_products',
                    name: '新品上架'
                },
                {
                    type: 'recently_products',
                    name: '销量排行'
                }
            ],
            productDataList: []
        }
    },
    methods: {
        // 跳转详情页,带参数过去
        goodsDesc(params){
            console.log(params)
            this.$router.push({
                name: `details`,
                query: {
                    id: params.id
                }
            })
        }
    },
    mounted(){
        banners().then((res) => {
            console.log(res)
            this.bannersList = res.data.banners
        })
        productDataList().then((res) => {
            console.log(res)
            this.productDataList = res.data
        })
    }
}
</script>

<style scoped lang="scss">
// 主内容
.content{
    width: 100%;
    margin-top: 9.33vw;
    padding-bottom: 12vw;
    .swipe{
        height: 45vw;
        position: relative;
        background-color: #f3424c;
        .mint-swipe{
            height: 45vw;
            width: 100%;
            .swipe-img{
                height: 100%;
                position: absolute;
                z-index: 99;
                top: 0.8vw;
                right: 4vw;
                left: 4vw;
                bottom: 0;
                .van-swipe-item{
                    width: 100%;
                    height: 45vw;
                    img{
                        width: 100%;
                        height: 45vw;
                        object-fit: cover;
                        border-radius: 2vw;
                    }
                }
            }
        }
        .swipe-botton{
            width: 100%;
            height: 5vw;
            bottom: -1vw;
            position: absolute;
            border-radius: 4vw 4vw 0 0;
            background: #fff;
        }
    }
    // 4宫格
    .home-menu{
        display: flex;
        justify-content: space-around;
        margin-top: 5.33vw;
        .menu-item{
            width: 20%;
            height: 20vw;
            display: flex;
            flex-direction: column;
            justify-content:  center;
            align-items: center;
            .item-icon{
                width: 60%;
                height: 60%;
                border-radius: 50%;
                background: #f2f2f2;
                align-content : center;
                margin-bottom: 2.66vw;
            }
            .item-text{
                font-size: 3.2vw;
            }
        }
    }
    /* 爆款推荐 */
    .baokuan{
        .title{
            margin-left: 4vw;
            margin-top: 4vw;
            font-weight: 600;
            text-align: center;
        }
        .hot-recommend {
            display: flex;
            padding: 4vw 4vw 0 4vw;
            .hot-recommend-image {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .left {
                margin-right: 4vw;
                .hot-recommend-image {
                    height: 26.4vw;
                    object-fit: cover;
                    margin-bottom: 2vw;
                }
            }
            .right {
                .hot-recommend-image {
                    height: 26.4vw;
                    object-fit: cover;
                    margin-bottom: 2vw;
                }
            }
        }
    }
    // 新品上市
    .rf-floor-index{
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex-wrap: wrap;
        padding: 0 3%;
        box-sizing: border-box;
        .product-item-main{
            width: 48.5%;
            height: 60vw;
            margin-top: 4vw;
            .item-photo{
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .item-name{
                display: block;
                width: 100%;
                height: 3.733vw;
                text-align: left;
                padding-left: 1.066vw;
                color: #404245;
                font-size: 3.733vw;
                font-weight: 400;
                line-height: 3.9vw;
                overflow: hidden;
                margin-top: 2vw;
            }
            .item-current-price{
                margin-top: 2.66vw;
                color: #f3424c;
                font-size: 3.2vw;
                .item-price{
                    font-size: 3.2vw;
                    color: #999;
                    text-decoration: line-through;
                }
            }
        }
    }
    .to-fotter{
        line-height: 10vw;
        text-align: center;
        color: #999;
        font-size: 12px;
    }
}
</style>