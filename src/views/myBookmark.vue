<template>
  <!-- <div class="boss" ref="box">
      <div class="box" @mousedown="boxMousedown"></div>
  </div>-->
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
</template>

<script>
import FlBotton from "../common/botton";
export default {
  components: { FlBotton },
  data() {
    return {
      DialogShow: true,
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

<style scoped>
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