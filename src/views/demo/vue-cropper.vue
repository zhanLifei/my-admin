<template>
  <div style="display: flex;align-items: center;flex-direction: column;">
    <el-button @click="dialogVisible = true">上传头像</el-button>
    <img :src="img" alt="">
    <avatar-cropper :dialogVisible.sync="dialogVisible" @closeAvatarDialog="closeAvatarDialog"></avatar-cropper>
  </div>
</template>

<script>
  import avatarCropper from '@/components/vue-cropper/avatarCropper'
  export default {
    components: {
      avatarCropper
    },
    data() {
      return {
        img:'',
        dialogVisible: false
      }
    },
    methods: {
      closeAvatarDialog(data) {
	      console.log(data)
        this.img = data
        this.dialogVisible = false
      }
    }
  }
</script>
