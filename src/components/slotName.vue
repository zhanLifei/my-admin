<template>
  <div>
      <slot name="button-slot"></slot>
      <slot name="span-slot"></slot>
      <slot name="p-slot"></slot>
      <slot :user='user'></slot>
  </div>
</template>

<script>
export default {
  data(){
    return {
      user: {
        name: 'zhanLifei',
        age: 26
      }
    }
  }
}
</script>

<style>

</style>