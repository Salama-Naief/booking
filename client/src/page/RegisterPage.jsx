import {useState} from  "react";
import {IoMenu} from "react-icons/io5"
import {FcGoogle,FcPhoneAndroid} from "react-icons/fc"
import {FaFacebookSquare} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next"

export default function RegiserPage ({type}){
  const [email,setEmail]=useState(null);
  const [password,setPassword]=useState(null);
  const [confrimPassword,setConfrimPassword]=useState(null);
 
  const [checkedEmail,setCheckedEmail]=useState(false);
  const { t,i18n } = useTranslation("register");
  const [sidemenu,setSidemenu]=useState(false)
  const createUser=()=>{
    if(email!==null){
      setCheckedEmail(true);
    }
    
  }
  const langhandler=(e)=>{
    i18n.changeLanguage(e.target.value)
 }
  return(
    <div className="">
       <div className="bg-blue-900 fexed top-0 left-0 flex justify-between items-center text-white px-4 py-2">
          <Link to="/" className="px-2 py-1 text-2xl md:text-3xl font-bold w-7/12 cursor-pointer">Booking</Link>
          <div className="text-4xl cursor-pointer" onClick={()=>setSidemenu(true)}><IoMenu/></div>
      </div>
      <div className="flex items-center pt-10 justify-center py-10">
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
        <div className={`${sidemenu?"flex":"hidden"}  fixed py-4 px-2 items-center flex-col ${i18n.language==="en"?"right-0 ":"left-0"} bottom-0 w-1/2 h-3/4 bg-blue-900 rounded-lg z-10`}>
         <div onClick={()=>setSidemenu(false)} className={`absolute ${i18n.language==="en"?"left-0":"right-0"} p-1 m-1 top-0 cursor-pointer`}>X</div>
           <Link to="/register" className="mt-8 w-full"><div className=" px-3 py-1 text-blue-900 bg-white">{t("registr")}</div></Link>
           <Link to="/login" className="mt-4 w-full"><div className=" px-3 py-1 text-blue-900 bg-white">{t("signin")}</div></Link>
           <div className="mt-4 w-full cursor-pointer px-3 py-1 border border-white flex items-center">{t("listProprty")}</div>
           <div className="flex items-center mt-4 justify-between w-full">
           <div className="px-2">Language</div>
            <select name="" id=""  onChange={langhandler}  className=' text-white w-full bg-white outline-none border-0 py-2'>
                <option  value="en">
                  En
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHXsCWAOjRArpdl7OOhmWW_99VWhp3IRO1Q&usqp=CAU" className="object-cover w-7 h-7 rounded-full overflow-hidden cursor-pointer" alt=""/>
                </option>
                 <option  value="ar">
                  Ar
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHXsCWAOjRArpdl7OOhmWW_99VWhp3IRO1Q&usqp=CAU" className="object-cover w-7 h-7 rounded-full overflow-hidden cursor-pointer" alt=""/>
                 </option>
             </select>
             </div>
      </div>
      </div>
      
    </div>
    )
}