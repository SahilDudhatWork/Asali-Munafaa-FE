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
        <EcommeceModal v-if="isEcommerceModal" />
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
    };
  },
  methods: {
    onBoardingNext() {
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
    },
    lastBarrierBack() {
      this.isAllmostDoneModal = true;
      this.isLastBarrierModal = false;
    },
    lastBarrierNext() {
      this.isEcommerceModal = true;
      this.isLastBarrierModal = false;
    },
  },
};
</script>
<!-- <div class="transition-opacity">
              <div class="absolute inset-0 bg-black opacity-50"></div>
            </div> -->

<!-- <div class="transition-opacity">
                <div class="absolute inset-0 bg-black opacity-50"></div>
              </div> -->
