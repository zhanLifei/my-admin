<template>
  <div>
    <div class="quest-btn-list">
      <el-button @click="next">上一题</el-button>
      <el-button @click="prev">下一题</el-button>
      <el-button @click="lookQuest">查看答案</el-button>
    </div>
    <div class="quest-name">{{questTitle}}</div>
    <div class="quest-answer" v-show="isquest" v-html="questAnswer"></div>
  </div>
</template>

<script>
import mianshitiList from '@/ulit/mianshiti';
export default {
  data() {
    return {
      questlist: [],
      activeIndex: 0,
      isquest: false,
      questTitle: '',
      questAnswer: ''
    };
  },
  computed:{
    
  },
  methods: {
    next(){
      if(this.activeIndex == 0){
        this.activeIndex = 0
      } else {
        this.activeIndex--
        this.questTitle = `${this.activeIndex+1}. `+this.questlist[this.activeIndex].questTitle
        this.questAnswer = this.questlist[this.activeIndex].questAnswer
      }
    },
    prev(){
      this.activeIndex++
      if(this.activeIndex < this.questlist.length){
        this.questTitle = `${this.activeIndex+1}. `+this.questlist[this.activeIndex].questTitle
        this.questAnswer = this.questlist[this.activeIndex].questAnswer
      } else {
        this.activeIndex = this.questlist.length - 1
      }
    },
    lookQuest(){this.isquest = !this.isquest},
  },
  mounted(){
    this.questlist = mianshitiList.sort(() => Math.random() - 0.5);
    this.questTitle = `${this.activeIndex+1}. `+this.questlist[0].questTitle
    this.questAnswer = this.questlist[0].questAnswer
  }
};
</script>

<style>
p{
  line-height: 28px;
  font-size: 14px;
}
p.h3{
  font-weight: 600;
  font-size: 16px;
}
strong{
  font-weight: 600;
}
.quest-btn-list{
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
.quest-name{
  font-weight: 600;
  margin-top: 15px;
  text-indent: 1em;
  font-size: 18px;
}
.quest-answer{
  margin-top: 15px;
  text-indent: 3em;
}
</style>