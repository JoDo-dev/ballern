<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <input type="text" v-model="sessionID" />
    <button @click="signIn">Anmelden</button>
    <button @click="signOut">Abmelden</button>
  </div>
</template>
<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      sessionID: '',
      user: {
        id: ''
      }
    }
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        const uid = user.uid
        this.user.id = uid
        console.log('logIn' + user.uid)
        this.getSession()
        // ...
      } else {
        // User is signed out.
        console.log('LogOut')
        // ...
      }
      // ...
    })
  },
  destroyed () {
    this.signOut()
  },
  methods: {
    signIn () {
      firebase.auth().signInAnonymously().catch((error) => {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // ...
        console.log(errorCode, errorMessage)
      })
    },
    signOut () {
      firebase.auth().signOut()
    },
    getSession () {
      if (this.sessionID.length) {
        const session = firebase.firestore().collection('sessions').doc(this.sessionID)
        session.get().then((res) => {
          if (res.exists) {
            console.log('data: ' + res.data())
          } else {
            alert('Session nicht gefunden')
          }
        })
      } else {
        alert('Bitte SessionID eingeben')
      }
    }
  }

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
