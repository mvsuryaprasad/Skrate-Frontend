import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect } from "react";
// import { Firebase } from "./Navigation/Home"


const firebaseConfig = {
  apiKey: "AIzaSyC1OjcXja7--0qxEgj-mkaL13U4XcOHQ7Y",
  authDomain: "auth-12b2b.firebaseapp.com",
  projectId: "auth-12b2b",
  storageBucket: "auth-12b2b.appspot.com",
  messagingSenderId: "327308372841",
  appId: "1:327308372841:web:1cfca953ac9adc791f2bf8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {return signInWithPopup(auth, provider)}


// export default function Firebase(){
//   const navigation = useNavigate();
//   const signInWithGoogle = () => {
//     signInWithPopup(auth, provider).then((result)=>{
//       const name=result.user.displayName
//       const email=result.user.email
//       const profilepic=result.user.photoURL
//       localStorage.setItem("name",name)
//       localStorage.setItem("email",email)
//       localStorage.setItem("profilepic",profilepic)
//       navigation('/dasboard')
//     }).catch((error)=>{
//       console.log(error)
//     })
//   };
// }

// signInWithPopup(auth, provider).then((result)=>{
//   const name=result.user.displayName
//   const email=result.user.email
//   const profilepic=result.user.photoURL
//   localStorage.setItem("name",name)
//   localStorage.setItem("email",email)
//   localStorage.setItem("profilepic",profilepic)
//   Firebase()
// }).catch((error)=>{
//   console.log(error)
// })


