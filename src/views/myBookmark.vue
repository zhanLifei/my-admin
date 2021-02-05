<template>
  <div class="wappess">
      <div class="effect">
        <h2 class="title">优选资源</h2>
        <div class="ant-page-header-content">
          <div class="text">发现编程世界的满天星辰 ✨</div>
        </div>
        <div class="extraImg"><img alt="图片" src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"></div>
      </div>

      <div class="effect">
        
      </div>
      <!-- 拖拽弹窗 -->
      <div class="Dialog" v-show="DialogShow">
        <div class="Dialog-warbox" ref="box">
          <div class="Dialog-title" @mousedown="boxMousedown">
            提示
            <div @click="coles" class="Dialog-clear">+</div>
          </div>
          <div class="Dialog-coenten">
            <div>这是可以拖动的窗口</div>
          </div>
          <div class="Dialog-footer">
            <Fl-botton @butClick="okclick" type="primary" style="margin-right:10px">确定</Fl-botton>
            <Fl-botton @butClick="handclick" type="success">取消</Fl-botton>
          </div>
        </div>
      </div>
  </div>
  
</template>

<script>
import FlBotton from "../common/botton";
export default {
  components: { FlBotton },
  data() {
    return {
      DialogShow: false,
      x: "",
      y: ""
    };
  },
  methods: {
    boxMousedown(ev) {
      this.x = ev.clientX - this.$refs.box.offsetLeft;
      this.y = ev.clientY - this.$refs.box.offsetTop;
      this.init();
    },
    init() {
      document.onmousemove = ev => {
        let l = ev.clientX - this.x;

        let t = ev.clientY - this.y;

        if (l < 0) {
          l = 0;
        } else if (
          l >
          document.documentElement.clientWidth - this.$refs.box.offsetWidth
        ) {
          l = document.documentElement.clientWidth - this.$refs.box.offsetWidth;
        }

        if (t < 0) {
          t = 0;
        } else if (
          t >
          document.documentElement.clientHeight - this.$refs.box.offsetHeight
        ) {
          t =
            document.documentElement.clientHeight - this.$refs.box.offsetHeight;
        }

        this.$refs.box.style.left = l + "px";

        this.$refs.box.style.top = t + "px";
      };
      document.onmouseup = ev => {
        document.onmousemove = null;

        document.onmouseup = null;
      };
    },
    okclick() {
      this.DialogShow = false;
    },
    handclick() {
      this.DialogShow = false;
    },
    coles(){this.DialogShow = false;}
  }
};
</script>

<style lang="scss" scoped>
.wappess{
  background: #f1f1f1;
  .effect{
    width: 100%;
    height: 133px;
    padding: 20px;
    margin-bottom: 15px;
    box-sizing: border-box;
    background: #fff;
    box-shadow: 0 2px 2px rgba($color: #000, $alpha: 0.1);
    position: relative;
    .title{
      margin-right: 12px;
      margin-bottom: 0;
      color: rgba(0,0,0,.85);
      font-weight: 600;
      font-size: 20px;
      line-height: 32px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .ant-page-header-content{
      padding-top: 12px;
      display: flex;
      justify-content: space-between;
      .text{
        font-size: 14px;
      }
    }
    .extraImg{
      width: 150px;
      position: absolute;
      right: 50px;
      top: 16px;
      img{
        width: 100%;
      }
    }
  }
}
.Dialog {
  width: 100vw;
  height: 100vh;
  margin: 10% 30%;
}
.Dialog-warbox {
  width: 30%;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  filter: drop-shadow(0px 0px 5px rgb(195, 191, 191));
}
.Dialog-title {
  padding: 10px;
  font-size: 18px;
  cursor: move;
}
.Dialog-coenten {
  padding: 30px 20px 100px 20px;
}
.Dialog-footer {
  padding: 10px 15px 15px;
  margin: 0 auto;
  position: absolute;
  right: 10px;
  bottom: 0;
}
.Dialog-clear {
  font-size: 24px;
  float: right;
  line-height: 18px;
  cursor: pointer;
  transform: translateY(2px) rotate(45deg);
}
</style>