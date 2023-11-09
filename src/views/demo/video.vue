<template>
  <div class="app-container">
    <div>
      <video-player :options="videoOption" class="video" />
    </div>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
require("videojs-flash");
import VideoPlayer from "@/components/VideoPlayer.vue";
export default {
  components: {
    VideoPlayer
  },
  data() {
    return {
      videoSrc: 'https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4'
      // videoSrc: 'http://vjs.zencdn.net/v/oceans.mp4'
    };
  },
  computed: {
    videoOption() {
      return {
        autoplay: true, //自动播放
        controls: true, //显示控件
        width:400,
        height: 300,
        sources: [
          {
            src: this.videoSrc,
            // type: "rtmp/mp4"
          }
        ],
      };
    }
  },
  mounted() {},

  methods: {

  }
};
</script>

<style>
.app-container{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>