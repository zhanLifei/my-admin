<template>
  <div>
    <radio>单选1</radio>
    <radio>单选2</radio>
    <radio checked>单选3</radio>
    <radio>单选4</radio>
    <br />
    <Fl-botton @butClick="handclick" type="primary" style="margin-right:10px">普通按钮</Fl-botton>
    <Fl-botton @butClick="handclick" type="success" round style="margin-right:10px">成功按钮</Fl-botton>
    <Fl-botton @butClick="handclick" type="danger" style="margin-right:10px">危险按钮</Fl-botton>
    <Fl-botton @butClick="handclick" type="info" style="margin-right:10px">信息按钮</Fl-botton>
    <Fl-botton @butClick="handclick" style="margin-right:10px">朴素按钮</Fl-botton>
    <Dialogs :DialogShow="isDialogShow" @coles="coles"></Dialogs>
  </div>
</template>

<script>
import Dialogs from "../../common/Dialog";
import FlBotton from "../../common/botton";
import radio from "../../common/radio";
export default {
  components: {
    Dialogs,
    FlBotton,
    radio
  },
  data() {
    return {
      isDialogShow: false
    };
  },
  methods: {
    handclick() {
      this.isDialogShow = true;
    },
    coles() {
      this.isDialogShow = false;
      this.$messages({
        type: "success",

        message: "这是一个仿elemen的提示"
      });
    }
  }
};
</script>

<style>
</style>