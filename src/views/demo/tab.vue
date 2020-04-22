<template>
  <div>
    <el-button
      :type="current === index ? 'primary' : 'ghost'"
      style="margin-right: 10px;"
      v-for="(item, index) in ['暂 停','重 启','终 止']"
      :key="index"
      @click="handleRetartClick(index)"
    >{{item}}</el-button>

    <p v-if="current === 0">这是 暂 停 按钮</p>
    <p v-if="current === 1">这是 重 启 按钮</p>
    <p v-if="current === 2">这是 终 止 按钮</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 1
    };
  },
  methods: {
    handleRetartClick(index) {
      this.current = index;
      let arr = [
        { name: "aaa", id: 1, value: "123" },
        { name: "aaa", id: 1, value: "123" },
        { name: "aaa", id: 1, value: "123" },
        { name: "bbb", id: 1, value: "123" },
        { name: "bbb", id: 1, value: "123" },
        { name: "bbb", id: 1, value: "123" },
        { name: "ccc", id: 1, value: "123" },
        { name: "ccc", id: 1, value: "123" },
        { name: "ccc", id: 1, value: "123" },
        { name: "ddd", id: 1, value: "123" },
        { name: "ddd", id: 1, value: "123" },
        { name: "ddd", id: 1, value: "123" }
      ];
      //对数组进行分组
      let map = {};
      let newArr = [];
      arr.forEach((item,i)=>{
          let res = arr[i];
          if(!map[res.name]) {
              newArr.push({
                  title: res.name,
                  options: [res]
              });
              map[res.name] = res;
          } else {
              newArr.forEach((item,index)=>{
                  let obj = newArr[index];
                  if(obj.title == res.name) {
                      obj.options.push(res);
                      return
                  }
              })
          }
      })
      console.log(newArr);
    }
  }
};
</script>

<style>
</style>