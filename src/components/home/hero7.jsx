import React from 'react'
import { Button } from '../ui/button'
export default function Hero7() {
    return (
        <>
            <div className="bg-gradient-to-r from-[#0B313E] to-[#00A5A8] max-w-7xl px-6 py-12 mx-auto text-center text-white">
                <div>
                    <h1 className='text-base font-semibold'>READY TO TRANSFORM?</h1>
                    <p className='text-[8px] mt-3'>Let's Discuss how we can help your organization navigate the AI landscape responsibly
                        and effectively</p>
                    <Button className="text-xs border border-[#FFFFFF] rounded-lg bg-transparent mt-7">Schedule a Conultation →</Button>
                </div>
            </div>
        </>
    )
}
