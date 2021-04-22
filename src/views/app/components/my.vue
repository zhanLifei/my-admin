<template>
  <div>
      <div style="margin-bottom: 10vw">
        <header-search :background="'background-color: #f10125'" :left_icon='true' :right_icon='true' title='个人中心'></header-search>
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