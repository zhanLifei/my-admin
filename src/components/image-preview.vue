<template>
	<div class="add-content">
		<el-drawer
			class="add-content"
			size="550px"
			:visible="dialogVisible"
			direction="rtl"
			@close="close"
		>
		<section class="title-content">
			<div class="main">
				<span class="word">预览</span>
				<i class="el-icon-close" @click="close"></i>
			</div>
		</section>
		<div class="body-content">
			<img ref="resImage" :src="imgPath" width="100%" />
      <div class="userinfo">
          <div v-if="userInfo != null">姓名 :{{userInfo}}</div>
          <div v-if="faceId != null"> &nbsp;&nbsp;&nbsp;ID :{{faceId}}</div>
      </div>
      <img class="cutoutImg" :src="cutoutUrl" alt />
			<div id="stage" ref="stage" class="stage"></div>
		</div>
		<div class="bottons">
			<el-button @click="close">返回</el-button>
		</div>
		</el-drawer>
	</div>
</template>
<style scoped>
  .add-content {
    overflow-y: auto;
	/* position: relative; */
  }
  
  .userinfo{
  margin:10px 0 15px 0;
  }
  .add-content >>> .el-drawer__header {
    display: none;
  }
  
  .add-content >>> .el-divider--horizontal {
    padding: 0;
    margin: 0;
  }
  
  .add-content >>> .el-divider--horizontal {
    padding: 0;
  }
  
  .add-content >>> .el-drawer {
    overflow-y: auto;
  }
  

  .body-content {
    margin: 10px 20px;
  }
  .stage{
	position: absolute;
	top:60px;
	left:20px;
	width: calc(100% - 40px);
	height: 287px;
	background-color: transparent;
	/* opacity: .5; */
  }
  

  .title-content .main {
    background-color: #0092fe;
    color: #fff;
    height: 30px;
    line-height: 30px;
    padding: 10px 20px;
    overflow: hidden;
  }
  
  .title-content .el-icon-close {
    float: right;
    line-height: 30px;
    cursor: pointer;
  }
  
  .title-content .word {
    float: left;
  }
  
  .base-area >>> .el-input {
    width: 40%;
  }
  
  .base-area >>> .el-input:nth-child(1) {
    margin-right: 5px;
  }
  
  .base-area >>> .el-form-item__label {
    text-align: left;
    display: block;
    width: 100%;
  }
  

  .bottons {
    text-align: center;
    padding-bottom: 10px;
  }
  
  .el-input__inner {
    padding: 17px;
  }
</style>

<script>
import Konva from 'konva'

    export default {
        data () {
            return {
        imgPath:'',
        cutoutUrl: '',
        userInfo: '',
        faceId: '',
				layer:''
            }
        },
        props: {
            dialogVisible: {
                type: Boolean,
                default: false
            },
        },
        methods: {
            close () {
				      if(this.layer){
				      	this.layer.remove()
				      }
            this.$emit('close')
			},
			openDialog(data){
        this.userInfo = data.userInfo
        this.faceId = data.faceId
        this.imgPath = data.pictureUrl
        this.cutoutUrl = data.cutoutUrl
				if(data.rect){
					let rect = typeof data.rect === 'string' ? JSON.parse(data.rect) : data.rect
					this.$nextTick(() => {
						this.drawRect(...rect)
					})
				}
			},
			drawRect(x0,y0,x1,y1){
				let stageRef = this.$refs.stage
				let imgRef = this.$refs.resImage
				let stageHeight = imgRef.height
				let stageWidth = imgRef.width
				let stage = new Konva.Stage({
					container: '#stage',
					width: stageWidth,
					height: stageHeight,
				})
				this.layer = new Konva.Layer()
				stage.add(this.layer)
				let rect = new Konva.Rect({
					x:x0 * stageWidth,
					y:y0 * stageHeight,
					width: x1*stageWidth,
					height:y1*stageHeight,
					stroke:'red',
					strokeWidth:2,
				})
				this.layer.add(rect)
				this.layer.draw()
			}
        },
        created () {}
    }
</script>
