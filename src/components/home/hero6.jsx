import React from 'react'

export default function Hero6() {
    return (
        <>
            <div className='bg-[#15243D]'>
                <div className=' max-w-7xl px-6 py-6 mx-auto'>
                    <div className='text-center'>
                        <h1 className='text-3xl text-white font-semibold'>OUR APPROACH</h1>
                        <p className='text-[12px] text-white/70'>A strategic methodology that ensures responsible and effective Al adoption</p>
                    </div>

                    <div className="mt-12 max-w-5xl mx-auto px-5 sm:px-6">

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">

                            {/* Item 1 */}
                            <div className="space-y-2">
                                <h1 className="text-lg text-[#14B8A2] font-bold">01</h1>
                                <h2 className="text-base text-white font-semibold">
                                    Assess & Understand
                                </h2>
                                <p className="text-xs text-white/70 leading-relaxed">
                                    We begin by thoroughly understanding your organization's current state,
                                    <span className="block">challenges, and AI readiness.</span>
                                </p>
                            </div>

                            {/* Item 2 */}
                            <div className="space-y-2">
                                <h1 className="text-lg text-[#14B8A2] font-bold">02</h1>
                                <h2 className="text-base text-white font-semibold">
                                    Design & Plan
                                </h2>
                                <p className="text-xs text-white/70 leading-relaxed">
                                    Develop customized frameworks and
                                    <span className="block">roadmaps aligned with your strategic objectives.</span>
                                </p>
                            </div>

                            {/* Item 3 */}
                            <div className="space-y-2">
                                <h1 className="text-lg text-[#14B8A2] font-bold">03</h1>
                                <h2 className="text-base text-white font-semibold">
                                    Implement & Scale
                                </h2>
                                <p className="text-xs text-white/70 leading-relaxed">
                                    Execute transformation initiatives with
                                    <span className="block">ongoing support and optimization.</span>
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
