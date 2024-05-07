<template>
  <div class="pb-[60px]">
    <!-- <VueSlickCarousel>
      <div><img src="../static/Images/profit1.png" alt="Image 1" /></div>
      <div><img src="../static/Images/profit1.png" alt="Image 1" /></div>
      <div><img src="../static/Images/profit1.png" alt="Image 1" /></div>
      <div><img src="../static/Images/profit1.png" alt="Image 1" /></div>
    </VueSlickCarousel> -->
    <!-- <VueSlick :options="slickOptions">
      <div v-for="(item, index) in items" :key="index">
        {{ item }}
      </div>
    </VueSlick> -->
    <h2 class="text-[50px] font-semibold mb-[40px] text-blue text-center">
      Blog
    </h2>
    <div class="blog ml-14">
      <VueSlickCarousel :arrows="false" :dots="true" :slidesToShow="3">
        <div v-for="i in items" :key="i" class="text-center blog-box">
          <img :src="i.image" alt="Image 1" class="" />
          <div class="pt-5">
            <h2
              class="text-darkBlue text-start mb-2 md:text-[26px] text-[22px] font-semibold"
            >
              {{ i.title }}
            </h2>
            <h6
              class="text-darkBlue text-center w-[80%] md:text-xl text-lg font-normal md:mb-10 mb-0"
            >
              {{ i.description }}
            </h6>
          </div>
        </div>
      </VueSlickCarousel>
    </div>

    <!-- <vueper-slides
      class="no-shadow"
      :visible-slides="3"
      :slide-ratio="1 / 4"
      :dragging-distance="70"
      :gap="3"
    >
      <vueper-slide
        v-for="i in items"
        :key="i"
        :image="i.image"
        :title="i.title"
        :content="i.description"
      />
    </vueper-slides> -->
    <!-- <VuePerslides
      :keyboardEnabled="false"
      paginationActiveColor="#7700D2"
      paginationColor="#d59dff"
      :navigationEnabled="false"
    >
      <slide v-for="item in items" :key="item.id" class="flex justify-center">
        <img :src="item" alt="Image 1" />
      </slide>
    </VuePerslides> -->
    <!-- <div class="blog">
      <div class="text-center blog-box">
        <img
          src="../static/Images/profit1.png"
          class="w-full h-auto"
          alt="image"
        />
        <div class="pt-5">
          <h2 class="text-darkBlue mb-2 text-[26px] font-semibold">
            The Challenge of Profit Tracking:
          </h2>
          <h6 class="text-darkBlue text-xl font-normal mb-10">
            E-commerce sellers can feel a bit overwhelmed with all the
            information coming from different places, like ad results, shipping
            fees, and taxes. It's tough to keep track of everything, and that
            makes it hard to make good decisions.
          </h6>
        </div>
      </div>
      <div class="text-center blog-box">
        <img
          src="../static/Images/profit1.png"
          class="w-full h-auto"
          alt="image"
        />
        <div class="pt-5">
          <h2 class="text-darkBlue mb-2 text-[26px] font-semibold">
            The Challenge of Profit Tracking:
          </h2>
          <h6 class="text-darkBlue text-xl font-normal mb-10">
            E-commerce sellers can feel a bit overwhelmed with all the
            information coming from different places, like ad results, shipping
            fees, and taxes. It's tough to keep track of everything, and that
            makes it hard to make good decisions.
          </h6>
        </div>
      </div>
      <div class="text-center blog-box">
        <img
          src="../static/Images/profit1.png"
          class="w-full h-auto"
          alt="image"
        />
        <div class="pt-5">
          <h2 class="text-darkBlue mb-2 text-[26px] font-semibold">
            The Challenge of Profit Tracking:
          </h2>
          <h6 class="text-darkBlue text-xl font-normal mb-10">
            E-commerce sellers can feel a bit overwhelmed with all the
            information coming from different places, like ad results, shipping
            fees, and taxes. It's tough to keep track of everything, and that
            makes it hard to make good decisions.
          </h6>
        </div>
      </div>
      <div class="text-center blog-box">
        <img
          src="../static/Images/profit1.png"
          class="w-full h-auto"
          alt="image"
        />
        <div class="pt-5">
          <h2 class="text-darkBlue mb-2 text-[26px] font-semibold">
            The Challenge of Profit Tracking:
          </h2>
          <h6 class="text-darkBlue text-xl font-normal mb-10">
            E-commerce sellers can feel a bit overwhelmed with all the
            information coming from different places, like ad results, shipping
            fees, and taxes. It's tough to keep track of everything, and that
            makes it hard to make good decisions.
          </h6>
        </div>
      </div>
    </div> -->
    <div class="text-center">
      <button
        class="py-4 px-12 bg-blue mt-20 text-white text-[24px] font-semibold rounded-full"
      >
        Read More
      </button>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import sliderImage from "../static/Images/slider.png";
// import { VueperSlides, VueperSlide } from "vueperslides";
// import "vueperslides/dist/vueperslides.css";
// import "vue3-carousel/dist/carousel.css";
// import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
// import { Carousel, Slide } from "vue-carousel";

// import VueSlickCarousel from "vue-slick-carousel";
// import "vue-slick-carousel/dist/vue-slick-carousel.css";
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
    // VueperSlides,
    // VueperSlide,
    // Carousel,
    // Slide,
    // Pagination,
    // Navigation,
    // VueSlickCarousel,
    // Carousel,
    // Slide,
  },
  data() {
    return {
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
      // nextLabel: "Next",
    };
  },
  // mounted() {
  //   this.$nextTick(() => {
  //     $(".slick-slider").slick();
  //   });
  // },
};
</script>
