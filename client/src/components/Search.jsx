import { format } from 'date-fns'
import React, { useState } from 'react'
import { DateRange } from 'react-date-range';

export default function Search({setUserInfo,userInfo,setState,state}) {
    
    const [dropDate,setDropDate]=useState(false)
    const [dropInfo,setDropInfo]=useState(false)
   
    const userInfoHandler=(name,amount)=>{
        setUserInfo(prev=>{
        return{ ...prev,[name]:amount==="dec"?userInfo[name]-1:userInfo[name]+1}
        })
    }


  return (
    <div className='flex flex-col bg-yellow-500 p-4 rounded sticky top-0 left-0 h-max '>
            <div className='text-xl text-gray-700 py-2 font-bold'>Search</div>
            <div className=''>
                <div className="text-sm text-gray-700">Destnation/propty name:</div>
            <input type="text" className=" bg-gray-100 py-2 px-4 outline-none w-full cursor-pointer rounded" placeholder=" Your distenation"/>
            <div className="text-sm mt-4 text-gray-700">Check in/out date</div>
         <div className="relative  bg-gray-100 py-2 px-4 rounded ">
         <div onClick={()=>setDropDate(!dropDate)} className="cursor-pointer">{`${format(state[0].startDate,"dd/MM/yyyy")}`} to {`${format(state[0].endDate,"dd/MM/yyyy")}`}</div>
          <div  className={`${dropDate?"block":"hidden"} absolute left-0 top-8 z-10 `}>
                    <DateRange
                      editableDateInputs={true}
                      onChange={item => setState([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={state}
                    />
                    </div>
         </div>
         <div className="text-sm mt-4 text-gray-700">Options</div>
         <div className="relative bg-gray-100 py-2 mb-4 px-4 cursor-pointer rounded"> 
         <div className=" cursor-pointer" onClick={()=>setDropInfo(!dropInfo)}>{`  ${userInfo.adults} adults, ${userInfo.children} children, ${userInfo.rooms} rooms`} </div>
           <div className={`${dropInfo?"block":"hidden"} absolute w-full px-1 bg-white left-0 top-11`} >
                 <div className="flex justify-between m-4">
                    <div className="w-2/3">Adults</div>
                    <div className="w-1/3 flex justify-between items-center">
                      <button disabled={userInfo.adults<=1} onClick={()=>userInfoHandler("adults","dec")} className="px-2 py-0.5 border border-blue-500">-</button>
                      <div className="px-2" >{userInfo.adults}</div>
                      <button onClick={()=>userInfoHandler("adults","inc")}  className="px-2 py-0.5 border border-blue-500">+</button>
                    </div>
                 </div>
                 <div className="flex justify-between m-4">
                    <div className="w-2/3">Children</div>
                    <div className="w-1/3 flex justify-between items-center">
                      <button disabled={userInfo.children<=0} onClick={()=>userInfoHandler("children","dec")} className="px-2 py-0.5 border border-blue-500">-</button>
                      <div className="px-2" >{userInfo.children}</div>
                      <button onClick={()=>userInfoHandler("children","inc")}  className="px-2 py-0.5 border border-blue-500">+</button>
                    </div>
                 </div>
                 <div className="flex justify-between m-4">
                    <div className="w-2/3">Rooms</div>
                    <div className="w-1/3 flex justify-between items-center">
                      <button disabled={userInfo.rooms<=1} onClick={()=>userInfoHandler("rooms","dec")} className="px-2 py-0.5 border border-blue-500">-</button>
                      <div className="px-2" >{userInfo.rooms}</div>
                      <button onClick={()=>userInfoHandler("rooms","inc")}  className="px-2 py-0.5 border border-blue-500">+</button>
                    </div>
                 </div>
          
               </div>
         </div>
          <div>
              <div className='flex items-center mb-2'>
                  <input type="checkbox" />
                  <div className='text-sm text-gray-700 pl-1'>Entire homes & apartments</div>
              </div>
              <div className='flex items-center mb-2'>
                  <input type="checkbox" />
                  <div className='text-sm text-gray-700 pl-1'>I'm traveling for work</div>
              </div>
          </div>
          <button className="px-3 w-full text-white py-2 mt-2 bg-blue-600 border-2 border-yellow-500 rounded">Search</button>
            </div>
        </div>
  )
}
