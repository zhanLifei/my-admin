<template>
  <div class="box">
    <img
      src="https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=b38f3fc35b0fd9f9bf175369152cd42b/9a504fc2d5628535bdaac29e9aef76c6a6ef63c2.jpg"
      alt
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box {
  width: 400px;
  margin: 20px;
  img {
    width: 100%;
    //filter: drop-shadow(x偏移, y偏移, 模糊大小, 色值);
    filter: drop-shadow(0px 0px 5px #000);
    animation: charging 6s linear infinite;
  }
  @keyframes charging {
    50% {
      filter: drop-shadow(0px 0px 5px rgb(228, 8, 8));
      transform: translate(150px , 0px)
    }
    75% {
      filter: drop-shadow(0px 0px 5px rgb(13, 221, 20));
    }
    100% {
      filter: drop-shadow(0px 0px 5px rgb(68, 9, 197));
    }
  }
}
</style>