<template>
  <div id="dialog_img">
    <el-dialog title="图片" :visible="visible" @close="rowDialogClose">
      <el-form ref="form" :model="msg" style="width:100%">
        <el-form-item label="类型" prop="type">
          <el-select v-model="msg.type" placeholder="请选择类型" style="width:100%">
            <el-option
              label="图片"
              value="图片">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="image" label="图片" prop="url">
          <el-upload
            class="avatar-uploader"
            action="#"
            :show-file-list="false"
            :http-request="imgUP">
            <p v-if="!msg.url" style="color: #0084ff">点击选择</p>
            <img v-else :src="msg.url" alt="">
          </el-upload>
        </el-form-item>
      </el-form>
      <el-button @click="submit" style="width:100%;">发 送</el-button>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['event'],
  data() {
    return {
      msg: {
        type: '图片',
        len: '',
        url: ''
      },
      visible: false,
    }
  },
  methods: {
    rowDialogClose() {
      this.visible = false
    },
    submit() {
      this.$emit('submitUpload', this.msg.url)
    },
    open() {
      this.visible = true
    },
    async imgUP(req) {
      let file = req.file; //获取要上传的文件
      if (file) {
        let reader = new FileReader();
        reader.onload = () => {
          this.msg.url = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
  },
  created() {
    this.event.on('open', this.open)
  }
}
</script>

<style scoped>
.image{
  display: flex;
  align-items: center;
}
img {
  width: 100px;
  height: 100px;
}

</style>
