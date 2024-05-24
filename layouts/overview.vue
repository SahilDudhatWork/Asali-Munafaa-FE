<template>
  <div>
    <header>
      <nav class="w-full bg-[#F1F1FF] !fixed">
        <div class="flex items-center">
          <button
            @click="toggleSidebar"
            type="button"
            class="inline-flex items-center ms-3 hidden display-block text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none"
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <div
            class="flex w-full flex-wrap items-center justify-between px-4 py-2"
          >
            <Nuxt-link to="/">
              <img
                src="@/static/Images/footer-logo.png"
                alt="Asli munfa"
                class="w-24 ml-5"
              />
            </Nuxt-link>
            <img src="@/static/Images/user.png" alt="" class="w-7" />
          </div>
        </div>
      </nav>
    </header>
    <aside
      :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
      v-click-outside="closeSidebar"
      class="fixed top-0 left-0 z-40 xl:w-[19rem] w-[17rem] width-17 mt-[52px] h-screen transition-transform sm:translate-x-0 bg-[#2B0064]"
      aria-label="Sidebar"
    >
      <!-- fixed top-0 left-0 z-40 w-[19rem] mt-[52px] h-screen bg-[#2B0064] transition-transform -translate-x-full sm:translate-x-0 -->
      <div class="bg-dashboard-img h-full px-3 py-4 dark:bg-gray-800">
        <div class="mx-4 mt-6 mb-5">
          <form class="max-w-sm mx-auto">
            <div
              @click="isShow = !isShow"
              class="cursor-pointer flex items-center justify-between bg-transparent border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5"
            >
              <div class="flex items-center gap-2">
                <img src="../static/Images/select.png" alt="" class="w-7" />
                <span class="text-base font-medium">Aarti Jani</span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  id="Downarrow"
                  width="20"
                  height="20"
                >
                  <path
                    d="M16 22a2 2 0 0 1-1.41-.59l-10-10a2 2 0 0 1 2.82-2.82L16 17.17l8.59-8.58a2 2 0 0 1 2.82 2.82l-10 10A2 2 0 0 1 16 22Z"
                    fill="#ffffff"
                    class="color000000 svgShape"
                  ></path>
                </svg>
              </div>
            </div>
          </form>
          <!-- <div class="flex ml-6 mb-5 mt-5 w-full">
            <ProgressBar :options="options" :value="progressValue" />
          </div> -->
          <div class="flex justify-center mt-9">
            <ul
              class="flex flex-col gap-y-7 text-white text-xl font-medium cursor-pointer"
            >
              <li
                v-for="(tab, key) in sideBarItems"
                :key="key"
                @click="toggle(tab.href)"
                :class="!tab.isActive ? '' : ''"
              >
                <Nuxt-link
                  :to="tab.href"
                  class="flex items-center gap-4 justify-between"
                  >{{ tab.name }}

                  <img
                    :src="tab.icon"
                    alt=""
                    :class="tab.isActive ? 'bg-[#10e348] rounded-full' : ''"
                  />
                </Nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
    <transition name="fade">
      <div
        v-click-outside="closeModal"
        v-if="isShow"
        class="mt-16 slide-in-right block absolute z-50 w-[40%] p-6 bg-white border border-gray-200 rounded-lg shadow ml-[19.5rem] margin-10 mt-4"
      >
        <div class="flex justify-between items-center">
          <p
            class="font-semibold text-lg text-[#1F2DC6] border-b-2 border-[#1F2DC6]"
          >
            Aarti Jani Workspace
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="Setting"
            width="27"
            height="27"
          >
            <path
              d="M21.32,9.55l-1.89-.63.89-1.78A1,1,0,0,0,20.13,6L18,3.87a1,1,0,0,0-1.15-.19l-1.78.89-.63-1.89A1,1,0,0,0,13.5,2h-3a1,1,0,0,0-.95.68L8.92,4.57,7.14,3.68A1,1,0,0,0,6,3.87L3.87,6a1,1,0,0,0-.19,1.15l.89,1.78-1.89.63A1,1,0,0,0,2,10.5v3a1,1,0,0,0,.68.95l1.89.63-.89,1.78A1,1,0,0,0,3.87,18L6,20.13a1,1,0,0,0,1.15.19l1.78-.89.63,1.89a1,1,0,0,0,.95.68h3a1,1,0,0,0,.95-.68l.63-1.89,1.78.89A1,1,0,0,0,18,20.13L20.13,18a1,1,0,0,0,.19-1.15l-.89-1.78,1.89-.63A1,1,0,0,0,22,13.5v-3A1,1,0,0,0,21.32,9.55ZM20,12.78l-1.2.4A2,2,0,0,0,17.64,16l.57,1.14-1.1,1.1L16,17.64a2,2,0,0,0-2.79,1.16l-.4,1.2H11.22l-.4-1.2A2,2,0,0,0,8,17.64l-1.14.57-1.1-1.1L6.36,16A2,2,0,0,0,5.2,13.18L4,12.78V11.22l1.2-.4A2,2,0,0,0,6.36,8L5.79,6.89l1.1-1.1L8,6.36A2,2,0,0,0,10.82,5.2l.4-1.2h1.56l.4,1.2A2,2,0,0,0,16,6.36l1.14-.57,1.1,1.1L17.64,8a2,2,0,0,0,1.16,2.79l1.2.4ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"
              fill="#2d375b"
              class="color000000 svgShape"
            ></path>
          </svg>
        </div>
        <div
          class="mt-4 bg-[#C7FFC3] p-2 rounded-md flex justify-between items-center"
        >
          <div class="flex items-center gap-2 mx-1">
            <img src="../static/Images/select.png" alt="" class="w-7" />
            <p class="text-base font-medium text-[#0C8D00]">Aarti Jani</p>
          </div>
          <div class="mx-1">
            <p class="text-xs font-normal text-[#0C8D00]">Logged Shop</p>
          </div>
        </div>
        <div class="mt-5 flex justify-center">
          <button
            class="flex items-center justify-center gap-1 text-xs px-3 bg-[#2B0064] transition-main hover:to-[#EA69FF] bg-primaryBg text-white font-normal rounded-md"
          >
            <span class="text-3xl"> + </span>Add New shop
          </button>
        </div>
      </div>
    </transition>
    <div class="p-4 sm:ml-[19rem] mt-">
      <div
        v-if="isSidebarOpen"
        drawer-backdrop=""
        class="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30"
      ></div>
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   options: {
      //     text: {
      //       color: "#FFFFFF",
      //       shadowEnable: true,
      //       shadowColor: "#000000",
      //       fontSize: 20,
      //       fontFamily: "Helvetica",
      //       dynamicPosition: true,
      //       hideText: false,
      //     },
      //     progress: {
      //       color: "#10e348",
      //       backgroundColor: "#E3D0FF",
      //       inverted: false,
      //     },
      //     layout: {
      //       height: 190,
      //       width: 190,
      //       verticalTextAlign: 100,
      //       horizontalTextAlign: 80,
      //       zeroOffset: 0,
      //       strokeWidth: 10,
      //       progressPadding: 10,
      //       type: "circle",
      //     },
      //   },
      isShow: false,
      isSidebarOpen: false,
      progressValue: 20,
      sideBarItems: [
        {
          name: "Dashboard",
          href: "/dashboard",
          value: 20,
          isActive: true,
        },
        {
          name: "Marketing",
          href: "/marketing",
          value: 40,
          isActive: false,
        },
        {
          name: "shipping",
          href: "/shipping",
          value: 60,
          isActive: false,
        },
        {
          name: "About Business",
          href: "/about-business",
          value: 80,
          isActive: false,
        },
        {
          name: "Product",
          href: "/product",
          value: 100,
          isActive: false,
        },
      ],
      previousPath: "/marketing-platform",
    };
  },
  mounted() {
    // this.updateActiveTab(this.$router.history.current.fullPath);
  },
  // watch: {
  //   "$route.path"(newPath) {
  //     this.previousPath = this.$router.history.current.fullPath;
  //     this.updateActiveTab(newPath);
  //   },
  // },
  methods: {
    // updateActiveTab(path) {
    //   console.log("path", path);
    //   const key = this.sideBarItems.findIndex((tab) => tab.href === path);
    //   const updatedItems = this.sideBarItems.map((item, index) => {
    //     if (index <= key || item.href === this.previousPath) {
    //       return { ...item, isActive: true };
    //     } else {
    //       return { ...item, isActive: false };
    //     }
    //   });
    //   this.sideBarItems = updatedItems;
    //   const activeTab = this.sideBarItems.find((tab) => tab.href === path);
    //   if (activeTab) {
    //     this.progressValue = activeTab.value;
    //   }
    // },
    toggle(href) {
      this.previousPath = this.$router.history.current.fullPath;
      this.$router.push(href);
      this.isSidebarOpen = false;
    },
    closeModal() {
      console.log("asdfafafsfaf");
      this.isShow = false;
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    },
  },
};
</script>
<style>
body {
  background: #cbd9f5;
}
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(3%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.slide-in-right {
  animation: slideInRight 0.5s ease-in-out forwards;
}
.translate-x-0 {
  transform: translateX(0);
}
</style>
