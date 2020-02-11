<template>
    <div class="game__wrapper">
        <div class="game__section">
            <!-- <icon name="shot" class="game__icon" /> -->
        </div>
        <div class="game__section">
            <div class="game__name">
                Ballern.
                {{randomizedName.name}}
            </div>
            <!-- <ul>
                <li :key="user.name" v-for="user in getUsers">
                    {{user.name}}
                </li>
            </ul> -->
        </div>
        <button @click="randomize">
            Randomize
        </button>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      randomizedName: '',
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
      const userLength = this.getUsers.length;
      const r = Math.floor(Math.random() * userLength);
      const randomUser = this.getUsers[r];
      this.randomizedName = randomUser;
    },
  },
};
</script>
