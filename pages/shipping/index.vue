<template>
  <div>
    <div
      v-if="isMarketing"
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
      <div class="flex gap-3 justify-end flex-column">
        <button
          @click="shipingBack"
          class="inline-flex items-center width-100 justify-center bg-[#2B0064] transition-main hover:to-[#EA69FF] bg-primaryBg text-white font-bold py-4 mt-4 px-12 text-sm rounded-md"
        >
          Back
        </button>
        <button
          @click="handleShippingNext"
          :disabled="isLoading"
          class="inline-flex items-center width-100 justify-center bg-[#2B0064] transition-main hover:to-[#EA69FF] bg-primaryBg text-white font-bold py-4 mt-4 px-12 text-sm rounded-md"
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
          Connect your ad Shipping to your Asali Munaafa dashboard below.
        </p>
      </div>
      <p class="mt-8 mb-6 font-medium text-xl text-[#5B638B]">Ad Shipping</p>
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
            class="inline-flex items-center justify-center bg-[#2B0064] transition-main hover:to-[#EA69FF] bg-primaryBg text-white font-bold lg:py-4 py-3 mt-4 lg:px-7 px-5 text-sm rounded-md"
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
          class="inline-flex items-center width-100 justify-center bg-[#2B0064] transition-main hover:to-[#EA69FF] bg-primaryBg text-white font-bold py-4 mt-4 px-12 text-sm rounded-md"
          :disabled="isLoading"
        >
          <Loader v-if="isLoading" :loading="isLoading"></Loader>
          <span v-else> Next</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import shiprocket from "@/static/svg/shiprocket.svg";
import truck from "@/static/svg/truck.svg";
import packaging from "@/static/svg/packaging.svg";
import { mapActions, mapGetters } from "vuex";
import message from "@/static/lang/en.json";
export default {
  layout: "dashboard",
  data() {
    return {
      selectedValue: [],
      selectedPlatform: [],
      isOpen: false,
      isMarketing: true,
      isLoading: false,
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
  async mounted() {
    if (this.getUserBusinessData?.shipping) {
      this.selectedValue = await this.getUserBusinessData?.shipping;
    }
  },
  watch: {
    getUserBusinessData: {
      deep: true,
      handler(item) {
        if (item?.shipping) {
          this.selectedValue = item?.shipping;
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
    shipingBack() {
      this.$router.push("/industry");
    },
    async handleShippingNext() {
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

          this.selectedPlatform = this.shipping.filter((platform) =>
            this.selectedValue.includes(platform.name)
          );
          let data = {
            shipping: this.selectedValue,
            businessDetailsSteps: {
              step3: true,
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
        this.isOpen = true;
        this.isMarketing = false;
      }
    },
    back() {
      this.isMarketing = true;
      this.isOpen = false;
    },
    handleSubmit() {
      this.$router.push("/about-business");
    },
  },
};
</script>
