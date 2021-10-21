<template>
  <div class="container">
    <el-container>
        <el-aside width="300px">
            <div v-for="(item, index) in customerList" :key="index" @click="selecContact(item,index)">
                <el-col :span="24" class="user-list" :class="active == index ? 'active':'' ">
                    <div style="display: inline-block;padding: 12px;">
                    <el-badge class="item">
                        <el-avatar :src="item.headimgUrl"></el-avatar>
                    </el-badge>
                    </div>
                    <div style="display: inline-block;flex: 1;">
                    <el-col>
                        <div class="flex">
                        <div class="title">{{ item.nickName | ellipsisNick }}</div>
                        <div class="time">{{ item.time }}</div>
                        </div>
                    </el-col>
                    <el-col>
                        <div class="news">{{ item.msg | ellipsis }}</div>
                    </el-col>
                    </div>
                </el-col>
            </div>
        </el-aside>
        <el-container>
            <el-header>
                <div class="titleName">{{titleName}}</div>
                <el-dropdown trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        <i class="el-icon-more font18"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="eti">切换为自己</el-dropdown-item>
                        <el-dropdown-item command="to">切换为对方</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-header>
            <el-main>
                <div class="chat-list" ref="chat">
                    <div class="chat-left">
                        <div class="chat-content">
                        <!-- recordContent 聊天记录数组-->
                        <div v-for="(item, index) in currentWindowChatList" :key="index">
                            <!-- 对方 -->
                            <div class="word" v-if="item.come !== 'eti'">
                            <img :src="item.headimgUrl">
                            <div class="info">
                                <p class="time"><span style="color: #2e2f2f; font-weight: 500; font-size: 14px">{{ item.nickName }}</span>&nbsp;&nbsp;{{item.time}}</p>
                                <!-- 发送图片 -->
                                <message-img-l v-if="item.data && item.data.imgUrl" :src="item.data.imgUrl"></message-img-l>
                                <!-- 发送文字，表情 -->
                                <div v-else class="info-content" v-html="item.msg"></div>
                            </div>
                            </div>
                            <!-- 我的 -->
                            <div class="word-my" v-else>
                            <div class="info">
                                <p class="time">{{item.time}}&nbsp;&nbsp;<span style="color: #2e2f2f; font-weight: 500; font-size: 14px">湛湛</span></p>
                                <!-- 发送图片 -->
                                <message-img-r v-if="item.data && item.data.imgUrl" :src="item.data.imgUrl"></message-img-r>
                                <!-- 发送文字，表情 -->
                                <div v-else class="info-content" v-html="item.msg"></div>
                            </div>
                            <img src="@/assets/toppic.jpg">
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="chat-input">
                    <div class="chat-tool">&nbsp;&nbsp;
                        <!-- 表情按钮 -->
                        <img src="@/assets/biaoqing.png" alt="" class="icon-emoji" @click="expressionShow">&nbsp;&nbsp;
                        <!-- 图片按钮 -->
                        <i class="el-icon-picture-outline-round" style="vertical-align: middle;cursor: pointer;" @click="SendPictures"></i>&nbsp;&nbsp;
                        <div class="sendChat">
                        <el-button size="mini" type="success" icon="el-icon-position" @click="sendChat">发送</el-button>
                        </div>
                    </div>
                    <el-input
                        type="textarea"
                        placeholder="请输入内容"
                        v-model="msg"
                        show-word-limit
                        @keyup.enter.native="sendChat">
                    </el-input>
                </div>
            </el-main>
        </el-container>
    </el-container>

    <!-- 弹窗系列 -->
    <dialog-voice :event="voice_event" @submitUpload='submitUpload'></dialog-voice>
    <dialog-expression :event="event_expression"></dialog-expression>
  </div>
</template>

<script>
import { formatTime } from '@/ulit/dateTime.js'
import EventEmitter from 'eventemitter3'
import DialogVoice from '@/components/customerService/img_voice.vue'
import MessageImgR from '@/components/customerService/message_img_r.vue';
import MessageImgL from '@/components/customerService/message_img_l.vue';
import DialogExpression from '@/components/customerService/expression.vue';
export default {
    name: 'OnlineCustomerService',
    components: {
      DialogVoice,
      MessageImgR,
      MessageImgL,
      DialogExpression
    },
    data () {
        return {
            msg: '',
            titleName: '',
            come: 'eti',
            go: '',
            event_expression: null,
            voice_event: null,
            active: null,
            customerList: [
                {
                    headimgUrl: require('@/assets/bg2.jpg'),
                    come: '社保卡服务',
                    go: 'eti',
                    nickName: '社保卡服务',
                    time: '2021-10-15 13:25:20',
                    msg: '广东省江门市人力资源和社会保障局始终坚持把“我为群众办实事”实践活动作为党史学习教育重要内容',
                },
                {
                    headimgUrl: require('@/assets/bg.jpg'),
                    come: '崔凯',
                    go: 'eti',
                    nickName: '崔凯',
                    time: '2021-10-15 13:25:20',
                    msg: '撤销的钱去哪了??',
                }
            ],
            userChatList: [], //存放在缓存的聊天记录
            currentWindowChatList: [], //当前窗口的聊天记录
        }
    },
    watch: {
        currentWindowChatList(to,form){
            var div = this.$refs.chat
            //此时必须异步执行滚动条滑动至底部
            setTimeout(()=>{
                console.log("点击了添加按钮，更新时间")
                div.scrollTop = div.scrollHeight;
            },0)
        }
    },
    methods: {
        // 右上角操作
        handleCommand(value){
            if(value == 'eti'){
                this.go = this.titleName
                this.come = 'eti'
                this.$message({type: 'success', message: '发送人切换为自己'})
            } else {
                this.go = 'eti'
                this.come = this.titleName
                this.$message({type: 'success', message: '发送人切换为对方'})
            }
        },
        // 切换联系人
        selecContact(obj,i){
            this.active = i;
            this.titleName = obj.come;
            this.go = obj.come;
            if(this.come !== 'eti'){
                this.come = obj.come;
                this.go = 'eti';
            }
            //getItem获取value
            let objStringNew = localStorage.getItem('local-userChatList');
            let objNew = JSON.parse(objStringNew);
            if(objNew !== null){
                let res = objNew.filter((item, index)=>{
                    if(obj.come === item.come || item.go === obj.come ) {
                        return item
                    }
                })
                this.currentWindowChatList = res
            }
        },
        // 发送消息
        sendChat(){
            if(this.titleName == ''){
                this.$message({type:'info', message: '请选择一位联系人'});
                return false
            }
            if(this.msg.match(/^\s+$/) == false || this.msg == ''){
                this.$message({type:'error', message: '请勿发送空消息'});
                return false
            }
            var msg = {
                'type': 0,
                'status': 3,
                'come': this.come,
                'go': this.go,
                'msg': this.msg,
                'data': {},
                'time': formatTime(new Date(), "yyyy-MM-dd hh:mm:ss")
            }
            this.currentWindowChatList.push(msg);
            this.userChatList.push(msg);
            let objString = JSON.stringify(this.userChatList);
            localStorage.setItem('local-userChatList', objString);
            this.msg = ""
        },
        // 发送图片
        submitUpload(data){
            if(this.titleName == ''){
                this.$message({type:'info', message: '请选择一位联系人'});
                return false
            }
            var msg = {
                'type': 0,
                'status': 3,
                'come': 'eti',
                'go': this.titleName,
                'msg': '',
                'data': {
                    imgUrl: data
                },
                'time': formatTime(new Date(), "yyyy-MM-dd hh:mm:ss")
            }
            this.currentWindowChatList.push(msg)
            this.userChatList.push(msg);
            let objString = JSON.stringify(this.userChatList);
            localStorage.setItem('local-userChatList', objString);
            this.msg = ""
        },
        // 打开表情包弹窗
        expressionShow() {
            this.event_expression.emit('open')
        },
        // 打开上传图片弹窗
        SendPictures() {
            this.voice_event.emit('open')
        },
        // 选择表情
        selExpression(expression) {
            this.msg = this.msg + `[i-${expression.index}]`
        },
    },

    filters: {
        ellipsisNick (value) {
        if (!value) return ''
        if (value.length > 12) {
            return value.slice(0, 12) + '...'
        }
        return value
        },
        ellipsis (value) {
        if (!value) return ''
        if (value.length > 10) {
            return value.slice(0, 10) + '...'
        }
        return value
        }
    },
    mounted(){
        //getItem获取value
        let objStringNew = localStorage.getItem('local-userChatList');
        let objNew = JSON.parse(objStringNew);
        if(objNew !== null) {
            this.userChatList = objNew
        }
    },
    created() {
        this.event_expression = new EventEmitter()
        this.voice_event = new EventEmitter()
        this.event_expression.on('selExpression', this.selExpression)
    },
}
</script>

<style scoped lang="scss">
.el-header{
    background: #fff;
    border-bottom: 1px solid #B3C0D1;
    color: #333;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
}

.el-aside {
    background: #fff;
    border-right: 1px solid #B3C0D1;
    color: #333;
    max-height: 93vh;
    overflow-y: scroll;
    .user-list {
        display: flex;align-items: center;
        cursor: pointer;
        .title {
        color: #000000;
        font-weight: 600;
        font-size: 14px;
        margin-bottom: 3px;
        }
        .time{
        color: #ccc;
        font-size: 12px;
        margin-right: 10px;
        }
        .news {
        color: #999;
        padding-top: 5px;
        font-size: 12px;
        width: 90%;
        // overflow: hidden;
        }
    }
    .user-list.active{
        background-color: #eceef0;
    }
}

.el-main {
    background: #fff;
    color: #333;
    .chat-list {
        width: auto;
        height: 60vh;
        background: #FFFFFF;
        padding: 10px;
        // box-shadow: 0px 0px 2px 0px #ccc;
        overflow: scroll;
        overflow-x: hidden;
    }
    .chat-input {
        width: auto;
        background: #FFFFFF;
        border-top: 1px solid #ddd;
        .chat-tool {
            width: auto;
            height: 5vh;
            font-size: 20px;
            display: flex;
            align-items: center;
            .icon-emoji{
                width: 21px;
                height: 21px;
                vertical-align: middle;
                cursor: pointer;
            }
            .sendChat{
                flex: 1;
                text-align: right;
                margin-right: 20px;
            }
        }
    }
    .chat-content{
        width: 100%;
        .word{
            display: flex;
            margin-bottom: 20px;
            img{
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }
            .info{
                width: 90%;
                margin-left: 10px;
                .time{
                    font-size: 12px;
                    color: #8c939d;
                    margin: 0;
                    height: 20px;
                    line-height: 20px;
                    margin-top: -5px;
                }
                .info-content{
                    padding: 10px;
                    font-size: 14px;
                    background: #ECEEF0;
                    text-align: left;
                    position: relative;
                    margin-top: 8px;
                    max-width: 70%;
                    float: left;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    line-height: 1.5;
                    word-break: break-all;
                            border-radius: 5px;
                }
                //小三角形
                .info-content::before{
                    position: absolute;
                    left: -8px;
                    top: 8px;
                    content: '';
                    border-right: 10px solid #ECEEF0;
                    border-top: 8px solid transparent;
                    border-bottom: 8px solid transparent;
                }
            }
        }
        .word-my{
            display: flex;
            justify-content:flex-end;
            margin-bottom: 20px;
            img{
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }
            .info{
                width: 90%;
                margin-left: 10px;
                text-align: right;
                .time{
                    font-size: 12px;
                    color: #8c939d;
                    margin: 0;
                    height: 20px;
                    line-height: 20px;
                    margin-top: -5px;
                    margin-right: 10px;
                }
                .info-content{
                    max-width: 70%;
                    padding: 10px;
                    font-size: 14px;
                    float: right;
                    margin-right: 10px;
                    position: relative;
                    margin-top: 8px;
                    background: #9eea6a;
                    text-align: left;
                    color: #333;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    line-height: 1.5;
                    word-break: break-all;
                    border-radius: 5px;
                }
                //小三角形
                .info-content::after{
                    position: absolute;
                    right: -8px;
                    top: 8px;
                    content: '';
                    border-left: 10px solid #9eea6a;
                    border-top: 8px solid transparent;
                    border-bottom: 8px solid transparent;
                }
            }
        }
    }
}
/deep/.el-textarea__inner {
    width: 97%;
    height: 17vh;
    resize: none;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 500px;
    padding: 1vh;
}
</style>
