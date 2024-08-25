import React from "react";
import Navbar from "../components/Header/navbar";
import GateImg1 from "../assets/gate-img1.png";
import GateImg2 from "../assets/gate-img2.png";
import GateImg3 from "../assets/gate-img3.png";
import GateImg4 from "../assets/gate-img4.png";

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
            Sandi Yaseen
          </h2>
        </div>
      </div>
      <section className="bg-white dark:bg-gray-900 max-w-screen-xl mx-auto">
        <div className="container px-6 py-10 mx-auto">
          <h3 className="text-[#CB9A6F] text-[28px] font-[600] text-center">
           Sandi
          </h3>
          <p className="text-[#000000] text-[18px] font-[400] text-center">
            Lorem ipsum dolor sit amet consectetur. Arcu at aliquam eu purus
            volutpat. Tincidunt libero nibh potenti sem ac est pellentesque
            proin in. Sagittis duis eget posuere consequat volutpat eu facilisis
            vestibulum aenean. Posuere mauris sed iaculis amet adipiscing
            pretium elementum amet. Sed tincidunt tristique sed augue a ipsum
            tincidunt a volutpat. Lectus amet mauris sed morbi leo nisl lectus
            tortor lectus. Non tempor massa senectus et arcu id sollicitudin.
            Ornare imperdiet quam tempus elementum sapien orci sit. pretium
            elementum amet. Sed tincidunt tristique sed augue a ipsum tincidunt
            a volutpat. Lectus amet mauris sed morbi leo nisl lectus tortor
            lectus. Non tempor massa senectus et arcu id sollicitudin. Ornare
            imperdiet quam tempus elementum sapien orci sit. Adipiscing et quam
            dictum aliquam massa semper.sed augue a ipsum tincidunt a volutpat.
            Lectus amet mauris sed morbi leo nisl lectus tortor lectus. Non
            tempor{" "}
          </p>
          <div className="grid grid-cols-1 gap-4 mt-4 md:mt-8 md:grid-cols-4">
            <div className="overflow-hidden">
              <img
                className="object-cover w-full h-[400px]"
                src={GateImg1}
                alt="Article"
              />

              <div className="p-4">
                <p className="font-open-sans text-[24px] font-semibold text-center">
                  Darkut Valley
                </p>
              </div>
            </div>
            <div className="overflow-hidden">
              <img
                className="object-cover w-full h-[400px]"
                src={GateImg2}
                alt="Article"
              />

              <div className="p-4">
                <p className="font-open-sans text-[24px] font-semibold text-center">
                  Nazbar Valley
                </p>
              </div>
            </div>
            <div className="overflow-hidden">
              <img
                className="object-cover w-full h-[400px]"
                src={GateImg3}
                alt="Article"
              />

              <div className="p-4">
                <p className="font-open-sans text-[24px] font-semibold text-center">
                  Hundur Valley
                </p>
              </div>
            </div>
            <div className="overflow-hidden">
              <img
                className="object-cover w-full h-[400px]"
                src={GateImg4}
                alt="Article"
              />

              <div className="p-4">
                <p className="font-open-sans text-[24px] font-semibold text-center">
                  Thoi Valley
                </p>
              </div>
            </div>
            <div className="overflow-hidden">
              <img
                className="object-cover w-full h-[400px]"
                src={GateImg1}
                alt="Article"
              />

              <div className="p-4">
                <p className="font-open-sans text-[24px] font-semibold text-center">
                  Darkut Valley
                </p>
              </div>
            </div>
            <div className="overflow-hidden">
              <img
                className="object-cover w-full h-[400px]"
                src={GateImg2}
                alt="Article"
              />

              <div className="p-4">
                <p className="font-open-sans text-[24px] font-semibold text-center">
                  Nazbar Valley
                </p>
              </div>
            </div>
            <div className="overflow-hidden">
              <img
                className="object-cover w-full h-[400px]"
                src={GateImg3}
                alt="Article"
              />

              <div className="p-4">
                <p className="font-open-sans text-[24px] font-semibold text-center">
                  Hundur Valley
                </p>
              </div>
            </div>
            <div className="overflow-hidden">
              <img
                className="object-cover w-full h-[400px]"
                src={GateImg4}
                alt="Article"
              />

              <div className="p-4">
                <p className="font-open-sans text-[24px] font-semibold text-center">
                  Thoi Valley
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
