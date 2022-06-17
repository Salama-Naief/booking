import {useState} from  "react";
import {IoMenu} from "react-icons/io5"
import {FcGoogle,FcPhoneAndroid} from "react-icons/fc"
import {FaFacebookSquare} from "react-icons/fa"

export default function ({type}){
  const [email,setEmail]=useState(null);
  const [password,setPassword]=useState(null);
  const [confrimPassword,setConfrimPassword]=useState(null);
  const [checkedEmail,setCheckedEmail]=useState(false);
  
  const createUser=()=>{
    if(email!==null){
      setCheckedEmail(true);
    }
    
  }
  return(
    <div className="">
       <div className="bg-blue-900 flex justify-between items-center text-white px-4 py-2">
          <div className="px-2 py-1 text-2xl md:text-3xl font-bold w-7/12 cursor-pointer">Booking</div>
          <div className="text-4xl cursor-pointer"><IoMenu/></div>
      </div>
      <div className="flex items-center justify-center py-24">
        <div className="lg:w-1/3 md:w-1/2 w-full p-4">
        <div className="font-bold py-2">Sign in or create an account</div>
         <div className='text-red-600 pt-2'>error message</div>
         <div className='text-sm py-2'><span className="text-sm text-gray-600">{!checkedEmail?"email address":null}</span>{!checkedEmail&&<input type='email' onChange={(e)=>setEmail(e.target.value)} className="w-full h-10 border border-blue-600 outline-none p-3" placeholder="email or phone"/>}</div>
         <div>
         {checkedEmail&&<div>
         <div className='py-2'><span className="text-sm text-gray-600" >password</span><input type='password' onChange={(e)=>setPassword(e.target.value)} className="w-full h-10 border border-blue-600 outline-none p-3" placeholder="password"/></div>
         <div className='pb-2'><span className="text-sm text-gray-600" >{(type==="register")?"confirm password":null}</span>{(type==="register")?<input type='password' onChange={(e)=>setConfrimPassword(e.target.value)} className="w-full h-10 border border-blue-600 outline-none p-3" placeholder="confrim password"/>:null}</div>
         </div>}
         <button onClick={()=>createUser()} className="bg-blue-600 text-white w-full py-2 my-4 text-lg ">{!checkedEmail?"Continue with email":"Signin"}</button>
         </div>
          <div className="">
               <div className="flex items-center"><hr className="w-1/4"/><div className="w-1/2 text-center text-sm text-gray-600">or use one of these options</div><hr className="w-1/4"/>  </div>
               <div className="flex justify-around py-8">
                  <div className="p-4 border border-blue-600 cursor-pointer"><FaFacebookSquare className="text-blue-600 text-3xl"/></div>
                  <div className="p-4 border border-blue-600 cursor-pointer"><FcGoogle className="text-blue-600 text-3xl"/></div>
                  <div className="p-4 border border-blue-600 cursor-pointer"><FcPhoneAndroid className="text-blue-600 text-3xl"/></div>
               </div>
               <hr/>
               <p className="text-center py-3">By signing in or creating an account, you agree with our<br/> <span className='cursor-pointer text-blue-600'>Terms & Conditions</span> and <span className='cursor-pointer text-blue-600'>Privacy Statement</span></p>
               <hr/>
               <div className="py-3 text-center">all rights presirved</div>
             </div>
        </div>
            
      </div>
      
    </div>
    )
}