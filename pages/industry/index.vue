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
            Industry
          </h5>
        </a>
        <p class="mb-3 mt-3 font-medium text-xl text-[#5B638B]">
          Which types of Product you are selling ?
        </p>
        <p class="mb-3 mt-3 font-medium text-xl text-[#5B638B]">
          ( You can select multiple options )
        </p>
      </div>
      <div class="grid lg:grid-cols-2 grid-cols-1 mx-5 gap-3 mt-5 mb-5">
        <CheckBox
          :label-text="tab"
          :checkbox-id="tab"
          v-for="(tab, key) in industry"
          :key="key"
          :selectedValue="selectedValue"
          :checkbox-name="tab"
          :checkbox-value="tab"
          @change="getName"
          :imageSrc="tab"
        />
      </div>
      <div class="flex gap-3 lg:flex-row flex-col justify-end w-full">
        <button
          @click="back"
          class="inline-flex items-center justify-center xl:w-[12.5rem] sm:w-full bg-[#2B0064] transition-main hover:to-[#EA69FF] bg-primaryBg text-white font-bold py-5 mt-4 px-4 text-sm rounded-md"
        >
          Back
        </button>
        <button
          @click="handleSubmit"
          class="inline-flex items-center justify-center xl:w-[12.5rem] sm:w-full bg-[#2B0064] transition-main hover:to-[#EA69FF] bg-primaryBg text-white font-bold py-5 mt-4 px-4 text-sm rounded-md"
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
      selectedValue: [],
      industry: [
        "Clothing & Fashion",
        "Jewellery & Accessories",
        "Sports Wear & Product",
        "Dropshipping",
        "Home Decor",
        "Electronics",
        "Pharmaceutical",
        "Food & Beverages",
        "Skin Care",
        "Other",
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
    back() {
      this.$router.push("/marketing-platform");
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
        this.$router.push("/shipping");
      }
    },
  },
};
</script>
