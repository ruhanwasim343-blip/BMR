import React from 'react'

export default function Hero3() {
    return (
        <>
            <div className='bg-[#0F1C33]'>
                <div className='lg:max-w-7xl px-6 py-12  mx-auto'>
                    <div className='text-center'>
                        <h1 className='text-3xl text-white'>WHY CHOOSE BMR SOLUTIONS</h1>
                        <p className='text-[12px] text-white/75 mt-2 mb-6'>Trusted by organizations to navigate the complexities of Al transformation</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

                        {/* Card 1 */}
                        <div className='flex flex-col justify-center items-center text-center border  border-[#E4E4E740]/80 rounded-lg p-6 space-y-3'>
                            <img className="w-8 h-8" src="/medal.svg" alt="" />
                            <h1 className='text-sm font-semibold text-white'>Proven Expertise</h1>
                            <p className='text-xs text-white'>
                                Decades of combined experience in AI
                                governance and strategic transformation.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className='flex flex-col justify-center items-center text-center border border-[#E4E4E740]/80 rounded-lg p-6 space-y-3'>
                            <img className="w-8 h-8" src="/peopleicon.svg" alt="" />
                            <h1 className='text-smfont-semibold text-white'>Tailored Approach</h1>
                            <p className='text-xs text-white'>
                                Custom solutions designed for your
                                organization's unique needs and goals.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className='flex flex-col justify-center items-center text-center border border-[#E4E4E740]/80 rounded-lg p-6 space-y-3'>
                            <img className="w-8 h-8" src="/verified.svg" alt="" />
                            <h1 className='text-sm font-semibold text-white'>Results-Driven</h1>
                            <p className='text-xs text-white'>
                                Measurable outcomes that drive real
                                business value and competitive
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className='flex flex-col justify-center items-center text-center border border-[#E4E4E740]/80 rounded-lg p-6 space-y-3'>
                            <img className="w-8 h-8" src="/Support.svg" alt="" />
                            <h1 className='text-sm font-semibold text-white'>End-to-End Support</h1>
                            <p className='text-xs text-white'>
                                From strategy to implementation, we're
                                with you every step of the way.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
