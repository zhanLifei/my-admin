<template>
    <div class='quesSort'>
        <div class='tipBox'>拖动右边把手排序</div>
        <!-- <div :style='"height:"+(boxHeight+30)+"px"' class='mask'></div> -->
        <div class='contentBox' @dragstart="dragStart" @dragover="dragOver" @dragend='dragEnd' :style='"height:"+boxHeight+"px"'>
            <div :class='{sortContent:true,selectBg:item.selected}'
               v-for='(item,index) in list'
               :key='index'
               :draggable="true"
               :ref='"item"+index'
               :style='"top:"+item.top+"px"'>
                <div :class='{sortNum:true,selectOrder:item.selected}'>{{index}}</div>
                <div class='sortTitle'>
                    {{item.label}}
                </div>
                <div class='sortBtn'>
                  <span>拖拽</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import drag_active from '@/assets/components/plateNumber/drag_active.png'
// import drag_inline from '@/assets/components/plateNumber/drag_inline.png'
export default {
    data(){
        return {
            // drag_active,
            // drag_inline,
            boxHeight:0,
            initClientY:0,
            initY:0,
            list:[],
            index:0,
            topList:[]
        }
    },
    props:{
        options:{
            type:Array,
            default(){return [{label:'选项1',id:1,sort:0},{label:'选项2',id:2,sort:1},{label:'选项3',id:3,sort:2}]}}
    },
    methods:{
        // 拖动开始
        dragStart(e){
            let tar = e.target
            if(!tar.className){ tar = e.path[2] } else { if(tar.className!='sortContent'){ tar = e.path[1] } }
            this.index = this.topList.findIndex(item=>item+'px' == tar.style.top)
            let touch = e
            this.initClientY = touch.clientY
            this.list[this.index].selected = true
        },

        // 拖动中
        dragOver(e){
            let touch = e
            let moveClient = touch.clientY - this.initClientY
            let item = this.list[this.index]
            let top = (this.topList[this.index] + moveClient) || moveClient
            if(top<0){top=0}
            if(top>this.boxHeight-item.height){top=this.boxHeight-item.height}
            this.list[this.index].top = top
            if(this.index<this.list.length-1){
                let toTop = this.topList[this.index+1]+this.list[this.index+1].height
                if(top>=(toTop-item.height)){ this.moveDown(); return }
            }
            if(this.index>0){ if(top<=this.topList[this.index-1]){ this.moveUp(); return } }
            this.list = [...this.list]
        },

        // 拖动结束
        dragEnd(e){
            let list = [...this.list]
            list[this.index].top = this.topList[this.index]
            list[this.index].selected = false
            this.list = [...list]
            // this.$emit('change',this.list.map(item=>{return {}}))
        },

        // 降序逻辑
        moveDown(){
            let list = this.handleArrOrder(this.list,this.index)
            list[this.index].top = this.topList[this.index]
            list[this.index+1].top = this.list[this.index].top
            this.initClientY += list[this.index].height
            this.list = list
            this.topList[this.index+1] = list[this.index].top + list[this.index].height
            this.index++
        },

        // 升序逻辑
        moveUp(){
            let list = this.handleArrOrder(this.list,this.index-1)
            list[this.index].top = this.topList[this.index-1] + this.list[this.index].height
            list[this.index-1].top = this.topList[this.index-1]
            this.initClientY -= list[this.index].height
            this.list = list
            this.topList[this.index] = list[this.index-1].top + list[this.index-1].height
            this.index--
        },

        // 数组某两项交换顺序
        handleArrOrder(arr,index){
            let list = [...arr]
            let [before,after] = [list[index],list[index+1]]
            list[index] = after
            list[index+1] = before
            console.log(list)
            return list
        },

        // 初始化盒子高度，每项top值；获取每项高度
        setTop(){
            let height = 0,topList=[]
            this.list.map((item,index)=>{
                let itemHeight = this.$refs[`item${index}`][0].offsetHeight
                height+=itemHeight
                item.top = height-itemHeight
                item.height = itemHeight
                topList.push(height-itemHeight)
            })
            this.topList = topList
            return height
        }
    },
    created(){
        this.list = this.options
    },
    mounted(){
        this.boxHeight = this.setTop()
    }
}
</script>

<style scoped>
    .quesSort{
        position: relative;
    }
    .tipBox{
        height:30px;
        width:100%;
        line-height: 30px;
        font-size:13px;
        color:#929DA2;
        box-sizing: border-box;
        border-bottom:1px solid #ECF0F1;
        text-align: left;
    }
    .mask{
        width:calc(100% - 26px);
        position: absolute;
        left:0;
        z-index:999;
    }
    .contentBox{
        position: relative;
    }
    .sortContent{
        min-height:32px;
        width:300px;
        box-sizing: border-box;
        border-bottom:1px solid #ECF0F1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:8px 0;
        position:absolute;
    }
    .sortNum{
        width:18px;
        height:18px;
        border-radius:50%;
        background:#D0D9DD;
        color:#FFFFFF;
        display:flex;
        align-items: center;
        justify-content: center;
        margin-right:8px;
        font-size:13px;
    }
    .sortTitle{
        text-align: left;
        min-height:32px;
        word-break:break-all;
        flex:1;
        color:#2F383C;
        font-size:13px;
        display:flex;
        align-items: center;
    }
    .sortBtn{
        width:100px;
        height:18px;
        margin-left:8px;
    }
    .sortBtn > img {
        width:100%;
        height:100%;
    }
    .selectBg {
        background-color:rgba(3,105,250,0.5);
        z-index:99;
        width:110%;
        left:-5%;
        padding:8px 5%;
    }
    .selectOrder {
        background:#FFFFFF;
        color:#7AB5FF;
    }
</style>
