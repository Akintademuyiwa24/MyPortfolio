import React from "react";
import Logo from "../logo.svg";

function Footer() {
  return (
    <div className="bg-gray-900 text-white text-center mt-4 p-4">
      <div className="flex align-center justify-center">
        <img src={Logo} alt="logo" width={30} className="text-blue-800" />
        <h1 className="font-bold  pl-0 text-sm">EmyraldCorp</h1>
      </div>
    </div>
  );
}

export default Footer;
