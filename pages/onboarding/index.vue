<template>
  <div>
    <Modal>
      <template #modalContent>
        <OnBoardingModal
          @next="onBoardingNext"
          v-if="isOnBoardingModal"
          :onBoarding="onBoarding"
        />
        <AllmostDoneModal
          @next="allmostNext"
          @back="allMostBack"
          v-if="isAllmostDoneModal"
          :onBoarding="onBoarding"
        />
        <LastBarrierModal
          @next="lastBarrierNext"
          @back="lastBarrierBack"
          v-if="isLastBarrierModal"
          :onBoarding="onBoarding"
        />
        <EcommeceModal v-if="isEcommerceModal" :onBoarding="onBoarding" />
      </template>
    </Modal>
  </div>
</template>

<script>
export default {
  layout: "blank",
  data() {
    return {
      isAllmostDoneModal: false,
      isLastBarrierModal: false,
      isOnBoardingModal: true,
      isEcommerceModal: false,
      onBoarding: [],
    };
  },
  methods: {
    async onBoardingNext() {
      this.isAllmostDoneModal = true;
      this.isOnBoardingModal = false;
    },
    allMostBack() {
      this.isOnBoardingModal = true;
      this.isAllmostDoneModal = false;
    },
    allmostNext() {
      this.isLastBarrierModal = true;
      this.isAllmostDoneModal = false;
      console.log(this.onBoarding);
    },
    lastBarrierBack() {
      this.isAllmostDoneModal = true;
      this.isLastBarrierModal = false;
    },
    lastBarrierNext() {
      this.isEcommerceModal = true;
      this.isLastBarrierModal = false;
      console.log(this.onBoarding);
    },
  },
  mounted() {
    // console.log(this.onBoarding, "on boarding");
  },
};
</script>
