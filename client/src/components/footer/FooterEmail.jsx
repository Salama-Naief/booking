import React from 'react'
import {useTranslation} from "react-i18next";
export default function FooterEmail() {

  const {t} =useTranslation("footer");
  return (
    <div className='w-full bg-slate-800 py-12 flex justify-center text-white rounded-tl-lg rounded-tr-lg'>
          <div className='flex flex-col justify-center text-center'>
              <div className='capitalize text-4xl font-semibold pb-2'>{t("title")}</div>
              <div className=''>{t("subtitle")}</div>
              <form action="" className='text-center p-4'>
                  <div className="flex pb-1">
                    <input type="text" alt='' className='py-2 px-4 h-12 w-96 mx-2 text-xl outline-none rounded-lg text-gray-500' placeholder={t("email")} />
                    <button className='bg-blue-800 font-semibold px-6 py-2 text-lg rounded-lg'>{t("submit")}</button>
                  </div>
                  <div className='flex items-center'>
                    <input type="checkbox"  alt=''/>
                    <div className='pl-2'>{t("sendtome")}</div>
                  </div>
              </form>
          </div>
    </div>
  )
}
