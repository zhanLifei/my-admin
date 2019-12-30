<template>
  <div class="boxswiper">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="(item,index) in banners"
        :key="index"
      >
        <img
          class="images"
          :src="item.pic"
          alt
          @click="imgClick(index,item)"
        />
      </swiper-slide>
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
      <div
        class="swiper-button-prev"
        slot="button-prev"
      ></div>
      <div
        class="swiper-button-next"
        slot="button-next"
      ></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      banners: [
        { pic: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=990087231,1878185023&fm=26&gp=0.jpg" },
        { pic: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1615699460,4215749679&fm=26&gp=0.jpg" },
        { pic: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1615699460,4215749679&fm=26&gp=0.jpg" },
        { pic: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1615699460,4215749679&fm=26&gp=0.jpg" },
        { pic: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1615699460,4215749679&fm=26&gp=0.jpg" },
        { pic: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1615699460,4215749679&fm=26&gp=0.jpg" },
        { pic: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1615699460,4215749679&fm=26&gp=0.jpg" },
        { pic: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1615699460,4215749679&fm=26&gp=0.jpg" },
        { pic: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1615699460,4215749679&fm=26&gp=0.jpg" },
        { pic: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1615699460,4215749679&fm=26&gp=0.jpg" },
        { pic: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1615699460,4215749679&fm=26&gp=0.jpg" },
        { pic: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1615699460,4215749679&fm=26&gp=0.jpg" },
        { pic: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1615699460,4215749679&fm=26&gp=0.jpg" },
        { pic: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1615699460,4215749679&fm=26&gp=0.jpg" },
        { pic: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1615699460,4215749679&fm=26&gp=0.jpg" },
        { pic: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3508652532,2245085660&fm=26&gp=0.jpg" }
      ],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        loop: false,  //是否循环,不循环
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  methods: {
    imgClick (index, item) {
      this.image = item.pic
    }
  },
  mounted () {
  }
};
</script>

<style scoped>
.boxswiper {
  padding: 40px;
  background-color: #ccc;
}
.images {
  width: 200px;
  height: 100px;
}
</style>