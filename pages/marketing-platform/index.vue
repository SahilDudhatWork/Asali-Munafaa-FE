<template>
  <div>
    <div
      v-if="isMarketing"
      class="max-w-fulls xl:mx-8 mx-0 mt-16 margin-top p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
    >
      <div>
        <a href="#">
          <h5
            class="mb-2 text-3xl font-bold tracking-tight text-[#7562FF] dark:text-white"
          >
            Marketing Platform
          </h5>
        </a>
        <p class="mb-3 mt-3 font-medium text-xl text-[#5B638B]">
          Which Platform do you advertise and select the Platform
        </p>
      </div>
      <div class="grid lg:grid-cols-2 grid-cols-1 mx-5 gap-3 mt-5 mb-5">
        <CheckBox
          :label-text="tab.name"
          :checkbox-id="tab.name"
          v-for="(tab, key) in socialMedia"
          :key="key"
          :imageSrc="tab.image"
          :selectedValue="selectedValue"
          :checkbox-name="tab.name"
          :checkbox-value="tab.name"
          @change="getName"
        />
        <div>
          <span class="text-lg text-red-500 font-medium">{{
            errorMessage
          }}</span>
        </div>
      </div>
      <div class="flex gap-3 lg:flex-row flex-col justify-end w-full">
        <button
          class="inline-flex items-center justify-center bg-[#2B0064] transition-main hover:to-[#EA69FF] bg-primaryBg text-white font-bold py-4 mt-4 px-12 text-sm rounded-md"
          @click="next"
        >
          Next
        </button>
      </div>
    </div>
    <div
      v-if="isOpen"
      class="max-w-fulls mx-8 my-8 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div>
        <a href="#">
          <h5
            class="mb-2 text-3xl font-bold tracking-tight text-[#7562FF] dark:text-white"
          >
            Available Integration
          </h5>
        </a>
        <p class="mb-3 mt-3 font-medium text-xl text-[#5B638B]">
          Connect your ad Platform to your Asali Munaafa dashboard below.
        </p>
      </div>
      <p class="mt-8 font-medium text-xl text-[#5B638B]">Ad Platform</p>
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-3 mt-5 mb-5 w-full">
        <div
          class="flex flex-col lg:flex-row justify-between items-center gap-4"
        >
          <div class="flex flex-col lg:flex-row items-center gap-4">
            <div
              class="py-2 px-2 rounded-full bg-[#2B0064] transition-main w-7"
            >
              <img src="../../static/svg/facebook.svg" alt="" />
            </div>
            <div class="text-[#5B638B] font-medium text-xl">
              {{ selectedText }}
            </div>
          </div>
          <button
            class="inline-flex items-center justify-center bg-[#2B0064] transition-main hover:to-[#EA69FF] bg-primaryBg text-white font-bold py-4 mt-4 px-7 text-sm rounded-md"
          >
            Connect
          </button>
        </div>
      </div>

      <div class="flex gap-3 lg:flex-row flex-col justify-end w-full">
        <button
          class="inline-flex items-center justify-center bg-[#2B0064] transition-main hover:to-[#EA69FF] bg-primaryBg text-white font-bold py-4 mt-4 px-12 text-sm rounded-md"
          @click="back"
        >
          Back
        </button>
        <button
          @click="handleSubmit"
          class="inline-flex items-center justify-center bg-[#2B0064] transition-main hover:to-[#EA69FF] bg-primaryBg text-white font-bold py-4 mt-4 px-12 text-sm rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import meta from "@/static/svg/meta.svg";
import googleAds from "@/static/svg/googleAds.svg";
import tiktok from "@/static/svg/tiktok.svg";
import snapchat from "@/static/svg/snapchat.svg";
export default {
  layout: "dashboard",
  components: {},
  data() {
    return {
      errorMessage: "",
      selectedValue: [],
      isOpen: false,
      isMarketing: true,
      socialMedia: [
        {
          name: "Meta ads",
          image: meta,
        },
        {
          name: "Google ads",
          image: googleAds,
        },
        {
          name: "TikTok ads",
          image: tiktok,
        },
        {
          name: "Snapchat",
          image: snapchat,
        },
      ],
    };
  },
  computed: {
    selectedText() {
      return this.selectedValue.join(" & ");
    },
  },
  methods: {
    getName(value) {
      this.selectedValue = value;
    },
    next() {
      if (this.selectedText == "") {
        this.$toast.open({
          message: "Please fill up your field !",
          type: "error",
          duration: 2000,
          position: "bottom-right",
        });
      } else {
        this.isOpen = true;
        this.isMarketing = false;
      }
    },
    back() {
      this.isMarketing = true;
      this.isOpen = false;
    },
    handleSubmit() {
      this.$router.push("/industry");
    },
  },
};
</script>
