<template>
  <dragend-item>
    <li slot="onSlotName" v-for="(item,index) in data" :key="index" class="item" draggable="true">
      {{item}}
      <input type="text" />
    </li>
  </dragend-item>
</template>

<script>
import dragendItem from "../../components/dragend-item.vue";
export default {
  components: {
    dragendItem
  },
  data() {
    return {
      data: [1, 3, 4, 5, 6]
    };
  }
};
</script>

<style scoped>
.item {
  cursor: pointer;
  height: 24px;
  line-height: 24px;
  /* background-color: #dbd7d7; */
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  color: #fff;
  padding: 10px;
}
</style>