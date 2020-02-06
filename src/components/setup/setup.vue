<template>
    <div class="setup__wrapper">
        <div class="setup__text">
            <h1>Hallo, {{MainUser[0].name}}!</h1>
            <h2>Alleine Ballern macht Dumm! Also füge noch ein paar Freunde hinzu.</h2>
        </div>
        <ul>
            <li
            :key="user.name"
            v-for="user in getUsers">
                {{user.name}}
            </li>
            <li>
                <input
                v-model="name"
                type="text"
            />
                <button
                type="button"
                @click="addNewUser">
                    Hinzufügen
                </button>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'setup',
  data() {
    return {
      name: '',
    };
  },
  computed: {
    ...mapGetters([
      'getUsers',
    ]),
    MainUser() {
      return this.getUsers.filter(users => users.owner);
    },
  },
  methods: {
    ...mapActions([
      'addUser',
    ]),
    addNewUser() {
      this.addUser({
        name: this.name,
        items: {
          cups: 0,
          shots: 0,
        },
      });
      this.name = '';
    },
  },
};
</script>
