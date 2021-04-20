<template>
  <div>
    <div class="content">
        <!-- 轮播图 -->
        <div class="swipe">
            <div class="mint-swipe">
                <div class="swipe-img">
                    <img src="https://pics5.baidu.com/feed/1b4c510fd9f9d72ae5dc6feff767753c359bbb59.png?token=8a263093d980febea90616c38b928807" alt="">
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
                    <img class="hot-recommend-image" src="https://pics0.baidu.com/feed/32fa828ba61ea8d3485a87dc7fca7f46241f5833.png?token=a78166cf99a09784050c8eba796b17a2" />
                </div>
                <div class="right">
                    <img class="hot-recommend-image" src="https://t12.baidu.com/it/u=1158545884,140510399&fm=30&app=106&f=JPEG?w=312&h=208&s=208B9C5D02234B153E9DA0E80300D01B" />
                    <img class="hot-recommend-image" src="https://pics5.baidu.com/feed/1b4c510fd9f9d72ae5dc6feff767753c359bbb59.png?token=8a263093d980febea90616c38b928807" />
                </div>
            </div>
        </div>
        <!-- 新品上市 -->
        <div class="baokuan">
            <div class="title">新品上市</div>
            <div class="rf-floor-index">
                <div class="product-item-main">
                    <div class="item-photo">
                        <img src="https://pics7.baidu.com/feed/7dd98d1001e939013893b44883110bef37d1963c.jpeg?token=dd7c2f148304d0bb006614d239d80ca8" lazy="loaded">
                    </div>
                    <div class="item-name">OPPO Find X2 超感官旗舰 3K分辨率 120Hz超感屏 多焦段影像系统 骁龙865 65w闪充 8GB+128GB碧波 双模5G手机</div>
                    <div class="item-current-price">
                        ￥4949.1
                        <span class="item-price">￥6598.80</span>
                    </div>
                </div>
                <div class="product-item-main">
                    <div class="item-photo">
                        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2180744820,3495432104&fm=26&gp=0.jpg" lazy="loaded">
                    </div>
                    <div class="item-name">OPPO Find X2 超感官旗舰 3K分辨率 120Hz超感屏 多焦段影像系统 骁龙865 65w闪充 8GB+128GB碧波 双模5G手机</div>
                    <div class="item-current-price">
                        ￥4949.1
                        <span class="item-price">￥6598.80</span>
                    </div>
                </div>
                <div class="product-item-main">
                    <div class="item-photo">
                        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2248548268,3697013712&fm=11&gp=0.jpg" lazy="loaded">
                    </div>
                    <div class="item-name">OPPO Find X2 超感官旗舰 3K分辨率 120Hz超感屏 多焦段影像系统 骁龙865 65w闪充 8GB+128GB碧波 双模5G手机</div>
                    <div class="item-current-price">
                        ￥4949.1
                        <span class="item-price">￥6598.80</span>
                    </div>
                </div>
                <div class="product-item-main">
                    <div class="item-photo">
                        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2852296263,1052908764&fm=11&gp=0.jpg" lazy="loaded">
                    </div>
                    <div class="item-name">OPPO Find X2 超感官旗舰 3K分辨率 120Hz超感屏 多焦段影像系统 骁龙865 65w闪充 8GB+128GB碧波 双模5G手机</div>
                    <div class="item-current-price">
                        ￥4949.1
                        <span class="item-price">￥6598.80</span>
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
export default {

}
</script>

<style scoped lang="scss">
// 主内容
.content{
    width: 100%;
    margin-top: 9.33vw;
    padding-bottom: 12vw;
    .swipe{
        height: 50vw;
        position: relative;
        background-color: #f3424c;
        .mint-swipe{
            height: 48vw;
            width: 100%;
            .swipe-img{
                height: 100%;
                background: rgb(162, 198, 204);
                position: absolute;
                z-index: 99;
                top: 0.8vw;
                right: 4vw;
                left: 4vw;
                bottom: 0;
                border-radius: 4vw;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 4vw;
                    object-fit: cover;
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
        }
        .hot-recommend {
            display: flex;
            padding: 4vw 4vw;
            .hot-recommend-image {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .left {
                flex: 3;
                height: 53.33vw;
                margin-right: 4vw;
            }
            .right {
                flex: 4;
                .hot-recommend-image {
                    height: 26.4vw;
                    object-fit: cover;
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
            height: 75vw;
            margin-top: 4vw;
            .item-photo{
                height: 83%;
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