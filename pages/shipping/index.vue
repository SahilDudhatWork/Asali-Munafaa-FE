<template>
  <div>
    <div
      class="max-w-fulls xl:mx-8 mx-0 mt-16 p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
    >
      <div>
        <a href="#">
          <h5
            class="mb-2 text-3xl font-bold tracking-tight text-[#7562FF] dark:text-white"
          >
            Shipping
          </h5>
        </a>
        <p class="mb-3 mt-3 font-medium text-xl text-[#5B638B]">
          Select your Shipping Portal
        </p>
        <p class="mb-3 mt-3 font-medium text-xl text-[#5B638B]">
          ( You can select Multiple options )
        </p>
      </div>
      <div class="mx-5 gap-3 mt-5 mb-5 flex flex-col gap-3">
        <CheckBox
          :label-text="tab.name"
          :checkbox-id="tab.name"
          v-for="(tab, key) in shipping"
          :key="key"
          :selectedValue="selectedValue"
          :checkbox-name="tab.name"
          :checkbox-value="tab.name"
          :imageSrc="tab.image"
          @change="getName"
        />
      </div>
      <div class="flex gap-3 lg:flex-row flex-col justify-end w-full">
        <button
          @click="back"
          class="inline-flex items-center justify-center xl:w-[20%] sm:w-full bg-[#2B0064] transition-main hover:to-[#EA69FF] bg-primaryBg text-white font-bold py-5 mt-4 px-4 text-sm rounded-md"
        >
          Back
        </button>
        <button
          @click="handleSubmit"
          class="inline-flex items-center justify-center xl:w-[20%] sm:w-full bg-[#2B0064] transition-main hover:to-[#EA69FF] bg-primaryBg text-white font-bold py-5 mt-4 px-4 text-sm rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import shiprocket from "@/static/svg/shiprocket.svg";
import truck from "@/static/svg/truck.svg";
import packaging from "@/static/svg/packaging.svg";
export default {
  layout: "dashboard",
  data() {
    return {
      selectedValue: [],
      shipping: [
        {
          name: "Shiprocket",
          image: shiprocket,
        },
        {
          name: "I think logistic",
          image: truck,
        },
        {
          name: "Delhivery",
          image: packaging,
        },
      ],
    };
  },
  methods: {
    getName(value) {
      this.selectedValue = value;
    },
    back() {
      this.$router.push("/industry");
    },
    handleSubmit() {
      if (this.selectedValue == "") {
        this.$toast.open({
          message: "Please fill up your field !",
          type: "error",
          duration: 2000,
          position: "bottom-right",
        });
      } else {
        this.$router.push("/about-business");
      }
    },
  },
};
</script>
