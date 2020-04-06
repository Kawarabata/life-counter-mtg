<template>
  <div class="players-life">
    <h1>{{ this.playerName }}</h1>
    <h2>{{ this.lifePoint }}</h2>
    <div class="buttons">
      <!-- <button @click="plusLife">+</button> -->
      <!-- <button @click="minusLife">-</button> -->
      <LifePlusButton :plusLife="plusLife" />
      <LifeMinusButton :minusLife="minusLife" />
    </div>
  </div>
</template>

<script>
import LifePlusButton from "./LifePlusButton.vue";
import LifeMinusButton from "./LifeMinusButton.vue";

export default {
  name: "PlayersLife",
  components: {
    LifePlusButton,
    LifeMinusButton
  },
  props: {
    playerName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      lifePoint: 20
    };
  },
  methods: {
    plusLife() {
      this.lifePoint++;
    },
    minusLife() {
      this.lifePoint--;
    }
  }
};
</script>

<style scoped lang="scss">
button {
  width: 40%;
}

h2 {
  font-size: 4rem;
}
</style>
