<template>
        <div class="table">
            <ul class="table-body">
                <li class="table-row" v-for="(item, index) in tableData" :key="index"
                :draggable="true"
                @dragstart="dragstartEvent($event, index)"
                @dragend="dragendEvent($event, index)"
                @dragenter="dragenterEvent"
                @dragleave="dragleaveEvent"
                @dragover="dragoverEvent">
                    <!-- <div>{{index + 1}}</div> -->
                    <div v-if="true">
                        <el-input class="row-item" size="mini" :value="item.optLabel" v-model="item.optLabel"></el-input>
                        <div class="row-item" style="padding-left: 30px;">
                            <span class="icon-btn el-icon-rank"></span>
                        </div>
                        <slot :index="index" :val='item'>
                        </slot>
                    </div>

                    <div>
                        <XInput size="small" width="200px">
                        <!-- <i class="blueColor el-icon-picture-outline" slot="prepend" :style="child.optImg?'color:#0b8dcb':'color:#fff'">
                            <div class="clearImg" v-if="child.optImg!=''"><img :src="child.optImg" class="imagesClass"/><div class="clearIcon" @click="clearImg(index,i)">x</div></div>
                        </i> -->
                        <slot :index="index">
                        </slot>
                        </XInput>
                    </div>
                </li>
            </ul>
        </div>
        
</template>

<script>
export default {
    // tableData 表格数据  rowData 表头数据, 必须与表格数据的每一项对应, tableKey 表格以什么字段组成排序后的数组
    props: ['tableData'],
    data () {
        return {
            dragElement: null,
            lock: true,
            sortArr: [] // 排序后的数组
        }
    },
    mounted () {
    },
    methods: {
        dragstartEvent (ev, index) {
            const self = this;
            let target = ev.currentTarget;
            self.dragElement = target;
            target.style.backgroundColor = '#f8f8f8';
        },
        dragendEvent (ev, index) {
            const self = this;
            let target = ev.currentTarget;
            target.style.backgroundColor = '#fff';
            let list = document.getElementsByClassName('table-row');
            list = [].slice.call(list, 0);
            this.sortArr = [];
            list.forEach(item => {
                this.sortArr.push(item.children[0].firstElementChild.value);
            })
            this.sortHandle();
            ev.preventDefault();
        },
        dragenterEvent (ev) {
            const self = this;
            let target = ev.currentTarget;
            if (self.dragElement !== target) {
                target.parentNode.insertBefore(self.dragElement, target);
            }
        },
        dragleaveEvent (ev) {
            const self = this;
            let target = ev.currentTarget;
            if (self.dragElement !== target) {
                if (self.lock) {
                    target.parentNode.appendChild(self.dragElement);
                    self.lock = false;
                } else {
                    self.lock = true;
                }
            }
        },
        dragoverEvent (ev) {
            ev.preventDefault();
        },
        // 排序
        sortHandle () {
            this.$emit('sortHandle', this.sortArr);
        }
    }
}
</script>

<style lang="less" scoped>
.table {
    width: 100%;
    .table-head {
        width: 100%;
        overflow: hidden;
        background: #f9f9f9;
        color: #63676b;
        display: flex;
        div {
            flex: 1;
            padding: 12px 0;
            padding-left: 30px;
            word-wrap: normal;
            text-overflow: ellipsis;
            vertical-align: middle;
            box-sizing: border-box;
            position: relative;
            width: 100%;
            font-weight: 800;
        }
    }
    .table-body {
        width: 100%;
        overflow: hidden;
        background: #fff;
        color: #63676b;
        .table-row {
            display: flex;
            padding: 12px 0;
            word-wrap: normal;
            text-overflow: ellipsis;
            vertical-align: middle;
            box-sizing: border-box;
            position: relative;
            width: 100%;
            div {
                flex: 1;
            }
        }
    }
}
</style>