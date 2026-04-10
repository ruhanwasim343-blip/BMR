import React from 'react'
import { Button } from '../ui/button'
export default function Hero7() {
    return (
        <>
            <div className='bg-gradient-to-r from-[#0B313E] to-[#00A5A8]'>
                <div className=" max-w-7xl px-6 py-12 mx-auto text-center text-white">
                    <div>
                        <h1 className='text-3xl font-semibold'>READY TO TRANSFORM?</h1>
                        <p className='text-[12px] mt-3'>Let's Discuss how we can help your organization navigate the AI landscape responsibly
                            and effectively</p>
                        <Button className="group text-xs border border-white rounded-lg bg-transparent mt-7 px-4 py-2 flex items-center gap-1 transition-all duration-300 hover:bg-[#00A5A8] hover:text-white mx-auto">
                            Schedule a Consultation
                            <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
