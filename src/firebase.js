import firebase from './firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCviam7EKMHxxHeOOAK93ruZX4HCiiWYwA",
    authDomain: "disney-chicken.firebaseapp.com",
    projectId: "disney-chicken",
    storageBucket: "disney-chicken.appspot.com",
    messagingSenderId: "177660138031",
    appId: "1:177660138031:web:321f9c309098cba0dd6cda",
    measurementId: "G-JRE7Z6KTCK"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage }
export default db