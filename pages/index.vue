<template>
<div>
  <Hero />
  <Integration />
  <OurImpact />
  <Profit />
  <Work />
  <Blog />
  <TimeSection />
  <TrueProfit />
</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    async mounted() {
        const queryParams = new URLSearchParams(window.location.search);
        const hmac = queryParams.get('hmac');
        const shop = queryParams.get('shop');

        if (hmac, shop) {
            try {
                let response = await this.connectShopify(shop)
                window.location.href = response.data
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log('HMAC is invalid');
        }
    },
    methods: {
        ...mapActions({
            connectShopify: "auth/connectShopify",
        }),
    }
}
</script>
