import React from 'react'
import {useTranslation} from "react-i18next";
export default function FooterEmail() {

  const {t} =useTranslation("footer");
  return (
    <div className='w-full bg-slate-800 py-12 flex justify-center text-white rounded-tl-lg rounded-tr-lg'>
          <div className='flex flex-col justify-center text-center'>
              <div className='capitalize text-xl md:text-4xl font-semibold pb-2'>{t("title")}</div>
              <div className='text-sm md:text-normal'>{t("subtitle")}</div>
              <form action="" className='text-center p-4'>
                  <div className="flex pb-1">
                    <input type="text" alt='' className='md:py-2 md:px-4 px-2 py-1 h-8 md:h-12 md:w-96 w-60 mx-2 md:text-xl outline-none rounded-lg text-gray-500' placeholder={t("email")} />
                    <button className='bg-blue-800 md:font-semibold md:px-6 py-1 px-3 md:py-2 md:text-lg rounded-lg'>{t("submit")}</button>
                  </div>
                  <div className='flex items-center'>
                    <input type="checkbox"  alt=''/>
                    <div className='md:px-2 px-0.5 py-2 text-sm md:text-normal'>{t("sendtome")}</div>
                  </div>
              </form>
          </div>
    </div>
  )
}
