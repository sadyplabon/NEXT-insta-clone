import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { PiPlusCircleBold } from "react-icons/pi";

export default function Header() {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        {/* Left */}
        <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
          <Image
            src={"/Instagram.png"}
            layout="fill"
            className="object-contain"
            alt="instagram"
          />
        </div>
        <div className="h-24 w-10 relative lg:hidden cursor-pointer">
          <Image
            src={"/Instagram2.png"}
            layout="fill"
            className="object-contain"
            alt="instagram"
          />
        </div>
        <div className="relative mt-1">
          {/* Middle */}
          <div className="absolute top-2 left-2">
            <IoSearchOutline className="h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="search"
            className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md p-2"
          />
        </div>
        <div>
          {/* Right */}
          <div className="flex space-x-4 items-center">
            <AiFillHome className="hidden md:inline-flex text-2xl cursor-pointer hover:scale-125 transition-transform duration-200" />
            <PiPlusCircleBold className="text-2xl cursor-pointer hover:scale-125 transition-transform duration-200" />
            <img
              src={"/Instagram2.png"}
              alt="user-image"
              className="h-10 rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
