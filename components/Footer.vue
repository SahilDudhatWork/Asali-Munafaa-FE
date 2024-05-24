<template>
  <footer class="bg-white mt-7">
    <div class="max-w-[1792px] mx-auto px-3">
      <div class="grid xl:grid-cols-8 sm:grid-cols-2 xl:gap-10 gap-5">
        <div class="max-w-[660px] xl:col-span-4">
          <a href="javascript:void(0)" class="mb-6 inline-block">
            <img
              src="../static/Images/footer-logo.png"
              class="md:mx-[unset] mx-auto"
              alt
            />
          </a>
          <p class="text-darkText text-lg mb-6 leading-normal font-normal">
            Asali Munaafa appears to be positioned as a comprehensive tool for
            eCommerce businesses, focusing on profit analysis and optimization.
            By providing clarity into expenses and profit margins, it aims to
            help businesses identify factors impacting profitability and
            optimize their operations accordingly.
          </p>
          <div class="flex gap-2">
            <div
              v-for="(item, key) in profitItems"
              :key="key"
              class="py-2 px-2 rounded-full bg-gradient-to-r from-[#EA69FF] to-[#AC05E8] transition-main w-7"
            >
              <img :src="item" alt="image" />
            </div>
          </div>
        </div>
        <div>
          <h2
            class="text-xl text-darkText font-medium font-PlayfairDisplay mb-5"
          >
            COMPANY
          </h2>
          <ul>
            <li>
              <a
                href="#"
                class="text-darkText text-lg font-normal mb-3 inline-block transition-main hover:translate-x-[10px]"
                >Login</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-darkText text-lg font-normal mb-3 inline-block transition-main hover:translate-x-[10px]"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-darkText text-lg font-normal mb-3 inline-block transition-main hover:translate-x-[10px]"
                >About Us</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-darkText text-lg font-normal mb-3 inline-block transition-main hover:translate-x-[10px]"
                >Careers</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h2
            class="text-xl text-darkText font-medium font-PlayfairDisplay mb-5"
          >
            RESOURCES
          </h2>
          <ul>
            <li>
              <a
                href="#"
                class="text-darkText text-lg font-normal mb-3 inline-block transition-main hover:translate-x-[10px]"
                >Resorce Center</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-darkText text-lg font-normal mb-3 inline-block transition-main hover:translate-x-[10px]"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-darkText text-lg font-normal mb-3 inline-block transition-main hover:translate-x-[10px]"
                >Community</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h2
            class="text-xl text-darkText font-medium font-PlayfairDisplay mb-5"
          >
            PARTNERS
          </h2>
          <ul>
            <li>
              <a
                href="#"
                class="text-darkText text-lg font-normal mb-3 inline-block transition-main hover:translate-x-[10px]"
                >PARTNERS</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-darkText text-lg font-normal mb-3 inline-block transition-main hover:translate-x-[10px]"
              >
                Agency Partners
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-darkText text-lg font-normal mb-3 inline-block transition-main hover:translate-x-[10px]"
                >Partners With Us</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h2
            class="text-xl text-darkText font-medium font-PlayfairDisplay mb-5"
          >
            LEGAL
          </h2>
          <ul>
            <li>
              <a
                href="#"
                class="text-darkText text-lg font-normal mb-3 inline-block transition-main hover:translate-x-[10px]"
                >Terms & Condition</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-darkText text-lg font-normal mb-3 inline-block transition-main hover:translate-x-[10px]"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="border-t p-4 mt-6 flex justify-center">
      <p class="text-[#5B638B] font-medium text-base">
        © 2024 All rights reserved by Asali Munaafa
      </p>
    </div>
  </footer>
</template>

<script>
import instagram from "@/static/svg/instagram.svg";
import facebook from "@/static/svg/facebook.svg";
import twitter from "@/static/svg/twitter.svg";
import linkdin from "@/static/svg/linkedin.svg";
export default {
  data() {
    return {
      profitItems: {
        instagram,
        facebook,
        twitter,
        linkdin,
      },
    };
  },
};
</script>
