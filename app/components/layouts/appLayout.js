"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { Session } from "@/app/hooks/Auth";
import SideNav from "../molecules/SideNav";

function AppLayout({ children }) {
  const user = useSelector((state) => state.User);
  const isAuthenticated = Session(user);
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();

  if (isAuthenticated.status === "unauthenticated") {
    router.push("/auth");
  } else {
    return (
      <>
        <div className={`bg-gray-50 z-50 transition-all ${showNav ? "left-0":"-left-64 md:left-0"} duration-300  relative`}>
          <SideNav />
        </div>
        <div className={`p-4 pb-8 md:ml-64 space-y-5 bg-gray-50 transition-all duration-300 select-none min-h-screen`}>
          {children}
        </div>
      </>
    );
  }
}

export default AppLayout;
