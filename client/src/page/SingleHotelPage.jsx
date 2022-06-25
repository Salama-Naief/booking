import { format } from 'date-fns'
import React, { useState } from 'react'
import { DateRange } from 'react-date-range';

import Search from '../components/Search';
import Navbar from "../components/navbar/Navbar";
import {BsShare ,BsSuitHeart,BsStarFill,BsFillHandThumbsUpFill,BsWifi,BsSnow3,BsCupStraw,BsFillPersonFill} from "react-icons/bs"
import {MdLocationOn,MdLocationCity,MdBathtub,MdAccessibleForward,MdFitnessCenter ,MdRoomService,MdBed,MdOutlineLock,MdOutlineBrightness7,MdFamilyRestroom} from "react-icons/md"
import {HiBadgeCheck} from "react-icons/hi";
import {Ri24HoursLine} from "react-icons/ri";
import {IoLogoNoSmoking,IoMdArrowDropright} from "react-icons/io";
import {IoBedOutline,IoWalletOutline,IoChatbubbleOutline} from "react-icons/io5";
import {FaParking} from "react-icons/fa"
import {GiCoffeeCup} from "react-icons/gi"
import {useTranslation} from "react-i18next";
import Progressbar from "../components/Progressbar";
export default function SingleHotelPage() {

  const {t} =useTranslation("hotel");
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
                          <div className='bg-gray-500 rounded-lg text-white p-1 mx-2'>{t("type")}</div>
                          <div className="text-2xl font-bold">SANA Metropolitan Hotel</div>
                          <div className="flex text-yellow-400 ml-2"><BsStarFill className='mr-0.5'/><BsStarFill className='mr-0.5'/><BsStarFill className='mr-0.5'/><BsStarFill className='mr-0.5'/><BsStarFill className='mr-0.5'/></div>
                          <div className="ml-2 bg-yellow-400 p-1 rounded text-gray-100 flex justify-center items-center">
                            <BsFillHandThumbsUpFill className=''/>
                          </div>
                       </div>
                       <div className="flex justify-end items-center">
                          <div className='text-blue-500  text-xl font-semibold cursor-pointer'><BsSuitHeart/></div>
                          <div className='text-blue-500 mx-6 text-xl font-semibold cursor-pointer'><BsShare/></div>
                          <button className="text-lg bg-blue-500 text-white px-2 rounded-lg py-0.5 flex items-center">{t("reserve")}</button>
                       </div>
                    </div>
                    <div className="flex pt-2">
                       <MdLocationOn className="text-blue-500 text-2xl cursor-pointer"/>
                       <div className="ml-2">Rua Soeiro Pereira Gomes, Parcela 2, Avenidas Novas, 1600-198 Lisbon, Portugal –</div>
                    </div>
                    <div className="flex justify-between  pt-2">
                      <button className='text-blue-500 font-semibold'>{t("googlemap")}</button>
                      <button className='text-blue-500 font-semibold flex items-center'><HiBadgeCheck className='text-xl'/> <span>{t("pricematch")}</span></button>
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
                    <div className='text-gray-600 mt-2'>{t("cityview")}</div>
                  </div>
                  <div className=' '>
                    <div className="flex justify-center">
                     <BsWifi className='text-3xl text-gray-600'/>
                    </div>
                    <div className='text-gray-600 mt-2'>{t("freewifi")}</div>
                  </div>
                  <div className=' '>
                    <div className="flex justify-center">
                     <MdBathtub className='text-3xl text-gray-600'/>
                    </div>
                    <div className='text-gray-600 mt-2'>{t("bathtub")}</div>
                  </div>
                  <div className=' '>
                    <div className="flex justify-center">
                     <BsSnow3 className='text-3xl text-gray-600'/>
                    </div>
                    <div className='text-gray-600 mt-2'>{t("aircondtionning")}</div>
                  </div>
                  <div className=' '>
                    <div className="flex justify-center">
                     <Ri24HoursLine className='text-3xl text-gray-600'/>
                    </div>
                    <div className='text-gray-600 mt-2'>{t("frontdesk")}</div>
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
                <div className='mt-4 font-bold text-lg'>{t("popularfacilities")}</div>
                <div className="flex flex-wrap w-3/4">
                  <div className="flex items-center mr-6 mt-4"><IoLogoNoSmoking className='text-green-600 text-2xl mr-0.5'/><span className='text-sm text-gray-900'>{t("nosmoking")}</span></div>
                  <div className="flex items-center mr-6 mt-4"><MdAccessibleForward className='text-green-600 text-2xl mr-0.5'/><span className='text-sm text-gray-900'>{t("disabledguests")}</span></div>
                  <div className="flex items-center mr-6 mt-4"><MdFitnessCenter className='text-green-600 text-2xl mr-0.5'/><span className='text-sm text-gray-900'>{t("fitnesscenter")}</span></div>
                  <div className="flex items-center mr-6 mt-4"><MdRoomService className='text-green-600 text-2xl mr-0.5'/><span className='text-sm text-gray-900'>{t("roomservice")}</span></div>
                  <div className="flex items-center mr-6 mt-4"><FaParking className='text-green-600 text-2xl mr-0.5'/><span className='text-sm text-gray-900'>{t("privateParking")}</span></div>
                  <div className="flex items-center mr-6 mt-4"><BsWifi className='text-green-600 text-2xl mr-0.5'/><span className='text-sm text-gray-900'>{t("wiFiareas")}</span></div>
                  <div className="flex items-center mr-6 mt-4"><BsCupStraw className='text-green-600 text-2xl mr-0.5'/><span className='text-sm text-gray-900'>{t("bar")}</span></div>
                  <div className="flex items-center mr-6 mt-4"><GiCoffeeCup className='text-green-600 text-2xl mr-0.5'/><span className='text-sm text-gray-900'> {t("breakfast")}</span></div>
                 
                </div>
              </div>
            </div>
            <div className="w-1/4 bg-blue-100 rounded p-4">
              <div className="text-xl font-bold py-2">{t("propertyHighlights")}</div>
              <div className="text-lg font-semibold py-2">{t("breakfastInfo")}</div>
              <div className="py-2 text-sm">{t("buffet")}</div>
              <div className="text-lg font-semibold py-2">{t("roomswith")}</div>
              <div className="text-lg py-2 flex items-center"><MdLocationCity className="text-3xl mr-1"/><span className='text-sm'>{t("cityview")}</span></div>
              <div className="text-lg font-smibold py-2 flex items-center"><FaParking className='text-3xl mr-1'/><span className='text-sm'>	{t("privateparkinghotel")}</span></div>
              <div className="text-lg font-semibold py-2">{t("loyalcustomers")}</div>
              <div className="flex items-center">
                 <div className='text-3xl mr-1'><HiBadgeCheck/></div>
                 <div className='text-sm'>{t("properties")}</div>
              </div>
              <button className="text-lg bg-blue-500 font-bold justify-center text-white px-2 rounded-lg py-1.5 mt-4 flex items-center w-full">{t("reserve")}</button>
            </div>
           </div>

           <div className='w-full mt-4'>
            <table className='w-full'>
              <thead>
            <th className='bg-blue-400 flex text-white w-full'>
                <td className='w-1/4 text-left border-b-2 border-blue-500 p-4'>{t("sleeps")}</td>
                <td className='w-2/4 text-left border-b-2 border-l border-r border-blue-500 p-4'>{t("roomtypes")}</td>
                <td className='w-1/4 text-left border-b-2 border-blue-500'></td>
              </th>
              </thead>
              <tbody className=''>
                <th className="flex">
                <td className='px-4 py-2 w-1/4  border-b-2 flex items-center border-blue-500'>
                  <div className="flex items-center justify-center">
                  <span className='flex items-center mr-2'><BsFillPersonFill/> <span className="font-normal">x4</span></span> <span className='font-normal'>+</span><BsFillPersonFill className='text-lg'/><BsFillPersonFill className='text-lg'/><BsFillPersonFill className='text-lg'/>
                 </div>  
                </td>
                <td className='px-4 py-2  border-b-2 border-r border-l border-blue-500 w-2/4'>
                  <div className=" flex items-center"><IoMdArrowDropright className="text-orange-500 text-xl"/><span className='text-blue-500 font-semibold'>{t("deluxeQueen")}</span></div>
                  <div className='flex items-center'><span className=" text-sm font-normal text-gray-500 mx-2">{t("queenbed")}</span><IoBedOutline/></div>
                </td>
                <td className='px-4 py-2 border-b-2 border-blue-500 w-1/4'><button className="bg-blue-500 py-2 text-white flex justify-center font-semibold w-full rounded">{t("showprice")}</button></td>
              </th>
              <th className="flex">
                <td className='px-4 py-2 w-1/4  border-b-2 flex items-center border-blue-500'>
                  <div className="flex items-center justify-center">
                  <span className='flex items-center mr-2'><BsFillPersonFill/> <span className="font-normal">x4</span></span> <span className='font-normal'>+</span><BsFillPersonFill className='text-lg'/><BsFillPersonFill className='text-lg'/>
                 </div>  
                </td>
                <td className='px-4 py-2  border-b-2 border-r border-l border-blue-500 w-2/4'>
                  <div className=" flex items-center"><IoMdArrowDropright className="text-orange-500 text-xl"/><span className='text-blue-500 font-semibold'>{t("kingroom")}</span></div>
                  <div className='flex items-center'><span className=" text-sm font-normal text-gray-500 mx-2">{t("queenbed")}</span><IoBedOutline/> <span className=" text-sm font-normal text-gray-500 mx-2">{t("softbed")}</span><MdBed/></div>
                </td>
                <td className='px-4 py-2 border-b-2 border-blue-500 w-1/4'><button className="bg-blue-500 py-2 text-white flex justify-center font-semibold w-full rounded">{t("showprice")}</button></td>
              </th>
              <th className="flex">
                <td className='px-4 py-2 w-1/4  border-b-2 flex items-center border-blue-500'>
                  <div className="flex items-center justify-center">
                  <span className='flex items-center mr-2'><BsFillPersonFill/> <span className="font-normal">x4</span></span> <span className='font-normal'>+</span><BsFillPersonFill className='text-lg'/><BsFillPersonFill className='text-lg'/>
                 </div>  
                </td>
                <td className='px-4 py-2  border-b-2 border-r border-l border-blue-500 w-2/4'>
                  <div className=" flex items-center"><IoMdArrowDropright className="text-orange-500 text-xl"/><span className='text-blue-500 font-semibold'>{t("executivekingroom")}</span></div>
                  <div className='flex items-center'><span className=" text-sm font-normal text-gray-500 mx-2">{t("queenbed")}</span><IoBedOutline/> <span className=" text-sm font-normal text-gray-500 mx-2">{t("softbed")}</span><MdBed/></div>
                </td>
                <td className='px-4 py-2 border-b-2 border-blue-500 w-1/4'><button className="bg-blue-500 py-2 text-white flex justify-center font-semibold w-full rounded">{t("showprice")}</button></td>
              </th>
              </tbody>
            </table>
           </div>

           <div className="my-8">
            <div className="text-2xl font-bold">{t("reasons")}</div>
            <div className="py-4 flex flex-wrap">
              <div className="w-1/3 flex items-center text-blue-600 mt-4">
                 <IoWalletOutline className='text-4xl'/>
                 <div className='text-gray-800 mx-2 font-semibold'>{t("pricebeet")}</div>
              </div>
              <div className="w-1/3 flex items-center text-blue-600 mt-4">
                 <MdOutlineLock className='text-4xl'/>
                 <div className='text-gray-800 mx-2 font-semibold'>{t("bookingsafe")}</div>
              </div>
              <div className="w-1/3 flex items-center text-blue-600 mt-4">
                 <MdOutlineBrightness7 className='text-4xl'/>
                 <div className='text-gray-800 mx-2 font-semibold'>{t("manageonline")}</div>
              </div>
              <div className="w-1/3 flex items-center text-blue-600 mt-4">
                 <IoChatbubbleOutline className='text-4xl'/>
                 <div className='text-gray-800 mx-2 font-semibold'>{t("staffspeaksenglish")}</div>
              </div>
              <div className="w-1/3 flex items-center text-blue-600 mt-4">
                 <MdFamilyRestroom className='text-4xl'/>
                 <div className='text-gray-800 mx-2 font-semibold'>{t("facilitiesfamily")}</div>
              </div>
            </div>
           </div>
           
           <div className=''>
            <div className="text-2xl font-semibold my-6">{t("title")}</div>
            <div className="flex items-center">
              <div className='p-1 text-white font-semibold rounded-tl-lg rounded-br-lg bg-blue-500 mx-4'>9.5</div>
              <div className='px-2 font-semibold'>{t("rating")}</div> 
              <div className='text-gray-600'>{t("review")}</div> 
            </div>
            <div className="font-semibold mt-4">{t("subtitle")}</div>
            <div className="my-6 flex flex-wrap">
                <Progressbar name={t("cleanliness")} value={8.8}/>
                <Progressbar name={t("location")} value={7.9}/>
                <Progressbar name={t("staff")} value={9.2}/>
                <Progressbar name={t("comfort")} value={8.8}/>
                <Progressbar name={t("valueformoney")} value={8.1}/>
                <Progressbar name={t("facilities")} value={8.6}/>
                <Progressbar name={t("freeWiFi")} value={8.6}/>
            </div>
           </div>
         </div>
    </div>
  )
}
