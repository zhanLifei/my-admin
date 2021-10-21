<template>
  <div id="dialog_expression">
    <el-dialog title="选择表情" :visible.sync="visible">
      <img @click="selExpression(expression)" v-for="expression in expressions" :key="expression.index" :src="expression.img" alt="">
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      visible: false,
      expressions: []
    }
  },
  computed: {},
  methods: {
    open() {
      this.visible = true
    },
    selExpression(expression) {
      this.event.emit('selExpression', expression)
      this.visible = false
    }
  },
  mounted () {
    for (let i = 1; i <= 249; i++) {
      let img = require(`@/assets/expressions/${i}.png`)
      this.expressions.push({
        img,
        index: i
      })
    }
  },
  created() {
    this.event.on('open', this.open)
  }
}
</script>

<style scoped lang="scss">
img {
  cursor: pointer;
  width: 30px;
  height: 30px;
}
</style>
