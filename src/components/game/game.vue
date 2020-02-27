<template>
    <div class="game__wrapper">
        <div class="game__icon">
            <icon :iconName="randomizedDrink" />
        </div>
        <div class="game__message">
            <div v-if="randomizeDone" class="game__name">
                {{randomizedName.name}}
                <h3>Ballern!</h3>
            </div>
        </div>
         <NextButton
          type="button"
          class="game__button"
          @clicked="randomize">
            Nächste Runde
        </NextButton>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import NextButton from '../ui/next-button.vue';
import icon from '../ui/icon.vue';

export default {
  components: {
    NextButton,
    icon,
  },
  data() {
    return {
      randomizedName: '',
      randomizeDone: false,
      drinks: ['cup', 'shot'],
      randomizedDrink: '',
    };
  },
  computed: {
    ...mapGetters([
      'getUsers',
    ]),
  },
  methods: {
    ...mapActions([
      'setUsers',
    ]),
    randomize() {
      this.randomizeDone = false;
      this.randomizeUsers();
      this.randomizeDrinks();
      this.randomizeDone = true;
    },
    randomizeUsers() {
      const userLength = this.getUsers.length;
      const r = Math.floor(Math.random() * userLength);
      const randomUser = this.getUsers[r];
      this.randomizedName = randomUser;
    },
    randomizeDrinks() {
      const drinkLength = this.drinks.length;
      const r = Math.floor(Math.random() * drinkLength);
      const randomDrink = this.drinks[r];
      this.randomizedDrink = randomDrink;
    },
  },
};
</script>
<style lang="scss" scoped>
.game__wrapper {
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
}
.game__icon {
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.game__message {
  flex: 1;
  text-align: center;
  font-size: 40px;
  margin-bottom: 20px;
}
.game__button {
  flex: 0 0 auto;
}


</style>
