<template>
  <div>
    <!-- 头部 -->
    <header class="header fixed-top">
      <div class="search">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAYAAACMGIOFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAVPSURBVHja7JpLbFRVHMZ/w3Tsu1gsfVAbbG0xQmtVkMYHoMZqMdUYXzEadacgCS6MS924cGviY6MLFyY+k4rPKkYqIhilaQGDUqxVWxpwWqAv2mkL18X9bji5NmVmes80wftPbqZz5j7Od87/8f2/24jjOFzstoT/gYUgQ5AhyBBkCNKGZV3ohPb29mTvFQFKgHXArUA9UAuUA7n6fQqIA/3AQeA74GdgEJhJdfItLS3BgEzSGoHbgNXAFcBKYDlQ7DuvQEcpUKWF6Ad+B74F9izKTl7AVgLXA/cC9wCXJXldPlCtA2AWuA6o0c4e1diigoxoJ54GngAqfb87OjA+zWv9n1nAfcAm4DPgFaBrjmszCnI98DzQNAfAGeAH4BDwKzAATCjJFSpGq+TiNwNLjWuLgVbd8zWgbbFA3gQ8CzzgGz8uV9sHdAO9wF9AwndetmKyFvhGC7YWqDOA3q4dnga+WqjrZqV47uXAc8D9xvgU0Ad8Cryt3ZvPEko2/cAuoAx4FHgEWKN4RYmsEDgN7J9jsazUyXJgq1zUtG7gJeBlZclUbQh4C3hBGda0VcAW4OpM7GQEuAF4DFhhjO8F3gA+B0bTnMNZYAzoML7fCeQBRcDdQCfwi35zbIFcrRisNCbSA7yu5DAZQH6YBr6W+xcBGzW/ZSpPncD3ttw1AjQDm42xEwL3SUAATdsNfKg496wJeAiI2gJZCVzjYy+dwJvAuCW6+ZFCwCQPjUp8VkDeqATgFe+Tcps/LXLqIfHaY0b5qNJcimyA3GAkG0dMpCsDzUOvktGkwXs3qMYGDnKVgt8DedAXL7bsH4XFpOGyVwls4CBrVJQ9kEdE1WzbSeCwQQJyROjzbIAs8503uBD2kYLNiBXNGnMtEy0MHGSu7/uZDDb148A531yiNkBGFlEyOedjOJE55hMIyKk5uvtMWZ5vjlNiW4GDjPtWszRA2WQ+i4qIxIykFxf9CxzkgJHGI3pwaQZALlVmjxnc9lg6NDIZkD1K5x7Ia/Vw27ZcnU+ukfB60qGSyYDcoxX0bJ1EJ9t2pRQCry6Oai5xGyD3ieE42skKSRZF6WS6JC3bkERievYJ9a+nbIDsA37zEYAm4HGLIDdL0DJLyRHgj3Sa5mRAemLSLmOsGleKvMNIDEFZve7daIx1qf2asqnx7Afek6s4KiFrgWfUwWcHAC6qpLZNIla2njUC7MBV9tLynGTr3SzwkxrZVuBSTapVbjyKK0cuxKqBJxUGXrJJAD9KLZgkTbE5laLeh6tsV2qlvdVvFugdwMci8KmymlbgQeAWzkuSju7VC/zNAtT0VEAm1N+9KnAbNV4sda0aVzrcrXp2HBjmv8JwRItSgSswr1dsm1Kno1yQg6vFNmsB47ZBetamieeqofZKSZ2Oh4GdWpDDapfGlCHzpdPUqN56i+PnyoO6/wodJXrGuyIDjm2Q4IrAQ8BTuMp3jvFbCe5brmbtxozRTSxRNo4JRL7vvmcleRzVIlRovA5X2HYMoNZBTogkTAIHgLtw30jlcv7FTmGK99wLfCl3H5bMUgA0AJco827XAr2vc6yC9KxbxwEliAZxzmUCmTdPfI+JE5/Cfb3Qhvs+ZdpoDGLyljX6u147Ogt8kawME1TL1KEdKJObbRLgWo35X6cPaKc6VIMHBM5UAUaAd+TC2wUUfW5TbL+YSZCOJjOoeD2khFSgoh416FlCbj6iuD49z33HtMNREY96LVaD2r2MgvTrMkEq63HgA4HbagCdyFRMZsqGcd+7lCvmx5V8krJI+K+gIcgQZAgyBBmCDEGGIC96+3cA+XU9rxptViAAAAAASUVORK5CYII="
          class="search-icon"
        />
        <span class="search-text">请输入您要搜索的商品</span>
      </div>
    </header>
    <!-- 内容 -->
    <div style="margin-top: 10vw">
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
            footerNav: [
                {
                    title: '首页',
                    icon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1037758556,623700135&fm=26&gp=0.jpg',
                    url: '/home'
                },
                {
                    title: '分类',
                    icon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1037758556,623700135&fm=26&gp=0.jpg',
                    url: '/cart'
                },
                {
                    title: '购物车',
                    icon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1037758556,623700135&fm=26&gp=0.jpg',
                    url: '/classify'
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
            this.active = index;
            this.$router.push({ path: url });
        }
    }
};
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
    background-color: #f3424c!important;
    box-shadow: none!important;
    .search{
        position: relative;
        height: 7.7333vw;
        margin: 1.333vw;
        box-sizing: border-box;
        overflow: hidden;
        background-color: #f2f2f2;
        border-radius: 4vw;
        .search-icon{
            position: absolute;
            top: 0.8vw;
            left: 1.333vw;
            width: 6.66vw;
            height: 6.66vw;
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
}

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