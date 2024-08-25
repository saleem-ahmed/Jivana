import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import Navbar from "../components/Header/navbar";
import AboutImg1 from "../assets/about-img1.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
import comma from "../assets/cooma.svg";
import person1 from "../assets/person1.svg";
import MissionImg from "../assets/mission.png";
import VisionImg from "../assets/vision.png";
import ValueImg from "../assets/values.png";

const About = () => {
  const swiperRef = React.useRef(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <>
      <div className="relative bg-[url('assets/aboutheader-img.png')] h-[684px] bg-cover bg-no-repeat flex justify-center items-center">
        <div className="absolute top-0 w-full">
          <Navbar />
        </div>
        <div>
          <h2 className="font-mohave text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[94px] font-semibold leading-tight sm:leading-[3rem] md:leading-[4rem] lg:leading-[5rem] xl:leading-[112px] tracking-[0.14em] text-left text-white">
            About Us
          </h2>
        </div>
      </div>
      <div className="relative flex flex-col items-center max-w-screen-xl mx-auto md:flex-row  gap-[60px] py-10">
        <div className="flex items-center justify-end  max-w-[609px] h-[421px] w-full">
          <img className="w-full h-full" src={AboutImg1} alt="" />
        </div>
        <div className="flex items-center py-5 flex-1 md:py-10 px-5 md:px-0">
          <div className="text-left flex flex-col gap-[20px]">
            <p className="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[18px] font-normal leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[41px] text-left text-[#444444]">
              Lorem ipsum dolor sit amet consectetur. Arcu at aliquam eu purus
              volutpat. Tincidunt libero nibh potenti sem ac est pellentesque
              proin in. Sagittis duis eget posuere consequat volutpat eu
              facilisis vestibulum aenean. Posuere mauris sed iaculis amet
              adipiscing pretium elementum amet. Sed tincidunt tristique sed
              augue a ipsum tincidunt a volutpat. Lectus amet mauris sed morbi
              leo nisl lectus tortor lectus. Non tempor massa senectus et arcu.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#FAF5F1BD]">
        <div className="max-w-screen-xl mx-auto flex flex-wrap py-24">
          <div className="xl:w-[33%] lg:w-[50%] md:w-full px-8 py-6 border-none flex flex-col items-center gap-[20px]">
            <img className="w-[51.26px] h-[50px]" src={MissionImg} alt="" />
            <h2 className="text-lg sm:text-xl text-[#CB9A6F] font-medium title-font mb-2">
              Mission
            </h2>
            <p className="leading-relaxed text-center mb-4">
              Lorem ipsum dolor sit amet consectetur. Arcu at aliquam eu purus
              volutpat. Tincidunt libero nibh potenti sem ac est pellentesque
              proin in. Sagittis duis eget posuere consequat volutpat eu
              facilisis vestibulum aenean. Posuere mauris sed iaculis amet
              adipiscing
            </p>
          </div>
          <div className="xl:w-[33%] lg:w-[50%] md:w-full px-8 py-6 border-l-2 border-[#000000] border-opacity-60 flex flex-col items-center gap-[20px]">
            <img className="w-[51.26px] h-[50px]" src={VisionImg} alt="" />
            <h2 className="text-lg sm:text-xl text-[#CB9A6F] font-medium title-font mb-2">
              Vision
            </h2>
            <p className="leading-relaxed text-center mb-4">
              Lorem ipsum dolor sit amet consectetur. Arcu at aliquam eu purus
              volutpat. Tincidunt libero nibh potenti sem ac est pellentesque
              proin in. Sagittis duis eget posuere consequat volutpat eu
              facilisis vestibulum aenean. Posuere mauris sed iaculis amet
              adipiscing
            </p>
          </div>
          <div className="xl:w-[33%] lg:w-[50%] md:w-full px-8 py-6 border-l-2 border-[#000000] border-opacity-60 flex flex-col items-center gap-[20px]">
            <img className="w-[51.26px] h-[50px]" src={ValueImg} alt="" />
            <h2 className="text-lg sm:text-xl text-[#CB9A6F] font-medium title-font mb-2">
              Values
            </h2>
            <p className="leading-relaxed text-center mb-4">
              Lorem ipsum dolor sit amet consectetur. Arcu at aliquam eu purus
              volutpat. Tincidunt libero nibh potenti sem ac est pellentesque
              proin in. Sagittis duis eget posuere consequat volutpat eu
              facilisis vestibulum aenean. Posuere mauris sed iaculis amet
              adipiscing
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="max-w-screen-xl bg-[url('assets/visit-back.png')] h-[535px] mx-auto bg-cover bg-no-repeat rounded-[10px] flex flex-col justify-center items-center">
        <p className="text-white text-3xl font-semibold sm:text-4xl">
          Lets Visit Jivana Hotel and Resort and Enjoy
        </p>
        <p className="text-blue-100 mt-3 text-center  px-4">
          Sukh Cha'n Wellness Club is a pioneering wellness center that offers a
          unique and holistic approach to health and fitness. Established in
          2005, the club is
        </p>
        <form
          // action=""
          // method="post"
          className="mt-[30px] flex flex-row gap-[10px]"
        >
          <div className="flex flex-col gap-[10px]">
            <input
              type="date"
              className="h-[45px] border border-solid rounded-lg border-[#CECECE] outline-0 w-full px-3"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <input
              type="date"
              className="h-[45px] border border-solid border-[#CECECE] rounded-lg outline-0 w-full px-3"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="relative z-20">
              <select className="relative z-20 w-full rounded-lg appearance-none border border-stroke border-[#CECECE]  py-[10px] px-5 text-dark-6 outline-none transition">
                <option value="" className="dark:bg-dark-2"></option>
                <option value="" className="dark:bg-dark-2"></option>
                <option value="" className="dark:bg-dark-2">
                  2
                </option>
                <option value="" className="dark:bg-dark-2">
                  3
                </option>
                <option value="" className="dark:bg-dark-2">
                  4
                </option>
                <option value="" className="dark:bg-dark-2">
                  5
                </option>
                <option value="" className="dark:bg-dark-2">
                  6
                </option>
                <option value="" className="dark:bg-dark-2">
                  7
                </option>
                <option value="" className="dark:bg-dark-2">
                  8
                </option>
                <option value="" className="dark:bg-dark-2">
                  9
                </option>
                <option value="" className="dark:bg-dark-2">
                  10
                </option>
              </select>
              <span className="absolute z-20 right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-[#444444]"></span>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="relative z-20">
              <select className="relative z-20 w-full rounded-lg appearance-none border border-stroke border-[#CECECE]  py-[10px] px-5 text-dark-6 outline-none transition">
                <option value="" className="dark:bg-dark-2"></option>
                <option value="" className="dark:bg-dark-2">
                  1
                </option>
                <option value="" className="dark:bg-dark-2">
                  2
                </option>
                <option value="" className="dark:bg-dark-2">
                  3
                </option>
                <option value="" className="dark:bg-dark-2">
                  4
                </option>
                <option value="" className="dark:bg-dark-2">
                  5
                </option>
                <option value="" className="dark:bg-dark-2">
                  6
                </option>
                <option value="" className="dark:bg-dark-2">
                  7
                </option>
                <option value="" className="dark:bg-dark-2">
                  8
                </option>
                <option value="" className="dark:bg-dark-2">
                  9
                </option>
                <option value="" className="dark:bg-dark-2">
                  10
                </option>
              </select>
              <span className="absolute z-20 right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-[#444444]"></span>
            </div>
          </div>
          {/* <button
            type="submit"
            className="relative w-[70%] mx-auto rounded-lg font-open-sans text-[18px] font-semibold leading-[30px] tracking-[0.14em] text-left text-[#444444] flex justify-center gap-[16px] items-center border border-[#CB9A6F] h-[45px]"
          >
            Check Availability
            <span className=" h-[10px] w-[10px] rotate-[-45deg]  border-r-2 border-b-2 border-[#444444]"></span>
          </button> */}
        </form>
      </div>
      <section className=" box-border">
        <div className="ps-0 md:ps-28 mx-auto ">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-[52px] items-center">
            <div className="px-4 px-md-0  max-w-[395px] w-full relative testimonals-swiper">
              <h5 className="text-[24px] font-[600] text-[#E1B524]">
                Our Team
              </h5>
              <p className="text-[38px] font-[500] leading-[50px] text-[#000000] mt-4">
                Lorem ipsum dolor sit amet consectetur. Arcu at aliquam eu purus
                v
              </p>
              <div className="flex items-center mt-10">
                <div className="relative flex gap-[16px]">
                  <button
                    className="swiper-button-prev after:hidden"
                    onClick={handlePrev}
                    style={{ all: "unset", cursor: "pointer" }}
                  >
                    <img className="w-[24px] h-[24px]" src={left} alt="" />
                  </button>
                  <button
                    className="swiper-button-next after:hidden"
                    style={{ all: "unset", cursor: "pointer" }}
                    onClick={handleNext}
                  >
                    <img className="w-[24px] h-[24px]" src={right} alt="" />
                  </button>
                </div>
                <p className="text-[18px] text-[#444444] font-[400] ps-10">
                  Lorem ipsum dolor sit amet con
                </p>
              </div>
            </div>
            <div className="flex-1 px-4 px-md-0 bg-[#CB9A6F1A] w-full lg:w-1/3 py-10">
              <Swiper
                loop={true}
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                  1100: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                }}
                navigation={false}
                modules={[Navigation]}
                ref={swiperRef}
                className="mySwiper pt-12 pb-12  max-w-[900px] w-full"
              >
                <SwiperSlide>
                  <div className="relative w-full h-fit px-6 shadow-lg bg-white rounded-[10px]">
                    <div className="flex flex-col justify-center items-center">
                      <img
                        // className="absolute -top-[60px] z-20 !w-[129px] !h-[129px] object-contain"
                        src={person1}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center pb-6">
                      <h3 className="text-[24px] font-[600] text-[#E1B524]">
                        David Werner
                      </h3>
                      <p className="text-[16px] font-[400] text-[#444444] leading-[37px]">
                        Chief Executive Officer
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative w-full h-fit px-6 shadow-lg bg-white rounded-[10px]">
                    <div className="flex flex-col justify-center items-center">
                      <img
                        // className="absolute -top-[60px] z-20 !w-[129px] !h-[129px] object-contain"
                        src={person1}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center pb-6">
                      <h3 className="text-[24px] font-[600] text-[#E1B524]">
                        David Werner
                      </h3>
                      <p className="text-[16px] font-[400] text-[#444444] leading-[37px]">
                        Chief Executive Officer
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative w-full h-fit px-6 shadow-lg bg-white rounded-[10px]">
                    <div className="flex flex-col justify-center items-center">
                      <img
                        // className="absolute -top-[60px] z-20 !w-[129px] !h-[129px] object-contain"
                        src={person1}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center pb-6">
                      <h3 className="text-[24px] font-[600] text-[#E1B524]">
                        David Werner
                      </h3>
                      <p className="text-[16px] font-[400] text-[#444444] leading-[37px]">
                        Chief Executive Officer
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative w-full h-fit px-6 shadow-lg bg-white rounded-[10px]">
                    <div className="flex flex-col justify-center items-center">
                      <img
                        // className="absolute -top-[60px] z-20 !w-[129px] !h-[129px] object-contain"
                        src={person1}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center pb-6">
                      <h3 className="text-[24px] font-[600] text-[#E1B524]">
                        David Werner
                      </h3>
                      <p className="text-[16px] font-[400] text-[#444444] leading-[37px]">
                        Chief Executive Officer
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
