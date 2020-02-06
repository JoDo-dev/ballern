<template>
    <div class="home__content">
        <div class="home__headline">
            <h1>Ballern, das Partyspiel!</h1>
        </div>
        <form>
            <label>
                <div>Dein Name</div>
                <input type="text" v-model="name"/>
            </label>
            <div>
                <button type="button" @click="enterSetup">Los geht´s</button>
            </div>
        </form>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'home',
  data() {
    return {
      name: 'Dein Name',
    };
  },
  methods: {
    ...mapActions([
      'setActiveSlide',
      'addUser',
    ]),
    enterSetup() {
      this.addUser({
        name: this.name,
        items: {
          cups: 0,
          shots: 0,
        },
        owner: true,
      });
      this.setActiveSlide('setup');
    },
  },
};
</script>
