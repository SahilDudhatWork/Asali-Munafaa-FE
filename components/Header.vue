<template>
  <div>
    <nav
      class="bg-gradient-to-r from-[#2B0064] to-[#6313D9] border-gray-200 px-4 lg:px-6 py-5 dark:bg-gray-800 shadow-md"
    >
      <div class="flex flex-wrap justify-between items-center mx-5">
        <div class="flex item-center gap-4">
          <a class="flex items-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/07ed/4ce8/b1cccfb6a0337a9cd886ce67e35d0200?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nWtwvMP5tUEOW7eKBhbfJ0P1LjH08yWHCRjZWyIBXApytWEjQr0C4vB5bJ71EUc6CyqwlHt9-zzMXf1P2nLYZh8wsWAuNNTwK1UkJUtCPKxqHwdPC4uzfql1axaSPudN~4s5ihtc9fLGhfB-LsGqwDajUGU0HGPw~HlDFprT8ooo4SEUsOn54OB4bvHJnJzmI9cXPC-vdzWlJo6sXN-Ns51UZhMZxMoYU1Y-j3tV03S3YVDtrkBbgR6Hrx~u0uPTWC-R3m-NaeWC8S~5A~p4fNiBDX4Gwn1BQzgf0VRqQhlQEYNXqg0XsbLNA6K9iiHAm8Hmh3WIbJucYWILE~ltGQ__"
              class="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
          </a>

          <div
            class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul
              class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
            >
              <li v-for="item in content" :key="item">
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                  >{{ item }}</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="flex items-center lg:order-2 gap-3">
          <img src="../static/Images/profile-circle.png" class="w-7" />
          <button
            href="#"
            class="text-gray-800 text-white bg-gradient-to-r from-[#EA69FF] to-[#AC05E8] focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            Connect wallet
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: ["Home", "Explore", "Pages", "Blogs", "Contact", "About"],
    };
  },
};
</script>
