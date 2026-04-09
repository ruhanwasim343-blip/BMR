import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='grid md:grid-cols-12 gird-cols-1 bg-[#15243D] border-none max-w-7xl mx-auto px-7 py-10 gap-10'>
                <div className="col-span-6">
                    <div>
                        <img src="/public/BMR..svg" alt="" />
                        <p className='text-white/70 text-xs md:text-sm mt-7'>Strategic advisory firm focused on Responsible Al governance, delivery transformation, and executive readiness.</p>
                        <div className="flex gap-3 mt-9 hidden md:flex">
                            <img src="/footerinsta.svg" alt="Instagram" />
                            <img src="/footerlinkedin.svg" alt="LinkedIn" />
                        </div>
                    </div>
                </div>
                <div className="col-span-6 flex gap-22 md:gap-32">
                    <div className='space-y-2'>
                        <h1 className='text-white text-sm font-semibold'>Quick Links</h1>
                        <p className='text-[12px] md:text-sm text-white/70'>About Us</p>
                        <p className='text-[12px] md:text-sm text-white/70'>Frameworks</p>
                        <p className='text-[12px] md:text-sm text-white/70'>Services</p>
                        <p className='text-[12px] md:text-sm text-white/70'>Insights</p>
                    </div>

                    <div className='space-y-2'>
                        <h1 className='text-white text-sm font-semibold'>Contact</h1>
                        <p className='text-[12px] md:text-sm text-white/70'>info@yoursolutions.com</p>
                        <p className='text-[12px] md:text-sm text-white/70'>Get in Touch</p>
                        <div className="flex gap-3 mt-9 md:hidden">
                            <img src="/footerinsta.svg" alt="Instagram" />
                            <img src="/footerlinkedin.svg" alt="LinkedIn" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="bg-[#15243D]  pb-20 hidden md:block">
                <hr className="w-auto border-t border-white/70 mx-7" />
            </div>

        </>
    )
}
