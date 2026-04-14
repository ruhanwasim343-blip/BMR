import React from 'react'
const features = [
    {
        name: 'Proven Expertise',
        value: '15 +'
    },
    {
        name: 'Organizations Transformed',
        value: '50 +'
    },
    {
        name: 'Client Satisfaction',
        value: '100 %'
    },
    {
        name: 'Industry Sectors',
        value: '10 +'
    }
];


export default function Hero5() {
    return (
        <>
           <div className='bg-gradient-to-b from-[#00A5A8] to-[#0B313E]'>
             <div className="max-w-7xl px-6 py-12 mx-auto text-center text-white">
                <div>
                    <h1 className='text-3xl text-white font-semibold'>OUR IMPACT</h1>
                    <p className='text-[12px] text-white/70'>Delivering measurable results across industries</p>

                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-10'>
                        {features.map((feature) => (
                            <div key={feature.name}>
                                <h2 className='text-2xl text-[#00A5A8] font-bold mb-2'>{feature.value}</h2>
                                <p className='text-[10px] text-white'>{feature.name}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
           </div>
        </>
    )
}
