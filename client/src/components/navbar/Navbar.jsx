import {IoBedOutline,IoAirplaneOutline,IoCarSportOutline,IoMenu,IoPersonCircleOutline ,IoSearchOutline} from "react-icons/io5"
import {FaUmbrellaBeach,FaTaxi} from "react-icons/fa"
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'
import {useState} from "react"
import {DateRange} from "react-date-range"
import {format} from "date-fns"
export default function Navbar({type}){
  const [dropDate,setDropDate]=useState(false)
  const [dropInfo,setDropInfo]=useState(false)
  const [userInfo,setUserInfo]=useState({
    adults:1,
    children:0,
    rooms:1
  })
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
    <div className="relative w-full h-fit bg-blue-900 text-white">
     <div className="py-4 flex justify-between items-center px-5">
       <div className="px-2 py-1 text-2xl md:text-3xl font-bold w-1/2 cursor-pointer">Booking</div>
       <div className="w-1/2 md:hidden  flex justify-end">
        
          <IoPersonCircleOutline className="text-3xl mr-4 cursor-pointer"/>
          <IoMenu className="text-3xl cursor-pointer"/>
        
       </div>
       <div className="hidden md:flex justify-between w-1/2 ">
         <div className="flex items-center justify-around w-1/3">
           <div className=""> EGP </div>
           <div className="w-7 h-7 rounded-full overflow-hidden cursor-pointer">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHXsCWAOjRArpdl7OOhmWW_99VWhp3IRO1Q&usqp=CAU" className="object-cover w-full h-full" alt=""/>
           </div>
           <div className="flex justify-center items-center px-3 py-1 rounded-full text-xl font-semibold border border-white cursor-pointer">?</div>
         </div>
         <div className="w-2/3 flex justify-between items-center">
          <div className="cursor-pointer px-3 py-1 border border-white flex items-center">list your property</div>
           <button className=" px-3 py-1 text-blue-900 bg-white">Register</button>
          <button className=" px-3 py-1 text-blue-900 bg-white">Sign in</button>
         </div>
       </div>
     </div>
      <div className="pb-4 flex items-center px-2 w-screen overflow-x-scroll">
        <div className={`px-4 mx-1 py-2 hover:border-white hover:border cursor-pointer flex items-center rounded-full`}>
            <IoBedOutline className="text-2xl"/>
            <div className="ml-1.5 font-semibold">Stays</div>
        </div>
        <div className={`px-4 mx-1 py-2 hover:border-white hover:border cursor-pointer flex items-center rounded-full`}>
            <IoAirplaneOutline className="text-2xl"/>
            <div className="ml-1.5 font-semibold">Flight</div>
        </div>
        <div className={`px-4 text-wrap-none mx-1 py-2 hover:border-white hover:border cursor-pointer flex items-center rounded-full`}>
            <IoCarSportOutline className="text-2xl"/>
            <div className="ml-1.5 w-24 font-semibold">Car rentals</div>
        </div>
        <div className={`px-4 mx-1 py-2 hover:border-white hover:border cursor-pointer flex items-center rounded-full`}>
            <FaUmbrellaBeach className="text-2xl"/>
            <div className="ml-1.5 font-semibold">Attractions</div>
        </div>
        <div className={`px-4 mx-1 py-2 hover:border-white hover:border cursor-pointer flex items-center rounded-full`}>
            <FaTaxi className="text-2xl"/>
            <div className="ml-1.5 w-28 font-semibold">Airport Taxis</div>
        </div>
      </div>
      {
      type==="home" && <div className="hidden md:block">
      <hr className=""/>
      <div className="p-4 mb-4">
         <div className="text-5xl font-bold py-4">
           A lifetime of discounts? It's Genius.
         </div>
         <div className=" text-xl w-2/3">
           Get rewarded for your travels – unlock instant savings of 10% or more with a free Booking.com account
         </div>
         <button className="my-6 bg-blue-500 py-2 px-4">Sign in / Register</button>
      </div>
      <div className="absolute w-full bg-transparent left-0" style={{bottom:"-1.5rem"}}>
        <div className="px-4   text-black flex">
        <div className='flex grow'>
         <input type="text" className="w-1/3 bg-gray-100 py-2 px-4 hover:outline-none  border-2 border-yellow-500" placeholder=" Your distenation"/>
         <div className="relative w-1/3 bg-gray-100 py-2 px-4 border-2 border-yellow-500">
         <div onClick={()=>setDropDate(!dropDate)} className="">{`${format(state[0].startDate,"dd/MM/yyyy")}`} to {`${format(state[0].endDate,"dd/MM/yyyy")}`}</div>
          <div  className={`${dropDate?"block":"hidden"} absolute left-0 top-`}>
                    <DateRange
                      editableDateInputs={true}
                      onChange={item => setState([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={state}
                    />
                    </div>
         </div>
         <div className="relative w-1/3 bg-gray-100 py-2 px-4 border-2 border-yellow-500"> 
         <div className=" cursor-pointer" onClick={()=>setDropInfo(!dropInfo)}>{`  ${userInfo.adults} adults, ${userInfo.children} children, ${userInfo.rooms} rooms`} </div>
           <div className={`${dropInfo?"block":"hidden"} absolute w-5/6 border-2 border-yellow-500 bg-white left-6 top-10`} >
                 <div className="flex justify-between m-4">
                    <div className="w-2/3">Adults</div>
                    <div className="w-1/3 flex justify-between items-center">
                      <button disabled={userInfo.adults<=1} onClick={()=>userInfoHandler("adults","dec")} className="px-2 py-0.5 border border-blue-500">-</button>
                      <div className="" >{userInfo.adults}</div>
                      <button onClick={()=>userInfoHandler("adults","inc")}  className="px-2 py-0.5 border border-blue-500">+</button>
                    </div>
                 </div>
                 <div className="flex justify-between m-4">
                    <div className="w-2/3">Children</div>
                    <div className="w-1/3 flex justify-between items-center">
                      <button disabled={userInfo.children<=0} onClick={()=>userInfoHandler("children","dec")} className="px-2 py-0.5 border border-blue-500">-</button>
                      <div className="" >{userInfo.children}</div>
                      <button onClick={()=>userInfoHandler("children","inc")}  className="px-2 py-0.5 border border-blue-500">+</button>
                    </div>
                 </div>
                 <div className="flex justify-between m-4">
                    <div className="w-2/3">Rooms</div>
                    <div className="w-1/3 flex justify-between items-center">
                      <button disabled={userInfo.rooms<=1} onClick={()=>userInfoHandler("rooms","dec")} className="px-2 py-0.5 border border-blue-500">-</button>
                      <div className="" >{userInfo.rooms}</div>
                      <button onClick={()=>userInfoHandler("rooms","inc")}  className="px-2 py-0.5 border border-blue-500">+</button>
                    </div>
                 </div>
          
               </div>
         </div>
         </div>
         <button className="px-3 text-white py-2 bg-blue-500 border-2 border-yellow-500">Search</button>
        </div>
      </div>
      </div>
      }
      <div className="block md:hidden">
         {
           type==="home"&&<div className="p-4 text-black bg-white">
             <div className="py-4">
               <div className="text-2xl font-bold">Search</div>
               <div className="py-4">Destinations, properties, even an address</div>
             </div>
             <div className="border-4 border-yellow-500">
               <div className="border-2 px-2 border-yellow-500 flex items-center">
                <input type="text" className="w-full px-4 py-3 grow focus:outline-none" placeholder="Istanpole"/>
                <IoSearchOutline className="cursor-pointer h-7 w-7"/>
               </div>
               <div className=" border-2 border-yellow-500 text-gray-500 " >
               <div className="flex items-center" onClick={()=>setDropDate(!dropDate)}>
                   <div className="px-4 w-1/2">
                     <div className="pt-4 pb-2">check-in date</div>
                     <div className=" pb-4">{`${format(state[0].startDate,"dd/MM/yyyy")}`}</div>
                    </div>
                    <span className="text-xl bg-gray-300 full w-0.5 py-1"></span>
                    <div className="px-4 w-1/2">
                   <div className="pt-4 pb-2">check-out date</div>
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
                  <div className="p-3">Adults</div>
                  <div className="px-3">1</div>
                </div>
                    <div className="flex items-center">
                  <span className="text-xl bg-gray-300 h-5/6 w-0.5 py-1"></span>
                  </div>
                </div>
               <div className="flex w-1/3 justify-between">
                 <div>
                    <div className="p-3">Children</div>
                    <div className="px-3">2</div>
                  </div>
                  <div className="flex items-center">
                  <span className="text-xl bg-gray-300 h-5/6 w-0.5 py-1"></span>
                  </div>
                </div>
               <div className=" w-1/3 justify-between">
                  <div className="p-3">Rooms</div>
                  <div className="px-3">1</div>
                </div>
                </div>
               <div className={`${dropInfo?"block":"hidden"} absolute w-5/6 border-2 border-yellow-500 bg-white left-6`} style={{bottom:"-1.5rem"}}>
                 <div className="flex justify-between m-4">
                    <div className="w-2/3">Adults</div>
                    <div className="w-1/3 flex justify-between items-center">
                      <button disabled={userInfo.adults<=1} onClick={()=>userInfoHandler("adults","dec")} className="px-2 py-0.5 border border-blue-500">-</button>
                      <div className="" >{userInfo.adults}</div>
                      <button onClick={()=>userInfoHandler("adults","inc")}  className="px-2 py-0.5 border border-blue-500">+</button>
                    </div>
                 </div>
                 <div className="flex justify-between m-4">
                    <div className="w-2/3">Children</div>
                    <div className="w-1/3 flex justify-between items-center">
                      <button disabled={userInfo.children<=0} onClick={()=>userInfoHandler("children","dec")} className="px-2 py-0.5 border border-blue-500">-</button>
                      <div className="" >{userInfo.children}</div>
                      <button onClick={()=>userInfoHandler("children","inc")}  className="px-2 py-0.5 border border-blue-500">+</button>
                    </div>
                 </div>
                 <div className="flex justify-between m-4">
                    <div className="w-2/3">Rooms</div>
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
             <button className="h-full w-full bg-blue-500 text-white text-lg py-3">Search</button>
           </div>
           </div>
           </div>
         }
      </div>
    </div>
    );
}