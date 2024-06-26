<template>
  <div style="z-index: 999" class="fixed top-0 w-full lef-0">
    <div class="fixed inset-0 mt-10" v-if="isModalOpen">
      <div class="flex items-center justify-center min-h-screen">
        <div class="fixed inset-0 transition-opacity" @click="closeModal">
          <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div class="max-w-4xl mx-auto z-50">
          <div
            class="flex overflow-hidden mx-auto max-w-sm xl:max-w-4xl rounded-md"
          >
            <div class="w-full hidden xl:block">
              <img
                src="../static/Images/get-in-touch.webp"
                class="object-cover"
              />
            </div>
            <div
              class="w-full p-5 xxl:w-1/2 bg-white mx-4 my-4 xl:mx-0 xl:my-0"
            >
              <h2 class="text-2xl py-2 font-semibold text-center">
                Get In Touch With Us
              </h2>
              <p class="text-sm text-center py-1">
                If you want to get in touch you can email me at
                Info@asalimunaafa.com or fill out the contact form below.
              </p>

              <div class="mt-4 flex gap-3 flex-col mx-12">
                <input
                  class="text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                  placeholder="First Name"
                  v-model="firstName"
                />
                <input
                  class="text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                  placeholder="Email"
                  v-model="email"
                />
                <input
                  class="text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                  placeholder="Your Phone Number"
                  v-model="mobile"
                />
                <input
                  class="text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                  placeholder="Website"
                  v-model="website"
                />
                <button
                  class="bg-[#4C0EA6] text-white font-bold py-2 px-4 w-full rounded-md"
                  @click="save"
                  :disabled="isLoading"
                >
                  <Loader v-if="isLoading" :loading="isLoading"></Loader>
                  <span v-else>Contact</span>
                </button>
              </div>
              <div class="py-4">
                <p class="text-sm font-medium text-center">
                  this <span class="text-[#4C0EA6]">Asali Munafa,</span> you
                  agree to be bound by our
                  <span class="text-[#4C0EA6]">terms and conditions</span>
                  and acknowledge your consent to our
                  <span class="text-[#4C0EA6]">privacy policy.</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import message from "@/static/lang/en.json";

export default {
  props: {
    isModalOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      firstName: "",
      email: "",
      mobile: "",
      website: "",
      isLoading: false,
    };
  },
  methods: {
    ...mapActions({
      getInTouch: "auth/getInTouch",
    }),
    closeModal() {
      this.$emit("close");
    },
    async save() {
      if (!this.firstName || !this.email || !this.mobile || !this.website) {
        this.$toast.open({
          message: "Please fill up your field !",
          type: "error",
          duration: 2000,
          position: "bottom-right",
        });
      } else {
        try {
          this.isLoading = true;
          let data = {
            firstName: this.firstName,
            email: this.email,
            mobile: this.mobile,
            website: this.website,
          };
          const response = await this.getInTouch(data);
          (this.firstName = ""),
            (this.email = ""),
            (this.mobile = ""),
            (this.website = ""),
            this.$emit("save");
          this.$toast.open({
            message: message.getInTouchMessage,
            type: "success",
            duration: 2000,
            position: "bottom-right",
          });
        } catch (error) {
          this.$toast.open({
            message: error,
            type: "error",
            duration: 2000,
            position: "bottom-right",
          });
        } finally {
          this.isLoading = false;
        }
      }
    },
  },
};
</script>
