import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

export default function Dropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <img src="/public/Menu.svg" alt="" />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-60 mt-6" align="end">


                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    <li>
                        <Link to="/" className="text-black text-sm hover:text-white transition">
                            Home
                        </Link>
                    </li>
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <li>
                        <Link to="/about-us" className="text-black text-sm hover:text-white transition">
                            About
                        </Link>
                    </li>
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <li>
                        <Link to="/frameworks" className="text-black text-sm hover:text-white transition">
                            Framework
                        </Link>
                    </li>
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <li>
                        <Link to="/services" className="text-black text-sm hover:text-white transition">
                            Services
                        </Link>
                    </li>
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <li>
                        <Link to="/insights" className="text-black text-sm hover:text-white transition">
                            Insights
                        </Link>
                    </li>
                </DropdownMenuItem>

                <DropdownMenuItem>
                    <li>
                        <Link to="/contact" className="text-black text-sm hover:text-white transition">
                            Contact
                        </Link>
                    </li>
                </DropdownMenuItem>


                <DropdownMenuSeparator />

                <DropdownMenuItem className="text-red-500 focus:text-red-500">
                    <img src="/public/assets/log-out.svg" alt="" />
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}