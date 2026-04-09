import React from 'react'

export default function Hero2() {
    return (
        <>
            <div className='bg-[#15243D]  border-t pb-8 border-gray-700'>
                <div className='bg-[#15243D] lg:max-w-7xl px-6 mx-auto'>
                    <div className='text-center mt-6'>
                        <h1 className='text-lg text-white'>WHAT WE OFFER</h1>
                        <p className='text-[8px] text-white/75'>Comprehensive solutions for Al governance and organizational transformation</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>

                        {/* Card 1 */}
                        <div className='border border-[#E4E4E740]/80 rounded-lg p-6 text-white space-y-2'>
                            <img className="w-8 h-8" src="/shield.svg" alt="" />
                            <h1 className='text-lg font-semibold'>AI Governance</h1>
                            <p className='text-sm text-white/80'>
                                Establish robust frameworks for responsible AI
                                implementation and compliance.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className='border border-[#E4E4E740]/80 rounded-lg p-6 text-white space-y-2'>
                            <img className="w-8 h-8" src="/Thunder.svg" alt="" />
                            <h1 className='text-lg font-semibold'>Delivery Transformation</h1>
                            <p className='text-sm text-white/80'>
                                Optimize processes and accelerate delivery
                                through strategic methodologies.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className='border border-[#E4E4E740]/80 rounded-lg p-6 text-white space-y-2'>
                            <img className="w-8 h-8" src="/Target.svg" alt="" />
                            <h1 className='text-lg font-semibold'>Executive Readiness</h1>
                            <p className='text-sm text-white/80'>
                                Prepare leadership teams for AI-driven
                                organizational change.
                            </p>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}
