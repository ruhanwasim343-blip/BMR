
import React from 'react'
const features = [
    {
        name: 'AI Governance',
        description: 'Establish robust frameworks for responsible AI implementation and compliance.'
    },
    {
        name: 'Delivery Transformation',
        description: 'Optimize processes and accelerate delivery through strategic methodologies.'
    },
    {
        name: 'Executive Readiness',
        description: 'Prepare leadership teams for AI-driven organizational change.'
    }

];


export default function Hero2() {
    return (
        <>
            <div className='bg-[#15243D]  border-t pb-8 border-gray-700'>
                <div className='bg-[#15243D] lg:max-w-7xl px-6 mx-auto'>
                    <div className='text-center mt-6'>
                        <h1 className='text-3xl text-white'>WHAT WE OFFER</h1>
                        <p className='text-[12px] text-white/75'>Comprehensive solutions for Al governance and organizational transformation</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>

                        {features.map((feature) => (
                            <div key={feature.name} className='bg-[#1E2B45] p-6 rounded-lg border border-gray-700'>
                                <h2 className='text-xl text-white mb-2'>{feature.name}</h2>
                                <p className='text-sm text-white/75'>{feature.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </>
    )
}
