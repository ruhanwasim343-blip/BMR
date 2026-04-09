import React from "react"
import { Link } from "react-router-dom"
import Dropdown from "../Dropdown"


export default function Navbar() {
    return (
        <nav className="bg-[#15243D] border-b border-white/20">

            <div className="grid grid-cols-12 items-center  shadow-md px-7 py-5 max-w-7xl mx-auto border-b border-white/20">

                {/* Left - Logo */}
                <div className="col-span-12 md:col-span-2 flex items-center">

                    {/* Logo */}
                    <Link to="/">
                        <img src="/public/BMR..svg" alt="Logo" className="cursor-pointer" />
                    </Link>

                    {/* Hamburger (Mobile Only) */}
                    <div className="md:hidden gap-1 col-span-12 md:col-span-2 flex items-center ml-auto">
                        <Dropdown />
                    </div>
                </div>

                {/* Center - Links */}
                <div className="hidden md:block col-span-10">
                    <ul className="flex justify-end pr-4 gap-5 md:gap-8 text-[#000000] font-medium text-xs lg:text-[16px]">
                        <li>
                            <Link to="/" className="text-white text-sm hover:text-white transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about-us" className="text-white text-sm hover:text-white transition">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/frameworks" className="text-white text-sm hover:text-white transition">
                                Framework
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="text-white text-sm hover:text-white transition">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/insights" className="text-white text-sm hover:text-white transition">
                                Insights
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-white text-sm hover:text-white transition">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>


            </div>
        </nav>
    )
}
