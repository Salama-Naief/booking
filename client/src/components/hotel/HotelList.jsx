import React from 'react'
import { Link } from 'react-router-dom';
export default function HotelList({days,userInfo}) {
  return (
    <div className='rounded border h-44 md:h-56 w-full my-4 py-2 md:p-4'>
       <div className="flex h-full">
           <div className="w-48 h-full cursor-pointer overflow-hidden rounded-lg">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLEOnTaOdU4i9DWQJwOjKHnKF-7guEsND3Kg&usqp=CAU" className='object-cover h-full w-full' alt="" />
           </div>
          <div className="flex justify-between flex-grow">
            <div className='pl-4'>
                <Link to="/singlehotel"><div className='capitalize font-semibold  md:font-bold md:text-xl text-blue-500 cursor-pointer'>Kaoud Sporting Hotel</div></Link>
                  <div className="md:hidden px-2 my-1 flex justify-between">
                    <div className="">Excellent</div>
                    <div className='p-0.5 text-sm text-white rounded-tl-lg rounded-br-lg bg-blue-500'>9.5</div>
                </div>
                <div className='text-gray-500 py-1 text-sm md:text-normal'>2.7 km from center</div>
                <div className='text-gray-500 text-sm md:text-normal'>100m from beach</div>
                <div className='text-gray-800 md:font-bold py-1 text-sm md:text-normal'>Budget Double Room with Back View</div>
                <div className='text-green-600 hidden md:block'>Free collection</div>
                <div className='text-red-600 py-1 hidden md:block'>Only 1 room left at this price on our site</div>
            </div>
            <div className='text-right hidden md:block'>
                <div className="flex justify-between">
                    <div className="font-semibold">Excellent</div>
                    <div className='p-1 text-white font-semibold rounded-tl-lg rounded-br-lg bg-blue-500 ml-8'>9.5</div>
                </div>
                <div className='pt-8 text-gray-700'>{`${days}days ${userInfo.adults}adults ${userInfo.children}children`}</div>
                <div className="font-semibold text-2xl text-gray-700"> $120</div>
                <div className="text-sm text-gray-700 mb-6">+US$36 taxes and charges</div>
                
                <Link to="/singlehotel" ><div className="px-6 font-semibold text-white py-2 mt-4 bg-blue-600  rounded">See availabity</div></Link>
            </div>
          </div>
       </div>
    </div>
  )
}
