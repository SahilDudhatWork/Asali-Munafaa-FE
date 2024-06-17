<template>
  <div class="mt-16 mx-2">
    <div
      class="max-w-fulls py-4 pl-5 grid xxxl:grid-cols-5 xxl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-10 items-center bg-white border border-gray-200 rounded-2xl shadow-lg"
    >
      <TotalSales v-for="(item, key) in totalSales" :key="key" :item="item" />
    </div>
    <div class="mt-6 mb-4">
      <Sales :sales="protal" />
    </div>
    <div class="mt-6 flex gap-3 mb-3 flex-col xl:flex-row">
      <div
        class="flex xxxl:flex-col xxl:flex-col xl:flex-col lg:flex-row flex-col gap-6"
      >
        <ProfitCard
          class="max-w-fulls bg-white p-3 rounded-xl shadow-lg border-gray-200 gap-6 xl:w-[20.688rem] xxl:w-[20.688rem] xxxl:w-[20.688rem] lg:w-full md:w-full sm:w-full xs:w-full"
          v-for="(item, key) in profit"
          :key="key"
          :item="item"
          :isShow="true"
          :style="{ height: item.height + 'px' }"
        />
      </div>
      <div
        class="bg-white xl:col-span-2 xl:p-[60px] w-full md:p-[30px] p-[30px] shadow-lg rounded-xl"
      >
        <div
          class="flex justify-between items-center xxl:flex-row xxxl:flex-row xl:flex-row gap-4 flex-col mb-5 border-b-2 py-3"
        >
          <h2 class="text-[#09347F] font-semibold text-xl">
            Compare Key Metrics
          </h2>
          <div
            class="flex gap-2 xxl:flex-row xxxl:flex-row xl:flex-row gap-4 flex-col"
          >
            <button
              class="bg-[#009332] transition-main text-white font-semibold px-5 py-3 w-full text-base rounded-sm"
            >
              Compare Periods
            </button>
            <div class="flex border py-2 px-2">
              <select
                name
                id
                class="!focus-visible::outline-0 text-[#5B638B] border-none font-semibold text-base"
              >
                <option value="year">Select Metrics</option>
                <option value="week">Month</option>
                <option value="week">Week</option>
              </select>
              <select
                name
                id
                class="!focus-visible::outline-0 text-[#5B638B] border-none font-semibold text-base"
              >
                <option value="year">Daily</option>
                <option value="week">Month</option>
                <option value="week">Week</option>
              </select>
            </div>
          </div>
        </div>
        <LineChart
          :chartData="chartData"
          :options="chartOptions"
          class="w-full bg-white rounded-xl"
        />
      </div>
    </div>
    <div class="mt-6 mb-4">
      <Sales :sales="overview" />
    </div>
    <div
      class="mt-6 mb-3 grid xl:grid-cols-4 xxl:grid-cols-4 xxxl:grid-cols-4 md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-6"
    >
      <TotalCollection
        class="max-w-fulls bg-white p-3 rounded-xl shadow-lg border-gray-200 w-auto h-[10.625rem]"
        v-for="(item, key) in totalCollection"
        :key="key"
        :item="item"
        :isShow="true"
      />
    </div>
    <div class="mt-6 mb-4">
      <Sales :sales="ExpenseBreakdown" />
    </div>

    <div class="mt-6 mb-4">
      <div
        class="bg-white xl:col-span-2 xl:p-[18px] w-full md:p-[30px] p-[18px] shadow-lg rounded-lg"
      >
        <div
          class="flex justify-between xxl:flex-row xxxl:flex-row xl:flex-row lg:flex-row gap-4 flex-col items-center mb-5 border-b-2 py-3"
        >
          <div class="border border-[#4C45E3] w-max">
            <button
              class="bg-[#4C45E3] text-xl font-semibold px-4 py-[6px]"
              @click="toggleProfit('gross')"
              :class="
                isGross ? 'bg-[#4C45E3] text-white' : 'text-[#4C45E3] bg-white '
              "
            >
              Gross Profit
            </button>
            <button
              class="text-xl font-semibold text-[#4C45E3] px-4 py-[6px]"
              @click="toggleProfit('net')"
              :class="isGross ? 'text-[#4C45E3]' : 'bg-[#4C45E3] text-white '"
            >
              Net Profit
            </button>
          </div>

          <div
            class="flex gap-2 xl:w-auto xxl:w-auto xxxl:w-auto sm:w-full xs:w-full lg:w-auto width-full"
          >
            <DatePicker v-model="date" range />
          </div>
        </div>
        <div>
          <div
            class="flex py-5 justify-center xxl:flex-row xxxl:flex-row xl:flex-row gaps-0 gap-20 flex-col"
          >
            <PieChart :chartData="data" :options="doughnutOptions" />
            <div>
              <p class="text-[#09347F] font-normal text-xl">
                Total Revenue :- RS.
              </p>
              <div class="flex gap-3 mt-7">
                <div class="bg-[#009618] rounded-md w-5 h-5 mt-2"></div>
                <div>
                  <p class="font-medium text-xl text-[#09347F]">Gross Profit</p>
                  <p class="font-normal text-xl text-[#09347F]">₹5k</p>
                </div>
              </div>
              <div class="flex gap-3 mt-3">
                <div class="bg-[#C02E1D] rounded-md w-5 h-5 mt-2"></div>
                <div>
                  <p class="font-medium text-xl text-[#09347F]">
                    Profit Manufacturing Cost
                  </p>
                  <p class="font-normal text-xl text-[#09347F]">₹5k</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6 mb-4">
      <Sales :sales="product" />
    </div>
    <div class="mt-6 mb-4">
      <Products :productCard="productCard" @previous="previous" @next="next" />
    </div>
    <div class="mt-6 mb-4">
      <Sales :sales="marketing" />
    </div>
    <div class="mt-6 mb-4">
      <div class="mt-6 mb-4 border border-[#4C45E3] w-fit">
        <button
          class="text-xl font-semibold p-2"
          @click="toggleAds('facebookAds')"
          :class="isAds ? 'bg-[#4C45E3] text-white' : 'text-[#4C45E3]'"
        >
          Facebook Ads
        </button>
        <button
          class="text-xl font-semibold p-2"
          @click="toggleAds('googleAds')"
          :class="isAds ? 'text-[#4C45E3]' : 'bg-[#4C45E3] text-white '"
        >
          Google Ads
        </button>
      </div>
      <div class="w-full bg-white rounded-xl p-4">
        <div
          class="flex gap-3 justify-between xxl:flex-row xxxl:flex-row xl:flex-row lg:flex-row gap-4 flex-col items-center mb-3 py-3 xl:flex-row flex-col"
        >
          <nav aria-label="Page navigation example">
            <ul class="inline-flex -space-x-px text-base h-10 shadow-sm">
              <li>
                <button
                  :class="
                    activeButton === 'Revenue'
                      ? ' bg-[#4C45E3] text-white'
                      : 'text-[#4C45E3]'
                  "
                  @click="toggleRevenue('Revenue')"
                  class="flex items-center rounded-sm justify-center px-2 h-10 leading-tight text-xl font-medium border border-[#4C45E3]"
                >
                  Revenue
                </button>
              </li>
              <li>
                <button
                  :class="
                    activeButton === 'ROAS'
                      ? ' bg-[#4C45E3] text-white'
                      : 'text-[#4C45E3]'
                  "
                  @click="toggleRevenue('ROAS')"
                  class="flex items-center justify-center px-2 h-10 leading-tight text-xl font-medium border border-[#4C45E3]"
                >
                  ROAS
                </button>
              </li>
              <li>
                <button
                  :class="
                    activeButton === 'CPP'
                      ? ' bg-[#4C45E3] text-white'
                      : 'text-[#4C45E3]'
                  "
                  @click="toggleRevenue('CPP')"
                  class="flex items-center rounded-sm justify-center px-2 h-10 leading-tight text-xl font-medium border border-[#4C45E3]"
                >
                  CPP
                </button>
              </li>
            </ul>
          </nav>
          <div
            class="flex gap-2 xl:w-auto xxl:w-auto xxxl:w-auto lg:w-auto sm:w-full xs:w-full width-full"
          >
            <DatePicker v-model="date" range />
          </div>
        </div>
        <div>
          <LineChart :chartData="chartData" :options="chartOptions" />
        </div>
      </div>
    </div>
    <div
      class="mt-6 mt-4 grid xxxl:grid-cols-5 xl:grid-cols-5 xxl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-3 gap-6"
    >
      <TotalCollection
        class="max-w-fulls bg-white p-3 rounded-xl shadow-lg border-gray-200 w-auto h-[10.625rem]"
        v-for="(item, key) in amount"
        :key="key"
        :item="item"
        :isShow="isShow"
      />
    </div>
    <div class="mt-6 mb-4">
      <button class="bg-[#4C45E3] text-xl font-semibold text-white py-2 px-5">
        Campaign
      </button>
    </div>
    <div
      class="mt-6 mb-4 bg-white rounded-xl shadow-lg py-3 overflow-x-auto px-3"
    >
      <Table :header="tableHeaders" :tableData="tableData" />
    </div>
    <div class="mt-3 rounded-xl shadow-lg">
      <Footer />
    </div>
  </div>
</template>

<script>
import ruppesImage from "@/static/svg/ruppes.svg";
import salesImage from "@/static/Images/product1.webp";
import totalSalesImage from "@/static/Images/product2.webp";
import grossProfitImage from "@/static/Images/product3.webp";
import deviveryRateImage from "@/static/Images/product4.webp";
import questionIcon from "@/static/svg/question.svg";
import profitImage from "@/static/svg/profit.svg";
export default {
  layout: "overview",
  data() {
    return {
      isShow: false,
      isGross: true,
      isAds: true,
      activeButton: "Revenue",
      date: new Date(),
      tableHeaders: [
        "No.",
        "Campaign Name",
        "Amount Spend",
        "Total Orders",
        "Cost per Purchase",
        "Total Sales",
        "ROAS",
      ],
      tableData: [
        {
          name: "Jordon Shoes",
          spend: "₹1000",
          orders: "10",
          purchase: "100",
          sales: "10000",
          roas: "10%",
        },
        {
          name: "Campaign Name",
          spend: "Amount Spend",
          orders: "Total Orders",
          purchase: "Cost per Purchase",
          sales: "Total Sales",
          roas: "ROAS",
        },
        {
          name: "Campaign Name",
          spend: "Amount Spend",
          orders: "Total Orders",
          purchase: "Cost per Purchase",
          sales: "Total Sales",
          roas: "ROAS",
        },
        {
          name: "Campaign Name",
          spend: "Amount Spend",
          orders: "Total Orders",
          purchase: "Cost per Purchase",
          sales: "Total Sales",
          roas: "ROAS",
        },
        {
          name: "Campaign Name",
          spend: "Amount Spend",
          orders: "Total Orders",
          purchase: "Cost per Purchase",
          sales: "Total Sales",
          roas: "ROAS",
        },
      ],
      data: {
        labels: ["Gross Profit", "Profit Manufacturing Cost"],
        datasets: [
          {
            data: [50, 50],
            label: "Numbers",
            backgroundColor: ["#C02E1D", "#009618"],
            borderWidth: 0,
            fill: false,
          },
        ],
      },
      doughnutOptions: {
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
          backgroundtColor: "000000",
          titleFontColor: "#ffffff",
          bodyFontColor: "#ffffff",
          position: "nearest",
          node: "nearest",
          intersect: 0,
          bodySpacing: 2,
        },
        plugins: {
          legend: false,
          tooltip: false,
        },
      },
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
      productCard: [
        {
          image: salesImage,
          sales: "10",
          totalSales: "₹10,000",
          grossProfit: { key: "₹ 8,000", value: "80%" },
          deliveryRate: "50%",
        },
        {
          image: totalSalesImage,
          sales: "10",
          totalSales: "₹10,000",
          grossProfit: { key: "₹ 8,000", value: "80%" },
          deliveryRate: "50%",
        },
        {
          image: grossProfitImage,
          sales: "10",
          totalSales: "₹10,000",
          grossProfit: { key: "₹ 8,000", value: "80%" },
          deliveryRate: "50%",
        },
        {
          image: deviveryRateImage,
          sales: "10",
          totalSales: "₹10,000",
          grossProfit: { key: "₹ 8,000", value: "80%" },
          deliveryRate: "50%",
        },
      ],
      totalSales: [
        {
          key: "Total Sales",
          value: "₹967.45",
        },
        {
          key: "Orders No.",
          value: "₹0",
        },
        {
          key: "Marketing Spend",
          value: "₹310.05",
        },
        {
          key: "Shipping Spend",
          value: "₹6",
        },
        {
          key: "Profit Margin",
          value: "0%",
        },
      ],
      totalCollection: [
        {
          bgColor: "#390083",
          title: "Total Sales",
          ruppes: "₹10k",
        },
        {
          bgColor: "#00848E",
          title: "Total Orders",
          ruppes: "No. - 10",
        },
        {
          bgColor: "#F49342",
          title: "Order Cancellation",
          ruppes: "No. - 10",
        },
        {
          bgColor: "#4489C8",
          title: "RTO",
          ruppes: "No. - 10",
        },
        {
          bgColor: "#FDC00F",
          title: "Gross Profit",
          ruppes: "₹8k",
        },
        {
          bgColor: "#FD6AC6",
          title: " Marketing",
          ruppes: "₹1k",
        },
        {
          bgColor: "#09347F",
          title: "Shipping",
          ruppes: "₹1k",
        },
        {
          bgColor: "#B391CC",
          title: "Net Sales",
          ruppes: "₹1k",
        },
      ],
      amount: [
        {
          bgColor: "",
          title: "Total Sales",
          ruppes: "₹1000",
        },
        {
          bgColor: "",
          title: "Total Orders",
          ruppes: "No.",
        },
        {
          bgColor: "",
          title: "Order Cancellation",
          ruppes: "₹",
        },
        {
          bgColor: "",
          title: "Total Sales",
          ruppes: "₹",
        },
        {
          bgColor: "",
          title: "Total Orders",
          ruppes: "%",
        },
      ],
      profit: [
        {
          image: profitImage,
          title: "Gross Profit",
          icon: questionIcon,
          ruppes: "₹967.45",
          description: "Gross Margin",
          percentage: "64.1%",
          height: 310,
        },
        {
          image: profitImage,
          title: "Net Profit",
          icon: questionIcon,
          ruppes: "₹967.45",
          description: "Gross Margin",
          percentage: "64.1%",
          height: 310,
        },
      ],
      protal: {
        image: ruppesImage,
        title: "Profits",
        description:
          "Track your profits at a glance and monitor your store’s progress",
        icon: questionIcon,
        left: 160,
      },
      marketing: {
        image: ruppesImage,
        title: "Marketing",
        description: "Track your marketing at me place",
        icon: "",
        left: 0,
      },
      overview: {
        image: ruppesImage,
        title: "Overview",
        description: "Track your Store’s metrics and monitor your performance",
        icon: "",
      },

      ExpenseBreakdown: {
        image: ruppesImage,
        title: "Profit & Expense Breakdown",
        description: "Track your Store’s metrics and monitor your performance",
        icon: questionIcon,
        left: 380,
      },

      product: {
        image: ruppesImage,
        title: "Products",
        description: "See the breckdown if your products",
        icon: "",
        left: 0,
      },
    };
  },
  methods: {
    previous() {
      console.log("previous page");
    },
    next() {
      console.log("next page");
    },
    toggleProfit(type) {
      this.isGross = type === "gross";
    },
    toggleAds(type) {
      this.isAds = type === "facebookAds";
    },
    toggleRevenue(type) {
      this.activeButton = type;
    },
  },
};
</script>
<style>
.mx-input {
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.3);
}
@media (max-width: 375px) {
  .mx-datepicker-range {
    width: 100%;
  }
}
</style>
