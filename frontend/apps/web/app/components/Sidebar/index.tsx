import React, { useState } from "react";
import {
  Bot,
  ArrowLeftRight,
  File,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

interface SidebarProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
  screenWidth: number;
}

const Sidebar: React.FC<SidebarProps> = ({
  isDarkMode,
  setIsDarkMode,
  screenWidth,
}) => {
  const [isExpanded, setIsExpanded] = useState(screenWidth >= 768);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const SidebarItem = ({
    icon: Icon,
    label,
    onClick,
  }: {
    icon: React.ElementType;
    label: string;
    onClick?: () => void;
  }) => (
    <div
      className="h-14 w-full p-4 flex items-center justify-center rounded-lg cursor-pointer 
                 hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-in-out 
                 focus:bg-white group"
      onClick={onClick}
    >
      <Icon className="h-6 w-6" />
      {(isExpanded || screenWidth >= 768) && (
        <span className="ml-4 font-medium group-hover:text-gray-800">
          {label}
        </span>
      )}
    </div>
  );

  return (
    <aside
      className={`h-full flex flex-col items-center relative 
                  bg-gray-800 text-white duration-300 ease-in-out 
                  ${isExpanded || screenWidth >= 768 ? "w-48 px-6" : "w-12"}`}
    >
      {/* Centered Logo */}
      <div className="w-full flex justify-center items-center h-16 relative">
        {isExpanded || screenWidth >= 768 ? (
            <span className="font-bold text-2xl">Logo</span>
            ) : (
            <span className="font-bold text-2xl">L</span>
        )}
      </div>

      {/* Centered Navigation Items */}
      <nav className="flex flex-col space-y-4 w-full items-center justify-center flex-grow">
        <SidebarItem
          icon={File}
          label="Docs"
          onClick={() => {
            /* Add navigation logic */
          }}
        />
        <SidebarItem
          icon={ArrowLeftRight}
          label="Swap"
          onClick={() => {
            /* Add navigation logic */
          }}
        />
        <SidebarItem
          icon={Bot}
          label="Chat"
          onClick={() => {
            /* Add navigation logic */
          }}
        />
      </nav>
    </aside>
  );
};

export default Sidebar;
