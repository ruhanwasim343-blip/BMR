import React from 'react'
const features = [
    {
        name: 'Proven Expertise',
        description: 'Decades of combined experience in AI governance and strategic transformation.'
    },
    {
        name: 'Tailored Approach',
        description: 'Custom solutions designed for your organization\'s unique needs and goals.'
    },
    {
        name: 'Results-Driven',
        description: 'Measurable outcomes that drive real business value and competitive advantage.'
    },
    {
        name: 'End-to-End Support',
        description: 'From strategy to implementation, we\'re with you every step of the way.'
    }
];


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
