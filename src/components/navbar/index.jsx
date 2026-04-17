import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if (token) {
            setIsLoggedIn(true);
        }

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const logout = () => {
        // localStorage.removeItem("user");
        // localStorage.removeItem("token");
        // setUser(null);
        // setIsLoggedIn(false);
        navigate("/login");
    };

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
                    <ul className="flex justify-end gap-8 text-white text-sm font-medium items-center">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about-us">About</Link></li>
                        <li><Link to="/frameworks">Framework</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/insights">Insights</Link></li>
                        <li><Link to="/contact">Contact</Link></li>

                        {/* Auth Section */}
                        {isLoggedIn ? (
                            <li className="relative group">
                                <button className="px-3 py-1 bg-[#0F1C33] rounded-md text-white">
                                    {user?.name || user?.username || "My Account"}
                                </button>

                                <div className="absolute right-0 pt-2 hidden group-hover:block bg-white text-black rounded-md shadow-md w-32 overflow-hidden z-50">
                                    <Link
                                        to="/profile"
                                        className="block px-3 py-2 hover:bg-gray-100"
                                    >
                                        Profile
                                    </Link>

                                    <button
                                        onClick={logout}
                                        className="block w-full text-left px-3 py-2 hover:bg-gray-100 text-red-500"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </li>
                        ) : (
                            <>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/signup">Sign Up</Link></li>
                            </>
                        )}
                    </ul>
                </div>

                {/* Mobile Menu */}
                <div className="col-span-6 md:hidden flex justify-end">
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="text-white text-2xl">☰</button>
                        </SheetTrigger>

                        <SheetContent side="right" className="bg-[#15243D] text-white">
                            <div className="flex flex-col space-y-4 mt-6 text-center">
                                <Link to="/home">Home</Link>
                                <Link to="/about-us">About</Link>
                                <Link to="/frameworks">Framework</Link>
                                <Link to="/services">Services</Link>
                                <Link to="/insights">Insights</Link>
                                <Link to="/contact">Contact</Link>

                                <li className="relative group">
                                    <button className="px-3 py-1 bg-[#0F1C33] rounded-md text-white">
                                        {user?.name || user?.fullname || "My Account"}
                                    </button>

                                    <div className="absolute right-0 top-full  hidden group-hover:block z-50">
                                        <div className="bg-white text-black rounded-md shadow-md w-32 overflow-hidden">
                                            <Link
                                                to="/profile"
                                                className="block px-3 py-2 hover:bg-gray-100"
                                            >
                                                Profile
                                            </Link>

                                            <button
                                                onClick={logout}
                                                className="block w-full text-left px-3 py-2 hover:bg-gray-100 text-red-500"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
