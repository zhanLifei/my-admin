<template>
    <!-- 分类筛选 -->
    <div class="classification">
        <div class="search-type">
            <div class="flex-fs custom-type">
                <span>筛选条件:</span>
                <div class="t-wrap">
                    <ul class="flex-cw" style="min-height:22px">
                        <li class="active" v-for="(item,index) in curCompanyArr" :key="index" @click="removerScreen(item)">{{item.name}}<i class="el-icon-close"></i></li>
                    </ul>
                </div>
                <el-button type='danger' plain size='mini' class="reset" @click="resetClick()">重置</el-button>
            </div>

            <div class="flex-fs custom-type" v-for="(item, index) in screenList" :key="index"> 
                <span>{{item.title}}:</span>
                <div class="t-wrap">
                    <ul class="flex-cw" :ref="`ulRef${item.id}`">
                        <li @click="toggleCompanyAll(item.type, item.id)" class="active">全部</li>
                        <li
                            :class="{active: curCompanyTypeCode.includes(child.name)}"
                            v-for="(child, idx) in item.children"
                            :key="idx"
                            @click="toggleQuoteType(item.type, item.id, child, idx)">
                            {{child.name}}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="flex-c custom-type">
                <span>适用时间:</span>
                <div class="com-time-search">
                    <el-date-picker
                        v-model="validStartDate"
                        type="date"
                        placeholder="选择日期"
                        @change="toggleDate('start')">
                    </el-date-picker>
                </div>
                <span class="c-line"></span>
                <div class="com-time-search">
                    <el-date-picker
                        v-model="validEndDate"
                        type="date"
                        placeholder="选择日期"
                        @change="toggleDate('end')">
                    </el-date-picker>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { screenList } from '@/api/screenList'
export default {
    data () {
        return {
            curCompanyTypeCode: [],
            curCompanyArr: [],
            validStartDate:'',
            validEndDate:'',
            screenList: []
        }
    },
    methods: {
        // 全部
        toggleCompanyAll(type, index) {
            // 1: es6 转真数组
            let elem = Array.from(this.$refs['ulRef'+index][0].children);
            // 遍历dom
            elem.forEach((item,i)=>{
                // 每个li清除active类名
                item.className  = '';
                if(i == 0) {
                    item.className  = 'active';
                }
                // 删除筛选
                this.screeningInit(item.innerText)
            })
        },
        // 筛选
        toggleQuoteType(type, rowindex, item, index) {
            
            // 单选
            if(type=='radio'){
                // 如果点击的是包含已有的筛选字段就删除已有的
                if(this.curCompanyTypeCode.includes(item.name)){
                    // 删除筛选
                    this.screeningInit(item.name, rowindex, true)
                } else {
                    // es6 转真数组
                    let elem = Array.from(this.$refs['ulRef'+rowindex][0].children);
                    // 遍历dom
                    elem.forEach((item,i)=>{
                        // 每个li清除active类名
                        item.className  = '';
                        // 删除筛选
                        this.screeningInit(item.innerText)
                    })
                    this.curCompanyTypeCode.push(item.name);
                    this.curCompanyArr.push(item)
                }
            } else { //多选
                // 清除第一个active的类名
                this.$refs['ulRef'+rowindex][0].children[0].className = ''
                // 如果点击的是包含已有的筛选字段就删除已有的
                if(this.curCompanyTypeCode.includes(item.name)){
                    // 删除筛选
                    this.screeningInit(item.name)
                    let elem = Array.from(this.$refs['ulRef'+rowindex][0].children);
                    let newElem = elem.filter((item,i)=>{
                        return item.className == 'active'
                    })
                    if(newElem.length == 1){
                        this.$refs['ulRef'+rowindex][0].children[0].className = 'active'
                    }
                } else {
                    this.curCompanyTypeCode.push(item.name);
                    this.curCompanyArr.push(item)
                }
            }
            
        },
        // 删除
        removerScreen(obj){
            let index = obj.pid
            let elem = Array.from(this.$refs['ulRef'+index][0].children);
            let newElem = elem.filter((item,i)=>{
                return item.className == 'active'
            })
            if(newElem.length == 1){
                this.$refs['ulRef'+index][0].children[0].className = 'active'
            }
            // 删除筛选
            this.screeningInit(obj.name)

        },
        // 重置
        resetClick(){
            let thes = this;
            this.curCompanyArr.forEach(function(item, i, array) {
                thes.$refs['ulRef'+item.pid][0].children[0].className = 'active'
            })
            this.curCompanyTypeCode = [];
            this.curCompanyArr = [];
        },
        screeningInit(name, rowindex, isTrue){
            let thes = this;
            this.curCompanyTypeCode.forEach(function(type, i, array) {
                if (type == name) {
                    array.splice(i, 1);
                    if(isTrue){
                        thes.$refs['ulRef'+rowindex][0].children[0].className = 'active'
                    }
                }
            });
            this.curCompanyArr.forEach(function(item, i, array) {
                if (item.name == name) {
                    array.splice(i, 1);
                }
            });
        },
        // 选择适用时间
        toggleDate(type) {
            
        },
    },
    watch: {
        'curCompanyArr'( newName , oldNmame){
            console.log(newName)
        }
    },
    mounted(){
        screenList().then((res) => {
            this.screenList = res.data.data
        })
    }
}
</script>

<style lang="scss" scoped>
.classification{
    margin-top: 15px;
    .search-type {
        padding: 10px 0px;
        width: 100%;
        .custom-type,
        .norm-type {
            span {
                margin-right: 15px;
                color: #999;
                font-size: 13px;
                text-align: right;
                width: 55px;
                white-space: nowrap;
            }
            .c-line {
                margin: 0 10px;
                width: 10px;
                height: 1px;
                background: #8B99BF;
            }
            .t-wrap {
                max-width: 90%;
                box-sizing: border-box;
                ul {
                    margin-bottom: 10px;
                    &.all-list {
                        padding: 5px 12px;
                        background: #fff;
                        box-shadow: 0px 1px 4px 0px rgba(12, 18, 56, 0.15);
                        border-radius: 5px;
                        li {
                            padding-top: 8px;
                            padding-bottom: 8px;
                            &:last-child {
                                margin-right: 0;
                            }
                        }
                    }
                    li {
                        padding-bottom: 8px;
                        margin-right: 24px;
                        font-size: 13px;
                        color: #666;
                        cursor: pointer;
                        &.active {
                        color: #ff9600;
                        }
                        &:hover {
                        color: #ff9600;
                        }
                    }
                }
            }
            .reset{
                margin-left: auto;
                margin-top: -8px;
                cursor: pointer;
            }
        }
    }
}
.com-time-search {
  .el-date-editor.el-input {
      box-shadow: 0px 1px 4px 0px rgba(12, 18, 56, 0.15);
      border-radius: 5px;
  }
  /deep/.el-date-editor.el-input, 
  /deep/.el-date-editor .el-input__inner {
      width: 161px;
      height: 32px;
      line-height: 32px;
      border: none;
      font-size: 13px;
  }
  /deep/.el-input__icon {
      line-height: 32px;
  }
}
</style>