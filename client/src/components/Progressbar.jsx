import React from 'react'
import {useTranslation} from "react-i18next"

export default function Progressbar({name,value}) {
  const { i18n } = useTranslation("topbar");
  return (
    <div className='px-6 w-full md:w-1/3 mt-4'>
        <div className="px-2 text-sm text-gray-800 capitalize">{name}</div>
        <div className="flex items-center">
           <div className="relative flex-grow bg-gray-300 h-2.5  rounded-lg overflow-hidden">
             <div className={`absolute top-0  bg-blue-800 h-full ${i18n.language==="ar"?"right-0":"left-0"}`} style={{width:`${value*10}%`}}></div>
           </div>
             <div className="flex-grow-0 px-2 text-gray-800">{value}</div>
        </div>
    </div>
  )
}
