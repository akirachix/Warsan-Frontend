'use client'
import React, { useState } from "react";
import Link from "next/link";
import { RiAccountCircleLine } from "react-icons/ri";
import { LuLayoutGrid } from "react-icons/lu";
import { TbAlertTriangle } from "react-icons/tb";
import { PiUsersThreeDuotone, PiUsersFour } from "react-icons/pi";
import { MdLogout } from "react-icons/md";
import Logout from "../logout";


interface ChildItem {
  icon: React.ReactElement;
  label: string;
  link?: string;
  onClick?: () => void;
}
interface NavItemProps {
  item: ChildItem;
}
const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Link href={item.link} passHref>
      <div
        className="flex items-center my-1 p-1 rounded-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={item.onClick}
      >
        <div
          className={`flex items-center justify-center w-5 h-5 md:mr-2 md:h-10 md:w-10 mb-8 ${
            isHovered ? "text-pink-500" : "text-white"
          }`}
        >
          {item.icon}
        </div>
        <span
          className={`md:text-base text-xs mb-8 ${
            isHovered ? "text-pink-500" : "text-white"
          }`}
        >
          {item.label}
        </span>
      </div>
    </Link>
  );
};
export const Sidebar: React.FC = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const handleLogoutConfirmation = () => {
    setShowLogoutModal(true);
  };
  return (
    <div className="flex h-screen fixed">
      <div className='flex flex-col w-20 md:w-60 p-2 sm:p-3 md:p-5 bg-customBlue items-center justify-center font-poppins'>
        <div className='flex items-center md:mb-10 mb:6'>
          <img src={'./logo.png'} alt="arrow" className="md:w-14 md:h-14 w-6 h-6 object-cover -ml-1 mb-2 mt-2" />
          <span className='text-white md:text-2xl text-sm font-bold mb-2 ml-2 mt-2 font-poppins'>RAJO</span>
        </div>
        <hr className='mb-5 w-20 md:w-60 md:mb-16' style={{ borderColor: 'white' }} />
        <div className='flex flex-col items-start justify-start'>
          <NavItem item={{ icon: <LuLayoutGrid className="icon md:w-8 md:h-8 w-4 h-4 ml-2" />, label: 'Dashboard', link: '/overview' }} />
          <NavItem item={{ icon: <TbAlertTriangle className="icon md:w-8 md:h-8 w-4 h-4 ml-2" />, label: 'Alerts', link: '/alerts' }} />
          <NavItem item={{ icon: <PiUsersThreeDuotone className="icon md:w-8 md:h-8 w-4 h-4 ml-2 " />, label: 'CHV', link: '/CHVRecords' }} />
          <NavItem item={{ icon: <PiUsersFour className="icon md:w-8 md:h-8 w-4 h-4 ml-2" />, label: 'Children', link: '/childRecords' }} />
        </div>
        <div className='mt-auto flex flex-col items-start justify-start cursor-pointer' onClick={handleLogoutConfirmation}>
          <div className="flex text-white">
        <MdLogout className="icon md:w-8 md:h-8 w-4 h-4 -ml-12 mr-2 " />
        <h2 className="mt-1 ">Logout</h2>
        </div>
        {/* <NavItem
            item={{
              icon: <PiUsersFour className="icon md:w-8 md:h-8 w-4 h-4 -ml-2 " />,
              label: "Logout",
              // link: "/logout",
              onClick: handleLogoutConfirmation,
            }} /> */}
        </div>
      </div>
      <main className="flex-1"></main>
      {showLogoutModal && (
        <Logout
          isOpen={showLogoutModal}
          onClose={() => setShowLogoutModal(false)}
          onLogout={handleLogoutConfirmation}
        />
      )}
    </div>
  );
};