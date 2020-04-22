<template>
    <div class="camera">
      <div class="box">
          <div class="face face1"><img style="width:100%;height:100%" src="../../assets/微信图片_20200404105800.jpg" alt=""></div>
          <div class="face face2"><img style="width:100%;height:100%" src="../../assets/微信图片_20200404105821.jpg" alt=""></div>
          <div class="face face3"><img style="width:100%;height:100%" src="../../assets/微信图片_20200404105935.jpg" alt=""></div>
          <div class="face face4"><img style="width:100%;height:100%" src="../../assets/微信图片_20200404105836.jpg" alt=""></div>
          <div class="face face5"><img style="width:100%;height:100%" src="../../assets/微信图片_20200404105918.jpg" alt=""></div>
          <div class="face face6"><img style="width:100%;height:100%" src="../../assets/微信图片_20200404105846.jpg" alt=""></div>
      </div>
    </div>
</template>

<script>
export default {
  mounted() {
    var box = document.querySelectorAll(".box");
    window.addEventListener(
      "deviceorientation",
      function(event) {
        var alpha = event.alpha,
          beta = event.beta,
          gamma = event.gamma;

        box[0].style.webkitTransform =
          "rotateX(" +
          beta +
          "deg) rotateY(" +
          gamma +
          "deg) rotateZ(" +
          alpha +
          "deg)";
        box[0].style.transform =
          "rotateX(" +
          beta +
          "deg) rotateY(" +
          gamma +
          "deg) rotateZ(" +
          alpha +
          "deg)";
        box[0].style.mozTransform =
          "rotateX(" +
          beta +
          "deg) rotateY(" +
          gamma +
          "deg) rotateZ(" +
          alpha +
          "deg)";
      },
      false
    );
  }
};
</script>

<style lang="scss" scoped>
.camera {
  width: 400px;
  height: 400px;
  perspective-origin: center;
  perspective: 600px;
  margin: 100px auto;
}
.box {
  transform-style: preserve-3d;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px dashed #000;
}
// .box1 {
//   transform-style: preserve-3d;
//   position: relative;
//   width: 100%;
//   height: 100%;
//   border-radius: 50%;
//   border: 1px dashed #000;
// }
.face {
  width: 200px;
  height: 200px;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 38px;
  color: white;
  position: absolute;
}
.face1 {
  background: #3498db;
  transform: translateX(99px) translateY(105px) translateZ(99px);
}
.face2 {
  background: #9b59b6;
  transform-origin: 0 0; //设置transform的基准点
  transform: translateX(299px) translateY(105px) translateZ(99px) rotateY(90deg);
}
//transform是有顺序的，先旋转再平移和先平移再旋转的效果可能不同
.face3 {
  background: #f1c40f;
  transform-origin: 0 0;
  transform: translateX(99px) translateY(105px) translateZ(99px) rotateX(-90deg);
}
.face4 {
  background: #7f8c8d;
  transform-origin: 0 0;
  transform: translateX(99px) translateY(303px) translateZ(99px) rotateX(-90deg);
}
.face5 {
  background: #2ecc71;
  transform-origin: 100% 100%;
  transform: translateX(-50.5%) translateY(105px) translateZ(99px) rotateY(-90deg);
}
.face6 {
  background: #34495e;
  transform: translateX(99px) translateY(105px) translateZ(-101px)
    rotateY(-180deg);
}
//做一个旋转的动画，看看6个面写的是否正确
.box {
  animation: rotate 30s linear infinite;
}

@keyframes rotate {
  0% {
    -webkit-transform: rotateY(0) rotateX(0);
  }
  50% {
    -webkit-transform: rotateY(-359.9deg) rotateX(0);
  }
  100% {
    -webkit-transform: rotateY(-359.9deg) rotateX(-359.9deg);
  }
}
</style>