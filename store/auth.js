import $axios from "@/plugins/axios";

export const state = () => ({
  userOnbordingData: {},
  userData: {},
  modal: {
    isOnBoardingModal: false,
    isAllmostDoneModal: false,
    isLastBarrierModal: false,
    isEcommerceModal: false,
  },
});

export const getters = {
  getUserOnbordingData(state) {
    return state.userOnbordingData;
  },
  getUserData(state) {
    return state.userData;
  },
};
export const mutations = {
  openModal(state, modalName) {
    state.modal[modalName] = true;
  },
  closeModal(state, modalName) {
    state.modal[modalName] = false;
  },
  userOnboarding(state, payload) {
    state.userOnbordingData = payload;
  },
  getuserData(state, payload) {
    state.userData = payload;
  },
};

export const actions = {
  async login(ctx, payload) {
    try {
      const response = await $axios.post(
        `/user/auth/logIn?ensh=${payload?.ensh}`,
        payload
      );
      sessionStorage.setItem("token", response.data.accessToken);
      ctx.commit("getuserData", response.data);
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

  async getInTouch(ctx, payload) {
    try {
      const response = await $axios.post("/user/getInTouch", payload);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async addProfileData(ctx, payload) {
    try {
      const response = await $axios.put("/user/profile", payload);
      ctx.commit("userOnboarding", response.data);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async connectShopify(ctx, payload) {
    try {
      const response = await $axios.post(`/shopify/install?shop=${payload}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
  async addShop(ctx, payload) {
    try {
      const response = await $axios.post(`/shopify/fetch/shop?shop=${payload}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async getProfileData(ctx, payload) {
    try {
      const response = await $axios.get("/user/profile");
      ctx.commit("userOnboarding", response.data);
      ctx.commit("getuserData", response.data);
      return response;
    } catch (error) {
      throw error;
    }
  },

  openModal({ commit }, modalName) {
    commit("openModal", modalName);
  },
  closeModal({ commit }, modalName) {
    commit("closeModal", modalName);
  },
};
