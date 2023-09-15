import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { Timestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAuVTQkIy0D9n16IOJGZtVQ2tpuV2YrrU4",
  authDomain: "task-management-af32c.firebaseapp.com",
  projectId: "task-management-af32c",
  storageBucket: "task-management-af32c.appspot.com",
  messagingSenderId: "607762216713",
  appId: "1:607762216713:web:2436904d3ca9afc3b3c5d8"
};

//init firebase
const app=initializeApp(firebaseConfig);

//init services
const projectFirestore = getFirestore(app);
const projectAuth = getAuth(app);
const projectStorage = getStorage(app);

//timestamp
const timestamp = Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };