<template>
  <div class="wappess">
        <div class="effect resources">
            <h2 class="title">vuex</h2>
            <div class="ant-page-header-content" style="width: 82%;line-height: 24px">
                <div class="text">Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 devtools extension (opens new window)，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。</div>
            </div>
            <div class="extraImg"><img alt="图片" src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"></div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.wappess{
  background: #f1f1f1;
  padding-bottom: 1px;
  .resources{
    width: 100%;
    height: 133px;
    padding: 20px;
    position: relative;
    .title{
      margin-right: 12px;
      margin-bottom: 0;
      color: rgba(0,0,0,.85);
      font-weight: 600;
      font-size: 20px;
      line-height: 32px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .ant-page-header-content{
      padding-top: 12px;
      display: flex;
      justify-content: space-between;
      .text{
        font-size: 14px;
      }
    }
    .extraImg{
      width: 150px;
      position: absolute;
      right: 50px;
      top: 16px;
      img{
        width: 100%;
      }
    }
  }
}
</style>