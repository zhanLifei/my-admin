<template>
  <div class="Dialog" v-show="DialogShow">
    <div class="Dialog-warbox">
      <div class="Dialog-title">
        提示
        <div @click="coles" class="Dialog-clear">+</div>
      </div>
      <div class="Dialog-coenten">
        <div>这是一个弹框</div>
      </div>
      <div class="Dialog-footer">
          <Fl-botton @butClick="okclick" type='primary' style="margin-right:10px">确定</Fl-botton>
          <Fl-botton @butClick="handclick" type='success' >取消</Fl-botton>
      </div>
    </div>
  </div>
</template>

<script>
import FlBotton from "./botton";
export default {
  components: {
    FlBotton
  },
  props: {
    DialogShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isDialogShow: false
    };
  },
  methods: {
    coles() {
      this.$emit("coles");
    },
    handclick(){
      this.$emit('coles')
    },
    okclick(){
      this.$emit('coles')
    },
  }
};
</script>

<style lang="scss" scoped>
.Dialog {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
}
.Dialog-warbox {
  width: 30%;
  background-color: #fff;
  margin: 7% auto;
  border-radius: 3px;
  position: relative;
}
.Dialog-title {
  padding: 10px;
  font-size: 18px;
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