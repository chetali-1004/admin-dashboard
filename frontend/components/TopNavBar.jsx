"use client";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  SunIcon,
  GlobeAltIcon,
  ShoppingCartIcon,
  EnvelopeIcon,
  BellAlertIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import SearchBox from "./SearchBox";
import { useState } from "react";
import SideNavBar from "./sideNavBar";

const TopNavBar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const handleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };
  return (
    <div className="flex justify-between mt-2 w-full px-10">
      <div className="flex">
        <button onClick={handleSideNav}>
          {isSideNavOpen ? (
            <div>
              <ChevronDoubleLeftIcon className="h-10 w-10 text-gray-700 border bg-[#deeafd] rounded-3xl p-2" />
              <SideNavBar isOpen={true} />
            </div>
          ) : (
            <ChevronDoubleRightIcon className="h-10 w-10 text-gray-700 border bg-[#deeafd] rounded-3xl p-2" />
          )}
        </button>
        <SearchBox />
      </div>
      <div className="flex flex-row justify-evenly w-1/4">
        <SunIcon className="h-10 w-10 text-gray-800 border bg-[#deeafd] rounded-3xl p-2" />
        <GlobeAltIcon className="h-10 w-10 text-gray-800 border bg-[#deeafd] rounded-3xl p-2" />
        <ShoppingCartIcon className="h-10 w-10 text-gray-800 border bg-[#deeafd] rounded-3xl p-2" />
        <EnvelopeIcon className="h-10 w-10 text-gray-800 border bg-[#deeafd] rounded-3xl p-2" />
        <BellAlertIcon className="h-10 w-10 text-gray-800 border bg-[#deeafd] rounded-3xl p-2" />
        <div className="flex ml-4">
          <UserCircleIcon className="h-10 w-10 text-gray-800 border bg-[#3f6095] rounded-3xl mr-3" />
          <div className="flex flex-col">
            <p className="text-md">John Doe</p>
            <p className="text-sm mt-0 pt-0">@johndoe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
