import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBZN4KaIfjJXt09mLKS_NnscO2CX4YKlII",
  authDomain: "smartedit-email-list.firebaseapp.com",
  databaseURL: "https://smartedit-email-list-default-rtdb.firebaseio.com",
  projectId: "smartedit-email-list",
  storageBucket: "smartedit-email-list.appspot.com",
  messagingSenderId: "298164571827",
  appId: "1:298164571827:web:020eb5c888ba34d7a06ac6",
  measurementId: "G-GKFV4ZVDST",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const database = getDatabase(app);
