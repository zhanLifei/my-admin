<template>
  <div>
    <div class="add-normal">
      <el-form label-width="50px" :model="formData">
        <div v-for="(item,index) in quesList" :key="index" class="quesBox">
          <div class="titleNumber">第{{index+1}}题</div>
          <div style="width: 560px;">
            <el-form-item label="题目" prop="title">
              <XInput size="mini" v-model="formData.documentList[index].ask">
                <!-- <i class="blueColor el-icon-picture-outline" slot="prepend" :style="formData.documentList[index].askImg!=''?'color:#0b8dcb':'color:#fff'">
                  <div class="clearImg" v-if="formData.documentList[index].askImg!=''"><img :src="formData.documentList[index].askImg" class="imagesClass"/><div class="clearIcon" @click="clearaskImg(index)">x</div></div>
                </i>
                <i class="el-icon-picture-outline" slot="append">
                  <ImageUploader
                    :img-size="bannerSize"
                    :images="bannerImgs"
                    img-width="12px"
                    img-height="12px"
                    @upload-image="(a,b,c)=>{askImgLoadSuccess(a,b,c,index)}"
                  />
                </i> -->
              </XInput>
            </el-form-item>
            <el-form-item label="备注" style="matgin-left:5px">
              <XInput size="mini" v-model="formData.documentList[index].remark">
                <!-- <i class="blueColor el-icon-picture-outline" slot="prepend" :style="formData.documentList[index].remarkImg!=''?'color:#0b8dcb':'color:#fff'">
                  <div class="clearImg" v-if="formData.documentList[index].remarkImg!=''"><img :src="formData.documentList[index].remarkImg" class="imagesClass"/><div class="clearIcon" @click="clearremarkImg(index)">x</div></div>
                </i>
                <i class="el-icon-picture-outline" slot="append">
                  <ImageUploader
                    :img-size="bannerSize"
                    :images="bannerImgs"
                    img-width="12px"
                    img-height="12px"
                    @upload-image="(a,b,c)=>{remarkImgLoadSuccess(a,b,c,index)}"
                  />
                </i> -->
              </XInput>
            </el-form-item>
            <el-form-item label="类型" prop="type">
              <XSelect
                v-model="formData.documentList[index].type"
                placeholder="选择"
                width="200px"
               
                size="small"
                :options="typeList"
                @change="(val)=>{gettypeListClick(val,index)}"
              ></XSelect>
              <XCheckbox style="margin-left:10px" v-model="formData.documentList[index].require">必填</XCheckbox>
              <XCheckbox style="margin-left:10px" @change='(val)=>{checkChange(val,index)}'>图文</XCheckbox>
              <XCheckbox style="margin-left:10px" @change='(val)=>{checkChange(val,index)}' v-model="formData.documentList[index].isImg" v-if="item=='radio' || item=='checkbox'">图文</XCheckbox>
            </el-form-item>

            <!-- 单选多选 -->
            <div v-if="item=='radio' || item=='checkbox'">
              <el-form-item
                prop="opLabel"
               
                :label="'选项'+ (i+1)"
                v-for="(child,i) in formData.documentList[index].options"
                :key="i"
              >
                <!-- <XInput size="small" width="200px" v-model="child.optLabel" v-if="formData.documentList[index].subType=='text'"></XInput> -->
                <el-input v-if="formData.documentList[index].isImg==false" size='mini' style="width:200px" v-model="child.optLabel"></el-input>
                
                <el-input size="small" style="width:200px" v-model="child.optLabel" v-else>
                <el-button class="el-icon-picture-outline" slot="append"></el-button>
                <!-- <i class="el-icon-picture-outline" slot="append" :style="child.optImg?'color:#0091d7':'color:#333'">
                  <ImageUploader
                    :img-size="bannerSize"
                    :images="bannerImgs"
                    img-width="12px"
                    img-height="12px"
                    @upload-image="(a,b,c)=>{ImgLoadSuccess(a,b,c,index,i)}"
                  />
                  <div class="clearImg" v-if="child.optImg!=''"><img :src="child.optImg" class="imagesClass"/><div class="clearIcon" @click="clearImg(index,i)">x</div></div>
                </i> -->

                </el-input>
                <span class="iconDel" v-if="i!=0" @click="delelConstruction(index,i)">+</span>
              </el-form-item>
              <el-form-item>
                <div class="new-construction" @click="newConstruction(index)">新建选项</div>
              </el-form-item>
            </div>
            <!-- 满意度 -->
            <el-form-item>
              <XRadioGroup v-if="item=='degreesnum'">
                <XRadio label="非常不满意"></XRadio>
                <XRadio label="不满意"></XRadio>
                <XRadio label="一般"></XRadio>
                <XRadio label="满意"></XRadio>
                <XRadio label="非常满意"></XRadio>
              </XRadioGroup>
            </el-form-item>
            <!-- 星评度 -->
            <el-form-item>
              <XRadioGroup v-if="item=='degreestar'">
                <XRadio label="一星"></XRadio>
                <XRadio label="二星"></XRadio>
                <XRadio label="三星"></XRadio>
                <XRadio label="四星"></XRadio>
                <XRadio label="五星"></XRadio>
              </XRadioGroup>
            </el-form-item>
          </div>
          <div class="dele" @click="delelClick(index)">删除</div>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    quesList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      labelPosition: "left",
      isAdd: true,
      isEdit: true,
      bixuan: "必选",
      formData: {
        baseId: "",
        img: "",
        description: "",
        documentList: []
      },
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
        { label: "满意度", value: "degreesnum" }
      ],
      rules: {
        title:[{ required: true, message: ' ', trigger: 'blur' }],
        type:[{ required: true, message: ' ', trigger: 'blur' }],
        opLabel:[{ required: true, message: ' ', trigger: 'blur' }],
        title:[{ required: true, message: ' ', trigger: 'blur' }],
        title:[{ required: true, message: ' ', trigger: 'blur' }],
        title:[{ required: true, message: ' ', trigger: 'blur' }],
      }
    };
  },
  methods: {
    gettypeListClick(val, index) {
      this.isEdit = false;
      this.quesList.splice(index, 1, val);
      if (val == "radio" || val == "checkbox") {
        this.formData.documentList[index].options = [{ optId: val + 1 }];
      } else {
        this.formData.documentList[index].options = [{ optId: val + 1 }];
      }
    },
    delelClick(index) {
      this.isAdd = false;
      this.formData.documentList.splice(index, 1);
      this.$emit("deleteList", index);
    },
    clearaskImg(index){
      this.formData.documentList[index].askImg = ''
    },
    clearremarkImg(index){
      this.formData.documentList[index].remarkImg = ''
    },
    newConstruction(index) {
      let params = this.formData.documentList[index].options;
      params.push({
        optId: this.formData.documentList[index].type + (params.length + 1),
        optLabel: "",
        optImg:""
      });
    },
    delelConstruction(index, i) {
      this.formData.documentList[index].options.splice(i, 1);
    },
    // askImgLoadSuccess(images = [],index,image,i) {
    //   this.formData.documentList[i].askImg= image.url;
    // },
    // remarkImgLoadSuccess(images = [],index,image,i) {
    //   this.formData.documentList[i].remarkImg = image.url;
    // },
    ImgLoadSuccess(images = [],index,image,oneIndex,i){
      this.formData.documentList[oneIndex].options[i].optImg = image.url;
    },
    checkChange(val,index){
      this.formData.documentList[index].options.map(item=>{
        item.optImg=''
      })
    },
    clearImg(index,i){
      this.formData.documentList[index].options[i].optImg = ''
    }
  },
  watch: {
    quesList(val, old) {

      if (!this.isAdd) {
        return;
      }
      if (this.isEdit) {
        console.log(this.formData);
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
              ? [{ optId: val[val.length - 1] + val.length }]
              : [{ optId: val[val.length - 1] + 1 ,optImg:""}]
        };
        this.formData.documentList.push(obj);
      }
    }
  },
  created() {}
};
</script>
<style scoped>
.add-normal {
  border: 1px solid rgba(242, 242, 242, 1);
  font-size: 12px;
  padding: 10px 30px;
  box-sizing: border-box;
}
.dele {
  width: 80px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  background-color: #f0eff2;
  cursor: pointer;
}
.dele1 {
  width: 80px;
  height: 25px;
}
.iconDel {
  margin-left: 10px;
  font-size: 16px;
  -webkit-transform: rotate(-45deg);
  display: inline-block;
  position: absolute;
  top: 2px;
  left: 202px;
  cursor: pointer;
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
}
.new-construction {
  width: 199px;
  line-height: 25px;
  text-align: center;
  background-color: rgba(249, 249, 249, 1);
  border: 1px dashed rgba(221, 221, 221, 1);
  cursor: pointer;
}
.dele:hover {
  background-color: #ccc;
}
.quesBox {
  /* width: 560px; */
  /* margin: 0 auto; */
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  margin-bottom: 20px;
  border-bottom: 1px dashed rgba(221, 221, 221, 1);
}
.titleNumber {
  width: 80px;
  line-height: 30px;
}
.imagesClass {
    width: 150px;
    height: 93px;
    padding: 20px;
    border: 1px solid #dddcdc;
    background-color: #fff;
    margin-left: -14px;
    position: absolute;
    top: 27px;
    left: -76px;
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
  top: 41px;
  right: -54px;
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
  margin-bottom: 20px;
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
</style>
