import React from 'react'
const features = [
    {
        name: 'Assess & Understand',
        description: 'Conduct comprehensive assessments to identify AI opportunities, risks, and organizational readiness.'
    },
    {
        name: 'Design & Plan',
        description: 'Develop customized frameworks and roadmaps aligned with your strategic objectives.'
    },
    {
        name: 'Implement & Scale',
        description: 'Execute transformation initiatives with a focus on responsible AI adoption and sustainable impact.'
    }
];


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

                            {features.map((feature) => (
                                <div key={feature.name}>
                                    <h2 className="text-xl text-white mb-2">{feature.name}</h2>
                                    <p className="text-sm text-white/75">{feature.description}</p>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
