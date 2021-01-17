<template>
  <div>
    <div class="upload-area">
      <div class="image-uploader-item" v-if="isUploader">
        <span class="upload-hint-text">
          <i class="el-icon-plus" style="font-size:30px" type="applist-add-2" />
        </span>
      </div>
      <input type="file" class="file-upload" @change="uploadPhoto" v-if="isFiles"/>
      <img :src="faceUrl" class="face" v-if="faceUrl" />
      <i @click="clearClick" v-if="isIconClear" class="clearIcon">x</i>
    </div>
    <slot-name>
      <div slot="onSlotName">
        <div>这是子组件的文本</div>
        <div>这是在父组件里插槽一个文本</div>
      </div>
    </slot-name>
  </div>
</template>

<script>
import slotName from '../../components/slotName';
export default {
  components: {
    slotName
  },
  data() {
    return {
      isUploader: true,
      isIconClear: false,
      isFiles:true,
      faceUrl: ""
    };
  },
  methods: {
    clearClick() {
      this.faceUrl = "";
      this.isUploader = true;
      this.isIconClear = false;
      this.isFiles = true
      console.log(this.isFiles);
    },
    uploadPhoto($event) {
      console.log($event);
      let file = $event.target.files[0]; //获取要上传的文件
      if (file) {
        let reader = new FileReader();
        reader.onload = () => {
          this.faceUrl = reader.result;
          this.isUploader = false;
          this.isIconClear = true;
        };
        reader.readAsDataURL(file);
        this.isFiles = false;
      } else {
        return
      }
    }
  }
};
</script>

<style scoped>
.upload-area {
  position: relative;
  width: 150px;
}

.image-uploader-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #0b8dcb;
  background: #eeee;
  color: light-gray;
  cursor: pointer;
  margin: 0 10px 10px 0;
  width: 150px;
  height: 150px;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
}
.clearIcon {
  position: absolute;
  font-size: 6px;
  line-height: 10px;
  height: 12px;
  width: 12px;
  text-align: center;
  border-radius: 50%;
  background-color: #e1e4e5;
  color: #091e44;
  top: -2px;
  right: -4px;
  z-index: 110;
  cursor: pointer;
  font-style: normal;
}
.add-icon {
  color: #959ea2;
  font-size: 60px;
}
.upload-hint-text {
  size: 100%;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  justify-content: center;
  align-items: center;
}
.file-upload {
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 0;
  width: 150px;
  height: 150px;
  opacity: 0.01;
  z-index: 100;
}
.face {
  width:150px;height:150px
}
</style>