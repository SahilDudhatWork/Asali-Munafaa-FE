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
    <carousel
      :per-page="1"
      paginationActiveColor="#7700D2"
      paginationColor="#d59dff"
      :navigationEnabled="true"
    >
      <slide v-for="item in items" :key="item.id" class="flex justify-center">
        <img :src="item" alt="Image 1" />
      </slide>
    </carousel>
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
        class="py-4 px-12 bg-blue mt-10 text-white text-[24px] font-semibold rounded-full"
      >
        Read More
      </button>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

// import VueSlickCarousel from "vue-slick-carousel";
// import "vue-slick-carousel/dist/vue-slick-carousel.css";
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    // VueSlickCarousel,
    Carousel,
    Slide,
  },
  data() {
    return {
      items: [
        "http://127.0.0.1:5500/src/image/profit1.png",
        "http://127.0.0.1:5500/src/image/profit1.png",
        "http://127.0.0.1:5500/src/image/profit1.png",
        "http://127.0.0.1:5500/src/image/profit1.png",
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
