import React from 'react'

export default function Hero4() {
    return (
        <>
            <div className='bg-[#15243D]'>
                <div className='lg:max-w-7xl px-6 py-6 mx-auto'>
                    <div className='flex flex-col items-center justify-center '>
                        <h1 className='text-3xl text-white'>Our Frameworks</h1>
                        <p className='text-[12px] text-white/75 mt-2 mb-6'>Proven methodologies to guide your Al transformation journey</p>
                        <h1 className='text-xl text-white'>The Journey</h1>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-6'>
                        <div className="relative border border-[#F5F5F5]/80 rounded-xl p-6 text-white max-w-sm mx-auto">

                            {/* Floating Image */}
                            <img
                                src="/Arrowbutton.svg"
                                alt=""
                                className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8"
                            />

                            {/* Content */}
                            <p className='text-[#00A5A8] text-[9px] mb-2'>FOUNDATION</p>

                            <h1 className='text-base sm:text-lg font-semibold mb-2'>
                                Trust
                            </h1>

                            <p className='text-[10px] sm:text-xs text-white/80 leading-relaxed'>
                                Establish transparency, accountability, and ethical standards
                                for responsible AI implementation.
                            </p>

                        </div>

                        <div className="relative border border-[#F5F5F5]/80 rounded-xl p-6 text-white max-w-sm mx-auto">

                            {/* Floating Image */}
                            <img
                                src="/Arrowbutton.svg"
                                alt=""
                                className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8"
                            />

                            {/* Content */}
                            <p className='text-[#00A5A8] text-[9px] mb-2'>IMPLEMENTATION</p>

                            <h1 className='text-base sm:text-lg font-semibold mb-2'>
                                Govern
                            </h1>

                            <p className='text-[10px] sm:text-xs text-white/80 leading-relaxed'>
                                Deploy robust governance structures
                                policies, and compliance mechanisms
                                across your organization
                            </p>

                        </div>


                        <div className="relative border border-[#F5F5F5]/80 rounded-xl p-6 text-white max-w-sm mx-auto">

                            {/* Floating Image */}
                            <img
                                src="/Arrowbutton.svg"
                                alt=""
                                className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8"
                            />

                            {/* Content */}
                            <p className='text-[#00A5A8] text-[9px] mb-2'>GROWTH</p>

                            <h1 className='text-base sm:text-lg font-semibold mb-2'>
                                Evolve
                            </h1>

                            <p className='text-[10px] sm:text-xs text-white/80 leading-relaxed'>
                                Continuously adept and scale Al
                                capabilities while maintaining
                                responsible practices and human
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
