<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
 apiKey: "AIzaSyAZSta2NbOIp7ri-NXhhjvYdO8EmpVjSyE",
  authDomain: "onemail-notification.firebaseapp.com",
  projectId: "onemail-notification",
  storageBucket: "onemail-notification.appspot.com",
  messagingSenderId: "440022663483",
  appId: "1:440022663483:web:e7298614b24f6c774bf71e",
  measurementId: "G-4M8HHRZK3W"
};


const app = initializeApp(firebaseConfig);


// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});

getToken(messaging, { vapidKey: 'BIxRCHp92Qh5wld4mQvb5489YuWsVjFxWfwKVdhXkr5wSAv6R--qTLO9Im4KQnem3c6X-L1zVRu_rRemWNLX6Gw' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    console.log("Token is:",currentToken);
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
