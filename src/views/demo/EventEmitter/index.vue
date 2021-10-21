<template>
  <div>
      <el-button @click="father">我是父组件: 儿子也对我是说: {{message}}</el-button>
      <son :event='son_event'></son>
  </div>
</template>

<script>
import EventEmitter from 'eventemitter3'
import son from '@/components/EventEmitter/son.vue'
export default {
    components: { son },
    data(){
        return {
            message: '',
            son_event: null
        }
    },
    methods:{
        // 通过EventEmitter方式把父组件的数据传到子组件
        father(){
            this.son_event.emit('sonClickBtn', '我爱你宝贝')
        },
        // 通过EventEmitter方式拿到子组件的数据
        selExpression(mes){
            this.message = mes
        }
    },
    created(){
        // 初始化EventEmitter
        this.son_event = new EventEmitter()
        this.son_event.on('selExpression', this.selExpression)
    }
}
</script>

<style>

</style>