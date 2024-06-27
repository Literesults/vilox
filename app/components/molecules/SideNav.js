import Image from "next/image";
import React from "react";
import AppLink from "../organisms/AppLink";
import logo from "@assets/images/viloxLogo.png"

function SideNav() {
  return (
    <div className="fixed bg-white select-none overflow-y-auto flex flex-col h-screen shadow-md w-64 gap-y-6 py-8 px-1">
      <div className="text-2xl px-1">
        <Image src={logo} className="w-28" alt="Michael Michael" />
      </div>
      <div className="flex-grow gap-y-4 flex flex-col gap-2">
        <div>
          <AppLink
            text={"dashboard"}
            icon={<i className="ri-layout-grid-fill"></i>}
          />
          <AppLink
            text={"orders"}
            icon={<i className="ri-pantone-line"></i>}
            subMenu={[
              { name: "gift card", extra: false },
              { name: "crypto", extra: false },
            ]}
          />
          <AppLink
            text={"transactions"}
            icon={<i class="ri-refund-line"></i>}
            subMenu={[
              { name: "withdrawal", extra: false },
              { name: "payment", extra: false }
            ]}
          />
          <AppLink
            text={"manage product"}
            icon={<i className="ri-p2p-line"></i>}
            subMenu={[
              { name: "gift cards", extra: false },
              { name: "crypto", extra: false },
              { name: "E-funds", extra: false }
            ]}
          />
          <AppLink
            text={"users"}
            icon={<i className="ri-team-line"></i>}
          />
          <AppLink
            text={"notifications"}
            icon={<i className="ri-notification-3-line"></i>}
          />
          <AppLink
            text={"settings"}
            icon={<i className="ri-settings-5-line"></i>}
          />
        </div>

      </div>
      <div className="px-2 flex items-center gap-2">
        <div>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        </div>
        <div>
          <div className="font-bold text-sm">Admin Admin</div>
          <div className="text-xs text-gray-400">admin@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
