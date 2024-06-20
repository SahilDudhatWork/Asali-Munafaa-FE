<template>
  <div>
    <div class="bg-white shadow-xl w-auto mt-6 p-3 h-[25rem] rounded-md">
      <img :src="item.image" alt="" class="w-[17rem]" />

      <p class="mt-3 text-[#5B638B] font-medium text-xl text-center">
        Product Name
      </p>
      <div class="flex items-center justify-between">
        <div>
          <p class="text-[#5B638B] text-base font-medium border-b-2 py-2">
            Sales
          </p>
          <p class="text-[#5B638B] text-base font-medium">{{ item.sales }}</p>
        </div>
        <div>
          <p class="text-[#5B638B] text-base font-medium border-b-2 py-2">
            Total Sales
          </p>
          <p class="text-[#5B638B] text-base font-medium">
            {{ item.totalSales }}
          </p>
        </div>
      </div>
      <div class="flex items-center justify-between mt-3">
        <div>
          <p class="text-[#5B638B] text-base font-medium border-b-2 py-2">
            Gross Profit
          </p>
          <p class="text-[#5B638B] text-base font-medium">
            {{ item.grossProfit.key }}
          </p>
          <p class="text-[#5B638B] text-base font-medium">
            {{ item.grossProfit.value }}
          </p>
        </div>
        <div>
          <p class="text-[#5B638B] text-base font-medium border-b-2 py-2">
            Delivery Rate
          </p>
          <p class="text-[#5B638B] text-base font-medium">
            {{ item.deliveryRate }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
