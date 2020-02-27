<template>
    <div class="setup__container">
        <div class="setup__text">
            <h1>Hallo, {{MainUser[0].name}}!</h1>
            <p>Alleine Ballern macht Dumm! Also füge noch ein paar Freunde hinzu.</p>
        </div>
        <div class="setup__user__list__wrapper">
          <ul class="setup__user__list">
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
                  ref="memberinput"
                  class="setup__user__input"
                  type="text"
                  @keydown.enter="addNewUser"
                  @blur="addNewUser"
              />
                  <button
                    v-if="!createUser"
                    type="button"
                    class="setup__user__button"
                    @click="create"
                  >
                      +
                  </button>
              </li>
          </ul>
        </div>
        <NextButton
          type="button"
          class="setup__button"
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
    async create() {
      this.createUser = true;
      await this.createUser;
      this.$refs.memberinput.focus();
    },
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
  display: flex;
  flex-direction: column;
  width: 100%;
}
.setup__text {
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
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
      margin-bottom: 30px;
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
.setup__user__input {
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  box-shadow: none;
}
.setup__user__list {
  overflow: hidden;
  overflow-y: auto;
}
.setup__user__list__wrapper {
  overflow: hidden;
  flex-direction: column;
  height: auto;
  display: flex;
  position: relative;
  flex: 1;
  margin-bottom: 20px;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: linear-gradient(180deg,
    rgba(255,255,255,0) 0%,
    rgba(255,255,255,1) 100%
    );
  }
}

.setup__button {
  display: flex;
  flex: 0 0 auto;
}
</style>
