import $axios from "@/plugins/axios";

export const state = () => ({});

export const mutations = {};

export const actions = {
  async login(ctx, payload) {
    console.log(payload, "payload");
    try {
      const response = await $axios.post("/user/auth/logIn", payload);
      localStorage.setItem("token", JSON.stringify(response.data));
      console.log(response, "response");
      return response;
    } catch (error) {
      throw error;
    }
  },
  async signup(ctx, payload) {
    try {
      const response = await $axios.post("/user/auth/signUp", payload);
      return response;
    } catch (error) {
      throw error;
    }
  },
};
