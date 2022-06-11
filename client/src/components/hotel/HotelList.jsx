import React from 'react'
import { Link } from 'react-router-dom';
export default function HotelList({days,userInfo}) {
  return (
    <div className='rounded border h-56 w-full my-4 p-4'>
       <div className="flex h-full">
           <div className="w-72 h-full cursor-pointer overflow-hidden rounded-lg">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLEOnTaOdU4i9DWQJwOjKHnKF-7guEsND3Kg&usqp=CAU" className='object-cover h-full w-full' alt="" />
           </div>
          <div className="flex justify-between flex-grow">
            <div className='pl-4'>
                <div className='capitalize font-bold text-xl text-blue-500 cursor-pointer'>Kaoud Sporting Hotel</div>
                <div className='text-gray-700 py-1'>2.7 km from center</div>
                <div className='text-gray-700'>100m from beach</div>
                <div className='text-gray-700 font-bold py-1'>Budget Double Room with Back View</div>
                <div className='text-green-600'>Free collection</div>
                <div className='text-red-600 py-1'>Only 1 room left at this price on our site</div>
            </div>
            <div className='text-right'>
                <div className="flex justify-between">
                    <div className="font-semibold">Excellent</div>
                    <div className='p-1 text-white font-semibold rounded-tl-lg rounded-br-lg bg-blue-500 ml-8'>9.5</div>
                </div>
                <div className='pt-8 text-gray-700'>{`${days}days ${userInfo.adults}adults ${userInfo.children}children`}</div>
                <div className="font-semibold text-2xl text-gray-700"> $120</div>
                <div className="text-sm text-gray-700 mb-6">+US$36 taxes and charges</div>
                
                <Link to="/singlehotel" className="px-6 font-semibold text-white py-2 mt-4 bg-blue-600  rounded">See availabity</Link>
            </div>
          </div>
       </div>
    </div>
  )
}
