<template>
  <div id="app">
    <div id="nav">
      <div>{{getLoggedIn ? 'Eingelogged' : 'Ausgelogged'}}</div>
      <button v-if="getLoggedIn" @click="signOut">Abmelden</button>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'App',
    computed: {
        ...mapGetters([
            'getLoggedIn'
        ])
    },
    methods: {
        ...mapActions([
            'signOut'
        ])
    }
};
</script>

<style lang="scss">
@import '~@/assets/vars.scss';

* {
  box-sizing: border-box;
}

html, body {
  background: $primary;
  font-size: 14pt;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  display: flex;
  padding: $margin-normal;
  justify-content: flex-end;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
