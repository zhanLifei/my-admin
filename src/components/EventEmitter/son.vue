<template>
  
  <div>
      <el-button @click="onClickBtn">我是子组件: 父亲对我说: {{msg}}</el-button>
  </div>
</template>

<script>
export default {
    props:{
        event:{
            type: Object,
            default: {}
        }
    },
    data(){
        return {
            msg: '',
        }
    },
    methods:{
        // 通过EventEmitter方式拿到父组件的数据
        sonClickBtn(mes){
            this.msg = mes
        },
        // 通过EventEmitter方式把子组件的数据传到父组件
        onClickBtn(){
            this.event.emit('selExpression', '爸爸我也爱你')
        }
    },
    mounted(){
        console.log(this.event)
    },
    created() {
        // 初始化EventEmitter事件
        this.event.on('sonClickBtn', this.sonClickBtn)
    }
}
</script>

<style>

</style>