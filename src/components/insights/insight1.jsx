import React from 'react'

export default function Insight1() {
    return (
        <>
            <div className='bg-[#15243D]'>
                <div className=' max-w-7xl px-6 mx-auto py-12'>
                    <div className='text-center space-y-3'>
                        <h1 className='text-3xl text-white font-bold'>Insights</h1>
                        <p className='text-[12px] text-[#99A1AF]'>Expert perspectives on responsible AI, governance frameworks, <span className='block'> transformation strategies, and leadership in the age of artificial intelligence.</span></p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-7">

                        {/* CARD 1 */}
                        <div className="bg-[#0F1C33] border border-white/10 rounded-xl p-5 space-y-4 shadow-lg w-full max-w-sm hover:scale-[1.03] transition">
                            <p className='text-xs text-[#00A5A8]'>GOVERNANCE</p>

                            <h1 className='text-sm text-white font-semibold leading-snug'>
                                Building Trust in AI Systems:
                                <span className='block'>Framework Approach</span>
                            </h1>

                            <p className='text-[10px] text-[#99A1AF] leading-relaxed'>
                                Explore how transparent governance structures drive stakeholder confidence in AI deployments.
                            </p>

                            <div className='flex items-center gap-4 text-[#6A7282] text-[9px]'>
                                <div className='flex items-center gap-1'>
                                    <img className="w-3 h-3" src="/silver-calender.svg" alt="" />
                                    <p>2024-03-15</p>
                                </div>

                                <div className='flex items-center gap-1'>
                                    <img className="w-3 h-3" src="/silver-clock.svg" alt="" />
                                    <p>5 min read</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-2 cursor-pointer group'>
                                <p className='text-[10px] text-[#00A5A8] group-hover:underline'>Read More</p>
                                <img className="w-3 h-3 group-hover:translate-x-1 transition" src="/green-right-arrow.svg" alt="" />
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="bg-[#0F1C33] border border-white/10 rounded-xl p-5 space-y-4 shadow-lg w-full max-w-sm hover:scale-[1.03] transition">
                            <p className='text-xs text-[#00A5A8]'>TRANSFORMATION</p>
                            <h1 className='text-sm text-white font-semibold leading-snug'>
                                The Adoption Value System:
                                <span className='block'>Measuring Real Impact</span>
                            </h1>
                            <p className='text-[10px] text-[#99A1AF] leading-relaxed'>
                                Learn how to identify and maximize the organizational value of AI implementations. Discover systematic approaches to tracking ROI and optimizing AI initiatives.
                            </p>
                            <div className='flex items-center gap-4 text-[#6A7282] text-[9px]'>
                                <div className='flex items-center gap-1'>
                                    <img className="w-3 h-3" src="/silver-calender.svg" alt="" />
                                    <p>2024-03-13</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <img className="w-3 h-3" src="/silver-clock.svg" alt="" />
                                    <p>7 min read</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 cursor-pointer group'>
                                <p className='text-[10px] text-[#00A5A8] group-hover:underline'>Read More</p>
                                <img className="w-3 h-3 group-hover:translate-x-1 transition" src="/green-right-arrow.svg" alt="" />
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className="bg-[#0F1C33] border border-white/10 rounded-xl p-5 space-y-4 shadow-lg w-full max-w-sm hover:scale-[1.03] transition">
                            <p className='text-xs text-[#00A5A8]'>LEADERSHIP</p>
                            <h1 className='text-sm text-white font-semibold leading-snug'>
                                Executive Readiness for the AI Era
                            </h1>
                            <p className='text-[10px] text-[#99A1AF] leading-relaxed'>
                                Preparing leadership teams with strategic frameworks for effective AI decision-making. Essential insights for executives navigating AI transformation.
                            </p>
                            <div className='flex items-center gap-4 text-[#6A7282] text-[9px]'>
                                <div className='flex items-center gap-1'>
                                    <img className="w-3 h-3" src="/silver-calender.svg" alt="" />
                                    <p>2024-03-01</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <img className="w-3 h-3" src="/silver-clock.svg" alt="" />
                                    <p>6 min read</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 cursor-pointer group'>
                                <p className='text-[10px] text-[#00A5A8] group-hover:underline'>Read More</p>
                                <img className="w-3 h-3 group-hover:translate-x-1 transition" src="/green-right-arrow.svg" alt="" />
                            </div>
                        </div>

                        {/* CARD 4 */}
                        <div className="bg-[#0F1C33] border border-white/10 rounded-xl p-5 space-y-4 shadow-lg w-full max-w-sm hover:scale-[1.03] transition">
                            <p className='text-xs text-[#00A5A8]'>GOVERNANCE</p>
                            <h1 className='text-sm text-white font-semibold leading-snug'>
                                Ethical AI: From Principles to Practice
                            </h1>
                            <p className='text-[10px] text-[#99A1AF] leading-relaxed'>
                                Translating ethical principles into actionable governance policies. A practical guide to implementing responsible AI frameworks across your organization.
                            </p>
                            <div className='flex items-center gap-4 text-[#6A7282] text-[9px]'>
                                <div className='flex items-center gap-1'>
                                    <img className="w-3 h-3" src="/silver-calender.svg" alt="" />
                                    <p>2024-02-28</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <img className="w-3 h-3" src="/silver-clock.svg" alt="" />
                                    <p>8 min read</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 cursor-pointer group'>
                                <p className='text-[10px] text-[#00A5A8] group-hover:underline'>Read More</p>
                                <img className="w-3 h-3 group-hover:translate-x-1 transition" src="/green-right-arrow.svg" alt="" />
                            </div>
                        </div>

                        {/* CARD 5 */}
                        <div className="bg-[#0F1C33] border border-white/10 rounded-xl p-5 space-y-4 shadow-lg w-full max-w-sm hover:scale-[1.03] transition">
                            <p className='text-xs text-[#00A5A8]'>INNOVATION</p>
                            <h1 className='text-sm text-white font-semibold leading-snug'>
                                Human-AI Collaboration:
                                <span className='block'>Designing Better Processes</span>
                            </h1>
                            <p className='text-[10px] text-[#99A1AF] leading-relaxed'>
                                Best practices for creating AI systems that enhance rather than replace human capabilities. Explore the HAI framework in action.
                            </p>
                            <div className='flex items-center gap-4 text-[#6A7282] text-[9px]'>
                                <div className='flex items-center gap-1'>
                                    <img className="w-3 h-3" src="/silver-calender.svg" alt="" />
                                    <p>2024-02-20</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <img className="w-3 h-3" src="/silver-clock.svg" alt="" />
                                    <p>6 min read</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 cursor-pointer group'>
                                <p className='text-[10px] text-[#00A5A8] group-hover:underline'>Read More</p>
                                <img className="w-3 h-3 group-hover:translate-x-1 transition" src="/green-right-arrow.svg" alt="" />
                            </div>
                        </div>

                        {/* CARD 6 */}
                        <div className="bg-[#0F1C33] border border-white/10 rounded-xl p-5 space-y-4 shadow-lg w-full max-w-sm hover:scale-[1.03] transition">
                            <p className='text-xs text-[#00A5A8]'>STRATEGY</p>
                            <h1 className='text-sm text-white font-semibold leading-snug'>
                                Risk Management in AI Implementation
                            </h1>
                            <p className='text-[10px] text-[#99A1AF] leading-relaxed'>
                                Identifying and mitigating risks across technical, ethical, and operational dimensions. A comprehensive approach to AI risk management.
                            </p>
                            <div className='flex items-center gap-4 text-[#6A7282] text-[9px]'>
                                <div className='flex items-center gap-1'>
                                    <img className="w-3 h-3" src="/silver-calender.svg" alt="" />
                                    <p>2024-02-15</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <img className="w-3 h-3" src="/silver-clock.svg" alt="" />
                                    <p>9 min read</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 cursor-pointer group'>
                                <p className='text-[10px] text-[#00A5A8] group-hover:underline'>Read More</p>
                                <img className="w-3 h-3 group-hover:translate-x-1 transition" src="/green-right-arrow.svg" alt="" />
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}
