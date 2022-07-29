<template>
  <div class="wappess" :style="{background: 'url( '+ imageURL +') no-repeat center / 100% 100%'}">
    <div class="top" @click="myAdemin">
      <span class="el-icon-s-platform">  我的后台</span>
    </div>
    <div class="baidu-box">
      <img src="../assets/baidu.png" alt="">
    </div>
    <div class="search">
      <div class="transparent-search" v-if="switchVlue">
        <el-input placeholder="请输入内容" v-model="inputText" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="btnSave"></el-button>
        </el-input>
      </div>
      <div class="white-search" v-else>
        <el-input placeholder="请输入内容" v-model="inputText" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="btnSave"></el-button>
        </el-input>
      </div>
      <div class="content" :style="{'background': switchVlue ? ' rgba(0,0,0, .1)': '#fff'}">
        <div class="item" v-for="item in urlList" :key="item.img" @click="toPageLink(item)">
          <img :src="item.img" alt="">
          <div class="title" :style="{'color': switchVlue ? '#fff': '#333'}">{{item.name}}</div>
        </div>
      </div>
      <div class="footer-bg">
        <span style="color:#fff;font-size: 14px;margin-right: 5px">{{switchVlue == true ? '透明':'白底'}}</span>
        <el-switch
          @change='changeSwitch'
          v-model="switchVlue"
          active-color="#13ce66"
          inactive-color="#ff4949"
          style="margin-right: 10px">
        </el-switch>
        <el-button type="success" size='mini' round @click="switchType">切换背景</el-button>
        <el-button type="success" size='mini' round @click="selectImages"><i class="el-icon-picture-outline"></i></el-button>
      </div>
    </div>
    <div class="Drawer-box" ref="DrawerRef">
        <imagePreview></imagePreview>
    </div>
  </div>
</template>

<script>
import imagePreview from '../components/image-preview';
export default {
  components: {
    imagePreview
  },
  data(){
    return {
      inputText: '',
      switchVlue: true,
      imageURL: 'https://tva4.sinaimg.cn/large/9bd9b167gy1g2rkvh7aw7j21hc0u0gwd.jpg',
      imageGetList:[
        {
          name: '动漫',
          preview: '',
          url: 'http://api.btstu.cn/sjbz/api.php?lx=dongman&format=json',
          type: 'api'
        },
        {
          name: '美女',
          preview: '',
          url: 'http://api.btstu.cn/sjbz/api.php?lx=meizi&format=json',
          type: 'api'
        },
        {
          name: '风景',
          preview: '',
          url: 'http://api.btstu.cn/sjbz/api.php?lx=fengjing&format=json',
          type: 'api'
        },
        {
          name: '随机',
          preview: '',
          url: 'http://api.btstu.cn/sjbz/api.php?lx=suiji&format=json',
          type: 'api'
        }
      ],
      urlList: [
        {
          img: require('../assets/icon/juejin-icon.jpg'),
          url: 'https://juejin.cn/',
          name: '掘金'
        },
        {
          img: require('../assets/icon/zhihu-icon.png'),
          url: 'https://www.zhihu.com',
          name: '知乎'
        },
        {
          img: require('../assets/icon/bilibili-icon.jpg'),
          url: 'https://www.bilibili.com/',
          name: '哔哩哔哩'
        },
        {
          img: require('../assets/icon/GitHub.jpg'),
          url: 'https://github.com/',
          name: 'GutHub'
        },
        {
          img: require('../assets/icon/CSDN-icon.png'),
          url: 'https://www.csdn.net/',
          name: 'CSDN'
        },
        {
          img: require('../assets/icon/LeetCode-icon.png'),
          url: 'https://leetcode-cn.com/',
          name: 'LeetCode'
        },
        {
          img: require('../assets/icon/vue-icon.png'),
          url: 'https://cn.vuejs.org/',
          name: 'Vue'
        },
        {
          img: require('../assets/icon/react-icon.png'),
          url: 'https://react.docschina.org/',
          name: 'React'
        },
        {
          img: require('../assets/icon/langhu-icon.jpg'),
          url: 'https://lanhuapp.com/',
          name: '蓝湖'
        },
        {
          img: require('../assets/icon/element-icon.png'),
          url: 'https://element.eleme.cn/2.15/#/zh-CN/component/quickstart',
          name: 'Elenent-UI'
        },
      ]
    }
  },
  methods:{
    init(){
      this.$api({
        method:'GET',
        url:'http://api.btstu.cn/sjbz/api.php?lx=fengjing&format=json'
      }).then(res=>{
        this.imageURL = res.data.imgurl
      })
    },
    btnSave(){
      this.$router.push({ 
        path: "/iframeDiv",
        query: {
          value: this.inputText
        }
      });
    },
    myAdemin(){
      this.$router.push({ name: 'contaihome' })
    },
    // 切换背景
    switchType(){
      this.init()
    },
    // 选择图库
    selectImages(){
      this.$refs.DrawerRef.style.top = '6%';
    },
    changeSwitch(type){
      console.log(type);
    },
    toPageLink(url){
      window.open().location.href = url.url;
    }
  },

  mounted(){
    var channel = new BroadcastChannel('test_channel');
    channel.onmessage = event =>{
        this.imageURL = event.data;
        console.log(this.imageURL)
    }



    const obj={
      a:{
        b:'',
        c:''
      }
    };  
    if(checkNull(obj) == false){
      obj = { a: {} }
    }
    if(checkNull(obj.a) == false){
      obj.a['b'] = '',
      obj.a['c'] = ''
    }
    const{a,a:{b,c}}=obj
  }
  
};
</script>

<style lang="scss" scoped>
.wappess{
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  padding-top: 5%;
  box-sizing: border-box;
  .top{
    position: fixed;
    top: 10px;
    right: 20px;
    color: #fff;
    cursor: pointer;
  }
}
.baidu-box{
  width: 100%;
  height: 137.59px;
  position: relative;
  img{
    width: 288px;
    height: 100%;
    position: absolute;
    left: 50%;
    margin-left: -144px;
  }
}
.search{
  width: 500px;
  margin: 0 auto;
  margin-top: 20px;
  .transparent-search{
      /deep/ .el-input__inner,/deep/ .el-input-group__append{
      background: transparent;
      box-shadow: 0px 0px 10px #fff inset;
      border: 1px solid #fff;
      border-right: none;
      color: #fff;
    }
  }
  .white-search{
      /deep/ .el-input__inner,/deep/ .el-input-group__append{
      background: #fff;
      box-shadow: 0px 0px 10px #fff inset;
      border: 1px solid #eee;
      border-right: none;
      color: #333;
    }
  }
  .content{
    background: rgba(0,0,0, .1);
    padding: 20px 15px 0;
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-radius: 8px;
    .item{
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      font-size: 14px;
      img{
        width: 40%;
        border-radius: 50%;
        margin: 10px 0;
      }
      .title{
        display: inline-block;
        font-size: 12px;
        margin-bottom: 20px;
      }
    }
  }
}
.footer-bg{
  position: fixed;
  bottom: 20px;
  right: 20px;
}
.Drawer-box{
  position: fixed;
  top: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 1s;
  overflow: auto;
}
</style>