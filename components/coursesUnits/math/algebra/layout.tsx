import React, { ReactNode } from "react";
import Sidebar from "./sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="bg-gray-50 flex-1 p-4 text-black overflow-y-auto relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300"
          style={{
            height: "100%",
            transform: "translateX(-50%)",
          }}
        ></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
