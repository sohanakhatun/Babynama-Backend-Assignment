import React, { useState } from "react";
import menuIcon from "../Assests/icons8-hamburger-button-50.png";
import closeIcon from "../Assests/icons8-close-50.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isOpen, SetisOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    SetisOpen(!isOpen);
  };

  const artistClickHandler = () => {
   navigate("/add-artist");
  };
  const songClickHandler = () => {
    navigate("/add-songs");
  };
  return (
    <div className="h-fit w-full bg-[#100c08] font-Inter text-white font-medium text-center">
      <nav className="flex flex-row  justify-between lg:justify-evenly bg-[#100c08] font-Inter text-white p-3 text-center items-center">
        <h1 className="font-bold text-2xl text-rose-500">TuneTracker</h1>
        <div className="hidden lg:flex flex-row gap-6 mr-3 font-medium items-center ml-[12%] ">
          <a href="/" className="hover:text-indigo-600">Home</a>
          <a href="/" className="hover:text-indigo-600">Songs</a>
          <a href="/artists" className="hover:text-indigo-600">Artists</a>
          
        </div>
       
        <div className="lg:flex gap-4 mr-[-15%] hidden">
          <button
            className="bg-green-800 rounded-md p-2 text-sm mt-2 hover:bg-blue-800"
            onClick={artistClickHandler}
          >
            Add Artist
          </button>
          <button
            className="bg-green-800 rounded-md p-2 mt-2 text-sm hover:bg-blue-800"
            onClick={songClickHandler}
          >
            Add Songs
          </button>
        </div>
        {isOpen ? (
          <div>
            <img
              src={closeIcon}
              width={30}
              height={30}
              className="block lg:hidden"
              onClick={toggleMenu}
            />
          </div>
        ) : (
          <div>
            {" "}
            <img
              src={menuIcon}
              width={32}
              height={32}
              className="block lg:hidden"
              onClick={toggleMenu}
            />
          </div>
        )}
      </nav>
      <div className="pb-2">
        {isOpen ? (
          <div className="flex flex-col gap-4 lg:hidden">
            <a href="/" className="hover:text-indigo-600">Home</a>
            <a href="/" className="hover:text-indigo-600">Songs</a>
            <a href="/artists" className="hover:text-indigo-600">Artists</a>
            <div className="flex flex-row flex-wrap justify-center gap-4 ">
          <button
            className="bg-green-800 rounded-md p-2 text-sm mt-2 hover:bg-blue-800"
            onClick={artistClickHandler}
          >
            Add Artist
          </button>
          <button
            className="bg-green-800 rounded-md p-2 mt-2 text-sm hover:bg-blue-800"
            onClick={songClickHandler}
          >
            Add Songs
          </button>
        </div>
          </div>
        ) : (
          <div className="hidden"></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
