import React from "react";
import Navbar from "../components/Header/navbar";
import GateImg from "../assets/gat-img1.png";
import GateImg1 from "../assets/gate-img1.png";
import GateImg2 from "../assets/gate-img2.png";
import GateImg3 from "../assets/gate-img3.png";
import GateImg4 from "../assets/gate-img4.png";
const Gateway = () => {
  return (
    <>
      <div className="relative bg-[url('assets/gheader-img.png')] h-[684px] bg-cover bg-no-repeat flex justify-center items-center">
        <div className="absolute top-0 w-full">
          <Navbar />
        </div>
        <div>
          <h2 className="font-mohave text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[94px] font-semibold leading-tight sm:leading-[3rem] md:leading-[4rem] lg:leading-[5rem] xl:leading-[112px] tracking-[0.14em] text-left text-white">
            Getaways Of Jivana
          </h2>
        </div>
      </div>
      <div class="relative flex flex-col items-center max-w-screen-xl mx-auto md:flex-row sm:px-6 gap-[60px]">
        <div class="flex max-w-[569px] h-full w-full">
          <img src={GateImg} alt="" />
        </div>
        <div class="flex items-center py-5 flex-1 md:py-10 px-5 md:px-0">
          <div class="text-left flex flex-col items-start gap-[20px]">
            <h2 class="font-mohave text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[44px] font-medium leading-10 sm:leading-11 md:leading-12 lg:leading-[50px] xl:leading-[50px] text-left text-[#000000D1]">
              Sandhi
            </h2>
            <p class="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[18px] font-normal leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[41px] text-left text-[#444444]">
              Lorem ipsum dolor sit amet consectetur. Arcu at aliquam eu purus
              volutpat. Tincidunt libero nibh potenti sem ac est pellentesque
              proin in. Sagittis duis eget posuere consequat volutpat eu
              facilisis vestibulum aenean. Posuere mauris sed iaculis amet
              adipiscing pretium elementum amet. Sed tincidunt tristique sed
              augue a ipsum tincidunt a volutpat. Lectus amet mauris sed morbi
              leo nisl lectus tortor lectus. Non tempor massa senectus et arcu
              id sollicitudin. Ornare imperdiet quam tempus.
            </p>
            <button className="p-[7px] text-lg rounded-[10px] rounded border-transparent border-[1px] bg-[#CB9A6F] text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
      <section className="bg-white dark:bg-gray-900 max-w-screen-xl mx-auto">
        <div className="container px-6 py-10 mx-auto">
          <h3 className="text-[#CB9A6F] text-[28px] font-[600]">
            Explore More
          </h3>
          <p className="text-[#000000] text-[18px] font-[400]">
            m ipsum dolor sit amet consectetur adipiscing elit Ut et massa
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

export default Gateway;
