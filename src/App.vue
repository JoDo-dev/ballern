<template>
  <div id="app">
      <component :is="state" />
  </div>
</template>

<script>
import Home from './components/home/home.vue';

export default {
  name: 'app',
  components: {
    Home,
  },
  data() {
    return {
      state: 'Home',
    };
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
