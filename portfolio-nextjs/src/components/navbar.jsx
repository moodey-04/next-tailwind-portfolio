import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const Navbar = () => {
  const navBars = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Skills",
      url: "/skills",
    },
    {
      name: "Projects",
      url: "/projects",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  const contacts = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
    },
    {
      name: "Github",
      icon: <FaGithub />,
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
    },
    {
      name: "Google",
      icon: <FaGoogle />,
    },
  ];

  const [nav, setNav] = useState(false);

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-z 2xl:px-16">
        <Image src="/navLogo.png" alt="" width="80" height="100" />
        <div>
          <ul className="hidden md:flex p-2">
            {navBars.map((item) => {
              return (
                <Link href={item.url}>
                  <li className={"ml-10 text-sm uppercase hover:border-b"}>
                    {item.name}
                  </li>
                </Link>
              );
            })}
          </ul>
          <div onClick={() => setNav(true)} className="md:hidden p-2">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav && "md:hidden fixed left=0 top-0 w-full h-screen bg-black/75"
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex justify-between w-full items-center">
              <Image src="/navLogo.png" alt="" width="40" height="35" />
              <div
                onClick={() => setNav(false)}
                className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              {navBars.map((item) => {
                return (
                  <Link href={item.url}>
                    <li className={"py-4 text-sm"}>{item.name}</li>
                  </Link>
                );
              })}
            </ul>
            <di className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                {contacts.map((item) => {
                  return (
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                      {item.icon}
                    </div>
                  );
                })}
              </div>
            </di>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
