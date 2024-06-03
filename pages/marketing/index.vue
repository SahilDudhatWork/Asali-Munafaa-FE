<template>
  <div class="mx-2 mt-16">
    <div
      class="flex justify-between gap-3 xxxl:flex-row xxl:flex-row xl:flex-row sm:flex-row lg:flex-row flex-col"
    >
      <p class="font-semibold text-2xl text-[#000087] text-center">Marketing</p>
      <DatePicker v-model="date" range />
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
    </div>
    <div class="mt-6 mb-4">
      <Sales :sales="facebookAds" />
    </div>
    <div
      class="mt-6 mb-3 grid xl:grid-cols-3 xxl:grid-cols-3 xxxl:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-6"
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
      class="mt-6 mb-3 grid xl:grid-cols-4 xxl:grid-cols-4 xxxl:grid-cols-4 md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-6"
    >
      <TotalCollection
        class="max-w-fulls bg-white p-3 rounded-xl shadow-lg border-gray-200 w-auto h-[10.625rem]"
        v-for="(item, key) in amountSpend"
        :key="key"
        :item="item"
        :isShow="true"
      />
    </div>
    <div
      class="mt-6 mb-4 flex justify-between gap-3 xxxl:flex-row xxl:flex-row xl:flex-row sm:flex-row lg:flex-row flex-col"
    >
      <Sales :sales="adsComperison" />
      <DatePicker v-model="date" range />
    </div>
    <div class="w-full bg-white rounded-xl p-4 mt-6">
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
    <div class="mt-6 mb-4">
      <button class="bg-[#4C45E3] text-xl font-semibold text-white py-2 px-5">
        Campaign
      </button>
    </div>
    <div
      class="mt-6 mb-4 bg-white rounded-xl shadow-lg py-3 px-2 overflow-x-auto"
    >
      <Table :header="tableHeaders" :tableData="tableData" />
    </div>
    <div class="mt-16 rounded-xl shadow-lg">
      <Footer />
    </div>
  </div>
</template>

<script>
import ruppesImage from "@/static/svg/ruppes.svg";
export default {
  layout: "overview",
  data() {
    return {
      date: new Date(),
      activeButton: "Revenue",
      isAds: true,
      facebookAds: {
        image: ruppesImage,
        title: "Facebook Ads",
        description: "Facebook & Instagram Overview",
        icon: "",
        left: 0,
      },
      adsComperison: {
        image: ruppesImage,
        title: "Ads Comparison",
        description: "Track your marketing at me place",
        icon: "",
        left: 0,
      },
      totalCollection: [
        {
          bgColor: "#09347F",
          title: "Amount Spend",
          ruppes: "₹1,000",
        },
        {
          bgColor: "#4489C8",
          title: "Total Revenue",
          ruppes: "₹10,000",
        },
        {
          bgColor: "#B391CC",
          title: "Total Revenue",
          ruppes: "No.",
        },
      ],
      amountSpend: [
        {
          bgColor: "#F49342",
          title: "CPP",
          ruppes: "₹1,000",
        },
        {
          bgColor: "#AB55FF",
          title: "ROAS",
          ruppes: "%",
        },
        {
          bgColor: "#FDC00F",
          title: "CTR",
          ruppes: "",
        },
        {
          bgColor: "#7700D2",
          title: "CPC",
          ruppes: "",
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
    };
  },
  methods: {
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
