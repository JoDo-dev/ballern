<template>
    <div class="session-login">
        <input class="session-login__input" type="text" v-model="sessionID" />
        <button class="session-login__button" @click="getSession">Los geht´s</button>
    </div>
</template>
<script>
import firebase from 'firebase';
import { mapActions } from 'vuex';
export default {
    name: 'Session-Login',
    data () {
        return {
            sessionID: ''
        };
    },
    methods: {
        ...mapActions([
            'signIn'
        ]),
        async getSession () {
            await this.signIn();
            if (this.sessionID.length) {
                const session = firebase.firestore().collection('sessions').doc(this.sessionID);
                session.get()
                    .then((res) => {
                        if (res.exists) {
                            console.log(res.data());
                            this.$emit('session-login');
                        } else {
                            alert('Session nicht gefunden');
                        }
                    });
            } else {
                alert('Bitte SessionID eingeben');
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import '~@/assets/vars.scss';

.session-login {
    display: flex;
    flex-direction: column;

    &__input, &__button {
        outline: none;
        border: none;
        padding: $inputPadding;
        box-shadow: $box-shadow;
        border-radius: $border-radius;
        background: $primary;
        font-size: inherit;
        margin: 0 auto $margin-normal;
        width: 100%;
        max-width: 400px;
    }

    &__input {
        background-color: #ffffff;
        border: 2px solid $primary;
    }

    &__button {
        color: #ffffff;
    }
}
</style>
