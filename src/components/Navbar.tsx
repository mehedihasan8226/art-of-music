"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";


const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);

  return (
    <div
     className={cn("fixed top-10 h-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      
      <Menu setActive={setActive}>
        <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home"> 
            </MenuItem>
        </Link>

         <MenuItem setActive={setActive} active={active} item="Our service"> 
              <div className="flex flex-col space-y-6">
                <HoveredLink href="/courses">All courses</HoveredLink>
              <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
              <HoveredLink href="/courses">Advanced Composition</HoveredLink>
              <HoveredLink href="/courses">Songwriting</HoveredLink>
              <HoveredLink href="/courses">Music Production</HoveredLink>
              </div>
            </MenuItem>

            <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact Us"> 
              
            </MenuItem>
            </Link>
      </Menu>
      
      </div>
  )
}

export default Navbar