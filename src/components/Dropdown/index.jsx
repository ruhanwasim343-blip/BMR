import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

import { Link } from "react-router-dom"

export default function Dropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <img src="/Menu.svg" alt="menu" className="cursor-pointer" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-60 mt-6" align="end">
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Link to="/">Home</Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link to="/about-us">About</Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link to="/frameworks">Framework</Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link to="/services">Services</Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link to="/insights">Insights</Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link to="/contact">Contact</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="text-red-500">
          <img src="/assets/log-out.svg" alt="" className="mr-2 w-4 h-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}