import React from 'react'

export default function Framework2() {
    return (
        <>
            <div className='bg-[#0F1C33] max-w-7xl px-6 py-6 mx-auto'>
                <h1 className='text-lg font-bold text-center text-white'>Core Methodologies</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6'>
                    <div className="relative bg-[#15243D] rounded-xl p-6 space-y-4 
                shadow-[ -8px_0_20px_rgba(255,255,255,0.15),_0_8px_20px_rgba(255,255,255,0.15) ]">

                        <h1 className='text-[#00A5A8] text-sm'>HAI</h1>

                        <h1 className='text-white text-sm font-bold'>
                            Human-AI Interaction
                        </h1>

                        <p className='text-[#99A1AF] text-[10px]'>
                            A comprehensive framework for designing collaborative systems that enhance
                            <span className='block'>
                                human decision-making while maintaining ethical boundaries and human agency.
                            </span>
                        </p>

                        <h1 className='text-[#00A5A8] text-[10px]'>KEY PRINCIPLES</h1>

                        <div className='space-y-2'>
                            <div className='flex gap-2 items-center'>
                                <img className="w-2 h-2" src="/small-green-dot.svg" alt="" />
                                <p className='text-[#D1D5DC] text-[10px]'>Human-centered design</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <img className="w-2 h-2" src="/small-green-dot.svg" alt="" />
                                <p className='text-[#D1D5DC] text-[10px]'>Augmentation over replacement</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <img className="w-2 h-2" src="/small-green-dot.svg" alt="" />
                                <p className='text-[#D1D5DC] text-[10px]'>Transparent decision pathways</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <img className="w-2 h-2" src="/small-green-dot.svg" alt="" />
                                <p className='text-[#D1D5DC] text-[10px]'>Ethical interaction patterns</p>
                            </div>
                        </div>

                    </div>

                    <div className="relative bg-[#15243D] rounded-xl p-6 space-y-4 
                shadow-[ -8px_0_20px_rgba(255,255,255,0.15),_0_8px_20px_rgba(255,255,255,0.15) ]">

                        <h1 className='text-[#00A5A8] text-sm'>AVS</h1>

                        <h1 className='text-white text-sm font-bold'>
                            Adoption Value System
                        </h1>

                        <p className='text-[#99A1AF] text-[10px]'>
                           A structured methodology for measuring and maximizing the organizational value
                            <span className='block'>
                                of AI implementations through systematic assessment and optimization.
                            </span>
                        </p>

                        <h1 className='text-[#00A5A8] text-[10px]'>KEY PRINCIPLES</h1>

                        <div className='space-y-2'>
                            <div className='flex gap-2 items-center'>
                                <img className="w-2 h-2" src="/small-green-dot.svg" alt="" />
                                <p className='text-[#D1D5DC] text-[10px]'>Value identification</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <img className="w-2 h-2" src="/small-green-dot.svg" alt="" />
                                <p className='text-[#D1D5DC] text-[10px]'>Impact measurement</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <img className="w-2 h-2" src="/small-green-dot.svg" alt="" />
                                <p className='text-[#D1D5DC] text-[10px]'>ROI tracking</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <img className="w-2 h-2" src="/small-green-dot.svg" alt="" />
                                <p className='text-[#D1D5DC] text-[10px]'>Continuous optimization</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
