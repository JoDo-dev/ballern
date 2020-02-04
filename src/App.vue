<template>
  <div id="app">
    <transition name="silde">
      <compontent :is="getActiveSlide" />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import home from './components/home/home.vue';
import setup from './components/setup/setup.vue';

export default {
  name: 'app',
  components: {
    home,
    setup,
  },
  computed: {
    ...mapGetters([
      'getActiveSlide',
    ]),
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
