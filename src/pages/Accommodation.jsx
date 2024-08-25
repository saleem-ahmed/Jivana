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
import CalenderIcon from "../assets/calendar.png";
import GuestIcon from "../assets/calendar.png";
import RoomtIcon from "../assets/room.png";
import serImg1 from "../assets/home-ser1.png";
import serImg2 from "../assets/home-ser2.png";
import serImg3 from "../assets/home-ser3.png";
import serImg4 from "../assets/home-ser4.png";
import serImg5 from "../assets/home-ser5.png";
import Serlide from "../assets/serv-slide1.png";
import GateImg1 from "../assets/gate-img1.png";
import GateImg2 from "../assets/gate-img2.png";
import GateImg3 from "../assets/gate-img3.png";
import GateImg4 from "../assets/gate-img4.png";
const Accommodation = () => {
  return (
    <>
      <div className="relative bg-[url('assets/aheader-img.png')] px-4 lg:px-0 py-[60px] lg:py-0 h-full lg:h-[948px] bg-cover bg-no-repeat flex justify-center items-center">
        <div className="w-full absolute top-0">
          <Navbar />
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-[100px] mx-auto max-w-screen-xl">
          <div className="px-3 lg:px-0">
            <h2 className="font-mohave text-3xl mt-5 lg:mt-0 sm:text-4xl text-center md:text-5xl lg:text-6xl xl:text-[94px] font-semibold text-white">
              Accommodation
            </h2>
          </div>
          <div className="max-w-[421px] w-full pt-[30px] pr-[20px] pb-[30px] pl-[20px] gap-[30px] rounded-[10px] bg-white">
            <h2 className="font-open-sans text-[22] text-center md:text-[28px] font-bold leading-[50px] tracking-[0.18em] text-[#CB9A6F]">
              Booking Your Hotel
            </h2>
            <form
              // action=""
              // method="post"
              className="mt-[30px] flex flex-col gap-[16px]"
            >
              <div className="flex flex-col gap-[10px]">
                <label
                  htmlFor=""
                  className="flex gap-[10px] font-open-sans text-[18px] font-semibold leading-[30px] tracking-[0.14em] text-left text-[#444444]"
                >
                  <img
                    className="w-[24px] h-[24px]"
                    src={CalenderIcon}
                    alt=""
                  />
                  Check In
                </label>
                <input
                  type="date"
                  className="h-[45px] border border-solid rounded-lg border-[#CECECE] outline-0 w-full px-3"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <label
                  htmlFor=""
                  className="flex gap-[10px] font-open-sans text-[18px] font-semibold leading-[30px] tracking-[0.14em] text-left text-[#444444]"
                >
                  <img className="w-[24px] h-[24px]" src={GuestIcon} alt="" />
                  Check Out
                </label>
                <input
                  type="date"
                  className="h-[45px] border border-solid border-[#CECECE] rounded-lg outline-0 w-full px-3"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <label
                  htmlFor=""
                  className="flex gap-[10px] font-open-sans text-[18px] font-semibold leading-[30px] tracking-[0.14em] text-left text-[#444444]"
                >
                  <img
                    className="w-[24px] h-[24px]"
                    src={CalenderIcon}
                    alt=""
                  />
                  Guests
                </label>
                <div className="relative z-20">
                  <select className="relative z-20 w-full rounded-lg appearance-none border border-stroke border-[#CECECE] bg-transparent py-[10px] px-5 text-dark-6 outline-none transition">
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
                  <span className="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-[#444444]"></span>
                </div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <label
                  htmlFor=""
                  className="flex gap-[10px] font-open-sans text-[18px] font-semibold leading-[30px] tracking-[0.14em] text-left text-[#444444]"
                >
                  <img className="w-[24px] h-[24px]" src={RoomtIcon} alt="" />
                  Rooms
                </label>
                <div className="relative z-20">
                  <select className="relative z-20 w-full rounded-lg appearance-none border border-stroke border-[#CECECE] bg-transparent py-[10px] px-5 text-dark-6 outline-none transition">
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
                  <span className="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-[#444444]"></span>
                </div>
              </div>
              <button
                type="submit"
                className="relative w-[70%] mx-auto rounded-lg font-open-sans text-[18px] font-semibold leading-[30px] tracking-[0.14em] text-left text-[#444444] flex justify-center gap-[16px] items-center border border-[#CB9A6F] h-[45px]"
              >
                Check Availability
                <span className=" h-[10px] w-[10px] rotate-[-45deg]  border-r-2 border-b-2 border-[#444444]"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center max-w-screen-xl mx-auto md:flex-row sm:px-6 gap-[60px]">
        <div className="flex items-center justify-end  max-w-[509px] h-[473px] w-full">
          <Swiper
            // effect={"flip"}
            // grabCursor={true}
            pagination={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper w-full"
          >
            <SwiperSlide>
              <img src={Serlide} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Serlide} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Serlide} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Serlide} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Serlide} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Serlide} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex items-center py-5 flex-1 md:py-10 px-5 md:px-0">
          <div className="text-left flex flex-col gap-[10px]">
            <h3 className="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] font-semibold leading-7 tracking-[0.18em] text-left text-[#CB9A6F]">
              Rooms
            </h3>
            <h2 className="font-mohave text-xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-[24px] font-medium text-left text-[#000000D1]">
              Find Hotel Rooms, Resorts <br />
              with exciting deals and offers
            </h2>
            <h2 className="font-mohave text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[44px] font-medium leading-10 text-left text-[#000000D1]"></h2>
            <p className="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[18px] font-normal leading-6 text-left text-[#444444]">
              Sukh Cha'n Wellness Club is a pioneering wellness center that
              offers a unique and holistic approach to health and fitness.
              Established in 2005, the club is located in the heart of Lahore,
              Pakistan, and provides a blished in 2005, the .
            </p>
            <h2 className="font-mohave text-xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-[24px] font-medium text-left text-[#000000D1]">
              Services
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-2 items-center">
              <img src={serImg1} alt="" />
              <img src={serImg2} alt="" />
              <img src={serImg3} alt="" />
              <img src={serImg4} alt="" />
              <img src={serImg5} alt="" />
              <button className="p-[7px] text-[15px] rounded-[10px] rounded border-[1px] bg-[#CB9A6F] text-white">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center max-w-screen-xl mx-auto md:flex-row sm:px-6 gap-[60px]">
        <div className="flex items-center py-5 flex-1 md:py-10 px-5 md:px-0">
          <div className="text-left flex flex-col gap-[10px]">
            <h3 className="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] font-semibold leading-7 tracking-[0.18em] text-left text-[#CB9A6F]">
              Rooms
            </h3>
            <h2 className="font-mohave text-xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-[24px] font-medium text-left text-[#000000D1]">
              Find Hotel Rooms, Resorts <br />
              with exciting deals and offers
            </h2>
            <h2 className="font-mohave text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[44px] font-medium leading-10 text-left text-[#000000D1]"></h2>
            <p className="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[18px] font-normal leading-6 text-left text-[#444444]">
              Sukh Cha'n Wellness Club is a pioneering wellness center that
              offers a unique and holistic approach to health and fitness.
              Established in 2005, the club is located in the heart of Lahore,
              Pakistan, and provides a blished in 2005, the .
            </p>
            <h2 className="font-mohave text-xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-[24px] font-medium text-left text-[#000000D1]">
              Services
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-2 items-center">
              <img src={serImg1} alt="" />
              <img src={serImg2} alt="" />
              <img src={serImg3} alt="" />
              <img src={serImg4} alt="" />
              <img src={serImg5} alt="" />
              <button className="p-[7px] text-[15px] rounded-[10px] rounded border-[1px] bg-[#CB9A6F] text-white">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end  max-w-[509px] h-[473px] w-full">
          <Swiper
            // effect={"flip"}
            // grabCursor={true}
            pagination={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper w-full"
          >
            <SwiperSlide>
              <img src={Serlide} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Serlide} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Serlide} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Serlide} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Serlide} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Serlide} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <section className="bg-white dark:bg-gray-900 max-w-screen-xl mx-auto">
        <div className="py-10 mx-auto">
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

             
            </div>
            <div className="overflow-hidden">
              <img
                className="object-cover w-full h-[400px]"
                src={GateImg2}
                alt="Article"
              />

             
            </div>
            <div className="overflow-hidden">
              <img
                className="object-cover w-full h-[400px]"
                src={GateImg3}
                alt="Article"
              />

            </div>
            <div className="overflow-hidden">
              <img
                className="object-cover w-full h-[400px]"
                src={GateImg4}
                alt="Article"
              />

             
            </div>
            
           
          </div>
        </div>
      </section>
    </>
  );
};

export default Accommodation;
