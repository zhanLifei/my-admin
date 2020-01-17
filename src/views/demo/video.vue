<template>
  <div class="app-container">
    <div><video-player :options="videoOption" class="video" /></div>
    <!-- <div><video-player :options="videoOption" class="video" /></div> -->
    <!-- <div><video-player :options="videoOption" class="video" /></div> -->
    <!-- <div><video-player :options="videoOption" class="video" /></div> -->
  </div>
</template>

<script>
require("videojs-flash");
import VideoPlayer from "@/components/VideoPlayer.vue";
export default {
  components: {
    VideoPlayer
  },
  data() {
    return {
      videoSrc: 'rtmp://172.16.1.65:1935/test1/myStream'
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
            type: "rtmp/flv"
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