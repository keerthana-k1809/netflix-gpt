
import React from 'react'
import Header from "./Header"
import { useState,useRef } from 'react'
import { checkValiData } from '../utils/validate'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from"../utils/firebase"
import {useNavigate} from "react-router-dom"


const Login = () => {
  const [isSignIn, setIsSignIn]=useState(true)

  const[errorMessage,setErrorMessage]=useState(null)

  const navigate=useNavigate()


  const email=useRef(null);
  const password=useRef(null);
  
   

  const clicked=()=>{
    const message=checkValiData(email.current.value,password.current.value)
    setErrorMessage(message);

  //   if(!isSignIn){
  //     createUserWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //   // Signed up 
  //   const user = userCredential.user;
  //   console.log(user)
  //   navigate("/browse")
     
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   setErrorMessage(errorCode+' '+errorMessage)
  
    // ..
  // });


    }
    // else{

    // }



  // }
  
  const handleClick=()=>{
    setIsSignIn(!isSignIn)
  }
  return (
    <div>
      <Header />
      <div>
        <img className='absolute'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_small.jpg"/>
      </div>
      <div>
      <form onSubmit={(e)=>e.preventDefault()} className=' w-3/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'> 
        <h1 className='font-bold text-3xl py-4'>{isSignIn?"Sign In":"Sign Up"}</h1>

       {!isSignIn && (<input
      
         type="text" 
         placeholder='Enter your Full Name'
          className='p-2 m-2 ml-2 w-full bg-gray-500'>

          </input>)}
        <input
        ref={email}
         type="text"
          placeholder='Enter your email'
           className='p-2 m-2 ml-2 w-full bg-gray-500'></input>
        <input 
        ref={password}
        type="password" 
        placeholder='Enter your Password' 
        className='p-2 ml-2 m-2 w-full bg-gray-500'></input>
        <p className='text-red-600 font-bold text-lg py-2'>{errorMessage}</p>
        <button
         className='bg-red-600 ml-2 p-4 m-4 w-full rounded-lg' onClick={clicked}>
          {isSignIn?'Sign In':'Sign Up'}</button>
        <p className='p-4 m-4' 
        onClick={handleClick}>{isSignIn?"New to Netflix? Sign Up Now":"Already Registered"}</p>
      </form>
      </div>
    </div>
  )
}

export default Login