import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyArpyH2ssrDCDz9XlHjw5Prvsmx8_yAiPY',
  authDomain: 'crwn-clothing-db-a9983.firebaseapp.com',
  projectId: 'crwn-clothing-db-a9983',
  storageBucket: 'crwn-clothing-db-a9983.appspot.com',
  messagingSenderId: '405298773717',
  appId: '1:405298773717:web:bee8f4736450002f09ac5c',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
