'use client'
import { menuOptions } from "@/lib/constants"
import { TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { AnimatedTooltip } from "../tooltip"

type Props = {}

const MenuOptions = (props: Props) => {
  const pathName = usePathname();
  return (
    <nav className="dark:bg-black h-screen overflow-scroll justify-between flex items-center flex-col gap-10 py-6 px-2">
      <div>
        <Link
          className="flex font-bold flex-row"
          href="/"
        />
        menu
        <TooltipProvider>
          {menuOptions.map((menuItem)=>(
            <ul key={(menuItem.name)}>
              {/* <TooltipTrigger></TooltipTrigger> */}
              {/* <AnimatedTooltip items={menuItem}/> */}

              {/* <TooltipTrigger>
                <Link className="clsx"></Link>
              </TooltipTrigger> */}
            </ul>
          ))}
        </TooltipProvider>
      </div>
    </nav>
  )
}

export default MenuOptions