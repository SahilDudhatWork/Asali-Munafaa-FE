<template>
  <div>
    <Modal>
      <template #modalContent>
        <OnBoardingModal @next="onBoardingNext" v-if="isOnBoardingModal" />
        <AllmostDoneModal
          @next="allmostNext"
          @back="allMostBack"
          v-if="isAllmostDoneModal"
        />
        <LastBarrierModal
          @next="lastBarrierNext"
          @back="lastBarrierBack"
          v-if="isLastBarrierModal"
        />
        <EcommerceModal v-if="isEcommerceModal" @next="ecommerceNext" />
      </template>
    </Modal>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import message from "@/static/lang/en.json";

export default {
  layout: "blank",
  data() {
    return {};
  },
  computed: {
    ...mapState("auth", {
      isOnBoardingModal: (state) => state.modal.isOnBoardingModal,
      isLastBarrierModal: (state) => state.modal.isLastBarrierModal,
      isAllmostDoneModal: (state) => state.modal.isAllmostDoneModal,
      isEcommerceModal: (state) => state.modal.isEcommerceModal,
      modal: (state) => state.modal,
    }),
  },
  async mounted() {
    try {
      const response = await this.getProfileData();
      let onbordingStep = response.data.onboardingSteps;
      this.closeModal("isOnBoardingModal");
      if (onbordingStep.step1) {
        this.openModal("isAllmostDoneModal");
      } else if (onbordingStep.step2) {
        this.openModal("isLastBarrierModal");
      } else if (onbordingStep.step3) {
        this.openModal("isEcommerceModal");
      } else if (onbordingStep.step4) {
        try {
          const response = await this.getBusinessDetail();
          const businessdetailsSteps = response.data.businessDetailsSteps;
          if (businessdetailsSteps.step1) {
            this.$router.push("/industry");
          } else if (businessdetailsSteps.step2) {
            this.$router.push("/shipping");
          } else if (businessdetailsSteps.step3) {
            this.$router.push("/about-business");
          } else if (businessdetailsSteps.step4) {
            this.$router.push("/product");
          } else if (businessdetailsSteps.step5) {
            this.$router.push("/dashboard");
          } else {
            this.$router.push("/marketing-platform");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        this.openModal("isOnBoardingModal");
      }
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    ...mapActions({
      addProfileData: "auth/addProfileData",
      getProfileData: "auth/getProfileData",
      getBusinessDetail: "bussiness-details/getBusinessDetail",
      openModal: "auth/openModal",
      closeModal: "auth/closeModal",
    }),
    async onBoardingNext(payload) {
      try {
        const response = await this.addProfileData(payload);
        this.$toast.open({
          message: message.dataUpdateMessage,
          type: "success",
          duration: 2000,
          position: "bottom-right",
        });
        this.openModal("isAllmostDoneModal");
        this.closeModal("isOnBoardingModal");
      } catch (error) {
        this.$toast.open({
          message: error,
          type: "error",
          duration: 2000,
          position: "bottom-right",
        });
      }
    },
    async allMostBack() {
      this.openModal("isOnBoardingModal");
      this.closeModal("isAllmostDoneModal");
    },
    async allmostNext(payload) {
      try {
        const response = await this.addProfileData(payload);
        this.$toast.open({
          message: message.dataUpdateMessage,
          type: "success",
          duration: 2000,
          position: "bottom-right",
        });
        this.openModal("isLastBarrierModal");
        this.closeModal("isAllmostDoneModal");
      } catch (error) {
        this.$toast.open({
          message: error,
          type: "error",
          duration: 2000,
          position: "bottom-right",
        });
      }
    },
    async ecommerceNext() {
      try {
        let data = {
          onboardingSteps: {
            step4: true,
          },
        };
        const response = await this.addProfileData(data);
        this.$router.push("/marketing-platform");
      } catch (error) {
        this.$toast.open({
          message: error,
          type: "error",
          duration: 2000,
          position: "bottom-right",
        });
      }
    },
    lastBarrierBack() {
      this.openModal("isAllmostDoneModal");
      this.closeModal("isLastBarrierModal");
    },
    async lastBarrierNext(payload) {
      try {
        const response = await this.addProfileData(payload);
        this.$toast.open({
          message: message.dataUpdateMessage,
          type: "success",
          duration: 2000,
          position: "bottom-right",
        });
        this.openModal("isEcommerceModal");
        this.closeModal("isLastBarrierModal");
      } catch (error) {
        this.$toast.open({
          message: error,
          type: "error",
          duration: 2000,
          position: "bottom-right",
        });
      }
    },
  },
};
</script>
