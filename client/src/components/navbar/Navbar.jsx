import {IoBedOutline,IoAirplaneOutline,IoCarSportOutline,IoMenu,IoPersonCircleOutline ,IoSearchOutline} from "react-icons/io5"
import {FaUmbrellaBeach,FaTaxi} from "react-icons/fa"
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'
import {useState} from "react"
import {DateRange} from "react-date-range"
import {format} from "date-fns"
import {Link } from "react-router-dom"
import {useTranslation} from "react-i18next"
import SmallSearch from "../SmallSearch"

export default function Navbar({type}){
  const [dropDate,setDropDate]=useState(false)
  const [sidemenu,setSidemenu]=useState(false)
  const [dropInfo,setDropInfo]=useState(false)
  const { t,i18n } = useTranslation("topbar");
  const [userInfo,setUserInfo]=useState({
    adults:1,
    children:0,
    rooms:1
  })

  
  //change languagues function
  const langhandler=(e)=>{
     i18n.changeLanguage(e.target.value)
  }
  

  const [state, setState] = useState([
  {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }
]);
  const userInfoHandler=(name,amount)=>{
    setUserInfo(prev=>{
     return{ ...prev,[name]:amount==="dec"?userInfo[name]-1:userInfo[name]+1}
    })
  }
  return(
    <div className="relative w-full h-fit bg-blue-900 text-white rounded-bl-lg rounded-br-lg"  >
      <div className="relative container m-auto">
      <div className="fixed w-full bg-blue-900 z-20 left-0 top-0">
      <div className="relative container m-auto">
     <div className="relative py-4 flex justify-between items-center px-5">
       <Link to="/"><div className="px-2 py-1 text-2xl md:text-3xl font-bold w-1/2 cursor-pointer">Booking</div></Link>
       <div className="w-1/2 md:hidden  flex justify-end">
        
          <IoPersonCircleOutline className="text-3xl mr-4 cursor-pointer"/>
          <IoMenu onClick={()=>setSidemenu(true)} className="text-3xl cursor-pointer"/>
        
       </div>
       <div className="hidden md:flex justify-between w-1/2 ">
         <div className="flex items-center justify-around w-1/3">
           <div className=""> EGP </div>
           
           <select name="" id=""  onChange={langhandler}  className='bg-black text-white'>
                <option  value="en">
                  En
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHXsCWAOjRArpdl7OOhmWW_99VWhp3IRO1Q&usqp=CAU" className="object-cover w-7 h-7 rounded-full overflow-hidden cursor-pointer" alt=""/>
                </option>
                 <option  value="ar">
                  Ar
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHXsCWAOjRArpdl7OOhmWW_99VWhp3IRO1Q&usqp=CAU" className="object-cover w-7 h-7 rounded-full overflow-hidden cursor-pointer" alt=""/>
                 </option>
             </select>
                   
           <div className="w-7 h-7 rounded-full overflow-hidden cursor-pointer">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHXsCWAOjRArpdl7OOhmWW_99VWhp3IRO1Q&usqp=CAU" className="object-cover w-full h-full" alt=""/>
           </div>
           <div className="flex justify-center items-center px-3 py-1 rounded-full text-xl font-semibold border border-white cursor-pointer">?</div>
         </div>
         <div className="w-2/3 flex justify-between items-center">
          <div className="cursor-pointer px-3 py-1 border border-white flex items-center">{t("listProprty")}</div>
           <Link to="/register"><div className=" px-3 py-1 text-blue-900 bg-white">{t("registr")}</div></Link>
          <Link to="/login"><div className=" px-3 py-1 text-blue-900 bg-white">{t("signin")}</div></Link>
         </div>
       </div>
     </div>
      <div className="pb-4 flex items-center px-2 w-screen overflow-x-scroll md:overflow-hidden">
        <div className={`px-4 mx-1 py-2 hover:border-white border border-blue-900  cursor-pointer flex items-center rounded-full`}>
            <IoBedOutline className="text-2xl"/>
            <div className="ml-1.5 font-semibold">{t("stays")}</div>
        </div>
        <div className={`px-4 mx-1 py-2 hover:border-white border border-blue-900 cursor-pointer flex items-center rounded-full`}>
            <IoAirplaneOutline className="text-2xl"/>
            <div className="ml-1.5 font-semibold">{t("flight")}</div>
        </div>
        <div className={`px-4 text-wrap-none mx-1 py-2 hover:border-white border border-blue-900 cursor-pointer flex items-center rounded-full`}>
            <IoCarSportOutline className="text-2xl"/>
            <div className="ml-1.5 w-24 font-semibold">{t("CarRentals")}</div>
        </div>
        <div className={`px-4 mx-1 py-2 hover:border-white border border-blue-900 cursor-pointer flex items-center rounded-full`}>
            <FaUmbrellaBeach className="text-2xl"/>
            <div className="ml-1.5 font-semibold">{t("attractions")}</div>
        </div>
        <div className={`px-4 mx-1 py-2 hover:border-white border border-blue-900 cursor-pointer flex items-center rounded-full`}>
            <FaTaxi className="text-2xl"/>
            <div className="ml-1.5 w-28 font-semibold">{t("airportTaxis")}</div>
        </div>
      </div>
      </div>
      </div>
      {
      type==="home" && <div className="hidden mt-32 md:block">
      <hr className=""/>
      <div className="p-4 mb-4">
         <div className="text-5xl font-bold py-4">
           {t("offers")}
         </div>
         <div className=" text-xl w-2/3">
          {t("offersDescription")}
         </div>
         <Link to="/register" ><div className="my-6 w-fit bg-blue-500 py-2 px-4">{t("signinregisterbtn")}</div></Link>
      </div>
      <div className="absolute w-full bg-transparent left-0 z-10" style={{bottom:"-1.5rem"}}>
        <div className="px-4   text-black flex">
        <div className='flex grow '>
         <input type="text" className="w-1/3 bg-gray-100 py-2 px-4 outline-none  border-2 border-yellow-500" placeholder={t("destination")}/>
         <div className="relative w-1/3 bg-gray-100 py-2 px-4 border-2 border-yellow-500">
         <div onClick={()=>setDropDate(!dropDate)} className="">{`${format(state[0].startDate,"dd/MM/yyyy")}`} to {`${format(state[0].endDate,"dd/MM/yyyy")}`}</div>
          <div  className={`${dropDate?"block":"hidden"} absolute left-0 top-8`}>
                    <DateRange
                      editableDateInputs={true}
                      onChange={item => setState([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={state}
                    />
                    </div>
         </div>
         <div className="relative w-1/3 bg-gray-100 py-2 px-4 border-2 border-yellow-500"> 
         <div className=" cursor-pointer" onClick={()=>setDropInfo(!dropInfo)}>{`  ${userInfo.adults} ${t("adutls")}, ${userInfo.children} ${t("cheldren")}, ${userInfo.rooms} ${t("rooms")}`} </div>
           <div className={`${dropInfo?"block":"hidden"} absolute w-5/6 border-2 border-yellow-500 bg-white left-6 top-10`} >
                 <div className="flex justify-between m-4">
                    <div className="w-2/3">{t("adutls")}</div>
                    <div className="w-1/3 flex justify-between items-center">
                      <button disabled={userInfo.adults<=1} onClick={()=>userInfoHandler("adults","dec")} className="px-2 py-0.5 border border-blue-500">-</button>
                      <div className="" >{userInfo.adults}</div>
                      <button onClick={()=>userInfoHandler("adults","inc")}  className="px-2 py-0.5 border border-blue-500">+</button>
                    </div>
                 </div>
                 <div className="flex justify-between m-4">
                    <div className="w-2/3">{t("cheldren")}</div>
                    <div className="w-1/3 flex justify-between items-center">
                      <button disabled={userInfo.children<=0} onClick={()=>userInfoHandler("children","dec")} className="px-2 py-0.5 border border-blue-500">-</button>
                      <div className="" >{userInfo.children}</div>
                      <button onClick={()=>userInfoHandler("children","inc")}  className="px-2 py-0.5 border border-blue-500">+</button>
                    </div>
                 </div>
                 <div className="flex justify-between m-4">
                    <div className="w-2/3">{t("rooms")}</div>
                    <div className="w-1/3 flex justify-between items-center">
                      <button disabled={userInfo.rooms<=1} onClick={()=>userInfoHandler("rooms","dec")} className="px-2 py-0.5 border border-blue-500">-</button>
                      <div className="" >{userInfo.rooms}</div>
                      <button onClick={()=>userInfoHandler("rooms","inc")}  className="px-2 py-0.5 border border-blue-500">+</button>
                    </div>
                 </div>
          
               </div>
         </div>
         </div>
         <button className="px-3 text-white py-2 bg-blue-500 border-2 border-yellow-500">{t("search")}</button>
        </div>
      </div>
      </div>
      }
      <div className="block md:hidden">
         <div className="p-4 text-black bg-white">
             <div className="py-4">
               <div className="text-2xl font-bold">{t("search")}</div>
               <div className="py-4">Destinations, properties, even an address</div>
             </div>
             <div className="border-4 border-yellow-500">
               <div className="border-2 px-2 border-yellow-500 flex items-center">
                <input type="text" className="w-full px-4 py-3 grow focus:outline-none" placeholder={t("destination")}/>
                <IoSearchOutline className="cursor-pointer h-7 w-7"/>
               </div>
               <div className=" border-2 border-yellow-500 text-gray-500 " >
               <div className="flex items-center" onClick={()=>setDropDate(!dropDate)}>
                   <div className="px-4 w-1/2">
                     <div className="pt-4 pb-2">{t("checkInDate")}</div>
                     <div className=" pb-4">{`${format(state[0].startDate,"dd/MM/yyyy")}`}</div>
                    </div>
                    <span className="text-xl bg-gray-300 full w-0.5 py-1"></span>
                    <div className="px-4 w-1/2">
                   <div className="pt-4 pb-2">{t("checkoutDate")}</div>
                   <div className="pb-4 pt-0">{`${format(state[0].endDate,"dd/MM/yyyy")}`}</div>
                
                  </div>
                  </div>
                  
                 <div  className={`${dropDate?"block":"hidden"} absolute left-4 `} style={{bottom:"-6rem"}}>
                    <DateRange
                      editableDateInputs={true}
                      onChange={item => setState([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={state}
                    />
                    </div>
                </div>
             
               <div className="border-2 text-gray-500 border-yellow-500 ">
                 <div className="cursor-pointer flex " onClick={()=>setDropInfo(!dropInfo)} >
               <div className="flex w-1/3 justify-between">
               <div>
                  <div className="p-3">{t("adutls")}</div>
                  <div className="px-3">1</div>
                </div>
                    <div className="flex items-center">
                  <span className="text-xl bg-gray-300 h-5/6 w-0.5 py-1"></span>
                  </div>
                </div>
               <div className="flex w-1/3 justify-between">
                 <div>
                    <div className="p-3">{t("cheldren")}</div>
                    <div className="px-3">2</div>
                  </div>
                  <div className="flex items-center">
                  <span className="text-xl bg-gray-300 h-5/6 w-0.5 py-1"></span>
                  </div>
                </div>
               <div className=" w-1/3 justify-between">
                  <div className="p-3">{t("rooms")}</div>
                  <div className="px-3">1</div>
                </div>
                </div>
               <div className={`${dropInfo?"block":"hidden"} absolute w-5/6 border-2 border-yellow-500 bg-white left-6`} style={{bottom:"-1.5rem"}}>
                 <div className="flex justify-between m-4">
                    <div className="w-2/3">{t("adutls")}</div>
                    <div className="w-1/3 flex justify-between items-center">
                      <button disabled={userInfo.adults<=1} onClick={()=>userInfoHandler("adults","dec")} className="px-2 py-0.5 border border-blue-500">-</button>
                      <div className="" >{userInfo.adults}</div>
                      <button onClick={()=>userInfoHandler("adults","inc")}  className="px-2 py-0.5 border border-blue-500">+</button>
                    </div>
                 </div>
                 <div className="flex justify-between m-4">
                    <div className="w-2/3">{t("cheldren")}</div>
                    <div className="w-1/3 flex justify-between items-center">
                      <button disabled={userInfo.children<=0} onClick={()=>userInfoHandler("children","dec")} className="px-2 py-0.5 border border-blue-500">-</button>
                      <div className="" >{userInfo.children}</div>
                      <button onClick={()=>userInfoHandler("children","inc")}  className="px-2 py-0.5 border border-blue-500">+</button>
                    </div>
                 </div>
                 <div className="flex justify-between m-4">
                    <div className="w-2/3">{t("rooms")}</div>
                    <div className="w-1/3 flex justify-between items-center">
                      <button disabled={userInfo.rooms<=1} onClick={()=>userInfoHandler("rooms","dec")} className="px-2 py-0.5 border border-blue-500">-</button>
                      <div className="" >{userInfo.rooms}</div>
                      <button onClick={()=>userInfoHandler("rooms","inc")}  className="px-2 py-0.5 border border-blue-500">+</button>
                    </div>
                 </div>
          
               </div>
             </div>
           <div className="border-2 p-4 text-gray-500 flex border-yellow-500 items-center">
             <input type="checkBox"/>
             <div className="ml-4">travel for working</div>
           </div>
           <div className="border-2 text-gray-500 flex border-yellow-500 items-center">
             <button className="h-full w-full bg-blue-500 text-white text-lg py-3">{t("search")}</button>
           </div>
           </div>
           </div>
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
    );
}