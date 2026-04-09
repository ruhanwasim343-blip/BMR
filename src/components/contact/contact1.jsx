import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contact1() {
    return (
        <div className='bg-[#15243D] max-w-7xl px-6 py-16 mx-auto'>

            {/* Heading */}
            <div className='text-center space-y-3 mb-10'>
                <h1 className='text-2xl text-white font-bold'>
                    Start a Conversation
                </h1>
                <p className='text-xs text-[#99A1AF] max-w-md mx-auto'>
                    Let's discuss how we can help your organization navigate responsible AI
                    <span className='block'>adoption, governance, and transformation.</span>
                </p>
            </div>

            {/* Card Center */}
            <div className="flex justify-center">

                <Card className="bg-[#1E293B] rounded-md w-full max-w-xl shadow-xl">

                    <CardContent className="p-6 sm:p-8 space-y-5">

                        {/* Name + Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <div className='flex flex-col'>
                                <h1 className='text-xs mb-2 text-[#D1D5DC]'>Name</h1>
                                <Input
                                    placeholder="Your Name"
                                    className=" bg-[#15243D]  placeholder:text-[#6A7282] rounded-sm border border-none"
                                />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='text-xs mb-2 text-[#D1D5DC]'>Email</h1>
                                <Input
                                    type="email"
                                    placeholder="Your Email"
                                    className=" bg-[#15243D]  placeholder:text-[#6A7282] rounded-sm border border-none"
                                />
                            </div>

                        </div>

                        {/* Company */}
                        <div className='flex flex-col'>
                            <h1 className='text-xs mb-2 text-[#D1D5DC]'>Company</h1>
                            <Input
                                placeholder="Your Organization"
                                className=" bg-[#15243D]  placeholder:text-[#6A7282] rounded-sm border border-none"
                            />
                        </div>


                        {/* Message */}
                        <div>
                            <h1 className='text-xs mb-2 text-[#D1D5DC]'>Message</h1>
                            <Textarea
                                placeholder="Your Message"
                                className=" bg-[#15243D]  placeholder:text-[#6A7282] rounded-sm border border-none h-32"
                            />
                        </div>


                        {/* Button */}
                        <Button className="w-full bg-[#00A5A8] hover:bg-[#008b8d] text-black font-semibold rounded-sm">
                            Send Message
                        </Button>

                    </CardContent>

                </Card>

            </div>

        </div>
    )
}
