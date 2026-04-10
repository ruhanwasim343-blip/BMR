import React from 'react'

export default function Hero5() {
    return (
        <>
           <div className='bg-gradient-to-b from-[#00A5A8] to-[#0B313E]'>
             <div className="max-w-7xl px-6 py-12 mx-auto text-center text-white">
                <div>
                    <h1 className='text-3xl text-white font-semibold'>OUR IMPACT</h1>
                    <p className='text-[12px] text-white/70'>Delivering measurable results across industries</p>

                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-10'>
                        <div>
                            <h1 className='text-[#14B8A2] font-bold text-md'>50 +</h1>
                            <p className='text-[10px] text-white'>Organizations Transformed.</p>
                        </div>

                         <div>
                            <h1 className='text-[#14B8A2] font-bold text-md'>15 +</h1>
                            <p className='text-[10px] text-white'>Years Experience</p>
                        </div>

                         <div>
                            <h1 className='text-[#14B8A2] font-bold text-md'>100 %</h1>
                            <p className='text-[10px] text-white'>Clients Satisfaction</p>
                        </div>

                         <div>
                            <h1 className='text-[#14B8A2] font-bold text-md'>10 +</h1>
                            <p className='text-[10px] text-white'>Industry Sectors</p>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </>
    )
}
