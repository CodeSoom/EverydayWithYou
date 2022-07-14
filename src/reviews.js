import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  // apiKey: "API_KEY",
  // authDomain: "PROJECT_ID.firebaseapp.com",
  // // The value of `databaseURL` depends on the location of the database
  // databaseURL: "https://DATABASE_NAME.firebaseio.com",
  projectId: "everyday-with-you",
  // storageBucket: "PROJECT_ID.appspot.com",
  // messagingSenderId: "SENDER_ID",
  // appId: "APP_ID",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const setReviews = async () => {
  await addDoc(collection(db, "reviews"), {
    // name: `${}`,
    // age: `${}`,
    // situation: `${}`,
    // place: `${}`,
    // category: `${}`,
    // mood: `${}`,
    // afterCourse: `${}`,
  });
};

export const getReviews = async () => {
  const querySnapshot = await getDocs(collection(db, "reviews"));
  const reviews = querySnapshot.docs.map((it) => it.data());
  console.log(reviews);
  // querySnapshot.forEach((doc) => {
  //   console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  // });
};
