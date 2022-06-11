import { format } from 'date-fns'
import React, { useState } from 'react'
import { DateRange } from 'react-date-range';

import HotelList from '../components/hotel/HotelList';
import Search from '../components/Search';
import Navbar from "../components/navbar/Navbar";

export default function Hotel() {

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
      <>
       <Navbar type=""/>
    <div className='container m-auto flex py-8 '>
        <Search state={state} setState={setState} userInfo={userInfo} setUserInfo={setUserInfo}/>
        <div className='flex-grow px-2'>
            <HotelList days={format(state[0].endDate,"dd")-format(state[0].startDate,"dd")} userInfo={userInfo}/>
            <HotelList days={format(state[0].endDate,"dd")-format(state[0].startDate,"dd")} userInfo={userInfo}/>
            <HotelList days={format(state[0].endDate,"dd")-format(state[0].startDate,"dd")} userInfo={userInfo}/>
            <HotelList days={format(state[0].endDate,"dd")-format(state[0].startDate,"dd")} userInfo={userInfo}/>
            <HotelList days={format(state[0].endDate,"dd")-format(state[0].startDate,"dd")} userInfo={userInfo}/>
        </div>
    </div>
    </>
  )
}
