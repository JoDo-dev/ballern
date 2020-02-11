<template>
    <div class="home__content">
        <div class="home__headline">
            <h1>Ballern, das Partyspiel!</h1>
        </div>
          <label>
              <div>Dein Name</div>
              <input
                type="text"
                placeholder="Dein Name"
                v-model="name"
                @keydown.enter="enterSetup"
              />
          </label>
          <div>
              <button type="button" @click="enterSetup">Los geht´s</button>
          </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'home',
  data() {
    return {
      name: '',
    };
  },
  methods: {
    ...mapActions([
      'setActiveSlide',
      'addUser',
    ]),
    enterSetup() {
      if (this.name) {
        this.addUser({
          name: this.name,
          items: {
            cups: 0,
            shots: 0,
          },
          owner: true,
        });
        this.setActiveSlide('setup');
      }
    },
  },
};
</script>
