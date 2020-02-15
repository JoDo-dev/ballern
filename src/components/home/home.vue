<template>
    <div
      class="home__content"
      :style="{backgroundImage: `url(${img})`}"
    >
    <div class="home__backgroundfilter">
      <div>
          <h1
            class="home__headline"
            :class="{'home__headline--desktop': detectDesktop}"
          >
              ballern.
            </h1>
      </div>
        <label>
            <input
              class="home__input"
              type="text"
              placeholder="Gib deinen Namen ein..."
              v-model="name"
              @keydown.enter="enterSetup"
            />
        </label>
        <div>
            <NextButton
              type="button"
              @clicked="enterSetup">
                Los geht´s
            </NextButton>
        </div>
      </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
import homeImg from '../../assets/home_background.png';
import NextButton from '../ui/next-button.vue';

export default {
  name: 'home',
  components: {
    NextButton,
  },
  data() {
    return {
      name: '',
      img: homeImg,
    };
  },
  computed: {
    detectDesktop() {
      return window.innerWidth > 375;
    },
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

<style lang="scss" scoped>

  .home__content {
    height: 100%;
    width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
  }

.home__backgroundfilter {
  background: linear-gradient(180deg,
  rgba(255,255,255,0.9) 0%,
  rgba(243,243,243,0.2) 50%,
  rgba(255,255,255,0.9) 100%
  );
  padding: 1rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.home__input {
  padding: 16px;
  font-size: 16px;
  margin-bottom: 1rem;
  border-radius: 20px;
  border: none;
  box-shadow: 0px 2px 5px 2px rgba(120,120,120,0.3);
  width: 100%;
  outline: none;
}
.home__headline {
  font-size: calc(100vw / 4);
  width: 100%;
  text-align: center;

  &--desktop{
    font-size: calc(100vw / 15);
  }
}
</style>
