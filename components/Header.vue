<template>
  <div>
    <header
      id="header"
      class="bg-gradient-to-r fixed z-50 top-0 w-full lef-0 from-[#2B0064] to-[#6313D9] xl:p-8 p-5 header-area"
    >
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-14">
          <a href="index.html">
            <img src="../static/Images/logo.png" alt class="w-[150px] h-auto" />
          </a>
          <div
            class="xl:relative bg-white xl:bg-transparent absolute xl:top-0 top-[100px] left-0 w-full xl:w-[unset] text-center menu-container hidden xl:!block"
          >
            <div class="py-10 xl:py-0">
              <ul class="xl:flex block items-center xxl:gap-14 gap-8">
                <li class="mb-5 xl:mb-0">
                  <a
                    href="index.html"
                    class="md:text-xl text-base font-normal justify-center xl:text-white text-black [&.active]:after:content('') [&.active]:after:w-full [&.active]:after:h-[2px] [&.active]:after:bg-gradient-to-r from-[#9ED0FF] to-[#4F42E4] [&.active]:after:absolute [&.active]:after:bottom-[-10px] [&.active]:after:left-0 relative active nav-menu-content"
                    >Home</a
                  >
                </li>
                <li class="mb-5 xl:mb-0 drop-li relative">
                  <a
                    href="#"
                    class="md:text-xl text-base inline-flex gap-2 justify-center items-center font-normal xl:text-white text-black [&.active]:after:content('') [&.active]:after:w-full [&.active]:after:h-[2px] [&.active]:after:bg-gradient-to-r from-[#9ED0FF] to-[#4F42E4] [&.active]:after:absolute [&.active]:after:bottom-[-10px] [&.active]:after:left-0 relative nav-menu-content"
                  >
                    Explore
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.20044 8.59619C6.3352 8.4616 6.51788 8.38599 6.70835 8.38599C6.89882 8.38599 7.0815 8.4616 7.21627 8.59619L11.5 12.8799L15.7838 8.59619C15.8496 8.52558 15.9289 8.46894 16.0171 8.42965C16.1053 8.39037 16.2004 8.36925 16.2969 8.36754C16.3934 8.36584 16.4893 8.38359 16.5788 8.41974C16.6683 8.45589 16.7496 8.5097 16.8178 8.57795C16.8861 8.6462 16.9399 8.7275 16.9761 8.817C17.0122 8.90649 17.03 9.00235 17.0283 9.09886C17.0266 9.19537 17.0054 9.29054 16.9661 9.37871C16.9269 9.46688 16.8702 9.54623 16.7996 9.61203L12.0079 14.4037C11.8732 14.5383 11.6905 14.6139 11.5 14.6139C11.3096 14.6139 11.1269 14.5383 10.9921 14.4037L6.20044 9.61203C6.06584 9.47726 5.99023 9.29458 5.99023 9.10411C5.99023 8.91364 6.06584 8.73096 6.20044 8.59619Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <div
                    class="bg-white text-left absolute child-drop top-[55px] min-w-[200px] shadow-md p-5"
                  >
                    <ul>
                      <li>
                        <a
                          href="#"
                          class="md:text-xl text-base font-normal text-black mb-3 inline-block"
                          >item1</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="md:text-xl text-base font-normal text-black mb-3 inline-block"
                          >item2</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="md:text-xl text-base font-normal text-black mb-3"
                          >item3</a
                        >
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="mb-5 xl:mb-0 drop-li relative">
                  <a
                    href="#"
                    class="md:text-xl text-base inline-flex gap-2 justify-center items-center font-normal xl:text-white text-black [&.active]:after:content('') [&.active]:after:w-full [&.active]:after:h-[2px] [&.active]:after:bg-gradient-to-r from-[#9ED0FF] to-[#4F42E4] [&.active]:after:absolute [&.active]:after:bottom-[-10px] [&.active]:after:left-0 relative nav-menu-content"
                  >
                    Pages
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.20044 8.59619C6.3352 8.4616 6.51788 8.38599 6.70835 8.38599C6.89882 8.38599 7.0815 8.4616 7.21627 8.59619L11.5 12.8799L15.7838 8.59619C15.8496 8.52558 15.9289 8.46894 16.0171 8.42965C16.1053 8.39037 16.2004 8.36925 16.2969 8.36754C16.3934 8.36584 16.4893 8.38359 16.5788 8.41974C16.6683 8.45589 16.7496 8.5097 16.8178 8.57795C16.8861 8.6462 16.9399 8.7275 16.9761 8.817C17.0122 8.90649 17.03 9.00235 17.0283 9.09886C17.0266 9.19537 17.0054 9.29054 16.9661 9.37871C16.9269 9.46688 16.8702 9.54623 16.7996 9.61203L12.0079 14.4037C11.8732 14.5383 11.6905 14.6139 11.5 14.6139C11.3096 14.6139 11.1269 14.5383 10.9921 14.4037L6.20044 9.61203C6.06584 9.47726 5.99023 9.29458 5.99023 9.10411C5.99023 8.91364 6.06584 8.73096 6.20044 8.59619Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <div
                    class="bg-white text-left absolute child-drop top-[55px] min-w-[200px] shadow-md p-5"
                  >
                    <ul>
                      <li>
                        <a
                          href="#"
                          class="md:text-xl text-base font-normal text-black mb-3 inline-block"
                          >item1</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="md:text-xl text-base font-normal text-black mb-3 inline-block"
                          >item2</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="md:text-xl text-base font-normal text-black mb-3"
                          >item3</a
                        >
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="mb-5 xl:mb-0 drop-li relative">
                  <a
                    href="#"
                    class="md:text-xl text-base inline-flex items-center justify-center gap-2 font-normal xl:text-white text-black [&.active]:after:content('') [&.active]:after:w-full [&.active]:after:h-[2px] [&.active]:after:bg-gradient-to-r from-[#9ED0FF] to-[#4F42E4] [&.active]:after:absolute [&.active]:after:bottom-[-10px] [&.active]:after:left-0 relative nav-menu-content"
                  >
                    Blogs
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.20044 8.59619C6.3352 8.4616 6.51788 8.38599 6.70835 8.38599C6.89882 8.38599 7.0815 8.4616 7.21627 8.59619L11.5 12.8799L15.7838 8.59619C15.8496 8.52558 15.9289 8.46894 16.0171 8.42965C16.1053 8.39037 16.2004 8.36925 16.2969 8.36754C16.3934 8.36584 16.4893 8.38359 16.5788 8.41974C16.6683 8.45589 16.7496 8.5097 16.8178 8.57795C16.8861 8.6462 16.9399 8.7275 16.9761 8.817C17.0122 8.90649 17.03 9.00235 17.0283 9.09886C17.0266 9.19537 17.0054 9.29054 16.9661 9.37871C16.9269 9.46688 16.8702 9.54623 16.7996 9.61203L12.0079 14.4037C11.8732 14.5383 11.6905 14.6139 11.5 14.6139C11.3096 14.6139 11.1269 14.5383 10.9921 14.4037L6.20044 9.61203C6.06584 9.47726 5.99023 9.29458 5.99023 9.10411C5.99023 8.91364 6.06584 8.73096 6.20044 8.59619Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <div
                    class="bg-white text-left absolute child-drop top-[55px] min-w-[200px] shadow-md p-5"
                  >
                    <ul>
                      <li>
                        <a
                          href="#"
                          class="md:text-xl text-base font-normal text-black mb-3 inline-block"
                          >item1</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="md:text-xl text-base font-normal text-black mb-3 inline-block"
                          >item2</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="md:text-xl text-base font-normal text-black mb-3"
                          >item3</a
                        >
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="mb-5 xl:mb-0">
                  <a
                    href="index.html"
                    class="md:text-xl text-base font-normal xl:text-white text-black justify-center [&.active]:after:content('') [&.active]:after:w-full [&.active]:after:h-[2px] [&.active]:after:bg-gradient-to-r from-[#9ED0FF] to-[#4F42E4] [&.active]:after:absolute [&.active]:after:bottom-[-10px] [&.active]:after:left-0 relative nav-menu-content"
                    >Contact</a
                  >
                </li>
                <li class="mb-5 xl:mb-0">
                  <a
                    href="index.html"
                    class="md:text-xl text-base font-normal xl:text-white text-black justify-center [&.active]:after:content('') [&.active]:after:w-full [&.active]:after:h-[2px] [&.active]:after:bg-gradient-to-r from-[#9ED0FF] to-[#4F42E4] [&.active]:after:absolute [&.active]:after:bottom-[-10px] [&.active]:after:left-0 relative nav-menu-content"
                    >About</a
                  >
                </li>
              </ul>
              <div
                class="flex items-center flex-wrap justify-center xl:hidden gap-4"
              >
                <div class="cursor-pointer">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.67 18.9198C17.5708 18.9056 17.4433 18.9056 17.33 18.9198C14.8367 18.8348 12.8533 16.7948 12.8533 14.2873C12.8533 11.7231 14.9217 9.64062 17.5 9.64062C20.0642 9.64062 22.1467 11.7231 22.1467 14.2873C22.1325 16.7948 20.1633 18.8348 17.67 18.9198Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M27.0483 28.2697C24.5267 30.5788 21.1833 31.9813 17.5 31.9813C13.8167 31.9813 10.4733 30.5788 7.95166 28.2697C8.09333 26.938 8.94333 25.6347 10.4592 24.6147C14.3408 22.0363 20.6875 22.0363 24.5408 24.6147C26.0567 25.6347 26.9067 26.938 27.0483 28.2697Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 31.9813C25.324 31.9813 31.6667 25.6387 31.6667 17.8146C31.6667 9.99058 25.324 3.64795 17.5 3.64795C9.67596 3.64795 3.33333 9.99058 3.33333 17.8146C3.33333 25.6387 9.67596 31.9813 17.5 31.9813Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <a
                  href="login.html"
                  class="py-3 rounded-lg px-5 bg-gradient-to-r from-[#EA69FF] to-[#AC05E8] hover:bg-gradient-to-r hover:from-[#AC05E8] transition-main hover:to-[#EA69FF] bg-primaryBg text-white text-lg font-medium"
                >
                  Connect wallet
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="items-center gap-4 xl:flex hidden">
          <div class="cursor-pointer">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.67 18.9198C17.5708 18.9056 17.4433 18.9056 17.33 18.9198C14.8367 18.8348 12.8533 16.7948 12.8533 14.2873C12.8533 11.7231 14.9217 9.64062 17.5 9.64062C20.0642 9.64062 22.1467 11.7231 22.1467 14.2873C22.1325 16.7948 20.1633 18.8348 17.67 18.9198Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M27.0483 28.2697C24.5267 30.5788 21.1833 31.9813 17.5 31.9813C13.8167 31.9813 10.4733 30.5788 7.95166 28.2697C8.09333 26.938 8.94333 25.6347 10.4592 24.6147C14.3408 22.0363 20.6875 22.0363 24.5408 24.6147C26.0567 25.6347 26.9067 26.938 27.0483 28.2697Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.5 31.9813C25.324 31.9813 31.6667 25.6387 31.6667 17.8146C31.6667 9.99058 25.324 3.64795 17.5 3.64795C9.67596 3.64795 3.33333 9.99058 3.33333 17.8146C3.33333 25.6387 9.67596 31.9813 17.5 31.9813Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <a
            href="#"
            class="py-3 rounded-lg px-5 bg-gradient-to-r from-[#EA69FF] to-[#AC05E8] hover:bg-gradient-to-r hover:from-[#AC05E8] transition-main hover:to-[#EA69FF] bg-primaryBg text-white text-lg font-medium"
          >
            Connect wallet
          </a>
        </div>
        <div class="xl:hidden nav-menu text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M3 6h18M3 12h18M3 18h18"
            />
          </svg>
        </div>
      </div>
    </header>
    <!-- <nav
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
    </nav> -->
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
