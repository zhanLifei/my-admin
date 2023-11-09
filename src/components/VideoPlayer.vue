<template>
    <div>
        <div class="video-wrapper">
           <video ref="videoPlayer" :poster="options.sources[0].src+'?x-oss-process=video/snapshot,t_0,f_jpg'" class="video-js"></video>
        </div>
    </div>
</template>

<script>
import videojs from 'video.js';
import'video.js/dist/video-js.css';


export default {
    name: "VideoPlayer",
    props: {
        options: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    watch: {
      options(val) {
          if(this.player) {
            this.player.src(this.options.sources[0].src); 
          }
      }
    },
    data() {
        return {
            player: null
        }
    },
    mounted() {
        this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {});
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    }
}
</script>
  <style scoped>

  </style>