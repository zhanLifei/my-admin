<template>
  <div>
    <radio>单选1</radio>
    <radio>单选2</radio>
    <radio checked>单选3</radio>
    <radio>单选4</radio>
    <br />
    <Fl-botton @butClick="handclick" type="primary" style="margin-right:10px;">普通按钮</Fl-botton>
    <Fl-botton @butClick="handclick" type="success" round style="margin-right:10px">成功按钮</Fl-botton>
    <Fl-botton @butClick="handclick" type="danger" style="margin-right:10px">危险按钮</Fl-botton>
    <Fl-botton @butClick="handclick" type="info" style="margin-right:10px">信息按钮</Fl-botton>
    <Fl-botton @butClick="handclick" style="margin-right:10px">朴素按钮</Fl-botton>
    <Dialog :DialogShow="isDialogShow" @coles="coles"></Dialog>
    <Cascader :data='dataList' :value='value' @handCheng='handCheng' @clearIcon='clearIcon'></Cascader>
  </div>
</template>

<script>
import Dialogs from "../../common/Dialog";
import FlBotton from "../../common/botton";
import radio from "../../common/radio";
import Cascader from "../../common/Cascader";

export default {
  components: {
    Dialogs,
    FlBotton,
    radio,
    Cascader
  },
  data() {
    return {
      isDialogShow: true,
      value:'',
      dataList:[
        { name: "小明", value: "xiaomin" },
        { name: "小红", value: "xiaohong" },
        { name: "小强", value: "xiaoqiang" },
      ]
    };
  },
  methods: {
    handCheng(val){
      this.value = val
    },
    handclick() {
      this.isDialogShow = true;
      this.$index({message:'23443432',msg:'哈哈'});
      this.$api({
        method:'post',
        url:'/category'
      }).then(res=>{
        console.log(res);
      })
    },
    clearIcon(){this.value = ''},
    coles() {
      this.isDialogShow = false;
    }
  }
};
</script>

<style>
</style>