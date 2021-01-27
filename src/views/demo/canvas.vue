<template>
<!-- 图片框线定位 -->
  <div>
    <div class="body-content">
      <img style="width:100%" ref="resImage" :src="imgPath"/>
      <img class="cutoutImg" :src="cutoutUrl" alt />
      <div id="stage" ref="stage" class="stage"></div>
    </div>
  </div>
</template>

<script>
import Konva from "konva";
export default {
  components: {
  },
  data() {
    return {
      imgPath: "",
      cutoutUrl: "",
      userInfo: "",
      faceId: "",
      layer: "",
      row: {
        cutoutUrl: "http://evnt-file.smartmideazy.com/group1/2019-12-12/2624fe5b7df344fe8798f0e21168f49d-0.png",
        pictureUrl: "http://evnt-file.smartmideazy.com/group1/2019-12-12/f3cf8c58458e4af8947d88cfcd3b6101-0.png",
        rect: "[0.3135,0.8993,0.042,0.0437]",
      }
    };
  },
  methods: {
    buttonClick() {
      this.imgPath = this.row.pictureUrl;
      this.cutoutUrl = this.row.cutoutUrl;
      if (this.row.rect) {
        let rect =
          typeof this.row.rect === "string" ? JSON.parse(this.row.rect) : this.row.rect;
        this.$nextTick(() => {
          this.drawRect(...rect);
        });
      }
    },
    drawRect(x0, y0, x1, y1) {
      let imgRef = this.$refs.resImage;
      let stageHeight = imgRef.height;
      let stageWidth = imgRef.width;
      let stage = new Konva.Stage({
        container: "#stage",
        width: stageWidth,
        height: stageHeight
      });
      this.layer = new Konva.Layer();
      stage.add(this.layer);
      let rect = new Konva.Rect({
        x: x0 * stageWidth,
        y: y0 * stageHeight,
        width: x1 * stageWidth,
        height: y1 * stageHeight,
        stroke: "red",
        strokeWidth: 2
      });
      this.layer.add(rect);
      this.layer.draw();
    }
  },
  mounted () {
    this.buttonClick()
  }
};
</script>
<style scoped>
.body-content {
  width: 600px;
  margin: 0 20px 20px 0;
}
  .stage{
	position: absolute;
	top:68px;
	width: calc(100% - 40px);
	height: 338px;
	background-color: transparent;
  }
</style>
