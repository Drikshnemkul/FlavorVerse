import React, { useState } from "react";
import Logo from "../images/logo.png";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full h-16 px-4 fixed z-50 md:px-5 py-2 bg-black ">
      <div className="flex justify-between items-center text-white">
        <Link to={"/"}>
          <div className="h-10 flex items-center">
            <img
              src={Logo}
              alt="Logo"
              className="hidden md:block w-8 h-8 lg:w-20 lg:h-20"
            />
            <p className="inset-1/4 font-sans font-bold italic text-2xl ">
              FlavorVerse
            </p>
          </div>
        </Link>

        <nav className="font-bold w-1/3 gap-4 md:gap-6 md:text-xl text-base md:flex hidden  ">
          <Link to={"home"}>Home</Link>
          <Link to={"recipe"}>Explore</Link>
          <Link to={"favorites"}>Favorites</Link>
        </nav>

        <Button
          title="Sign in"
          containerStyle=" font-bold hidden md:block bg-transparent border-2 border-green-500 text-white hover:border-green-700 rounded-full min-w-[100px] "
        />
        <div className="flex flex-col">
          <button
            className="block md:hidden text-white text-2xl"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <AiOutlineClose /> : <HiMenu />}
            <nav
              className={`  font-bold bg-black gap-4 md:gap-6 md:text-xl text-base md:flex ${
                open ? "block" : "hidden"
              }`}
            >
              <Link to={"home"}>Home</Link>
              <Link to={"recipe"}>Explore</Link>
              <Link to={"favorites"}>Favorites</Link>
              <Link to={"signup"}>Signup</Link>
            </nav>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
