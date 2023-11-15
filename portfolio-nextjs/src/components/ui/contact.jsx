import React from "react";
import { FaLinkedinIn, FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const Contacts = ({ iconSize }) => {
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

  return (
    <>
      {contacts.map((item) => {
        return (
          <div
            className={`rounded-full shadow-lg p-${iconSize} shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-500`}
          >
            {item.icon}
          </div>
        );
      })}
    </>
  );
};

export default Contacts;
