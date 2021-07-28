<template>
  <div class="app-container">
    <div><video-player :options="videoOption" class="video" /></div>
    <quill-editor
    :content="content"
    :options="editorOption"
    @change="onEditorChange($event)"
  />
  <div id="div1"></div>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
import E from 'wangeditor'
const editor = new E('#div1')
editor.create()
require("videojs-flash");
import VideoPlayer from "@/components/VideoPlayer.vue";
export default {
  components: {
    VideoPlayer,
    quillEditor
  },
  data() {
    return {
      videoSrc: 'rtmp://live.hkstv.hk.lxdns.com/live/hks1'
    };
  },
  computed: {
    videoOption() {
      return {
        content: '<h2>I am Example</h2>',
        editorOption: {
          // Some Quill options...
        },
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
   onEditorChange({ quill, html, text }) {
        console.log('editor change!', quill, html, text)
        this.content = html
      }
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