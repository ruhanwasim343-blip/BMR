import React from "react"
import { Link } from "react-router-dom"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
    return (
        <nav className="bg-[#15243D] border-b border-white/20">

          <div className="grid grid-cols-12 items-center px-7 py-5 max-w-7xl mx-auto">

  {/* Logo */}
  <div className="col-span-6 md:col-span-2 flex items-center">
    <Link to="/">
      <img src="/BMR..svg" alt="Logo" className="cursor-pointer" />
    </Link>
  </div>

  {/* Desktop Menu */}
  <div className="hidden md:block md:col-span-10">
    <ul className="flex justify-end gap-8 text-white text-sm font-medium">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about-us">About</Link></li>
      <li><Link to="/frameworks">Framework</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/insights">Insights</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </div>

  {/* Mobile Menu (RIGHT SIDE) */}
  <div className="col-span-6 md:hidden flex justify-end">
    <Sheet>
      <SheetTrigger asChild>
        <button className="text-white text-2xl">
          ☰
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="bg-[#15243D] text-white">
        <div className="flex flex-col space-y-4 mt-6 text-center">
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
          <Link to="/frameworks">Framework</Link>
          <Link to="/services">Services</Link>
          <Link to="/insights">Insights</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </SheetContent>
    </Sheet>
  </div>

</div>
        </nav>
    )
}