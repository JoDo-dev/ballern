<template>
    <div class="setup__container">
        <div class="setup__text">
            <h1>Hallo, {{MainUser[0].name}}!</h1>
            <p>Alleine Ballern macht Dumm! Also füge noch ein paar Freunde hinzu.</p>
        </div>
        <ul>
            <li
              :key="user.name"
              class="setup__user"
              v-for="user in getUsers"
            >
                {{user.name}}
            </li>
            <li
              class="setup__user setup__user--input"
            >
                <input
                v-if="createUser"
                v-model="name"
                class="setup__user__input"
                type="text"
                @keydown.enter="addNewUser"
            />
                <button
                  v-if="!createUser"
                  type="button"
                  class="setup__user__button"
                  @click="createUser = true"
                >
                    +
                </button>
            </li>
        </ul>
        <NextButton
          type="button"
          @clicked="enterGame">
            Los geht´s
        </NextButton>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import NextButton from '../ui/next-button.vue';

export default {
  name: 'setup',
  components: {
    NextButton,
  },
  data() {
    return {
      name: '',
      createUser: false,
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
      'setActiveSlide',
    ]),
    addNewUser() {
      if (this.name) {
        this.addUser({
          name: this.name,
          items: {
            cups: 0,
            shots: 0,
          },
        });
        this.name = '';
        this.createUser = false;
      }
    },
    enterGame() {
      if (this.getUsers.length >= 2) {
        this.setActiveSlide('game');
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.setup__container {
  padding: 1rem;
  height: 100%;
  width: 100%;
}
 .setup__user {
    margin: 0;
    width: 100%;
    background-color: #eeeeee;
    list-style-type: none;
    padding: 16px;
    border-radius: 20px;
    margin-bottom: 1rem;

    &--input {
      text-align: center;
      font-weight: bold;
    }
  }
.setup__user__button {
  background-color: transparent;
  border: none;
  box-shadow: none;
  font-weight: bold;
  transform: scale(2);
  color: #aaaaaa;
  width: 100%;
  height: 100%;
}
</style>
