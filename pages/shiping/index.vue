<template>
  <div class="mx-2 mt-16">
    <div
      class="mt-6 mb-4 gap-3 flex justify-between xxxl:flex-row xxl:flex-row xl:flex-row sm:flex-row lg:flex-row flex-col"
    >
      <Sales :sales="shippingProtal" />
      <DatePicker v-model="date" range />
    </div>
    <div class="mt-6 mb-4">
      <div class="mt-6 mb-4 border border-[#4C45E3] w-fit">
        <button
          class="text-xl font-semibold p-2"
          @click="toggleAds('Shiprocket')"
          :class="isAds ? 'bg-[#4C45E3] text-white' : 'text-[#4C45E3]'"
        >
          Shiprocket
        </button>
        <button
          class="text-xl font-semibold p-2"
          @click="toggleAds('Delhivery')"
          :class="isAds ? 'text-[#4C45E3]' : 'bg-[#4C45E3] text-white'"
        >
          Delhivery
        </button>
      </div>
    </div>
    <div class="mt-6 flex mb-3 flex-col xl:flex-row gap-3">
      <div
        class="flex xxxl:flex-col xxl:flex-col xl:flex-col lg:flex-row flex-col gap-6"
      >
        <ProfitCard
          class="max-w-fulls bg-white p-3 rounded-xl shadow-lg border-gray-200 gap-6 xl:w-[20.688rem] xxl:w-[20.688rem] xxxl:w-[20.688rem] lg:w-full md:w-full sm:w-full xs:w-full"
          v-for="(item, key) in profit"
          :key="key"
          :item="item"
          :isShow="isShow"
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
                <option value="year">logistics</option>
                <option value="week">Month</option>
                <option value="week">Week</option>
              </select>
              <select
                name
                id
                class="!focus-visible::outline-0 text-[#5B638B] border-none font-semibold text-base"
              >
                <option value="year">Region</option>
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
    <div
      class="mt-6 mb-4 grid xl:grid-cols-4 xxl:grid-cols-4 xxxl:grid-cols-4 md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-6"
    >
      <TotalCollection
        class="max-w-fulls bg-white p-3 rounded-xl shadow-lg border-gray-200 w-auto h-[10.625rem]"
        v-for="(item, key) in totalCollection"
        :key="key"
        :item="item"
        :isShow="true"
      />
    </div>
    <div
      class="flex grid xxxl:grid-cols-3 xxl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 mt-8 mb-3 gap-6"
    >
      <div class="bg-white rounded-xl shadow-lg p-3 py-6">
        <div class="flex justify-between px-2 py-2">
          <p class="text-[#000087] font-semibold text-xl">Couriers Split</p>
          <p class="text-[#2d375b] font-normal text-base">Last 30 days</p>
        </div>
        <div class="flex justify-center">
          <v-chart
            :options="chartOptions"
            style="width: 100%; height: 600px"
          ></v-chart>

          <!-- <PieChart
            :chartData="data"
            :options="doughnutOptions"
            class="w-[70%]"
          /> -->
        </div>
      </div>
      <div class="bg-white rounded-xl shadow-lg p-3 py-6">
        <div class="flex justify-between px-2 py-2">
          <p class="text-[#000087] font-semibold text-xl">
            Overall Shipment Status
          </p>
          <p class="text-[#2d375b] font-normal text-base">Last 30 days</p>
        </div>
        <div class="flex justify-center">
          <PieChart
            :chartData="overallData"
            :options="overallOption"
            class="w-[70%]"
          />
        </div>
      </div>
      <div class="bg-white rounded-xl shadow-lg p-3 py-6">
        <div class="flex justify-between px-2 py-2">
          <p class="text-[#000087] font-semibold text-xl">Total Revenue</p>
          <p class="text-[#2d375b] font-normal text-base">Last 30 days</p>
        </div>
        <div class="flex justify-center">
          <PieChart
            :chartData="revenueData"
            :options="revenueOption"
            class="w-[70%]"
          />
        </div>
      </div>
    </div>
    <div
      class="mt-6 mb-3 grid xxxl:grid-cols-3 xxl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5"
    >
      <div class="bg-white rounded-xl shadow-lg px-5 py-5 mb-6">
        <div class="flex justify-between px-2 py-2">
          <p class="text-[#000087] font-semibold text-xl w-[70%]">
            Shipments-Zone Distribution
          </p>
          <p class="text-[#2d375b] font-normal text-base">Last 30 days</p>
        </div>
        <div class="mb-7">
          <Tier
            v-for="(item, key) in tier"
            :key="key"
            :item="item"
            :isShow="true"
            class="border-b py-5"
          />
        </div>
      </div>
      <div class="bg-white rounded-xl shadow-lg px-5 py-5 mb-6">
        <div class="flex justify-between py-2">
          <p class="text-[#000087] font-semibold text-xl w-[70%]">
            Shipments-Zone Distribution
          </p>
          <p class="text-[#2d375b] font-normal text-base">Last 30 days</p>
        </div>
        <div class="mb-7">
          <Tier
            v-for="(item, key) in tier"
            :key="key"
            :item="item"
            :isShow="true"
            class="border-b py-5"
          />
        </div>
      </div>
      <div class="bg-white rounded-xl shadow-lg px-5 py-5 mb-6">
        <div class="flex justify-between py-2">
          <p class="text-[#000087] font-semibold text-xl">
            Delivery Performance
          </p>
          <p class="text-[#2d375b] font-normal text-base">Last 30 days</p>
        </div>
        <div class="mb-7">
          <Tier
            v-for="(item, key) in performance"
            :key="key"
            :item="item"
            :isShow="isShow"
            class="border-b py-5"
          />
        </div>
      </div>
    </div>
    <div class="mt-6 mb-3">
      <Footer />
    </div>
  </div>
</template>

<script>
import ruppesImage from "@/static/svg/ruppes.svg";
import questionIcon from "@/static/svg/question.svg";
import $axios from "axios";
export default {
  layout: "overview",
  data() {
    return {
      isShow: false,
      isAds: true,
      date: new Date(),
      shippingProtal: {
        image: ruppesImage,
        title: "Shipping Portal",
        description: "Select youur Shipping Portal belon",
        icon: "",
        left: 0,
      },
      chartOptions: {
        series: [
          {
            type: "map",
            map: "india",
            label: {
              show: true,
            },
            itemStyle: {
              emphasis: {
                areaColor: "#a0d911",
              },
            },
            data: [
              // Data for different regions can be added here
            ],
          },
        ],
      },
      tier: [
        {
          bgColor: "#B0AFB4",
          key: "Tier 1",
          value: "15 (6.9%)",
        },
        {
          bgColor: "#3CBB00",
          key: "Tier 2",
          value: "8 (3.7%)",
        },
        {
          bgColor: "#FF462E",
          key: "Tier 3",
          value: "14 (6.4%)",
        },
        {
          bgColor: "#444444",
          key: "Tier 4",
          value: "155 (71.1%)",
        },
        {
          bgColor: "#FFC107",
          key: "Tier 5",
          value: "26 (11.9%)",
        },
      ],
      performance: [
        {
          bgColor: "",
          key: "Last 90 Days",
          value: "₹11,994",
        },
        {
          bgColor: "",
          key: "This Week",
          value: "₹0",
        },
        {
          bgColor: "",
          key: "This Month",
          value: "₹2,30,622",
        },
        {
          bgColor: "",
          key: "This Quarter",
          value: "₹5,40,802",
        },
      ],
      profit: [
        {
          image: "",
          title: "Gross Profit",
          icon: "",
          ruppes: "₹967.45",
          description: "",
          percentage: "",
          height: 269,
        },
        {
          image: "",
          title: "Net Profit",
          icon: questionIcon,
          ruppes: "₹967.45",
          description: "Gross Margin",
          percentage: "64.1%",
          height: 269,
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
      data: {
        labels: [
          "DTDC Surface 2kg",
          "Xpressbees Surface 2kg",
          " Ecom Express Surface 2kg",
          "Dart Plus",
          "DTDC Surface ",
          "Others",
        ],
        datasets: [
          {
            data: [17, 17, 17, 15, 17, 17],
            label: "Numbers",
            backgroundColor: [
              "#117899",
              "#0F5B78",
              "#1FC105",
              "#F16C20",
              "#ECAA38",
              "#5CA793",
            ],
            borderWidth: 0,
            fill: false,
          },
        ],
      },
      doughnutOptions: {
        plugins: {
          legend: false,
          tooltip: false,
        },
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
      },
      overallData: {
        labels: ["Total Shipment", "Intransit", " Delivered", "RTO", "NDR "],
        datasets: [
          {
            data: [20, 18, 20, 18, 24],
            label: "Numbers",
            backgroundColor: [
              "#117899",
              "#0F5B78",
              "#1FC105",
              "#F16C20",
              "#ECAA38",
            ],
            borderWidth: 0,
            fill: false,
          },
        ],
      },
      overallOption: {
        plugins: {
          legend: false,
          tooltip: false,
        },
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
      },
      revenueData: {
        labels: ["Ontime Deliveries", "Late Deliveries"],
        datasets: [
          {
            data: [73, 27],
            label: "Numbers",
            backgroundColor: ["#117899", "#0F5B78"],
            borderWidth: 0,
            fill: false,
          },
        ],
      },
      revenueOption: {
        plugins: {
          legend: false,
          tooltip: false,
        },
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
      totalCollection: [
        {
          bgColor: "#02747C",
          title: "Today Orders",
          ruppes: "No.",
        },
        {
          bgColor: "#AB55FF",
          title: "Pickup Pending",
          ruppes: "%",
        },
        {
          bgColor: "#F49342",
          title: "Intransit",
          ruppes: "₹1,000",
        },
        {
          bgColor: "",
          title: "Delivered",
          ruppes: "No.",
        },
        {
          bgColor: "#690A8B",
          title: "NDR",
          ruppes: "No.",
        },
        {
          bgColor: "#A4A1FC",
          title: " RTO",
          ruppes: "%",
        },
        {
          bgColor: "#09347F",
          title: "RTO in Intransit",
          ruppes: "No.",
        },
        {
          bgColor: "#A4A1FC",
          title: "RTO Delivered",
          ruppes: "No.",
        },
      ],
    };
  },
  methods: {
    toggleAds(type) {
      this.isAds = type === "Shiprocket";
    },
  },
  // async mounted() {
  //   // Fetch the India GeoJSON data
  //   const indiaGeoJson = await $axios.get("/india.json");
  //   echarts.registerMap("india", indiaGeoJson.data);
  //   this.$refs.chart && this.$refs.chart.resize();
  // },
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
