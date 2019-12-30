<template>
  <div>{{options}}</div>
</template>

<script>
import clone from 'lodash';
export default {
  computed: {
    options() {
      let arr = {
        name: '666666'
      };

      let newArr = { name: '', sources: [{ src: '' }] };

      for (let i in arr) {
        newArr.sources[0].src = arr[i];
        let _newArr = clone.cloneDeep(newArr);
        arr[i] = _newArr;
      }

      return arr
    }
  }
};
</script>

<style>
</style>