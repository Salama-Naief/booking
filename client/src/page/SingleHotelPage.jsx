import { format } from 'date-fns'
import React, { useState } from 'react'
import { DateRange } from 'react-date-range';

import Search from '../components/Search';
import Navbar from "../components/navbar/Navbar";
import {BsShare ,BsSuitHeart,BsStarFill,BsFillHandThumbsUpFill,BsWifi,BsSnow3,BsCupStraw} from "react-icons/bs"
import {MdLocationOn,MdLocationCity,MdBathtub,MdAccessibleForward,MdFitnessCenter ,MdRoomService} from "react-icons/md"
import {HiBadgeCheck} from "react-icons/hi";
import {Ri24HoursLine} from "react-icons/ri";
import {IoLogoNoSmoking} from "react-icons/io";
import {FaParking} from "react-icons/fa"
import {GiCoffeeCup} from "react-icons/gi"

export default function SingleHotelPage() {

  
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

  return (
    <div>
         <Navbar type=""/>
         <div className="container mx-auto py-6">
           <div className='flex'>
               <div className='w-1/4'>
                  <Search state={state} setState={setState} userInfo={userInfo} setUserInfo={setUserInfo}/>
               </div>
               <div className='w-3/4'>
                <div className="flex-grow flex flex-wrap px-4 ">
                  <div className="pb-4 w-full">
                    <div className="flex justify-between w-full">
                       <div className="flex items-end">
                          <div className='bg-gray-500 rounded-lg text-white p-1 mr-2'>Hotel</div>
                          <div className="text-2xl font-bold">SANA Metropolitan Hotel</div>
                          <div className="flex text-yellow-400 ml-2"><BsStarFill className='mr-0.5'/><BsStarFill className='mr-0.5'/><BsStarFill className='mr-0.5'/><BsStarFill className='mr-0.5'/><BsStarFill className='mr-0.5'/></div>
                          <div className="ml-2 bg-yellow-400 p-1 rounded text-gray-100 flex justify-center items-center">
                            <BsFillHandThumbsUpFill className=''/>
                          </div>
                       </div>
                       <div className="flex justify-end items-center">
                          <div className='text-blue-500 mr-6 text-xl font-semibold cursor-pointer'><BsSuitHeart/></div>
                          <div className='text-blue-500 mr-6 text-xl font-semibold cursor-pointer'><BsShare/></div>
                          <button className="text-lg bg-blue-500 text-white px-2 rounded-lg py-0.5 flex items-center">Reserve</button>
                       </div>
                    </div>
                    <div className="flex pt-2">
                       <MdLocationOn className="text-blue-500 text-2xl cursor-pointer"/>
                       <div className="ml-2">Rua Soeiro Pereira Gomes, Parcela 2, Avenidas Novas, 1600-198 Lisbon, Portugal –</div>
                    </div>
                    <div className="flex justify-between  pt-2">
                      <button className='text-blue-500 font-semibold'>Good location – show map</button>
                      <button className='text-blue-500 font-semibold flex items-center'><HiBadgeCheck className='text-xl'/> <span>We Price Match</span></button>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <div className="w-1/3">
                    <div className='w-full rounded-lg overflow-hidden h-48 cursor-pointer'>
                          <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" className='object-cover rounded-lg w-full h-full p-1' alt="" />
                      </div>
                      <div className='w-full rounded-lg overflow-hidden h-48 cursor-pointer'>
                          <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" className='object-cover rounded-lg w-full h-full p-1' alt="" />
                      </div>
                    </div>
                    <div className="w-2/3">
                    <div className='w-full rounded-lg overflow-hidden h-96 cursor-pointer'>
                          <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" className='object-cover rounded-lg w-full h-full p-1' alt="" />
                      </div>
                    </div>
                    
                  </div>
                
                </div>
                <div className="flex justify-between px-4">
                  <div className='w-40 rounded-lg overflow-hidden h-32 cursor-pointer'>
                      <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" className='object-cover rounded-lg w-full h-full p-1' alt="" />
                  </div>
                  <div className='w-40 rounded-lg overflow-hidden h-32 cursor-pointer'>
                      <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" className='object-cover rounded-lg w-full h-full p-1' alt="" />
                  </div>
                  <div className='w-40 rounded-lg overflow-hidden h-32 cursor-pointer'>
                      <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" className='object-cover rounded-lg w-full h-full p-1' alt="" />
                  </div>
                  <div className='w-40 rounded-lg overflow-hidden h-32 cursor-pointer'>
                      <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" className='object-cover rounded-lg w-full h-full p-1' alt="" />
                  </div>
                  <div className='w-40 rounded-lg overflow-hidden h-32 cursor-pointer'>
                      <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" className='object-cover rounded-lg w-full h-full p-1' alt="" />
                  </div>
                  <div className='w-40 rounded-lg overflow-hidden h-32  cursor-pointer'>
                      <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" className='object-cover rounded-lg w-full h-full p-1' alt="" />
                  </div>
                </div>
               
               <div className='flex justify-center'>
                <div className="flex justify-between p-4 w-5/6 text-center">
                  <div className=' '>
                    <div className="flex justify-center">
                     <MdLocationCity className='text-4xl text-gray-600'/>
                    </div>
                    <div className='text-gray-600 mt-2'>City view</div>
                  </div>
                  <div className=' '>
                    <div className="flex justify-center">
                     <BsWifi className='text-3xl text-gray-600'/>
                    </div>
                    <div className='text-gray-600 mt-2'>Free WiFi</div>
                  </div>
                  <div className=' '>
                    <div className="flex justify-center">
                     <MdBathtub className='text-3xl text-gray-600'/>
                    </div>
                    <div className='text-gray-600 mt-2'>Bathtub</div>
                  </div>
                  <div className=' '>
                    <div className="flex justify-center">
                     <BsSnow3 className='text-3xl text-gray-600'/>
                    </div>
                    <div className='text-gray-600 mt-2'>Air conditioning</div>
                  </div>
                  <div className=' '>
                    <div className="flex justify-center">
                     <Ri24HoursLine className='text-3xl text-gray-600'/>
                    </div>
                    <div className='text-gray-600 mt-2'>24-hour front desk</div>
                  </div>
                </div>
                </div>
               </div>
           </div>

           <div className="flex">
            <div className="w-3/4">
              <div className="w-full">
                <span className='leading-8 pr-6 text-justify'>The 4-star SANA Metropolitan Hotel is located near Praça de Espanha and only 5 minutes’ drive from Marquês de Pombal Square. It features rooms with seating areas and flat-screen TVs.

                In-room amenities include satellite TV and a modern bathroom. Some have a separate sitting area.

                A 24-hour front desk and a business center are offered at SANA Metropolitan. Laundry and dry cleaning services are also provided.

                The hotel’s Astrolábio Restaurant offers a selection of Portuguese and international cuisine, served both buffet style and menus. The Wall Street Bar has a relaxing environment where guests can enjoy a drink and live piano music.

                The historic center of the city is just 5 minutes away by car. A car rental service is available at the property.

                SANA Metropolitan Hotel offers easy access to Lisbon’s main business district. The hotel is a short walk from Cidade Universitaria Metro Station.
                </span>
                <div className='text-xl font-bold pt-2'>SANA Metropolitan Hotel has been welcoming Booking.com guests since May 4, 2001</div>
                <div className=''>Hotel chain/brand: SANA Hotels</div>
                <div className='mt-4 font-bold text-lg'>Most popular facilities</div>
                <div className="flex flex-wrap w-3/4">
                  <div className="flex items-center mr-6 mt-4"><IoLogoNoSmoking className='text-green-600 text-2xl mr-0.5'/><span className='text-sm text-gray-900'>Non-smoking rooms</span></div>
                  <div className="flex items-center mr-6 mt-4"><MdAccessibleForward className='text-green-600 text-2xl mr-0.5'/><span className='text-sm text-gray-900'>Facilities for disabled guests</span></div>
                  <div className="flex items-center mr-6 mt-4"><MdFitnessCenter className='text-green-600 text-2xl mr-0.5'/><span className='text-sm text-gray-900'> Fitness center</span></div>
                  <div className="flex items-center mr-6 mt-4"><MdRoomService className='text-green-600 text-2xl mr-0.5'/><span className='text-sm text-gray-900'>Room service</span></div>
                  <div className="flex items-center mr-6 mt-4"><FaParking className='text-green-600 text-2xl mr-0.5'/><span className='text-sm text-gray-900'>Private Parking</span></div>
                  <div className="flex items-center mr-6 mt-4"><BsWifi className='text-green-600 text-2xl mr-0.5'/><span className='text-sm text-gray-900'>WiFi in all areas</span></div>
                  <div className="flex items-center mr-6 mt-4"><BsCupStraw className='text-green-600 text-2xl mr-0.5'/><span className='text-sm text-gray-900'>Bar</span></div>
                  <div className="flex items-center mr-6 mt-4"><GiCoffeeCup className='text-green-600 text-2xl mr-0.5'/><span className='text-sm text-gray-900'> Very Good Breakfast</span></div>
                 
                </div>
              </div>
            </div>
            <div className="w-1/4 bg-blue-200 rounded p-4">
              <div className="text-xl font-bold py-2">Property Highlights</div>
              <div className="text-lg font-semibold py-2">Breakfast Info</div>
              <div className="py-2 text-sm">Buffet</div>
              <div className="text-lg font-semibold py-2">Rooms with:</div>
              <div className="text-lg py-2 flex items-center"><MdLocationCity className="text-xl mr-1"/><span className='text-sm'>City view</span></div>
              <div className="text-lg font-smibold py-2 flex items-center"><FaParking className='text-xl mr-1'/><span className='text-sm'>	Private parking at the hotel</span></div>
              <div className="text-lg font-semibold py-2">Loyal Customers</div>
              <div className="flex items-center">
                 <div className='text-3xl mr-1'><HiBadgeCheck/></div>
                 <div className='text-sm'>There are more repeat guests here than most other properties.</div>
              </div>
              <button className="text-lg bg-blue-500 text-white px-2 rounded-lg py-1.5 mt-4 flex items-center w-full">Reserve</button>
            </div>
           </div>
         </div>
    </div>
  )
}
