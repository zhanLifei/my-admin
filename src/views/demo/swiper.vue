<template>
  <!-- 轮播图 -->
  <div class="boxswiper">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
      <swiper-slide>Slide 10</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <swiper class="swiper" :options="swiperOption1">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
      <swiper-slide>Slide 10</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <swiper class="swiper" :options="swiperOption2">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
      <swiper-slide>Slide 10</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <swiper class="swiper" :options="swiperOption3">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

    <swiper class="swiper" :options="swiperOption4">
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide>
      <div
        class="swiper-pagination swiper-pagination-white"
        slot="pagination"
      ></div>
      <div
        class="swiper-button-prev swiper-button-white"
        slot="button-prev"
      ></div>
      <div
        class="swiper-button-next swiper-button-white"
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
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      swiperOption1: {
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      swiperOption2: {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      swiperOption3: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperOption4: {
        spaceBetween: 30,
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.swiper {
  height: 300px;
  margin-bottom: 20px;
}
.swiper /deep/ .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 700;
  font-size: 36.4px;
  background-color: rgb(228, 222, 222);
}
.swiper /deep/ .slide-1{background: #ff9600;}
.swiper /deep/ .slide-2{background: #d3743e;}
.swiper /deep/ .slide-3{background: #4db632;}
.swiper /deep/ .slide-4{background: #3dbbcc;}
.swiper /deep/ .slide-5{background: #b975ca;}
</style>