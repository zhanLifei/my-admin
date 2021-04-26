<template>
  <div class="warpper">
    <!-- 内容 -->
    <div>
        <router-view></router-view>
    </div>
    <div class="footer-nav">
        <ul>
            <li v-for="(item,index) in footerNav" :key="index" @click="toNavClick(item.url, index)">
                <img class="item-icon" :src="item.icon" />
                <div class="item-text" :class="index == active ? 'active' : ''">{{item.title}}</div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            active: 0,
            isHeader: true,
            footerNav: [
                {
                    title: '首页',
                    icon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1037758556,623700135&fm=26&gp=0.jpg',
                    url: '/home'
                },
                {
                    title: '分类',
                    icon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1037758556,623700135&fm=26&gp=0.jpg',
                    url: '/classify'
                },
                {
                    title: '购物车',
                    icon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1037758556,623700135&fm=26&gp=0.jpg',
                    url: '/cart'
                },
                {
                    title: '我的',
                    icon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1037758556,623700135&fm=26&gp=0.jpg',
                    url: '/my'
                },
            ]
        }
    },
    methods: {
        toNavClick(url, index){
            if(url == '/cart' || url == '/my'){
                this.isHeader = false
            } else {
                this.isHeader = true
            }
            this.active = index;
            this.$router.push({ path: url });
        }
    }
};
</script>

<style scoped lang="scss">
// 底部导航
.footer-nav{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 12vw !important;
    background: #fff;
    ul{
        height: 100%;
        display: flex;
        justify-content: space-around;
        li{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .menu-item{
                width: 20%;
                height: 20vw;
                display: flex;
                flex-direction: column;
                justify-content:  center;
                align-items: center;
                
            }
            .item-icon{
                width: 30%;
                height: 7vw;
                border-radius: 50%;
                background: #f2f2f2;
                align-content : center;
                margin-bottom: 1vw;
            }
            .item-text{
                font-size: 3.2vw;
            }
            .item-text.active{
                color:red
            }
        }
    }
}
</style>