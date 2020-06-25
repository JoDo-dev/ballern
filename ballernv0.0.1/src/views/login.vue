<template>
    <div class="login">
        <div
            class="login__action-wrapper"
            ref="loginwrapper"
        >
            <sessionLogin @session-login="animateOut" />
            <createSession @session-created="animateOut" />
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';
import { gsap } from 'gsap';
import sessionLogin from '@/components/session-login.vue';
import createSession from '@/components/create-session.vue';
export default {
    name: 'Login',
    components: {
        sessionLogin,
        createSession
    },
    data () {
        return {
            sessionID: '',
            imageUrl: ''
        };
    },
    computed: {
        ...mapGetters([
            'getLoggedIn'
        ])
    },
    created () {
        this.setUser();
    },
    mounted () {
        this.fetchBackgroundImage();
    },
    methods: {
        ...mapActions([
            'signOut',
            'setUser'
        ]),
        animateOut () {
            const windowWidth = window.innerWidth;
            const done = () => {
                console.log('done');
            };
            gsap.to(this.$refs.loginwrapper, { duration: 0.5, width: windowWidth, ease: 'power2', onComplete: done });
        },
        fetchBackgroundImage () {
            axios.get('https://api.pexels.com/v1')
                .then((response) => {
                    console.log(response.data);
                });
        }

    }
};
</script>
<style lang="scss" scoped>
@import '~@/assets/vars.scss';

.login {
    &__action-wrapper {
        background: $secondary;
        height: 100vh;
        width: 33%;
        padding: $margin-big;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
</style>
