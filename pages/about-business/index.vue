<template>
  <div>
    <div
      class="max-w-fulls xl:mx-8 mx-0 mt-16 p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
    >
      <div>
        <a>
          <h5
            class="mb-2 text-3xl font-bold tracking-tight text-[#7562FF] dark:text-white"
          >
            About Business
          </h5>
        </a>
        <p class="mb-3 mt-3 font-medium text-xl text-[#5B638B]">
          Choose your option widely
        </p>
      </div>
      <div
        class="gap-3 mt-3 mb-5 flex flex-col gap-3"
        v-for="(item, key) in aboutBusiness"
        :key="key"
      >
        <p class="text-xl font-medium text-[#5B638B]">{{ item.question }}</p>
        <Dropdown
          :index="key"
          :items="item.items"
          :selectedLabel="item.selectedLabel"
          @getValue="getValue"
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
export default {
  layout: "dashboard",
  data() {
    return {
      // selectedLabel: "Select here...",
      aboutBusiness: [
        {
          question: "1). How much You’re Spending on ads ?",
          selectedLabel: "Select here...",
          items: [
            { label: "50k to 1lac", value: "50k to 1lac" },
            { label: "3lac to 5lac", value: "3lac to 5lac" },
            { label: "1lac to 3lac", value: "1lac to 3lac" },
            { label: "Above 10lac", value: "Above 10lac" },
            { label: "5lac to 10lac", value: "5lac to 10lac" },
          ],
        },
        {
          question: "2). How much ROAS you're getting?",
          selectedLabel: "Select here...",
          items: [
            { label: "2x to 4x", value: "2x to 4x" },
            { label: "4x to 6x", value: "4x to 6x" },
            { label: "6x to 9x", value: "6x to 9x" },
            { label: "Above 10x", value: "Above 10x" },
          ],
        },
        {
          question: "3). Your RTO Percentage ?",
          selectedLabel: "Select here...",
          items: [
            { label: "2% to 5%", value: "2% to 5%" },
            { label: "5% to 7%", value: "5% to 7%" },
            { label: "8% to 10%", value: "8% to 10%" },
            { label: "10% to 20%", value: "10% to 20%" },
            { label: "Above 20%", value: "Above 20%" },
          ],
        },
        {
          question: "4). Your COD/Prepaid Percentage ?",
          selectedLabel: "Select here...",
          items: [
            { label: "5% to 10%", value: "5% to 10%" },
            { label: "10% to 20%", value: "10% to 20%" },
            { label: "20% to 50%", value: "20% to 50% " },
            { label: "60% to 70%", value: "60% to 70%" },
            { label: "Above 70%", value: "Above 70%" },
          ],
        },
      ],
    };
  },
  methods: {
    getValue(value, index) {
      this.aboutBusiness[index].selectedLabel = value;
    },
    back() {
      this.$router.push("/shipping");
    },
    async validForm() {
      const invalidItemFound = this.aboutBusiness.some(
        (item) => item.selectedLabel === "Select here..."
      );
      if (invalidItemFound) {
        this.$toast.open({
          message: "Please fill up your field !",
          type: "error",
          duration: 2000,
          position: "bottom-right",
        });
        return false;
      }
      return true;
    },
    async handleSubmit() {
      let valid = await this.validForm();
      if (valid) {
        this.$router.push("/product");
      }
    },
  },
};
</script>
