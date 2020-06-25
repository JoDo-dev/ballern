<template>
    <div class="create-session">
        <button class="create-session__button" @click="createSession">Eine neue Session erstellen</button>
        <div v-if="getCreatedSession">
            Session {{ getCreatedSession }} wurde erstellt.
        </div>
    </div>
</template>
<script>
import firebase from 'firebase';
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'Create-Session',
    computed: {
        ...mapGetters([
            'getCreatedSession'
        ])
    },
    methods: {
        ...mapActions([
            'setCreatedSession',
            'signIn'
        ]),
        async createSession () {
            await this.signIn();
            const data = {
                rules: [],
                users: [
                    {
                        isAdmin: true,
                        name: '',
                        items: {
                            shots: 0,
                            cups: 0
                        }
                    }
                ]
            };

            const db = firebase.firestore().collection('sessions').doc();
            await db.set(data);
            this.setCreatedSession(db.id);
            this.$emit('session-created');
        }
    }
};
</script>
<style lang="scss" scoped>
@import '~@/assets/vars.scss';

.create-session {
    &__button {
        background-color: $primary;
        outline: none;
        border: none;
        padding: $inputPadding;
        box-shadow: $box-shadow;
        border-radius: $border-radius;
        font-size: inherit;
        color: #ffffff;
        width: 100%;
        max-width: 400px;
    }
}
</style>
