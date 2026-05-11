import React from 'react'
import { IMAGES } from '../../const/images'

export default function FooterComponent() {
  return (
    <footer className='flex px-4 py-2 items-center  bg-black h-[50px]'>
        <div className='flex items-baseline'>
            <div className='flex flex-row gap-2'>
                <img src={IMAGES.logo} width={24} height={12}/> 
                <span className='text-white'>David Triminio</span>
            </div>
        </div>
    </footer>
  )
}
