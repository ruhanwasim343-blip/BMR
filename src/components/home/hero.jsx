import React from 'react'
import { Button } from '../ui/button'
import { Card, CardContent } from "@/components/ui/card";
export default function Hero() {
    return (
        <>
            <div className=' bg-[#15243D]'>
                <div className='grid grid-cols-1 md:grid-cols-12 max-w-7xl mx-auto px-5 sm:px-7 py-16 sm:py-20 gap-12 items-center'>

                    {/* First part */}
                    <div className='col-span-7 text-left'>

                        {/* Heading */}
                        <h1 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight'>
                            Responsible <span className='text-[#00A5A8]'>AI</span> and
                            <span className='block'>delivery systems that</span>
                            actually ship value
                        </h1>

                        {/* Paragraph */}
                        <p className='text-[#D1D1D1] text-xs sm:text-base md:text-sm lg:text-base mt-6 sm:mt-8 leading-relaxed'>
                            We help CIOs and CTOs in healthcare, public sector, and regulated industries
                            <span className='block'> adopt AI responsibly, modernize delivery, and reduce risk.</span>
                            Clear governance. Human-centered adoption. Repeatable outcomes.
                        </p>

                        {/* Buttons */}
                        <div className='flex flex-wrap gap-3 mt-8'>
                            <Button className="text-sm text-white bg-[#00A5A8] px-6 sm:px-7 py-2 rounded-sm hover:bg-[#00A5A8]/90 transition cursor-pointer">
                                Explore services
                            </Button>
                            <Button className="group text-sm bg-[#15243D] text-[#00A5A8] px-6 sm:px-7 py-3 border border-[#00A5A8] rounded-sm hidden md:flex items-center justify-center gap-2 hover:bg-[#00A5A8] hover:text-white transition cursor-pointer">
                                See our frameworks
                                <span className="transition-transform duration-500 group-hover:translate-x-1">
                                    →
                                </span>
                            </Button>
                        </div>

                        {/* Features */}
                        <div className="mt-10 hidden md:flex flex-col space-y-3">

                            <div className="lg:flex gap-4">
                                <p className="flex text-white text-xs gap-2 items-center">
                                    <img src="/verified.svg" alt="" /> NIST AI RMF aligned
                                </p>
                                <p className="flex text-white text-xs gap-2 items-center">
                                    <img src="/verified.svg" alt="" /> Healthcare and public sector
                                </p>
                                <p className="flex text-white text-xs gap-2 items-center">
                                    <img src="/verified.svg" alt="" /> Algorithmic Impact Assessments
                                </p>
                            </div>

                            <div className="lg:flex gap-4">
                                <p className="flex text-white text-xs gap-2 items-center">
                                    <img src="/verified.svg" alt="" /> HAI and AVS toolkits
                                </p>
                                <p className="flex text-white text-xs gap-2 items-center">
                                    <img src="/verified.svg" alt="" /> Delivery readiness scans
                                </p>
                                <p className="flex text-white text-xs gap-2 items-center">
                                    <img src="/verified.svg" alt="" /> Executive enablement
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Card */}
                    <Card className="col-span-5 bg-white relative overflow-hidden rounded-2xl w-full">

                        {/* Glow */}
                        <div className="absolute inset-0 -z-10 
        bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.25),transparent_60%)]"></div>

                        <CardContent className="p-4 sm:p-6 lg:p-8 space-y-5">

                            {/* Heading */}
                            <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
                                Outcome Snapshot
                            </h1>

                            {/* Items */}
                            <div className="flex gap-3 items-start">
                                <img className='mt-1 w-4 h-4 sm:w-5 sm:h-5' src="/Dot.svg" alt="" />
                                <div>
                                    <h2 className="text-green-900 font-medium text-xs sm:text-base">
                                        Governance in weeks, not quarters.
                                    </h2>
                                    <p className="text-green-700 text-xs sm:text-sm">
                                        Rapidly established AI intake and review, mapped
                                        <span className='block'> to policy and risk controls.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-start">
                                <img className='mt-1 w-4 h-4 sm:w-5 sm:h-5' src="/Dot (1).svg" alt="" />
                                <div>
                                    <h2 className="text-green-900 font-medium text-xs sm:text-base">
                                        Human-in-the-loop adoption.
                                    </h2>
                                    <p className="text-green-700 text-xs sm:text-sm">
                                        HAI playbooks increased workforce readiness and
                                        <span className='block'>trust.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-start">
                                <img className='mt-1 w-4 h-4 sm:w-5 sm:h-5' src="/Dot (2).svg" alt="" />
                                <div>
                                    <h2 className="text-green-900 font-medium text-xs  sm:text-base">
                                        Delivery reliability up.
                                    </h2>
                                    <p className="text-green-700 text-xs sm:text-sm">
                                        Clear SLAs, escalation paths, and portfolio signals
                                        <span className='block'>that prevent silent failure.</span>
                                    </p>
                                </div>
                            </div>

                            {/* Button (ALWAYS CENTERED) */}
                            <div className="flex justify-center">
                                <Button className='text-xs sm:text-sm text-white bg-[#00A5A8] 
                                        px-6 sm:px-10 py-2 w-full hover:bg-[#00A5A8]/90 transition cursor-pointer'>
                                    Talk about your portfolio
                                </Button>
                            </div>

                        </CardContent>
                    </Card>

                </div>
            </div>

        </>
    )
}
