<template>
    <!-- 分类筛选 -->
    <div class="classification">
        <div>
            <div class="label inline-block" style="margin-top: 8px;width: 83px;text-align: left">
            <i class="el-icon-orange"></i>
            <label style="vertical-align: top;color: #333">筛选条件：</label>
            </div>
            <div class="inline-block" style="vertical-align: top;width: 50%;height:33px;overflow: hidden;line-height:33px;transition: all 0.5s;font-size: 13px">
            <span v-for="(item,index) in ['概算',]" :key="index" class="mgr25 inline-block cursor-pointer;" style="color: #ff9600">{{item}}</span>
            </div>
        </div>
        <div v-for="(item,index) in screenList" :key="index">
            <div class="label inline-block" style="margin-top: 8px">
                <label style="vertical-align: top;">{{item.title}}：</label>
            </div>
            <div class="inline-block" style="vertical-align: top;width: 80%;overflow: hidden;line-height:33px;transition: all 0.5s;font-size: 13px" :style="arrowType == true && item.children.length>8 ? 'height:76px;': 'height:37px;'">
                <span class="mgr25 inline-block cursor-pointer" style="color: #ff9600">全部</span>
                <span v-for="(child,i) in item.children" :key="i" class="mgr25 inline-block cursor-pointer" :style="{color: index == active ? '#ff9600' : '#333'}">{{child}}</span>
            </div>
            <div class="inline-block" style="vertical-align: top;width: 10%;line-height:33px" v-if="item.children.length>8">
                <span class="mgr25 font13 inline-block orange-color cursor-pointer" @click="arrowClick"><i :class="arrowType == true ? 'el-icon-arrow-down': 'el-icon-arrow-up' "></i>{{arrowType == true ? '展开': '收起'}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            active: null,
            arrowType: true,
            screenList: [
                {
                    title: '阶段',
                    children: ['估算','概算','招标','投标','合同','结算',]
                },
                {
                    title: '规划区',
                    children: ['一期','二期','三期','三期调整','四期',]
                },
                {
                    title: '线路',
                    children: ['2号线三期','6号线二期','9号线二期','16号线一期','12号线一期','5号线二期','9号线一期','6号线一期','14号线一期','17号线一期','18号线一期']
                },
                {
                    title: '地区',
                    children: ['南山区','罗湖区','龙华区','宝安区','龙岗区','福田区','盐田区','光明区']
                }
            ]
        }
    },
    methods: {
        arrowClick(){
            this.arrowType = !this.arrowType
        },
    }
}
</script>

<style lang="scss" scoped>
.classification{
    margin-top: 15px;
    .label{
        vertical-align: middle;
        color: #999;
        font-size: 13px;
        display: inline-block;
        width: 83px;
        text-align: right;
        label{
        vertical-align: text-top;
        margin-left: 5px;
        font-size: 13px;
        }
    }
}
</style>