<template>
  <div class="mx-2 mt-16">
    <div class="mt-6 mt-3">
      <Sales :sales="product" />
    </div>
    <div
      class="mt-6 mb-4 flex items-center justify-between xxxl:flex-row xxl:flex-row xl:flex-row lg:flex-row sm:flex-col flex-col"
    >
      <div
        class="mt-6 mb-4 border flex xxxl:flex-row xxl:flex-row xl:flex-row lg:flex-row sm:flex-row flex-col"
      >
        <nav aria-label="Page navigation example">
          <ul class="inline-flex -space-x-px text-base h-10 shadow-sm">
            <li>
              <button
                :class="
                  activeButton === 'bestSellers'
                    ? ' bg-[#4C45E3] text-white'
                    : 'text-[#4C45E3]'
                "
                @click="toggleProfit('bestSellers')"
                class="flex items-center rounded-sm justify-center px-2 h-10 leading-tight xxxl:text-xl xxl:text-xl xl:text-xl lg:text-xl sm:text-base font-semibold border border-[#4C45E3]"
              >
                Best Sellers
              </button>
            </li>
            <li>
              <button
                :class="
                  activeButton === 'mostProfitable'
                    ? 'bg-[#4C45E3] text-white'
                    : 'text-[#4C45E3]'
                "
                @click="toggleProfit('mostProfitable')"
                class="flex items-center justify-center px-2 h-10 leading-tight xxxl:text-xl xxl:text-xl xl:text-xl lg:text-xl sm:text-base font-semibold text-[#4C45E3] border border-[#4C45E3]"
              >
                Most Profitable
              </button>
            </li>
            <li>
              <button
                :class="
                  activeButton === 'leastProfitable'
                    ? ' bg-[#4C45E3] text-white'
                    : ' text-[#4C45E3]'
                "
                @click="toggleProfit('leastProfitable')"
                class="flex items-center rounded-sm justify-center px-2 h-10 leading-tight xxxl:text-xl xxl:text-xl xl:text-xl lg:text-xl sm:text-base font-semibold text-[#4C45E3] border border-[#4C45E3]"
              >
                Least Profitable
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <p class="text-center font-medium text-base text-[#6A719A]">1-4 / 12</p>
      </div>
    </div>
    <div class="mt-8 mb-3">
      <div
        class="flex xxxl:flex-row xxl:flex-row xl:flex-row lg:flex-row sm:flex-row flex-col gap-2 items-center"
      >
        <p class="text-[#000E2F] font-medium text-xl">Group by</p>
        <button
          class="border border-[#4C45E3] font-semibold text-xl p-1 px-2"
          @click="toggleProduct('Product')"
          :class="isProduct ? 'bg-[#4C45E3] text-white' : 'text-[#4C45E3]'"
        >
          Product
        </button>
        <button
          class="border border-[#4C45E3] font-semibold text-xl p-1 px-2"
          @click="toggleProduct('Category')"
          :class="isProduct ? ' text-[#4C45E3]  ' : 'bg-[#4C45E3] text-white'"
        >
          Category
        </button>
      </div>
    </div>
    <div class="mt-6 mb-3 bg-white shadow-lg rounded-xl p-5">
      <div class="flex justify-end">
        <DatePicker v-model="date" range />
      </div>
      <div>
        <LineChart
          :chartData="chartData"
          :options="chartOptions"
          class="w-full"
        />
      </div>
    </div>
    <div class="mt-6 mb-3">
      <div
        class="mt-6 mb-4 bg-white rounded-xl shadow-lg py-3 px-2 overflow-x-auto"
      >
        <Table :header="tableHeaders" :tableData="tableData" />
      </div>
    </div>
    <div class="mt-6 mb-3">
      <Footer />
    </div>
  </div>
</template>

<script>
import productImage from "@/static/svg/product.svg";
export default {
  layout: "overview",
  data() {
    return {
      date: new Date(),
      activeButton: "bestSellers",
      isProduct: true,
      tableHeaders: [
        "No.",
        "Products Name",
        "Sales",
        "Total Sales",
        "Product Prices",
        "Selling Price ",
        "Profits",
        "Profits Margin",
      ],
      tableData: [
        {
          name: "Products Name",
          spend: "Sales",
          orders: "Total Sales",
          purchase: "Product Prices",
          sales: "10000",
          roas: "Profits",
          profit: "Profits Margin",
        },
        {
          name: "Products Name",
          spend: "Sales",
          orders: "Total Sales",
          purchase: "Product Prices",
          sales: "Total Sales",
          roas: "Profits",
          profit: "Profits Margin",
        },
        {
          name: "Products Name",
          spend: "Sales",
          orders: "Total Sales",
          purchase: "Product Prices",
          sales: "Total Sales",
          roas: "Profits",
          profit: "Profits Margin",
        },
        {
          name: "Products Name",
          spend: "Sales",
          orders: "Total Sales",
          purchase: "Product Prices",
          sales: "Total Sales",
          roas: "Profits",
          profit: "Profits Margin",
        },
        {
          name: "Products Name",
          spend: "Sales",
          orders: "Total Sales",
          purchase: "Product Prices",
          sales: "Total Sales",
          roas: "Profits",
          profit: "Profits Margin",
        },
      ],
      chartData: {
        labels: [2015, 2016, 2017, 2018, 2019, 2020],
        datasets: [
          {
            data: [40, 34, 40, 60, 40, 60],
            label: "",
            borderColor: "#2453FF",
            borderWidth: 2,
            fill: false,
          },
        ],
      },

      chartOptions: {
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
          backgroundtColor: "000000",
          titleFontColor: "#ffffff",
          bodyFontColor: "#ffffff",
          position: "nearest",
          node: "nearest",
          intersect: 0,
          bodySpacing: 4,
        },
      },
      product: {
        image: productImage,
        title: "Products",
        description: "See a breakdown of your most profitable products",
        icon: "",
        left: 0,
      },
    };
  },
  methods: {
    toggleProfit(type) {
      this.activeButton = type;
    },
    toggleProduct(type) {
      this.isProduct = type === "Product";
    },
  },
};
</script>
<style>
.mx-input {
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.3);
}
</style>
