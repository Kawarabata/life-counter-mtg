<template>
  <div id="app">
    <div class="lifes">
      <PlayersLife playerName="Player 1" />
      <p>VS</p>
      <PlayersLife playerName="Player 2" />
    </div>
  </div>
</template>

<script>
import PlayersLife from "./components/PlayersLife.vue";

export default {
  name: "app",
  components: {
    PlayersLife
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: #476a79;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
  max-width: 500px;
  margin: 0 auto;
  height: 100vh;
}

p {
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
}

.lifes {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 100vh;

  & > * {
    transform: rotate(90deg);
  }
}

.players-life {
  width: 40vh;
  margin: 0 auto;
}
</style>
