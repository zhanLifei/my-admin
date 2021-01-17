<template>
  <div>
    <div class="add-normal">
      <el-form :label-position="labelPosition" label-width="55px" :rules='rules' :model="formData">
        <div class="interaction-wrap">
          <draggable class="dragWrap" v-model="formData.documentList" element='div' handle=".handles" ghostClass='ghost' :options='dragoption' :move="onMove" @start="isDragging=true" @end="isDragging=false">
            <div v-for="(item,index) in formData.documentList" :key="index" class="quesBox">
              <div class="titleNumber">第{{index+1}}题</div>
              <div style="width: 66%;">
                <!-- 单选多选 -->
                <div v-if="item.type=='radio' || item.type=='checkbox' || item.type=='sort'">
                  <!-- 选项拖拽 -->
                  <div class="simple-wrap">
                  <draggable class="dragWrap" v-model="formData.documentList[index].options" element='div' dragClass='dragClass1' :group='{name: "menu", put: false}' :options='dragoption' :move="onMove" @start="isDragging=true" @end="isDragging=false">
                    <div :disabled="status === 'view'" class="dragElement" v-for="(child,i) in formData.documentList[index].options" :key="child.optId">
                      <!-- 上传选项图片 -->
                      <i class="icon-btn el-icon-rank handle" style="margin-right: 22px;"></i>
                      <span class="optionsClass"><span style="color: rgb(0, 145, 215);font-size: 13px;margin-right: 2px;display: inline-block;transform: rotate(90deg);">*</span> 选项{{i+1}}</span>
                      <el-input v-if="formData.documentList[index].isImg==false" :maxlength='100' :disabled="status === 'view'" size='mini' style="width:250px;" v-model="child.optLabel"></el-input>
                      <el-input :maxlength='100' :disabled="status === 'view'" size='mini' style="width:250px;" v-model="child.optLabel" v-else></el-input>
                      <span class="el-icon-close copy" v-if="formData.documentList[index].options.length!==1" v-show="status !== 'view'" @click="delelConstruction(index,i)"></span>
                    </div>
                  </draggable>
                  </div>
                  <el-form-item>
                    <div class="new-construction" v-if="status !== 'view'" @click="newConstruction(index)">新建选项</div>
                  </el-form-item>
                </div>
              </div>
              <div class="btnBox">
                <div class="handles dele">拖拽</div>
              </div>
            </div>
          </draggable>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  name: 'transition',
  components:{
    draggable
  },
  props: {
    quesList: {
      type: Array,
      default: ()=>{
        return []
      }
    }
  },
  data() {
    return {
      status:'add',
      labelPosition: "left",
      isAdd: true,
      isEdit: true,
      bixuan: "必选",
      formData: {
        baseId: "",
        img: "",
        description: "",
        status: 1,
        documentList: []
      },
      // start 拖拽排序
      isDragging: false,
      dialogVisible: false,
      // end 拖拽排序

      // 跳转逻辑
      linkData:[],
      formDataOption:[],

      bannerSize: 9,
      // 上传images图
      bannerImgs: [""],
      remarkImg:"",
      askImg:"",
      starRating: "",
      answer: [{ content: "" }],
      typeList: [
        { label: "单选题", value: "radio" },
        { label: "多选题", value: "checkbox" },
        { label: "单行文本题", value: "text" },
        { label: "多行文本题", value: "textarea" },
        { label: "星评", value: "degreestar" },
        { label: "满意度", value: "degreesnum" },
        { label: "排序题", value: "sort"}
      ],
      rules: {
        title:[{ required: true, message: ' ', trigger: 'blur' }],
        type:[{ required: true, message: ' ', trigger: 'blur' }],
        optLabel:[{ required: true, message: ' ', trigger: 'blur' }],
        title:[{ required: true, message: ' ', trigger: 'blur' }],
        title:[{ required: true, message: ' ', trigger: 'blur' }],
        title:[{ required: true, message: ' ', trigger: 'blur' }],
      }
    };
  },
  computed: {
    dragoption () {
      return {
        animation: 500,
        group: 'string',
        disabled: this.status === 'view' ? true : false,
        handle: ".handle",
        forceFallback: true, // 忽略HTML5的DnD行为，并强制退出。（h5里有个属性也是拖动，这里是为了去掉H5拖动对这个的影响）
      }
    }
  },
  
  methods: {
    // 在两个列表相互拖拽的时候，有时候需要更新ui，在接口还没有更新之前，所以就会用到move，他是把元素从一个列表拖到另一个列表的瞬间触发，这时候可以给原来的位置设置元素样式等等。
    onMove ({relatedContext, draggedContext}) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    },
    // 新建选项
    newConstruction(index) {
      if(this.formData.documentList[index].options.length >= 10) {
        this.$Message.error('选项数目最多10个！')
        return
      }
      let params = this.formData.documentList[index].options;
      params.push({
        optId: (((1+Math.random())*0x1000000)|0).toString(16).substring(1),
        optLabel: "",
        optImg:""
      });
    },
    // 删除选项
    delelConstruction(index, i) {
      this.formData.documentList[index].options.splice(i, 1);
    },
  },
  watch: {
    quesList(val, old) {
      if (!this.isAdd) {
        return;
      }
      if (val[val.length-1] !== 'Matrix' && this.isEdit) {
        let obj = {
          seqNo: val.length,
          require: true,
          type: val[val.length - 1],
          isImg:false,
          // askImg: "",
          // remarkImg: "",
          ask: "",
          remark: "",
          options:
            val[val.length - 1] != "radio" && val[val.length - 1] != "checkbox"
              ? [{ optId: (((1+Math.random())*0x1000000)|0).toString(16).substring(1) }]
              : [{ optId: (((1+Math.random())*0x1000000)|0).toString(16).substring(1) ,optImg:""}]
        };
        this.formData.documentList.push(obj);
      } else if (val[val.length-1] == 'Matrix' && this.isEdit) {
        let obj = {
          seqNo: val.length,
          require: true,
          type: val[val.length - 1],
          isImg:false,
          // askImg: "",
          ask: "",
          remark: "",
          options:[]
        };
        this.formData.documentList.push(obj);
      }
    },
    // 拖拽事件
    // isDragging (newValue, oldValue) {
    //   if (newValue) {
    //     // this.delayedDragging = true
    //     return
    //   }
    //   this.$nextTick(() => {
    //     // this.delayedDragging = true
    //   })
    // }
  },
  created () {
    // 阻止火狐浏览器默认的拖拽搜索行为
    document.body.ondrop = (event) => {
        // 阻止事件默认行为
        event.preventDefault()
        // 阻止时间冒泡
        event.stopPropagation()
    }
}
};
</script>
<style scoped>
.optionsClass {
    float: left;
    width: 55px;
    text-align: left;
    margin-top: 5px;
}
.add-normal {
  /* border: 1px solid rgba(242, 242, 242, 1); */
  font-size: 12px;
  padding: 10px 30px;
  box-sizing: border-box;
}
.dele {
  text-align: center;
  cursor: pointer;
  margin-right: 10px;
  padding: 2px 13px;
  background-color: #eee;
}
.copy, .iconDel {
  font-size: 12px;
  display: inline-block;
  position: absolute;
  top: 12px;
  left: 370px;
  cursor: pointer;
  text-shadow: #000 #000 #000;
}
.dragWrap .iconDel {
  left: 327px;
}
.new-construction {
  width: 250px;
  margin-top: 10px;
  line-height: 25px;
  margin-left: 50px;
  text-align: center;
  background-color: rgba(249, 249, 249, 1);
  border: 1px dashed rgba(221, 221, 221, 1);
  cursor: pointer;
}

.quesBox {
  display: flex;
  justify-content: space-around;
  padding: 10px 0 25px 0;
  margin-bottom: 20px;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  border-top: 2px solid #fff;
}
.btnBox {
  opacity: 0;
}
.quesBox:hover .btnBox {
  opacity: 1;
}
.dele:hover {
  /* background-color: #eee;
  border-radius: 8px; */
}
.titleNumber {
  width: 80px;
  line-height: 30px;
  /* margin-top: 75px; */
}
.imagesClass {
    width: 150px;
    height: 93px;
    padding: 20px;
    border: 1px solid #dddcdc;
    background-color: #fff;
    margin-left: -14px;
    position: absolute;
    top: 0px;
    left: 50px;
    z-index: 10;
    display: none;
}
.clearImg {
  width: 35px;
  height: 27px;
  position: absolute;
  top: 0px;
  right: 2px;
}
.clearIcon {
  width: 15px;
  height: 15px;
  background-color: #eee;
  border-radius: 50%;
  font-size: 13px;
  line-height: 12px;
  text-align: center;
  color: #66667c;
  position: absolute;
  top: 13px;
  left: 199px;
  cursor: pointer;
  display: none;
  z-index: 11;
}
.clearImg:hover .imagesClass{
  display:block;
}
.clearImg:hover .clearIcon {
  display: block;
}
.add-normal >>> .x-form-item__label {
  padding: 9px 0px 9px 0;
}
.add-normal >>> .x-form-item {
  margin-bottom: 6px;
}
.add-normal >>> .el-input.is-disabled .el-input__inner {
  background-color: #f0f0f0;
  border-color: #cccccc;
  border-radius: 2px;
}
.add-normal >>> .el-input__inner {
  border-radius: 2px;
  border-color: #cccccc;
}
.blueColor {
  position: relative;
  cursor: pointer;
}

.add-normal >>> .image-uploader {
  opacity: 0;
  margin-top: -13px;
}
.add-normal >>> .image-uploader-item {
  margin: 0;
  padding: 0;
}
.add-normal >>> .x-input--mini {
  height: 26px;
}

/* 拖拽排序 */
.simple-wrap {
    width: 85%;
}
.dragWrap {
    border-radius: 4px;
}
.dragWrap .transition-move {
  transition: 0.5s;
}
.dragWrap .transition-wrap {
  min-height: 36px;
}
.dragElement {
  padding: 4px 0 3px 0;
  position: relative;
  width: 375px;
}
.handle {
  float: left;
  padding-top: 8px;
  padding-bottom: 8px;
  height: 12px;
  width: 28px;
  text-align: right;
}
.dragClass1 {
  background-color: #dfe6f8;
  border-radius: 5px;
}
.ghost {
  border-top: 2px solid #3c8fd1;
}
</style>
