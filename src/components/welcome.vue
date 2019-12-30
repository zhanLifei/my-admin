<template>
  <div>
    <XAnimateText class="animate-text-string" :time="3000" :value="value"></XAnimateText>
    <div class="box">
      <img class="images" :src="src" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: `<p>vue - admin - dome。</p>
            <DL><DT><A>21133</A></DT></DL>
            `,
      src: ""
    };
  },
  mounted() {
    setTimeout(() => {
      this.src =
        "http://img4.imgtn.bdimg.com/it/u=401597183,250198679&fm=26&gp=0.jpg";
    }, 3000);
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
</style>