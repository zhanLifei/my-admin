<template>
    <!-- 分类筛选 -->
    <div class="classification">
        <div class="search-type">
            <div class="flex-fs custom-type">
                <span>筛选条件:</span>
                <div class="t-wrap">
                <ul class="flex-cw">
                    <li class="active">概算</li>
                </ul>
                </div>
            </div>

            <div class="flex-fs custom-type">
                <span>阶段:</span>
                <div class="t-wrap">
                <ul class="flex-cw">
                    <li :class="{active: curCompanyTypeCode === ''}" @click="toggleCompanyType('')">全部</li>
                    <li 
                        :class="{active: curCompanyTypeCode === index}"
                        v-for="(item, index) in screenList[0].children" 
                        :key="index"
                        @click="toggleCompanyType(index)">
                        {{item}}
                    </li>
                </ul>
                </div>
            </div>
            <div class="flex-fs custom-type">
                <span>规划区:</span>
                <div class="t-wrap">
                <ul class="flex-cw">
                    <li :class="{active: curQuoteTypeCode === ''}" @click="toggleQuoteType('')">全部</li>
                    <li 
                        :class="{active: curQuoteTypeCode === index}"
                        v-for="(item, index) in screenList[1].children" 
                        :key="index"
                        @click="toggleQuoteType(index)">
                        {{item}}
                    </li>
                </ul>
                </div>
            </div>
            <div class="flex-fs custom-type">
                <span>线路:</span>
                <div class="t-wrap">
                <ul class="flex-cw">
                    <li :class="{active: curCheckState === ''}" @click="toggleCheckState('')">全部</li>
                    <li 
                    :class="{active: curCheckState === index}"
                    v-for="(item, index) in screenList[2].children" 
                    :key="index"
                    @click="toggleCheckState(index)">
                    {{item}}
                    </li>
                </ul>
                </div>
            </div>
            <div class="flex-fs custom-type">
                <span>地区:</span>
                <div class="t-wrap">
                <ul class="flex-cw">
                    <li :class="{active: curQuoteState === ''}" @click="toggleQuoteState('')">全部</li>
                    <li 
                    :class="{active: curQuoteState === index}"
                    v-for="(item, index) in screenList[3].children"
                    :key="index"
                    @click="toggleQuoteState(index)">
                    {{item}}
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
export default {
    data () {
        return {
            curCompanyTypeCode: '',
            curQuoteTypeCode: '',
            curCheckState: '',
            curQuoteState: '',
            validStartDate:'',
            validEndDate:'',
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
        toggleCompanyType(typeCode) {
            this.curCompanyTypeCode = typeCode
        },
        toggleQuoteType(typeCode) {
            this.curQuoteTypeCode = typeCode
        },
        toggleCheckState(state) {
            this.curCheckState = state
        },
        toggleQuoteState(state) {
            this.curQuoteState = state
        },
        // 选择适用时间
        toggleDate(type) {
            
        },
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
            > span {
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
                max-width: 100%;
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