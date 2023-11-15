import React from "react";
import Contacts from "./ui/contact";
import About from "./about";

const Main = () => {
  return (
    <div id='main' className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET"S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Nuttapon</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Game developer with 4 years of experience in updating, repairing,
            and modifying code by unity engine. And also upload to google play
            store, apple store and steam. Collaborated with artists and
            designers to successfully create games or applications.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Contacts iconSize={6} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
