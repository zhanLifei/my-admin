<template>
  <div class="wappess">
        <div class="container effect-box">
            <slot-name class="mgb15">
                <div slot="button-slot"><el-button size="mini">这是一个按钮插槽</el-button></div>
            </slot-name>
            <slot-name class="mgb15">
                <span slot="span-slot">这是一个span标签插槽</span>
                <template #default="{ user }">
                    我的名字叫:{{user.name}}年龄{{user.age}}
                </template>
            </slot-name>
            <slot-name class="mgb15">
                <template #p-slot>
                    这是一个p标签插槽
                </template>
            </slot-name>
        </div>
  </div>
</template>

<script>
import slotName from "@/components/slotName.vue";
export default {
    components:{slotName}
}
</script>

<style lang="scss" scoped>
.wappess{
  background: #f1f1f1;
  padding-bottom: 1px;
}

</style>