import React from 'react'

export default function FooterEmail() {
  return (
    <div className='w-full bg-slate-800 py-12 flex justify-center text-white rounded-tl-lg rounded-tr-lg'>
          <div className='flex flex-col justify-center text-center'>
              <div className='capitalize text-4xl font-semibold pb-2'>Save time, save money!</div>
              <div className=''>Sign up and we'll send the best deals to you</div>
              <form action="" className='text-center p-4'>
                  <div className="flex pb-1">
                    <input type="text" alt='' className='py-2 px-4 h-12 w-96 mr-2 text-xl outline-none rounded-lg text-gray-500' placeholder='Your email' />
                    <button className='bg-blue-800 font-semibold px-6 py-2 text-lg rounded-lg'>Submit</button>
                  </div>
                  <div className='flex items-center'>
                    <input type="checkbox"  alt=''/>
                    <div className='pl-2'>Send me a link to get the FREE Booking.com app!</div>
                  </div>
              </form>
          </div>
    </div>
  )
}
