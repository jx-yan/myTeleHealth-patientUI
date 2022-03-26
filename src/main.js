import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBICg3ePdgPlxh-tT-d8FuyR1n0kVUVpBY",
    authDomain: "esd-telehealth-patient.firebaseapp.com",
    databaseURL: "https://esd-telehealth-patient-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "esd-telehealth-patient",
    storageBucket: "esd-telehealth-patient.appspot.com",
    messagingSenderId: "281674434514",
    appId: "1:281674434514:web:5afd08d1795afbcc486a0b",
    measurementId: "G-5K8RTWTJ77"
};

initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");