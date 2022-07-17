import { signInWithGoogle } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css"
function Home() {
    const navigation=useNavigate()
    const dashboard=()=>{
        signInWithGoogle().then((result)=>{
            navigation('dashboard')
        }).catch((error)=>{
            console.log('error')
        })
    }


  return (
    <div className="main-button">
      <button onClick={dashboard}>Sign in with google</button>
    </div>
  );
}

export default Home;
