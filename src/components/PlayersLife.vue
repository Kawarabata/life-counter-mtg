<template>
  <div class="players-life">
    <button @click="resetLife" class="reset-button">reset</button>
    <h1>{{ this.playerName }}</h1>
    <h2>{{ this.lifePoint }}</h2>
    <div class="buttons">
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
    },
    resetLife() {
      this.lifePoint = 20;
    }
  }
};
</script>

<style scoped lang="scss">
.life-plus-button,
.life-minus-button {
  width: 40%;
}

.life-plus-button {
  margin-right: 8px;
}

.reset-button {
  color: #fff;
  background-color: transparent;
  border-radius: 8px;
}

h2 {
  font-size: 4rem;
  margin: 30px 0;
}

.buttons {
  display: flex;
  justify-content: center;
}
</style>
