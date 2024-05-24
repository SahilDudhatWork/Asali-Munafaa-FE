<template>
  <div
    class="bg-cover bg-center bg-fixed bg-gradient-to-r from-[#2B0064] to-[#6313D9]"
  >
    <div class="min-h-screen flex justify-center items-center bg-world-img">
      <slot name="content"></slot>

      <div class="w-1/2 xl:block md:hidden lg:block hidden mt-7 py-6">
        <img src="@/static/Images/frame.png" alt="Frame Image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "blank",
};
</script>
