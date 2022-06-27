import React from 'react'

export default function Sidebar() {
  return (
    <div>
         <div className="border border-gray-300 p-4">
                    <div className="py-2 font-bold">Your booking details</div>
                    <div className="flex">
                        <div className='w-1/2 px-1'>
                            <div className="text-gray-600">Check-in</div>
                            <div className="font-semibold">Sun, Jun 26, 2022</div>
                            <div className="text-gray-500">From 3:00 PM</div>
                        </div>
                        <div className='w-1/2 px-1'>
                            <div className="text-gray-600">Check-out</div>
                            <div className="font-semibold">Sun, Jun 26, 2022</div>
                            <div className="text-gray-500">Until 3:00 PM</div>
                        </div>
                    </div>
                    <div className="my-2">Total length of stay:</div>
                    <div className="font-semibold">1 night</div>
                    <div className="py-2"><hr/></div>
                    <div className="font-semibold py-2">You selected:</div>
                    <div className="">Standard Double or Twin Room with City View</div>
                    <div className="font-semibold py-2 text-blue-600 cursor-pointer">Change your selection</div>
                </div>

                <div className="border border-gray-300 p-4 my-2">
                    <div className="py-2 font-bold">Your Genius Price Summary</div>
                    <div className="flex ">
                        <div className="w-2/3">Standard Double or Twin Room with City View</div>
                        <div className="w-1/3 px-2">EGP 2,084.32</div>
                    </div>
                    <div className="flex py-2">
                        <div className="w-2/3">6 % VAT</div>
                        <div className="w-1/3 px-2">EGP 125.06</div>
                    </div>
                    
                    <div className="bg-blue-100 my-2 p-2">
                        <div className='flex justify-between py-2'>
                            <div className="font-semibold">Price</div>
                            <div className="font-semibold">EGP 2,209.38 *</div>
                        </div>
                        <div className='flex justify-between py-2'>
                            <div className="">Property's Currency</div>
                            <div className="">€ 111.60</div>
                        </div>
                    </div>
                    <div className="text-gray-500 text-sm">* This price is converted to show you the approximate cost in EGP. You'll pay in €. The exchange rate might change before you pay.

                   Keep in mind that your card issuer may charge you a foreign transaction fee.</div>
                </div>

                <div className='border-gray-300 border p-4 my-2'>
                    <div className="font-bold py-2">How much will it cost to cancel?</div>
                    <div className="flex justify-between py-2">
                        <div>If you cancel, you'll pay</div>
                        <div>EGP 2,209 *</div>
                    </div>
                </div>

                <div className='border-gray-300 border p-4 my-2'>
                    <div className="font-bold py-2">The fine print</div>
                    <div className='py-2 text-sm text-gray-700'>Please note the following early check-in and late check-out surcharges:<br/>
                        - Check-in before 10:00 - 100% rate of the previous night;<br/>
                        - Check-in between 10:00 and 14:00 - 50% rate of the previous night;<br/>
                        - Check-out between 12:00 and 16:00 - 50% rate of the next night;<br/>
                        - Check-out after 16:00 - 100% rate of the next night.<br/>

                        The name on the credit card used for the booking should correspond to the guest staying at the property.

                        Outdoor parking is free and subject to availability. The traffic of motor vehicles in the historical center of Sintra will be conditioned. Please contact the property before arrival for assistance and preparation for your arrival at the hotel.

                        Dogs and cats are allowed, max. weight 25kg. Limited availability, please contact the hotel before booking. A charge of 25 € per stay will be applied (max. 2 pets per room). Guide dogs free of charge.

                        In response to the coronavirus (COVID-19), additional safety and sanitation measures are in effect at this property.

                        Food and beverage services at this property may be limited or unavailable due to the coronavirus (COVID-19).

                        Due to the coronavirus (COVID-19), this property is taking steps to protect the safety of guests and staff. Certain services and amenities may be reduced or unavailable as a result.<br/>

                        License number: 361
                </div>
                </div>
    </div>
  )
}
