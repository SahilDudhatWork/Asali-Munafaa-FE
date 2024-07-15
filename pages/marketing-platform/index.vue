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
          v-for="(tab, key) in marketingPlatform"
          :key="key"
          :imageSrc="tab.image"
          :selectedValue="selectedValue"
          :checkbox-name="tab.name"
          :checkbox-value="tab.name"
          @change="getName"
        />
        <div></div>
      </div>
      <div class="flex gap-3 justify-end">
        <button
          class="inline-flex items-center justify-center width-100 bg-[#2B0064] transition-main hover:to-[#EA69FF] bg-primaryBg text-white font-bold py-4 mt-4 px-12 text-sm rounded-md"
          @click="marketingPlatformNext"
          :disabled="isLoading"
        >
          <Loader v-if="isLoading" :loading="isLoading"></Loader>
          <span v-else> Next</span>
        </button>
      </div>
    </div>
    <div
      v-if="isOpen"
      class="max-w-fulls mt-16 my-8 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div>
        <a>
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
      <p class="mt-8 mb-6 font-medium text-xl text-[#5B638B]">Ad Platform</p>
      <div
        v-for="(platform, key) in selectedPlatform"
        :key="key"
        class="grid lg:grid-cols-2 grid-cols-1 gap-3 w-full"
      >
        <div class="flex justify-between items-center gap-4">
          <div class="flex items-center gap-4">
            <div class="py-2 px-2 rounded-full bg-gray-200 transition-main w-7">
              <img :src="platform.image" alt="" />
            </div>
            <div class="text-[#5B638B] font-medium lg:text-xl text-md">
              {{ platform.name }}
            </div>
          </div>
          <button
            @click="connect(platform, key)"
            class="inline-flex items-center justify-center bg-[#2B0064] transition-main hover:to-[#EA69FF] bg-primaryBg text-white font-bold lg:py-4 py-3 lg:px-7 mt-4 px-4 text-sm rounded-md"
          >
            Connect
          </button>
        </div>
      </div>

      <div class="flex gap-3 justify-end flex-column">
        <button
          class="inline-flex items-center width-100 justify-center bg-[#2B0064] transition-main hover:to-[#EA69FF] bg-primaryBg text-white font-bold py-4 mt-4 px-12 text-sm rounded-md"
          @click="back"
        >
          Back
        </button>
        <button
          @click="handleSubmit"
          :disabled="isLoading"
          class="inline-flex items-center width-100 justify-center bg-[#2B0064] transition-main hover:to-[#EA69FF] bg-primaryBg text-white font-bold py-4 mt-4 px-12 text-sm rounded-md"
        >
          <Loader v-if="isLoading" :loading="isLoading"></Loader>
          <span v-else> Next</span>
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
import { mapActions, mapGetters } from "vuex";
import message from "@/static/lang/en.json";
export default {
  layout: "dashboard",
  data() {
    return {
      selectedValue: [],
      isOpen: false,
      isMarketing: true,
      isLoading: false,
      marketingPlatform: [
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
      selectedPlatform: [],
    };
  },
  async mounted() {
    if (this.getUserBusinessData?.marketingPlatform) {
      this.selectedValue = await this.getUserBusinessData?.marketingPlatform;
    }
  },
  watch: {
    getUserBusinessData: {
      deep: true,
      handler(item) {
        if (item?.marketingPlatform) {
          this.selectedValue = item.marketingPlatform;
        }
      },
    },
  },
  computed: {
    ...mapGetters({
      getUserBusinessData: "bussiness-details/getUserBusinessData",
    }),
  },
  methods: {
    ...mapActions({
      MarketingPlatformNext: "bussiness-details/marketingPlatform",
    }),
    async getName(value) {
      this.selectedValue = value;
    },
    connect(value) {
      console.log(value.name);
    },
    async marketingPlatformNext() {
      try {
        if (this.selectedValue == "") {
          this.$toast.open({
            message: message.errorMessage,
            type: "error",
            duration: 2000,
            position: "bottom-right",
          });
        } else {
          this.isLoading = true;
          this.selectedPlatform = this.marketingPlatform.filter((platform) =>
            this.selectedValue.includes(platform.name)
          );

          let data = {
            marketingPlatform: this.selectedValue,
            businessDetailsSteps: {
              step1: true,
            },
          };
          const response = await this.MarketingPlatformNext(data);
        }
      } catch (error) {
        this.$toast.open({
          message: error,
          type: "error",
          duration: 2000,
          position: "bottom-right",
        });
      } finally {
        this.isLoading = false;
        this.isMarketing = false;
        this.isOpen = true;
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
