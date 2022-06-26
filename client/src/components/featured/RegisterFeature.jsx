

export default function RegisterFeauter(){
  
  return (
     <div className="p-2 md:p-4 border my-4 border-gray-300 ">
      
       <div className="md:px-4  w-full md:w-2/3 flex">
       <img src="https://cf.bstatic.com/static/img/genius-globe-with-badge_desktop/d807514761b3684aedebced9265c5548a063b7a0.png" className="w-20 h-32 md:h-auto  object-cover" alt=""/>
        <div className="md:p-6 px-6">
          <div className="text-lg md:text-3xl font-bold text-gray-800">Get instance discounts</div>
          <div className="text-gray-800 py-1 md:py-4 text-sm md:text-lg">just sign in in your booking.com account and look for the blue genis logo to save </div>
           <div className="flex px-3">
             <button className="text-blue-500 py-1 md:font-semibold px-2 border border-blue-500 md:text-lg">Sign in</button>
             <button className="text-blue-500 py-1 px-2 md:font-semibold mx-3 md:text-lg">Register</button>
           </div>
        </div>
       </div>
      
     </div>
    )
}