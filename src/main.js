import Vue from "vue";
import LifeCounter from "./LifeCounter.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(LifeCounter)
}).$mount("#app");
