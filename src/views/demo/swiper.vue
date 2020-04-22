<template>
  <div class="boxswiper">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="images" src="../../assets/微信图片_20200404105918.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="images" src="../../assets/微信图片_20200404105925.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="images" src="../../assets/微信图片_20200404105930.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="images" src="../../assets/微信图片_20200404105935.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="images" src="../../assets/微信图片_20200404105800.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="images" src="../../assets/微信图片_20200404105821.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="images" src="../../assets/微信图片_20200404105828.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="images" src="../../assets/微信图片_20200404105836.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="images" src="../../assets/微信图片_20200404105841.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="images" src="../../assets/微信图片_20200404105846.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="images" src="../../assets/微信图片_20200404105852.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="images" src="../../assets/微信图片_20200404105857.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="images" src="../../assets/微信图片_20200404105912.jpg" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
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
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        slidesPerGroup: 1,
        loop: true, //是否循环,不循环
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
    imgClick(index, item) {
      this.image = item.pic;
    }
  },
  mounted() {}
};
</script>

<style scoped>
.boxswiper {
  padding: 40px;
  background-color: #ccc;
}
.images {
  width: 100px;
  height: 100px;
  display: inline-block;
}
</style>