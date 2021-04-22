<template>
  <div>
    <!-- 头部 -->
      <div style="margin-bottom: 10vw">
        <header-search :background="'background-color: #ff9600'" :search='true' :left_icon='true' :right_icon='true'></header-search>
      </div>
      <!-- 内容 -->
      <div class="content">
          <div class="left">
              <div class="title" @click="handClick(item,index)" :class="active == index ? 'active' : ''" v-for="(item,index) in list" :key="index">
                  <span>{{item}}</span>
              </div>
          </div>
          <div class="right">
            <div class="title">/ {{titleName}} /</div>
          </div>
      </div>
  </div>
</template>

<script>
import headerSearch from './header'
export default {
    components: {headerSearch},
    data(){
      return{
        active: 0,
        titleName: '热卖产品',
        list: ['热卖产品','酒水饮料','家具家装','家居厨具','箱包手袋','钟表珠宝','食品生鲜','酒水饮料','家具家装','家居厨具','箱包手袋','钟表珠宝']
      }
    },
    methods:{
      handClick(name, index){
        this.active = index;
        this.titleName = name
      }
    }
}
</script>

<style lang="scss" scoped>
.content{
  display: flex;
  .left{
    width: 20%;
    max-height: 90vh;
    background: #f8f8f8;
    .title{
      color: #333;
      font-size: 3.7333vw;
      text-align: center;
      line-height: 14vw;
      background: #f8f8f8;
    }
    .active{
      background: #fff;
      color: #ff9600;
    }
  }
  .right{
    width: 80%;
    .title{
      line-height: 10vw;
      font-size: 4vw;
      color: #333;
      text-align: center;
    }
  }
}
</style>