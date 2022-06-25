import {useState} from  "react";
import {IoMenu} from "react-icons/io5"
import {FcGoogle,FcPhoneAndroid} from "react-icons/fc"
import {FaFacebookSquare} from "react-icons/fa";
import {Link} from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function ({type}){
  const [email,setEmail]=useState(null);
  const [password,setPassword]=useState(null);
  const [confrimPassword,setConfrimPassword]=useState(null);
  const [checkedEmail,setCheckedEmail]=useState(false);
  const { t } = useTranslation("register");

  const createUser=()=>{
    if(email!==null){
      setCheckedEmail(true);
    }
    
  }
  return(
    <div className="">
       <div className="bg-blue-900 flex justify-between items-center text-white px-4 py-2">
          <Link to="/" className="px-2 py-1 text-2xl md:text-3xl font-bold w-7/12 cursor-pointer">Booking</Link>
          <div className="text-4xl cursor-pointer"><IoMenu/></div>
      </div>
      <div className="flex items-center justify-center py-10">
        <div className="lg:w-1/3 md:w-1/2 w-full p-4">
        <div className="font-bold py-2 text-xl">{t("title")}</div>
         <div className='text-red-600 pt-2'>error message</div>
         <div className='text-sm py-2'><span className="text-sm text-gray-600">{!checkedEmail?t("email"):null}</span>{!checkedEmail&&<input type='email' onChange={(e)=>setEmail(e.target.value)} className="w-full h-10 border border-blue-600 outline-none p-3" placeholder={t("emailorphone")}/>}</div>
         <div>
         {checkedEmail&&<div>
         <div className='py-2'><span className="text-sm text-gray-600" >{t("password")}</span><input type='password' onChange={(e)=>setPassword(e.target.value)} className="w-full h-10 border border-blue-600 outline-none p-3" placeholder={t("password")}/></div>
         <div className='pb-2'><span className="text-sm text-gray-600" >{(type==="register")?t("confirmpassword"):null}</span>{(type==="register")?<input type='password' onChange={(e)=>setConfrimPassword(e.target.value)} className="w-full h-10 border border-blue-600 outline-none p-3" placeholder={t("confirmpassword")}/>:null}</div>
         </div>}
         <button onClick={()=>createUser()} className="bg-blue-600 text-white w-full py-2 my-4 text-lg ">{!checkedEmail?t("contunuewithemail"):t("signin")}</button>
         </div>
          <div className="">
               <div className="flex items-center"><hr className="w-1/4"/><div className="w-1/2 text-center text-sm text-gray-600">{t("options")}</div><hr className="w-1/4"/>  </div>
               <div className="flex justify-around py-8">
                  <div className="p-4 border-whiter border hover:border-blue-600 cursor-pointer"><FaFacebookSquare className="text-blue-600 text-3xl"/></div>
                  <div className="p-4 border-whiter border hover:border-blue-600 cursor-pointer"><FcGoogle className="text-blue-600 text-3xl"/></div>
                  <div className="p-4 border-whiter border hover:border-blue-600 cursor-pointer"><FcPhoneAndroid className="text-blue-600 text-3xl"/></div>
               </div>
               <hr/>
               <p className="text-center py-3"><br/>{t("conditions")} <span className='cursor-pointer text-blue-600'>{t("terms")}</span> {t("and")} <span className='cursor-pointer text-blue-600'>{t("privacy")}</span></p>
               <hr/>
               <div className="py-3 text-center">{t("rights")}</div>
             </div>
        </div>
            
      </div>
      
    </div>
    )
}