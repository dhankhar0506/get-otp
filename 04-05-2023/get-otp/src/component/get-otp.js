import React from "react";
import {useState , useEffect} from "react";

function Getotp(){
  const [otps , setotps] =useState()
  
  useEffect(() => {
    handleGenerate()},[])
   


  

  const handleGenerate =()=>{
    fetch("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP").then((responce) => responce.json()).then((data) => {
        setotps(data.number)
        console.console.log(otps);
        
    })
  }


return (
  <div className="Get-otp">
      <h1>Random OTP generate</h1>
      
      <h1>
        {otps}
      </h1>
      
      
      <button onClick={handleGenerate}> Generate-OTP</button>

  </div>
  )
}
export default Getotp ;