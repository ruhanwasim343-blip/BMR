import React from 'react'

export default function Framework1() {
    return (
        <>
            <div className='bg-[#15243D] max-w-7xl px-6 py-12 mx-auto'>
                <div className='text-center'>
                    <h1 className='text-2xl text-white font-bold'>Our Frameworks</h1>
                    <p className='text-[9px] text-[#99A1AF] mt-4'>Proven methodologies and structured approaches to guide your organization's journey <span className='block'>toward responsible AI adoption and sustainable transformation.</span> </p>
                    <h1 className='text-md text-white font-semibold mt-8'>Journey</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>

    {/* Card 1 */}
    <div className="bg-[#0F1C33] border border-white/70 rounded-xl p-6 space-y-4 h-full transition duration-300 hover:scale-105 hover:border-[#00A5A8]">

        <p className="text-[#00A5A8] text-[10px]">FOUNDATION</p>

        <div className='flex items-center'>
            <h1 className="text-white text-lg font-semibold">Trust</h1>
            <img className='ml-auto w-6 h-6' src="/blackarrowgreencircle.svg" alt="" />
        </div>

        <p className="text-[#99A1AF] text-xs">
            Establish transparency, accountability, and ethical guardrails from the earliest implementation. Build stakeholder confidence through clear governance structures and consistent communication.
        </p>

        <div className='space-y-2'>
            <div className='flex gap-2 items-center'>
                <img className="w-2 h-2" src="/small-green-dot.svg" alt="" />
                <p className="text-[#D1D5DC] text-xs">Transparency frameworks</p>
            </div>

            <div className='flex gap-2 items-center'>
                <img className="w-2 h-2" src="/small-green-dot.svg" alt="" />
                <p className="text-[#D1D5DC] text-xs">Ethical guideline development</p>
            </div>

            <div className='flex gap-2 items-center'>
                <img className="w-2 h-2" src="/small-green-dot.svg" alt="" />
                <p className="text-[#D1D5DC] text-xs">Stakeholder engagement models</p>
            </div>

            <div className='flex gap-2 items-center'>
                <img className="w-2 h-2" src="/small-green-dot.svg" alt="" />
                <p className="text-[#D1D5DC] text-xs">Trust measurement methodologies</p>
            </div>
        </div>

    </div>

    {/* Card 2 */}
    <div className="bg-[#0F1C33] border border-white/70 rounded-xl p-6 space-y-4 h-full transition duration-300 hover:scale-105 hover:border-[#00A5A8]">

        <p className="text-[#00A5A8] text-[10px]">IMPLEMENTATION</p>

        <div className='flex items-center'>
            <h1 className="text-white text-lg font-semibold">Govern</h1>
            <img className='ml-auto w-6 h-6' src="/blackarrowgreencircle.svg" alt="" />
        </div>

        <p className="text-[#99A1AF] text-xs">
            Deploy robust governance structures, policies, and compliance measures across your organization. Ensure sustainable and responsible AI operations at scale.
        </p>

        <div className='space-y-2'>
            <div className='flex gap-2 items-center'>
                <img className="w-2 h-2" src="/small-green-dot.svg" alt="" />
                <p className="text-[#D1D5DC] text-xs">Policy development and alignment</p>
            </div>

            <div className='flex gap-2 items-center'>
                <img className="w-2 h-2" src="/small-green-dot.svg" alt="" />
                <p className="text-[#D1D5DC] text-xs">Compliance frameworks</p>
            </div>

            <div className='flex gap-2 items-center'>
                <img className="w-2 h-2" src="/small-green-dot.svg" alt="" />
                <p className="text-[#D1D5DC] text-xs">Risk assessment protocols</p>
            </div>

            <div className='flex gap-2 items-center'>
                <img className="w-2 h-2" src="/small-green-dot.svg" alt="" />
                <p className="text-[#D1D5DC] text-xs">Governance committee structure</p>
            </div>
        </div>

    </div>

    {/* Card 3 */}
    <div className="bg-[#0F1C33] border border-white/70 rounded-xl p-6 space-y-4 h-full transition duration-300 hover:scale-105 hover:border-[#00A5A8]">

        <p className="text-[#00A5A8] text-[10px]">GROWTH</p>

        <div className='flex items-center'>
            <h1 className="text-white text-lg font-semibold">Evolve</h1>
            <img className='ml-auto w-6 h-6' src="/blackarrowgreencircle.svg" alt="" />
        </div>

        <p className="text-[#99A1AF] text-xs">
            Continuously adapt and scale AI capabilities while maintaining ethical practices and human values. Foster innovation within ethical boundaries.
        </p>

        <div className='space-y-2'>
            <div className='flex gap-2 items-center'>
                <img className="w-2 h-2" src="/small-green-dot.svg" alt="" />
                <p className="text-[#D1D5DC] text-xs">Continuous improvement cycles</p>
            </div>

            <div className='flex gap-2 items-center'>
                <img className="w-2 h-2" src="/small-green-dot.svg" alt="" />
                <p className="text-[#D1D5DC] text-xs">Innovation value guardrails</p>
            </div>

            <div className='flex gap-2 items-center'>
                <img className="w-2 h-2" src="/small-green-dot.svg" alt="" />
                <p className="text-[#D1D5DC] text-xs">Scaling best practices</p>
            </div>

            <div className='flex gap-2 items-center'>
                <img className="w-2 h-2" src="/small-green-dot.svg" alt="" />
                <p className="text-[#D1D5DC] text-xs">Adaptive governance models</p>
            </div>
        </div>

    </div>

</div>

            </div>


        </>
    )
}
