import React from 'react'
import Navbar from '../components/navbar/Navbar'
import {MdOutlineCheck} from "react-icons/md"
import Sidebar from '../components/payment/Sidebar';
import {useTranslation} from "react-i18next";
import { BsFillHandThumbsUpFill, BsFillPersonFill, BsStarFill } from 'react-icons/bs';
import { useState } from 'react';
export default function ReservePage() {
  const {t} =useTranslation("hotel");
  const [checkRaio,setCheckRadio]=useState(false);
  const [maingust,setMainGust]=useState(null);
  return (
    <div className='container mx-auto bg-gray-50' >
        <Navbar type=""/>
        <div className="flex items-center justify-between pt-40 pb-6 px-4">
            <div className='flex items-center'><span className='flex items-center rounded-full px-1 py-1 mx-2 justify-center bg-blue-900 text-white'><MdOutlineCheck className='text-2xl font-semibold'/></span><span className='text-gray-500 font-semibold'>Your Selection</span></div>
            <div className='h-0.5 bg-gray-400 w-4/12'></div>
            <div className='flex items-center'><span className='flex items-center rounded-full px-3 py-1 mx-2 justify-center bg-blue-900 text-white'>2</span><span className='text-blue-600 font-semibold'>Your Details</span></div>
            <div className='h-0.5 bg-gray-400 w-4/12'></div>
            <div className='flex items-center'><span className='flex items-center rounded-full px-3 py-1 mx-2 justify-center bg-gray-900 text-white'>3</span><span className='text-gray-600 font-semibold'>Final Step</span></div>
        </div>

        <div className='grid md:grid-cols-3 '>
            <div className="col-span-1 px-4">
               <Sidebar/>
            </div>
            <div className="col-span-2 px-4">
               <div className="border p-4  overflow-hidden">

                 <div className="flex h-56">
                  <div className="w-56 h-full cursor-pointer overflow-hidden rounded-lg">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLEOnTaOdU4i9DWQJwOjKHnKF-7guEsND3Kg&usqp=CAU" className='object-cover h-full w-full' alt="" />
                    </div>
                    <div className="px-4">
                      <div className="items-center flex justify-between">
                        <div className='text-gray-500 font-semibold p-1 mx-2'>{t("type")}</div>
                        <div className="flex items-center">
                        <div className="flex px-2 text-yellow-400 ml-2"><BsStarFill className='mr-0.5'/><BsStarFill className='mr-0.5'/><BsStarFill className='mr-0.5'/><BsStarFill className='mr-0.5'/><BsStarFill className='mr-0.5'/></div>
                        <div className="ml-2 bg-yellow-400 p-1 rounded text-gray-100 flex justify-center items-center">
                          <BsFillHandThumbsUpFill className=''/>
                        </div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold">Tivoli Sintra</div>
                      <div className="py-2">Praça da República, 2710-616 Sintra, Portugal</div>
                      <div className="py-2 text-green-600">This property has an excellent location. Guests have rated it 9.3!l</div>
                        <div className="flex items-center">
                          <div className='p-1 text-white font-semibold rounded-tl-lg rounded-br-lg bg-blue-500 mx-4'>9.5</div>
                          <div className='px-2 font-semibold'>{t("rating")}</div> 
                          <div className='text-gray-600'>{t("review")}</div> 
                      </div>
                    </div>
                 </div>

               </div>
               
               <div className="bg-blue-50 p-4 my-4">
                  <div className="text-lg md:text-2xl font-bold py-2">Enter your details</div>
                  <div className="bg-green-200 text-green-600 w-fit px-1 rounded">Almost done! Just fill in the<span className="text-red-600">*</span> required info</div>
                  <div className="font-semibold py-2">Are you traveling for work?</div>
                  <form action=""className=''>
                    <div className="flex">
                      <div className="flex items-center px-2">
                        <input onClick={()=>setCheckRadio(true)} checked={checkRaio} type="radio" className='w-6 h-6'  value="yes" id="yes"/>
                        <lable forHtml="yes" className="px-1">Yes</lable>
                      </div>
                      <div className="flex items-center px-2">
                        <input onClick={()=>setCheckRadio(false)} checked={!checkRaio} type="radio" className='w-6 h-6'  value="no" id="no"/>
                        <lable forHtml="no" className="px-1">No</lable>
                      </div>
                    </div>
                    <div className="flex py-4">
                      <div className="">
                        <div>First Name <span className='text-red-600'>*</span></div>
                        <input type="text" className='w-72 h-9 border border-gray-500 rounded-lg px-2 outline-blue-600' placeholder='Frist Name' />
                      </div>
                      <div className="px-4">
                        <div>Last Name <span className='text-red-600'>*</span></div>
                        <input type="text" className='w-72 h-9 border border-gray-500 rounded-lg px-2 outline-blue-600' placeholder='Last Name' />
                      </div>
                    </div>
                    <div className="">
                      <div className="py-2">
                          <div>Email adrees <span className='text-red-600'>*</span></div>
                          <input type="email" className='w-72 h-9 border border-gray-500 rounded-lg px-2 outline-blue-600' placeholder='Last Name' />
                      </div>
                      <div className="py-2">
                        <div>Email confirm <span className='text-red-600'>*</span></div>
                        <input type="email" className='w-72 h-9 border border-gray-500 rounded-lg px-2 outline-blue-600' placeholder='Last Name' />
                      </div>
                    </div>
                    <div className="py-2">
                      <div className="font-semibold py-2">Who are you booking for?</div>
                      <div className="flex items-center py-2">
                        <input onClick={()=>setMainGust(true)} checked={maingust} type="radio" className='w-6 h-6'  value="maingust" id="yes"/>
                        <lable forHtml="maingust" className="px-1 text-sm">I'm the main guest</lable>
                      </div>
                      <div className="flex items-center py-2">
                        <input onClick={()=>setMainGust(false)} checked={!maingust} type="radio" className='w-6 h-6'  value="no" id="somenoeelse"/>
                        <lable forHtml="somenoeelse" className="px-1 text-sm ">I'm booking for someone else</lable>
                      </div>
                    </div>
                  </form>
              </div>
              <div className="my-4 bg-blue-50 p-4">
                <div className="flex">
                  <div className='font-semibold'>Max people:</div>
                  <div className="flex"><BsFillPersonFill/><BsFillPersonFill/><span>+</span><BsFillPersonFill/></div>
                </div>
                <div className="py-2">
                  <div>Full Guest Name</div>
                  <input type="text" className='w-72 h-9 border border-gray-500 rounded-lg px-2 outline-blue-600' placeholder='Last Name' />
                </div>
              </div>
              <div className="my-4 bg-blue-50 p-4">
                <div className="font-bold text-2xl">Add to your stay</div>
                <div className="flex items-center py-4">
                  <input  type="checkBox" className='w-5 h-5'   id="interested"/>
                  <lable forHtml="interested" className="px-1 text-sm ">I'm interested in requesting an airport shuttle</lable>
                </div>
                <div className="flex items-center py-4">
                  <input  type="checkBox" className='w-5 h-5'   id="interested"/>
                  <lable forHtml="interested" className="px-1 text-sm ">I'm interested in requesting an airport shuttle</lable>
                </div>
              </div>
              <div className="my-4 p-4 bg-blue-50">
                <div className="font-bold text-2xl">Special requests</div>
                <div className="my-2">Special requests can't be guaranteed, but the property will do its best to meet your needs. You can always make a special request after your booking is complete.</div>
                <div className="py-4 w-full">
                  <div className="font-semibold py-1">Please write your requests in English or Portuguese</div>
                  <textarea  className="border border-gray-500 rounded-lg p-2 outline-blue-600 w-2/3 h-48"/>
                </div>
              </div>
              <div className="my-4 flex justify-end">
                <button className="bg-blue-600 px-4 py-3 font-semibold rounded text-xl text-white">Next: Final details</button>
              </div>
            </div>
        </div>
    </div>
  )
}
