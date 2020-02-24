<template>
  <div>
    <!-- <XAnimateText class="animate-text-string" :time="3000" :value="value"></XAnimateText> -->
    <div class="box">
      <!-- <div class="timerColor">{{date}}</div> -->
      <el-button @click="add"></el-button>
    </div>
  </div>
</template>

<script>
// 引入封装的格式化时间
import { formatTime } from "../ulit/dateTime";
export default {
  
  data() {
    return {
      value: `<p>vue - admin - dome。</p>`,
      date: "",
      timer: "",
      isDialogShow:false,
      formData:{}
    };
  },
  methods: {
    add(){
      this.$set(this.formData,'aaa',1321322232)
      console.log(this.formData);
    }
  },
  mounted() {
    setTimeout(() => {
      this.timer = setInterval(() => {
        this.date = formatTime(new Date(), "yyyy-MM-dd hh:mm:ss");
      }, 1000);
    }, 2000);
  },
  beforeDestroy() {
    //清除定时器
    clearInterval(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  position: relative;
}
.animate-text-string {
  color: #f10125;
  animation: fontColor 6s linear infinite;
}
.images {
  position: absolute;
  width: 500px;
  margin-top: 20px;
  left: 50%;
  margin-left: -250px;
  //filter: drop-shadow(x偏移, y偏移, 模糊大小, 色值);
  filter: drop-shadow(0px 0px 3px #000);
  animation: charging 6s linear infinite;
}
@keyframes charging {
  10% {
    filter: drop-shadow(0px 0px 5px rgb(228, 8, 8));
  }
  50% {
    filter: drop-shadow(0px 0px 5px rgb(228, 8, 8));
  }
  75% {
    filter: drop-shadow(0px 0px 5px rgb(13, 221, 20));
  }
  100% {
    filter: drop-shadow(0px 0px 5px rgb(68, 9, 197));
  }
}
@keyframes fontColor {
  0% {
    filter: drop-shadow(0px 0px 1px rgb(228, 8, 8));
    color: #000;
  }
  65% {
    color: rgb(230, 72, 10);
  }
  90% {
    color: rgb(26, 10, 121);
  }
  100% {
    filter: drop-shadow(0px 0px 1px rgb(68, 9, 197));
    color: rgb(117, 11, 216);
  }
}
.timerColor {
  color: #ccc;
  margin-top: 10px;
}
</style>