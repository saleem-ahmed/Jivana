import React from "react";
import Navbar from "../components/Header/navbar";

const Blog = () => {
  return (
    <>
      {/* <div className="bg-[url('assets/bheader-img.png')] h-[684px] bg-cover bg-no-repeat flex justify-center items-center"> */}
      <div className="relative bg-[url('assets/bheader-img.png')] h-[684px] bg-cover bg-no-repeat flex justify-center items-center">
        <div className="absolute top-0 w-full">
          <Navbar />
        </div>
        <div>
          <h2 className="font-mohave text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[94px] font-semibold leading-tight sm:leading-[3rem] md:leading-[4rem] lg:leading-[5rem] xl:leading-[112px] tracking-[0.14em] text-left text-white">
            Blogs
          </h2>
        </div>
      </div>
      <div className="flex justify-center items-center h-[40vh] font-mohave text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[94px] font-semibold leading-tight sm:leading-[3rem] md:leading-[4rem] lg:leading-[5rem] xl:leading-[112px] tracking-[0.14em] text-left">
        <p className="font-italic">Coming Soon...</p>
      </div>
    </>
  );
};

export default Blog;
