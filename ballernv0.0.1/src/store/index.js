import Vuex from 'vuex';
import firebase from 'firebase';

export default Vuex.createStore({
    state: {
        createdSession: '',
        user: {
            id: '',
            name: '',
            isLoggedIn: false,
            isAdmin: false
        }
    },
    getters: {
        getLoggedIn: state => state.user.isLoggedIn,
        getCreatedSession: state => state.createdSession
    },
    mutations: {
        setUser (state, u) {
            state.user = u;
        },
        setCreatedSession (state, payload) {
            state.createdSession = payload;
            state.user.isAdmin = true;
        }
    },
    actions: {
        async signOut ({ commit, state }) {
            if (state.user.isAdmin) {
                await firebase.firestore().collection('sessions').doc(state.createdSession).delete().then(() => {
                    console.log(`Document ${state.createdSession} successfully deleted`);
                    commit('setCreatedSession', '');
                }).catch((error) => {
                    console.error('Error removing document: ', error);
                });
            }
            await firebase.auth().currentUser.delete().then(() => {
                console.log('succesfully deleted user');
            });
        },
        async signIn () {
            await firebase.auth().signInAnonymously().catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                console.log(errorCode, errorMessage);
            });
        },
        setUser ({ commit }) {
            firebase.auth().onAuthStateChanged((user) => {
                const u = {
                    id: user ? user.uid : '',
                    name: '',
                    isLoggedIn: !!user,
                    isAdmin: false
                };
                commit('setUser', u);
            });
        },
        editUser ({ commit, state }, payload) {
            const u = {
                id: state.user.id,
                name: payload,
                isLoggedIn: state.user.isLoggedIn,
                isAdmin: state.user.isAdmin
            };
            commit('setUser', u);
        },
        setCreatedSession ({ commit }, payload) {
            commit('setCreatedSession', payload);
        }
    },
    modules: {
    }
});
