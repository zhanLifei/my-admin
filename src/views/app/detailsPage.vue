<template>
  <div class="warppes">
    <div style="margin-bottom: 10vw">
      <header-search :left_icon='true' :right_icon='true' title="详情页"></header-search>
    </div>
    <div class="content">
      <div class="detail-price">
        <img :src="params.photosImg" alt="">
        <div class="price">￥{{params.score}}</div>
        <div class="title">{{params.name}}</div>
      </div>
      <div class="select-box">
        <div class="address" @click="selectQuantity">
          <div class="select">选择 <span class="quantity">{{stepper}}件</span></div>
          <div><van-icon name="arrow"></van-icon></div>
        </div>
        <div class="address" @click="selectDelivery">
          <div class="select">送至 <span class="delivery">中国 广东省 广州市 天河区</span></div>
          <div><van-icon name="arrow"></van-icon></div>
        </div>
        <div class="address">
          <div class="select">服务 <span class="service">99元免基础运费(20kg内) 7天无理由退货</span></div>
        </div>
      </div>
      <div class="detail" v-html="params.goods_desc">
      </div>
    </div>
    <!-- 选择数量 -->
    <van-popup
      v-model="quantityPopup"
      closeable
      round
      close-icon-position="top-right"
      position="bottom"
      :style="{ height: '40%' }">
      <van-card
        :num="stepper"
        :price="params.score"
        :title="params.name"
        :thumb="params.photosImg"
      >
        <template #footer>
          <div class="flex" style="margin-top: 2vw">
            <span style="line-height: 7.46vw">数量</span>
            <van-stepper v-model="stepper" />
          </div>
        </template>
      </van-card>
      <van-button class="btn-bottom" color="linear-gradient(to right, #ff6034, #ee0a24)">确定</van-button>
    </van-popup>
    <!-- 选择地址 -->
    <van-popup
      v-model="deliveryPopup"
      closeable
      round
      close-icon-position="top-right"
      position="bottom"
      :style="{ height: '40%' }">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
    </van-popup>
    <!-- 底部按钮 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button color="#be99ff" type="warning" text="加入购物车" />
      <van-goods-action-button color="#7232dd" type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import headerSearch from './components/header'
import { productDataList } from '@/api/app'
import { Toast } from 'vant';
export default {
  components: {headerSearch},
  data(){
    return {
      quantityPopup: false,
      deliveryPopup: false,
      stepper:1,
      detailList: [],
      params: {
        photosImg: '',
        score:'',
        name: '',
        goods_desc: ''
      },
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
        },
      ],
    }
  },
  methods: {
    selectQuantity(){
      this.quantityPopup = true
    },
    selectDelivery(){
      this.deliveryPopup = true
    },
    onAdd() {
      Toast('新增地址');
    },
    onEdit(item, index) {
      Toast('编辑地址:' + index);
    },
  },
  mounted(){
   let id = this.$route.query.id;
   productDataList().then((res) => {
        let arrList = [];
        let detailData = arrList.concat(res.data.good_products, res.data.hot_products, res.data.recently_products);
        this.detailList = detailData.filter((item)=>{
          return item.id == id;
        })
        this.params.photosImg = this.detailList[0].photos[0].large;
        this.params.score = this.detailList[0].score;
        this.params.name = this.detailList[0].name;
        this.$nextTick(()=>{
          this.params.goods_desc = this.detailList[0].goods_desc;
        })
        console.log(this.detailList)
    })
  }
}
</script>

<style lang="scss" scoped>
.warppes{
  background: #f2f2f2;
  .content{
    .detail-price{
      background: #fff;
      border-radius: 0 0 3vw 3vw;
      padding: 4vw; //15px
      img{
        width: 100%;
      }
      .price{
        color: #f10125;
        font-size: 7.3vw;
        margin-top: 2vw;
      }
      .title{
        font-size: 4.3vw;
        font-weight: 600;
        margin-top: 2vw;
      }
    }
    .detail{
      img{
        width: 100%;
      }
    }
    .select-box{
      margin-top: 2vw;
      background: #fff;
      border-radius: 3vw 3vw 3vw 3vw;
      .address{
        padding: 4vw;
        display: flex;
        justify-content: space-between;
        .select{
          font-size: 3.733vw; //14px
          font-weight: 600;  
          .quantity,.delivery,.service{
            font-weight: normal;
          }
          .service{
            font-size: 3.2vw;
            color: #999;
          }
        }
      }
    }
  }
  .btn-bottom{
    width: 100%;
    border-radius: 5.5vw;
    position: absolute;
    bottom: 2vw;
  }
}
</style>