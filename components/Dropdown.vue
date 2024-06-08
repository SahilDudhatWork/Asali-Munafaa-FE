<template>
  <div class="">
    <button
      @click="toggleDropdown"
      class="text-[#8C93BE] bg-[#F3F3F3] xl:mx-7 mx-0 lg:mx-8 md:mx-5 xl:w-1/2 xs:w-full width-100 lg:w-1/2 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
      type="button"
    >
      {{ selectedLabel }}
    </button>

    <div
      v-if="isDropdownVisible"
      class="shadow-md z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-1/2 dark:bg-gray-700 mx-6 my-4"
    >
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200 px-3">
        <li v-for="item in items" :key="item.value">
          <a
            href="#"
            class="block px-4 py-2 border-b"
            @click.prevent="selectItem(item)"
          >
            <span class="text-[#8C93BE] font-semibold text-lg">
              {{ item.label }}
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    selectedLabel: {
      // type: String,
      required: true,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
      isDropdownVisible: false,
      // selectLabel: this.selectedLabel,
    };
  },
  watch: {
    selectedLabel(item) {
      // this.selectLabel = this.selectedLabel;
    },
  },

  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    selectItem(item) {
      // this.selectLabel = item.label;
      this.isDropdownVisible = false;
      this.$emit("getValue", item, this.index);
    },
  },
};
</script>
