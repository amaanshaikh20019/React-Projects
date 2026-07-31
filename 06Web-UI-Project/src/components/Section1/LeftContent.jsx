import React from "react";
import HeroText from "./HeroText";
import Arroe from "./Arroe";

const LeftContent = () => {
  return (
    <div className="h-full flex flex-col justify-between w-1/3">
      <HeroText />
      <Arroe />
    </div>
  );
};

export default LeftContent;
