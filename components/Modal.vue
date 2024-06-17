<template>
  <div class="bg-gradient-to-r from-[#2B0064] to-[#6313D9] w-full min-h-screen">
    <div
      class="flex overflow-hidden mx-auto justify-center w-full rounded-md bg-world-img sm:p-0"
    >
      <slot name="modalContent"></slot>

      <div class="w-1/2 xl:block md:hidden lg:block hidden mt-7 py-6">
        <img src="@/static/Images/frame.webp" alt="Frame Image" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "blank",
};
</script>
