// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmoi-Es3INudh_Z0KBHZniWh73lCHsZRE",
  authDomain: "nasa-hackathon-50da5.firebaseapp.com",
  projectId: "nasa-hackathon-50da5",
  storageBucket: "nasa-hackathon-50da5.appspot.com",
  messagingSenderId: "364379809813",
  appId: "1:364379809813:web:d2d7ba13d0c9a24a04c61c",
  measurementId: "G-DE0H4304YB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function gettheImages(score, typeOfInstrument){
    const storage = getStorage();
    getDownloadURL(ref(storage, typeOfInstrument+'$'+score+'.jpeg'))
    .then((url) => {
        //TODO:fetch the images from here 
    })     
}


