<template>
  <div
    class="xl:w-[30%] sm:w-full min-h-screen flex items-center justify-center py-6"
  >
    <div class="py-8 px-16 rounded-lg shadow-xl bg-opacity-img">
      <div class="items-center mb-4">
        <h2 class="text-[26px] font-bold text-white">Last Barrier</h2>
      </div>
      <div class="mt-4 flex gap-3 flex-col">
        <label class="block text-white text-[13px] font-bold"
          >What’s your main goal using Asali Munafaa ?</label
        >
        <div class="flex items-center text-sm">
          <input
            type="email"
            id="email"
            class="bg-white rounded pl-6 py-2 md:py-2 focus:outline-none w-full"
            placeholder="Enter Here ..."
            v-model="onBoarding.goal"
          />
        </div>
      </div>

      <div class="mt-4 flex gap-3 flex-col">
        <label class="block text-white text-sm font-bold"
          >How much revenue you want in Future ?</label
        >
        <div class="flex items-center text-sm">
          <input
            type="text"
            id="website"
            class="bg-white rounded pl-6 py-2 md:py-2 focus:outline-none w-full mb-3"
            placeholder="Enter Here ..."
            v-model="onBoarding.futureRevenue"
          />
        </div>
      </div>
      <div class="flex gap-3 lg:flex-row flex-col">
        <button
          class="bg-gradient-to-r from-[#00CACE] to-[#00C3D3] hover:bg-gradient-to-r hover:from-[#00CACE] transition-main hover:to-[#00C3D3] bg-primaryBg text-white font-bold py-3 mt-4 px-4 w-full text-sm rounded-md"
          @click="$emit('back')"
        >
          Back
        </button>
        <button
          class="bg-gradient-to-r from-[#00CACE] to-[#00C3D3] hover:bg-gradient-to-r hover:from-[#00CACE] transition-main hover:to-[#00C3D3] bg-primaryBg text-white font-bold py-3 mt-4 px-4 w-full text-sm rounded-md"
          @click="next"
          :disabled="isLoading"
        >
          <Loader v-if="isLoading" :loading="isLoading"></Loader>
          <span v-else>Next</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import message from "@/static/lang/en.json";
export default {
  props: {
    isLoading: {
      type: Boolean,
    },
  },
  data() {
    return {
      onBoarding: {
        goal: "",
        futureRevenue: "",
        onboardingSteps: {
          step3: true,
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      getUserData: "auth/getUserData",
    }),
  },
  async mounted() {
    this.onBoarding.goal = await this.getUserData?.goal;
    this.onBoarding.futureRevenue = await this.getUserData?.futureRevenue;
  },
  methods: {
    async next() {
      if (!this.onBoarding.goal || !this.onBoarding.futureRevenue) {
        this.$toast.open({
          message: message.errorMessage,
          type: "error",
          duration: 2000,
          position: "bottom-right",
        });
      } else {
        await this.$emit("next", this.onBoarding);
      }
    },
  },
};
</script>
