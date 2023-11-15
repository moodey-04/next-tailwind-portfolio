import React from "react";
import Image from "next/image";

const Skills = () => {
  const skills = [
    {
      name: "C#",
      imageURL: "/navLogo.png",
    },
    {
      name: "C#",
      imageURL: "/navLogo.png",
    },
    {
      name: "C#",
      imageURL: "/navLogo.png",
    },
  ];

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((item) => {
            return (
              <div className="p-6 shadow-xl rounded-lg hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={item.imageURL} alt="" width="80" height="100" />
                  </div>
                  <div className="flex flex-col items-center justify-center text-xl">
                    <h3>{item.name}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
