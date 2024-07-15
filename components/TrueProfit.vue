<template>
  <div
    class="bg-profit-img px-5 md:pt-[70px] pt-[50px] xl:pb-[145px] pb-[80px] relative bg-cover bg-no-repeat"
  >
    <h2
      class="text-center text-white xl:text-[50px] md:text-[35px] text-[25px] font-semibold md:mb-10 mb-5"
    >
      Always Be on Top of Your Net True Profit
    </h2>
    <p
      class="xl:text-[28px] md:text-[24px] text-xl font-normal text-white text-center md:mb-16 mb-8"
    >
      See what matters most to your business and have the full breakdown of your
      costs.
    </p>
    <div class="max-w-[1606px] mx-auto">
      <div
        class="grid xl:grid-cols-3 grid-cols-1 xxl:gap-[80px] md:gap-[50px] gap-[30px]"
      >
        <div
          class="bg-white h-[500px] xl:p-[50px] md:p-[40px] p-[30px] shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-lg"
        >
          <h2 class="text-black font-normal text-lg mt-1">Sources</h2>
          <PieChart
            :chartData="data"
            :options="doughnutOptions"
            class="w-auto h-auto"
          />
        </div>
        <div
          class="bg-white h-[500px] xl:col-span-2 xl:p-[60px] md:p-[40px] p-[30px] shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-lg"
        >
          <div class="flex justify-between items-center mb-5">
            <h2 class="text-black font-normal text-xl">Net True Profit</h2>
            <div class="relative"> 
              <Dropdown :items="trueProfitSelect" :selectedLabel="selectedLabel" @getValue="getValue" class="border-none"/>
            </div>
          </div>
          <LineChart
            :chartData="chartData"
            :options="chartOptions"
            class="w-auto h-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      trueProfitSelect: [
        { label: 'Years' },
        { label: 'Month' },
        { label: 'Week' },
      ],
      selectedLabel: 'Years',
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
        labels: ["RTO", "SPENT MARKETNG", "Revenue", "NET PROFIT"],
        datasets: [
          {
            data: [25, 40, 40, 24, 40],
            label: "Numbers",
            backgroundColor: [
              "#CB0000",
              "#FF462E",
              "#7700D2",
              "#34A300",
              "#4D5566",
            ],
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
    };
  },
  methods:{
    getValue(item) {
      this.selectedLabel = item.label;
    },
  }
};
</script>
