<template>
  <div id="app">
    <transition name="silde" mode="in-out">
      <compontent :is="getActiveSlide" />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import home from './components/home/home.vue';
import setup from './components/setup/setup.vue';
import game from './components/game/game.vue';

export default {
  name: 'app',
  components: {
    home,
    setup,
    game,
  },
  computed: {
    ...mapGetters([
      'getActiveSlide',
    ]),
  },
};
</script>

<style lang="scss">
html, body {
padding: 0;
margin: 0;
}
h1,h2,h3 {
  margin-top: 0;
}
* {
  box-sizing: border-box;
}
ul, ul li {
  padding: 0;
  margin: 0;
}
p {
  margin: 0 0 20px;
}
input, textarea, button {
  -webkit-tap-highlight-color: transparent;
  box-shadow: none;
  outline: none;
  border: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #444444;
  max-width: 375px;
  min-width: 320px;
  min-height: 600px;
  max-height: 100vh;
  height: 812px;
  overflow: hidden;
  margin: auto;
}
</style>
