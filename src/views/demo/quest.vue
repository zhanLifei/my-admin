<template>
  <div class="box">
    <el-row class="mt">
      <el-col :span="4">
        <div class="left">
          <div
            class="radio"
            v-for="(item,index) in quesSelechList"
            :key="index"
            @click="singleChoice(item)"
          >{{item.label}}</div>
        </div>
      </el-col>
      <el-col :span="20" style="height:80vh;overflow: scroll;">
        <div class="quesBox">
          <div class="title">
            <span class="required">*</span>
            <input
              class="inputTitle"
              size="large"
              placeholder="请输入问卷标题"
              width="80%"
              v-model="quesTitle"
            />
          </div>
        </div>
        <div class="quesBox">
          <div class="juspan">
            <span class="required1">*</span>
            <el-input
              type="textarea"
              class="title-content"
              v-model="description"
              resize="none"
              width="90%"
            ></el-input>
          </div>
        </div>
        <add-normal ref="addNormal" :quesList="quesList" @deleteList="deleteList"></add-normal>
        <div class="quesBox2">
          <!-- <XButton type="ghost" style="margin-right:20px" @click.native="quxiaoAdd">取消</XButton> -->
          <XButton type="primary" @click.native="addClick" v-if="quesList.length">确定</XButton>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import addNormal from "../../components/quest-item";
export default {
  components: {
    addNormal
  },
  data() {
    return {
      quesTitle: "",
      description:
        "为了给您提供更好的服务，希望您能抽出几分钟时间，将您的感受和建议告诉我们，我们非常重视每位用户的宝贵意见，期待您的参与！现在我们就马上开始吧！",
      quesSelechList: [
        { label: "单选题", value: "radio" },
        { label: "多选题", value: "checkbox" },
        { label: "单行文本题", value: "text" },
        { label: "多行文本题", value: "textarea" },
        { label: "星评", value: "degreestar" },
        { label: "满意度", value: "degreesnum" }
      ],
      quesList: []
    };
  },
  methods: {
    singleChoice(item) {
      this.$refs.addNormal.isAdd = true;
      this.$refs.addNormal.isEdit = true;
      this.quesList.push(item.value);
    },
    // 删除
    deleteList(i) {
      this.quesList.splice(i, 1);
    },
    addClick(){
    }
  }
};
</script>

<style lang="less" scoped>
.dele {
  width: 80px;
  line-height: 25px;
  text-align: center;
  background-color: #f0eff2;

  cursor: pointer;
}
.mt {
  margin-top: 20px;
}
.left {
  width: 160px;
  padding: 5px 0;
}
.radio {
  text-align: center;
  line-height: 40px;
  font-size: 13px;
  cursor: pointer;
}
.required {
  color: rgb(0, 179, 255);
  font-size: 12px;
  margin-right: 20px;
}
.inputTitle {
  width: 90%;
  height: 40px;
  text-indent: 1em;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.juspan-shangchuantupian {
  width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.juspan {
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.required1 {
  display: inline-block;
  color: rgb(0, 179, 255);
  font-size: 12px;
  margin: 20px -12px 0 0;
}
.quesBox {
  border: 1px solid rgba(242, 242, 242, 1);
  padding: 10px 0;
  margin-bottom: 10px;
}
.quesBox1 {
  border: 1px solid rgba(242, 242, 242, 1);
  margin-bottom: 10px;
}
.quesBox2 {
  margin: 10px;
  display: flex;
  justify-content: center;
}
.title {
  width: 54%;
  line-height: 40px;
  margin: 0 auto;
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 600;
}
.shangchuantupian {
  width: 375px;
  height: 90px;
  margin: 0 auto;
  position: relative;
}
.imagesClass {
  width: 90px;
  height: 90px;
  border: 1px dashed #eee;
  margin: 0 auto;
  display: block;
}
.title-content {
  width: 560px;
  display: block;
  margin: 0 auto;
}
.quesContent {
  width: 560px;
  margin: 0 auto;
  font-size: 12px;
  padding: 10px 30px;
  box-sizing: border-box;
  border: 1px solid rgba(217, 217, 217, 1);
}
.clearImg {
  width: 15px;
  height: 15px;
  background-color: #eee;
  border-radius: 50%;
  font-size: 13px;
  line-height: 12px;
  text-align: center;
  color: #66667c;
  position: absolute;
  top: -6px;
  right: 135px;
  cursor: pointer;
}
</style>>