<template>
  <transition name="message-fade">
    <div v-if="visible" class="message">
        {{message}}{{msg}}
    </div>        
  </transition>
</template>

<script>
  export default {
    name: 'message',
    data () {
      return {
        visible: false,
        duration: 3000,
        message: '',
        msg:''
      }
    },
    methods: {
      setTimer() {
        setTimeout(() => {
          this.close() // 3000ms之后调用关闭方法
        }, this.duration)
      },
      close() {
        this.visible = false
        setTimeout(() => {
          this.$destroy(true)
          this.$el.parentNode.removeChild(this.$el) // 从DOM里将这个组件移除
        }, 500)
      }
    },
    mounted() {
      this.setTimer() // 挂载的时候就开始计时，3000ms后消失
    }
  }
</script>

<style scoped>
    .message-fade-enter-active, .message-fade-leave-active {
        transition: all .3s ease;
    }
    .message-fade-enter, .message-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        transform: translateY(-20px);
        opacity: 0;
    }
    .message{
        position: fixed;
        text-align:center;
        top: 15px;
        right: 36%;
        width: 22%;
        border-radius:4px; 
        padding: 13px 30px;
        color: #67c23a;
        font-size: 17px;
        background-color: #f0f9eb;
        border: 1px solid #e1f3d8;
    }
</style>
