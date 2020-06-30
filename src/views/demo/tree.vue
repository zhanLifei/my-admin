<template>
  <div class="box">
    <div class="son" :style="{top: top+'px', right:right+'px', bottom:bottom+'px', left: left+'px'}"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top: 0,
      right: -30,
      bottom: 0,
      left: 0,
      init: null
    };
  },
  methods: {
    handleKeyup(e){
      let {key, keyCode} = e
      // 上
      if(key == 'ArrowUp' || keyCode == 38) {
        clearInterval(this.init)
        this.init = null
        this.init = setInterval(() => {
          this.top -= 30
        }, 500);
        return
      }
      // 右
      if(key == 'ArrowRight' || keyCode == 39) {
        clearInterval(this.init)
        this.init = null
        this.init = setInterval(() => {
          this.left += 30
        }, 500);
        return
      }
      // 下
      if(key == 'ArrowDown' || keyCode == 40) {
        clearInterval(this.init)
        this.init = null
        this.init = setInterval(() => {
          this.top += 30
        }, 500);
        return
      }
      // 左
      if(key == 'ArrowLeft' || keyCode == 37) {
        clearInterval(this.init)
        this.init = null
        this.init = setInterval(() => {
          this.left -= 30
        }, 500);
        return
      }
    }
  },
  mounted () {
    window.addEventListener('keyup',this.handleKeyup)
  }
};
</script>

<style scoped>
.box {
  width: 800px;
  height: 500px;
  background-color: rgb(64, 61, 61);
  margin: 50px auto;
  position: relative;
}
.son {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  left: 60px;
  background-color: #46e112;
}
</style>