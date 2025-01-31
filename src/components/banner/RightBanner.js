import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[100px] lgl:w-[500px] lgl:h-[480px] z-10 rounded-md ;"
        src={bannerImg}
        alt="bannerImg"
      />
    </div>
  );
}

export default RightBanner