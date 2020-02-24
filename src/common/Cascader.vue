<template>
  <div>
    <div>
      <div class="selectbox">
        <input
          type="text"
          class="fl-input"
          placeholder="请选择"
          @click="inputClick"
          @blur="funBlur"
          :value="valueName"
        />
        <label></label>
        <i class="clear" @click="clearIcon" v-if="valueName">+</i>
      </div>
      <div class="conten" v-show="slectShow">
        <label class="label"></label>
        <div
          class="name"
          @click="aaaa(item)"
          v-for="(item,index) in slectName"
          :key="index"
        >{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slectShow: false,
      slectName: [
        { name: "小明", value: "xiaomin" },
        { name: "小红", value: "xiaohong" },
        { name: "小强", value: "xiaoqiang" },
        { name: "小强", value: "xiaoqiang" },
        { name: "小强", value: "xiaoqiang" },
        { name: "小强", value: "xiaoqiang" },
        { name: "小强", value: "xiaoqiang" }
      ],
      valueName: ""
    };
  },
  methods: {
    inputClick() {
      this.slectShow = true;
    },
    funBlur() {
      setTimeout(() => {
        this.slectShow = false;
      }, 150);
    },
    aaaa(val) {
      this.valueName = val.name;
    },
    clearIcon(){
        this.valueName = ''
    }
  }
};
</script>

<style scoped>
.selectbox {
  width: 250px;
  height: 40px;
  margin-top: 20px;
  position: relative;
}
label {
  /* √ 的形状 */
  position: absolute;
  content: "";
  width: 6px;
  height: 6px;
  top: 35%;
  right: 15px;
  border: 1.5px solid #c0c4cc;
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
}
.label {
  position: absolute;
  width: 6px;
  height: 6px;
  top: -4.1px;
  left: 50px;
  border: 1px solid #e4e7ed;
  background-color: #fff;
  border-top: none;
  border-left: none;
  transform: rotate(-135deg);
}
.clear {
  position: absolute;
  top: 12.9px;
  right: 41px;
  transform: rotate(45deg);
  background-color: #ccc;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  line-height: 14px;
  text-align: center;
  font-style: normal;
  cursor: pointer;
  color: #fff
}
.clear:hover {
    background-color: #909399;
}
.fl-input {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #dcdfe6;
  outline: none;
  color: #606266;
  text-indent: 1em;
}
input::-webkit-input-placeholder {
  color: #dcdfe6;
}
.conten {
  width: 250px;
  padding: 10px 0;
  border: 1px solid #e4e7ed;
  margin-top: 8px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  position: relative;
}
.name {
  line-height: 30px;
  padding-left: 20px;
}
.name:hover {
  background-color: #f5f7fa;
}
</style>