import React from 'react'

export default function Footer2() {
  return (
    <>
      <div className='bg-[#15243D]'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-10  max-w-7xl px-6 py-12 mx-auto'>
          <div>
            <h1 className='text-md text-white font-semibold '>BMR Solutions</h1>
            <p className='text-[12px] text-[#99A1AF]'>Strategic Advisory for Responsible AI</p>
          </div>
          <div className='space-y-2'>
            <h1 className='text-md text-white font-semibold'>Navigation</h1>
            <p className='text-[12px] text-[#99A1AF]'>Services</p>
            <p className='text-[12px] text-[#99A1AF]'>Frameworks</p>
            <p className='text-[12px] text-[#99A1AF]'>Insights</p>
            <p className='text-[12px] text-[#99A1AF]'>Contact</p>
            <p className='text-[12px] text-[#99A1AF]'>Promise gap</p>
            <p className='text-[12px] text-[#99A1AF]'>Promise Gap Vedio</p>
            <p className='text-[12px] text-[#99A1AF]'>Field Guide</p>
            <p className='text-[12px] text-[#99A1AF]' >Thank You</p>
          </div>

          <div className='space-y-2'>
            <h1 className='text-md text-white font-semibold'>Legal</h1>
            <p className='text-[12px] text-[#99A1AF]'>Privacy Policy</p>
            <p className='text-[12px] text-[#99A1AF]'>Terms of Service</p>
          </div>
        </div>
      </div>
    </>
  )
}
