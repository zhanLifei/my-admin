<template>
  <div class="wrapper">
    <div class="headerTop">
        <div class="logo">
            <img src="../assets/toppic.jpg" alt="">
            <span class="jingping">精美图库</span>
            <span class="el-icon-close del" @click="toIndex"></span>
        </div>
    </div>
    <div class="nav">
        <div class="nav-type" :style="{color: index == active ? 'skyblue' : '#333'}" v-for="(item,index) in navList" :key="index" @click="navClick(item,index)">{{item.name}}</div>
    </div>
    <div class="content-img">
      <div class="box" v-for="(item,index) in picList" :key="index">
        <!-- <img :src="item.url" alt=""> -->
        <el-image 
          class="img-item"
          :src="item.url"
          :preview-src-list="[item.url]">
        </el-image>
        <div class="title" @click="imageLook(item)">{{item.title}}
          <div class="mast"><i class="el-icon-star-on"></i> 设为背景</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        {
          name:'风景',
          type: 'fengjing'
        },
        {
          name:'美女',
          type: 'meizi'
        },
        {
          name:'动漫',
          type: 'dongman'
        }
      ],
      picList: [],
      active: 0, 
      chars: ['风景如画', '风和日丽', '春色满园', '举世闻名', '气壮山河', '美妙绝伦', '自然景观', '别有天地 ', '斑驳陆离']
    }
  },
  methods:{
    generateMixed(n) {
        var res = "";
        for(var i = 0; i < n; i++) {
            var id = Math.ceil(Math.random()*8);
            res += this.chars[id];
        }
        return res;
    },
    init(type){
      this.$api({
        method:'GET',
        url:`http://api.btstu.cn/sjbz/api.php?lx=${type}&format=json`
      }).then(res=>{
        this.picList.push({
          url: res.data.imgurl,
          title: this.generateMixed(1)
        });
      })
    },
    toIndex(){
      this.$parent.$refs.DrawerRef.style.top = '100%';
    },
    navClick(item,index){
      let slse = this
      slse.picList = []
      slse.active = index;
      [1,2,3,4,5,6,7,8].forEach(function(index){
        slse.init(item.type)
      })
    },
    imageLook(params){
      // 发送
      new BroadcastChannel('test_channel').postMessage(params.url); 
    }
  },
  created () {
    [1,2,3,4,5,6,7,8].forEach((index)=>{
        this.init('fengjing')
    })
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  background-color: #eee;
  .headerTop{
    width: 100%;
    height: 60px;
    background-color: black;
    .logo{
      margin-left: 30px;
      line-height: 58px;
      img{
        width: 40px;
        border-radius: 50%;
        vertical-align:middle;
        border: 1px solid #fff;
      }
      .jingping{
        color: #fff;
        vertical-align:middle;
        margin-left: 15px;
      }
      .del{
        float: right;
        color: #fff;
        margin-right: 20px;
        font-size: 24px;
        line-height: 60px;
        cursor: pointer;
      }
    }
  }
  .nav {
    display: flex;
    justify-content: center;
    .nav-type{
      padding: 5px 10px;
      margin: 15px 3px;
      background-color: #fff;
      cursor: pointer;
    }
  }
  .content-img {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0 15px;
    .box{
      width: 22%;
      height: 300px;
      margin-bottom: 50px;
      background-color: #fff;
      
      .img-item{
        width: 100%;
        height: 250px;
        vertical-align: middle;
      }
      .title{
        text-align: center;
        line-height: 50px;
        position: relative;
        &:hover .mast,&:hover{
            display: block;
            color: #fff;
            cursor: pointer;
          }
        .mast{
          display: none;
          position: absolute;
          bottom: 0;
          right: 0;
          left: 0;
          background-color: rgba($color: #000000, $alpha: 0.7);
          
        }
      }
    }
  }
  .box:hover{
      transition: all 0.3s;
      box-shadow: 4px 4px 6px rgba($color: #000000, $alpha: 0.3);
    }
}
</style>