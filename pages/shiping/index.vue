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
          class="flex justify-between items-center xxl:flex-row xxxl:flex-row xl:flex-row lg:flex-row gap-4 flex-col mb-5 border-b-2 py-3"
        >
          <h2 class="text-[#09347F] font-semibold text-xl">
            Compare shipment
          </h2>
          <div
            class="flex gap-2 xxl:flex-row xxxl:flex-row xl:flex-row gap-4 flex-col lg:flex-row"
          >
            <div class="flex px-2 gap-5 border rounded border-[#5B638B]">
              <div class="relative">
              <Dropdown :isSvg="isSvg" :borderClass="borderClass" :items="logisticsDropDown" :selectedLabel="logisticsSelectedLabel" @getValue="getLogisticsValue"/>   
            </div>
            <div class="relative"> 
              <Dropdown :isSvg="isSvg" :borderClass="borderDailyClass" :items="regionDropDown" :selectedLabel="regionSelectedLabel" @getValue="getRegionValue"/>
            </div>
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
          <PieChart
            :chartData="data"
            :options="doughnutOptions"
            class="w-[70%]"
          /> 
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
          <p class="relative">
            <Dropdown :isSvg="isSvg" :items="ordersDropDown" :selectedLabel="ordersSelectedLabel" @getValue="getOrdersValue"/>   
          </p>
          <p class="text-[#2d375b] font-normal text-base">Last 30 days</p>
        </div>
        <div class="mb-7 mt-3" id="test-chart">
          <GChart
          :type="'GeoChart'"
          :data="chartDatas"
          :options="chartOptionse"
          :settings="settings"
          @ready="removeBorders"
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
export default {
  layout: "overview",
  data() {
    return {
      isShow: false,
      isAds: true,
      date: new Date(),
      isSvg:true,
      logisticsDropDown: [
        { label: 'logistics' },
        { label: 'Earnings' },
        { label: 'Log out' },
      ],
      regionDropDown: [
        { label: 'Region' },
        { label: 'Earnings' },
        { label: 'Log out' },
      ],
      ordersDropDown: [
        { label: 'Orders' },
        { label: 'Earnings' },
        { label: 'Week' },
      ],
      ordersSelectedLabel:'Orders',
      logisticsSelectedLabel: 'logistics',
      regionSelectedLabel: 'Region',
      borderClass:'border-r border-[#5B638B] rounded-none',
      borderDailyClass:'border-none',
      shippingProtal: {
        image: ruppesImage,
        title: "Shipping Portal",
        description: "Select your Shipping Portal belon",
        icon: "",
        left: 0,
      },
      settings: {
        packages: ['geochart'],
      },
      chartDatas: [
      ['State', 'Population'],
        ['IN-AP', 0],  // Andhra Pradesh
        ['IN-AR', 10],   // Arunachal Pradesh
        ['IN-AS', 20],  // Assam
        ['IN-BR', 30], // Bihar
        ['IN-CH', 30],   // Chandigarh
        ['IN-CT', 30],  // Chhattisgarh
        ['IN-DN', 0],    // Dadra and Nagar Haveli and Daman and Diu
        ['IN-DD', 0],   // Daman and Diu
        ['IN-DL', 20],  // Delhi
        ['IN-GA', 15],   // Goa
        ['IN-GJ', 0],  // Gujarat
        ['IN-HR', 15],  // Haryana
        ['IN-HP', 15],   // Himachal Pradesh
        ['IN-JK', 10],  // Jammu and Kashmir
        ['IN-JH', 10],  // Jharkhand
        ['IN-KA', 15],  // Karnataka
        ['IN-KL', 0],  // Kerala
        ['IN-LD', 0],    // Lakshadweep
        ['IN-MP', 15],  // Madhya Pradesh
        ['IN-MH', 20], // Maharashtra
        ['IN-MN', 0],   // Manipur
        ['IN-ML', 15],   // Meghalaya
        ['IN-MZ', 30],   // Mizoram
        ['IN-NL', 0],   // Nagaland
        ['IN-OR', 15],  // Odisha
        ['IN-PY', 0],   // Puducherry
        ['IN-PB', 0],  // Punjab
        ['IN-RJ', 17],  // Rajasthan
        ['IN-SK', 15],    // Sikkim
        ['IN-TN', 30],  // Tamil Nadu
        ['IN-TG', 30],  // Telangana
        ['IN-TR', 0],   // Tripura
        ['IN-UP', 0], // Uttar Pradesh
        ['IN-UT', 30],  // Uttarakhand
        ['IN-WB', 0],  // West Bengal
      ],
      chartOptionse: {
        region: 'IN',
        displayMode: 'regions',
        resolution: 'provinces',
        colorAxis: { colors: ['#BBBFEB','#8592E0','#7275D2'],},
        backgroundColor: 'transparent',
        datalessRegionColor: 'transparent',
        defaultColor: '#FFFFFF',
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
  mounted(){
    setTimeout(() => {
      this.removeBorders()
    }, 1000);
  },
  methods: {
    toggleAds(type) {
      this.isAds = type === "Shiprocket";
    },  
    getLogisticsValue(item) {
      this.logisticsSelectedLabel = item.label;
    },
    getRegionValue(item) {
      this.regionSelectedLabel = item.label;
    },
    getOrdersValue(item){
      this.ordersSelectedLabel = item.label
    },
    removeBorders() {
      this.$nextTick(() => {
        const chart = document.getElementById('test-chart');
        const svg = chart?.querySelector('svg');
        
        if (svg) {
          const paths = svg.querySelectorAll('path');
          paths.forEach(path => {
            if (path.getAttribute('stroke') === "#e6e6e6") {
              path.style.stroke = 'none';
              path.style.fill = 'none';
            }
          });
        } else {
          console.log('SVG element not found');
        }
      });
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
