<template>
  <div style="display:inline-block">
    <div class="radio">
      <input type="radio" name="item" :checked='checked'/>
      <label></label>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    checked:{
      type:Boolean,
      default:false
    }
  }
};
</script>

<style scoped>
.radio {
  position: relative;
  line-height: 30px;
}

input[type="radio"] {
  width: 20px;
  height: 20px;
  opacity: 0;
  position: relative;
  z-index: 11;
  top: 5px;
  left: -2px;
}

label {
  position: absolute;
  left: 5px;
  top: 11px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  border: 1px solid #999;
  z-index: 0;
}

/*设置选中的input的样式*/
/* + 是兄弟选择器,获取选中后的label元素*/
input:checked + label {
  background-color: #409eff;
  border: 1px solid #409eff;
}

input:checked + label::after {
  /* √ 的形状 */
  position: absolute;
  content: "";
  width: 3px;
  height: 6px;
  top: 2px;
  left: 4px;
  border: 1.5px solid #fff;
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
  
  /* 点的形状 */
  /* position: absolute;
  content: "";
  width: 4.5px;
  height: 4px;
  top: 3.5px;
  left: 3.5px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #fff; */
}
</style>