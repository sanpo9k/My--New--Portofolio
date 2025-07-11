import React from "react";
import { ArrowDownToLine } from "lucide-react";

export default function Navbar() {
  return (
    <div className="pt-4 text-2xl w-full">
      <nav className="bg-black-200 p-5 flex justify-around items-center">
        <div className="text-white font-bold gap-2 flex p-3">
          <h1 className="hover:text-red-500 cursor-crosshair">
            <a href=""></a>Home
          </h1>
          <h1>|</h1>
          <h1 className="hover:text-red-500 cursor-crosshair">
            <a href=""></a>About Me
          </h1>
          <h1>|</h1>
          <h1 className="hover:text-red-500 cursor-crosshair">
            <a href=""></a>Experience
          </h1>
          <h1>|</h1>
          <h1 className="hover:text-red-500 cursor-crosshair">
            <a href=""></a>Project
          </h1>
        </div>
        <div>
          <div className="text-black text-sm font-bold p-3 bg-white rounded-lg hover:bg-red-500 font-inter">
            <button className="flex items-center gap-2">
              <span>
                <ArrowDownToLine className="w-4" />
              </span>
              Download CV
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
