<template>
  <div>
      <div style="margin-bottom: 10vw">
        <header-search :background="'background-color: #ff9600'" :left_icon='true' :right_icon='true' title='购物车'></header-search>
      </div>
  </div>
</template>

<script>
import headerSearch from './header'
export default {
    components: {headerSearch},

}
</script>

<style>

</style>