import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCU-zgn2M4b_HVbogVlXfxqjGdPVHPBL0o",
    authDomain: "docs-d2031.firebaseapp.com",
    projectId: "docs-d2031",
    storageBucket: "docs-d2031.appspot.com",
    messagingSenderId: "602768607610",
    appId: "1:602768607610:web:563c8c694088b37dffeec3"
}

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()

export {db}
