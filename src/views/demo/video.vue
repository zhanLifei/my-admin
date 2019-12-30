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
      videoSrc: 'https://jx5.178du.com/m3u82/index.php?url=https://cn1.ruioushang.com/hls/20190904/5c0c72408b30d8262264384fd4c204a4/1567544766/index.m3u8'
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
            type: "application/x-mpegURL"
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