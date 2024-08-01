<template>
  <div class="pb-[60px] pb-[30px] pt-20">
    <div class="blog mx-5">
      <VueSlickCarousel v-bind="settings">
        <div v-for="(i, key) in items" :key="key" class="text-center blog-box">
          <img :src="i.image" alt="Image 1" class="" />
          <div class="pt-5">
            <h2
              class="text-white text-center mb-2 md:text-[26px] text-[22px] font-semibold"
            >
              {{ i.title }}
            </h2>
            <h6
              class="text-gray-400 text-center md:text-xl text-lg font-normal md:mb-10 mb-0"
            >
              {{ i.description }}
            </h6>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
    <div class="text-center">
      <button
        class="py-4 px-12 bg-[#01CACE] mt-20 text-white text-[24px] font-semibold rounded-full"
      >
        Read More
      </button>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import sliderImage from "../static/Images/slider.webp";

export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        dots: true,
        centerMode: false,
        centerPadding: "0px",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        arrows: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 991,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "0",
              slidesToShow: 1,
            },
          },
        ],
      },
      items: [
        {
          image: sliderImage,
          title: "The Challenge of Profit Tracking:",
          description:
            "E-commerce sellers can feel a bit overwhelmed with all the information coming from different places, like ad results, shipping fees, and taxes. It's tough to keep track of everything, and that makes it hard to make good decisions.",
        },
        {
          image: sliderImage,
          title: "The Challenge of Profit Tracking:",
          description:
            "E-commerce sellers can feel a bit overwhelmed with all the information coming from different places, like ad results, shipping fees, and taxes. It's tough to keep track of everything, and that makes it hard to make good decisions.",
        },
        {
          image: sliderImage,
          title: "The Challenge of Profit Tracking:",
          description:
            "E-commerce sellers can feel a bit overwhelmed with all the information coming from different places, like ad results, shipping fees, and taxes. It's tough to keep track of everything, and that makes it hard to make good decisions.",
        },
        {
          image: sliderImage,
          title: "The Challenge of Profit Tracking:",
          description:
            "E-commerce sellers can feel a bit overwhelmed with all the information coming from different places, like ad results, shipping fees, and taxes. It's tough to keep track of everything, and that makes it hard to make good decisions.",
        },
      ],
    };
  },
};
</script>

