import Image from "next/image";
import React from "react";
import projectVeraImage from "../../public/assets/project/vera/vera_image.jpg";
import Link from "next/link";

const Projects = () => {
  const projectData = [
    {
      title: "VERA-World of Mystic",
      backgroundImg: projectVeraImage,
      tech: "C# UNITY",
      projectUrl: "/",
    },
  ];

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectData.map((item, index) => {
            return (
              <div
                key={index}
                className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
              >
                <Image
                  className="rounded-xl group-hover:opacity-10"
                  src={item.backgroundImg}
                  alt="/"
                  width={"1024"}
                  height={"720"}
                />
                <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <h3 className="text-2xl text-white tracking-wider text-center">
                    {item.title}
                  </h3>
                  <p className="pb-4 pt-2 text-white text-center">
                    {item.tech}
                  </p>
                  <Link href={item.projectUrl}>
                    <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                      More Info
                    </p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
