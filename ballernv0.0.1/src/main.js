import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyD5iA7ohgYx1mzGz_QtaGCq118hvmQwc9c',
    authDomain: 'ballern-beb03.firebaseapp.com',
    databaseURL: 'https://ballern-beb03.firebaseio.com',
    projectId: 'ballern-beb03',
    storageBucket: 'ballern-beb03.appspot.com',
    messagingSenderId: '113390077289',
    appId: '1:113390077289:web:f8fd9b040fa8eb69af29f8',
    measurementId: 'G-LR2NM6L7Y2'
};

firebase.initializeApp(firebaseConfig);

createApp(App)
    .use(router)
    .use(store)
    .mount('#app');
