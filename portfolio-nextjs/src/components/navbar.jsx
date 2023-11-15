import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contacts from "./ui/contact";
import { useRouter } from "next/router";

const Navbar = () => {
  const navBars = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/#about",
    },
    {
      name: "Projects",
      url: "/#projects",
    },
    {
      name: "Skills",
      url: "/#skills",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
  ];

  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  const handleDownLoadCV = () => {
    //todo: download cv pdf
    console.log("download cv pdf");
  };

  useEffect(() => {}, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) setShadow(true);
      else setShadow(false);
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in duration-100"
          : "fixed w-full h-20 z-[100] ease-out duration-100"
      }
    >
      <div className="flex items-center w-full h-full px-z 2xl:px-1 justify-between">
        <Image src="/navLogo.png" alt="" width="80" height="100" />
        <div className="flex items-center">
          <ul className="hidden md:flex p-2 items-center">
            {navBars.map((item) => {
              return (
                <Link href={item.url}>
                  <li className={"ml-10 text-sm uppercase hover:border-b"}>
                    {item.name}
                  </li>
                </Link>
              );
            })}
            <li
              onClick={handleDownLoadCV}
              className={
                "ml-10 text-sm uppercase hover:border-b rounded-lg bg-slate-400 p-4 cursor-pointer mr-2"
              }
            >
              DOWNLOAD CV
            </li>
          </ul>
          <div
            onClick={() => setNav(true)}
            className="md:hidden cursor-pointer"
          >
            <AiOutlineMenu size={25} />
          </div>
          <div
            onClick={handleDownLoadCV}
            className={
              "md:hidden ml-4 text-sm uppercase hover:border-b rounded-lg bg-slate-400 p-4 mr-2 cursor-pointer"
            }
          >
            DOWNLOAD CV
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
                  <Link onClick={() => setNav(false)} href={item.url}>
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
                <Contacts iconSize={3} />
              </div>
            </di>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
