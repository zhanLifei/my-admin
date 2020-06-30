<template>
  <vuedraggable>

  </vuedraggable>
</template>

<script>
import vuedraggable from "@/components/dragend-item1.vue";
export default {
  components: {
    vuedraggable
  },
  data () {
        return {
            list: [1,2,34,4,54,5]
        }
    },
    updated() {
        console.log(this.list)
    },
    methods: {
        
    }
};
</script>

<style scoped>

</style>