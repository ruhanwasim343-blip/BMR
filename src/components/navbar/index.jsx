import { DropdownMenu } from "radix-ui"
import React from "react"
import { Link } from "react-router-dom"



export default function Navbar() {
    return (
        <nav className="bg-[#15243D] border-b border-white/20">

            <div className="grid grid-cols-12 items-center  shadow-md px-7 py-5 max-w-7xl mx-auto border-b border-white/20">

                {/* Left - Logo */}
                <div className="col-span-12 md:col-span-2 flex items-center">

                    {/* Logo */}
                    <Link to="/">
                        <img src="/BMR..svg" alt="Logo" className="cursor-pointer" />
                    </Link>

                    {/* Hamburger (Mobile Only) */}
                    {/* Hamburger (Mobile Only) */}
<div className="ml-auto md:hidden">
  <DropdownMenu.Root>
    
    <DropdownMenu.Trigger asChild>
      <button className="text-white text-2xl">
        ☰
      </button>
    </DropdownMenu.Trigger>

    <DropdownMenu.Content className="bg-[#15243D] text-white p-4 mt-3 rounded-md shadow-lg w-40 space-y-2">
      
      <DropdownMenu.Item>
        <Link to="/">Home</Link>
      </DropdownMenu.Item>

      <DropdownMenu.Item>
        <Link to="/about-us">About</Link>
      </DropdownMenu.Item>

      <DropdownMenu.Item>
        <Link to="/frameworks">Framework</Link>
      </DropdownMenu.Item>

      <DropdownMenu.Item>
        <Link to="/services">Services</Link>
      </DropdownMenu.Item>

      <DropdownMenu.Item>
        <Link to="/insights">Insights</Link>
      </DropdownMenu.Item>

      <DropdownMenu.Item>
        <Link to="/contact">Contact</Link>
      </DropdownMenu.Item>

    </DropdownMenu.Content>
  </DropdownMenu.Root>
</div>
                </div>

                {/* Center - Links */}
                <div className="hidden md:block col-span-10">
                    <ul className="flex justify-end pr-4 gap-5 md:gap-8 text-[#000000] font-medium text-xs lg:text-[16px]">
                        <li>
                            <Link to="/" className="text-white text-sm hover:text-[#00A5A8] transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about-us" className="text-white text-sm hover:text-[#00A5A8] transition">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/frameworks" className="text-white text-sm hover:text-[#00A5A8] transition">
                                Framework
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="text-white text-sm hover:text-[#00A5A8] transition">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/insights" className="text-white text-sm hover:text-[#00A5A8] transition">
                                Insights
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-white text-sm hover:text-[#00A5A8] transition">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>


            </div>
        </nav>
    )
}
