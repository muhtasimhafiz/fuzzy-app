import Sidebar from "@/components/global/sidebar";
import React from "react";

type Props = {children : React.ReactNode}

const Layout = (props: Props) => {
  return (
    <div className="flex overlow-hidden h-screen">
      <Sidebar/>
      <div className="w-full">
        {props.children}
      </div>
    </div>
  )
}

export default Layout;