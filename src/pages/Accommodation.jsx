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
import SerImg1 from "../assets/home-ser1.png";
import SerImg2 from "../assets/home-ser2.png";
import SerImg3 from "../assets/home-ser3.png";
import SerImg4 from "../assets/home-ser4.png";
import SerImg5 from "../assets/home-ser5.png";
import SerImg6 from "../assets/home-ser6.png";
import SerImg7 from "../assets/home-ser7.png";
import SerImg8 from "../assets/home-ser8.png";
import SerImg9 from "../assets/home-ser9.png";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";
import Img5 from "../assets/img5.png";
import Img6 from "../assets/img6.png";
import Img7 from "../assets/img7.png";
import Img8 from "../assets/img8.png";
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
              Deluxe Rooms
            </h3>
            <h2 className="font-mohave text-xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-[24px] font-medium text-left text-[#000000D1]">
              A Blend of Tradition and Elegance
            </h2>
            <h2 className="font-mohave text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[44px] font-medium leading-10 text-left text-[#000000D1]"></h2>
            <p className="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[18px] font-normal leading-6 text-left text-[#444444]">
              Our Deluxe Rooms are thoughtfully crafted with locally sourced
              materials such as wood, stone, and handcrafted textiles,
              reflecting the traditional architecture of the Yasin Valley. Each
              room offers a spacious, serene atmosphere where natural elements
              meet modern design.
            </p>
            <h2 className="font-mohave text-xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-[24px] font-medium text-left text-[#000000D1]">
              Services
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-2 items-center">
              <img src={Img1} alt="" />
              <img src={Img2} alt="" />
              <img src={Img3} alt="" />
              <img src={Img4} alt="" />
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
              Executive Suites
            </h3>
            <h2 className="font-mohave text-xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-[24px] font-medium text-left text-[#000000D1]">
              For Those Who Seek More Space and Luxury
            </h2>
            <h2 className="font-mohave text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[44px] font-medium leading-10 text-left text-[#000000D1]"></h2>
            <p className="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[18px] font-normal leading-6 text-left text-[#444444]">
              For guests seeking extra space and an elevated experience, our
              Executive Suites offer a luxurious retreat. These expansive suites
              feature separate living and sleeping areas, ideal for families or
              those looking for additional privacy.
            </p>
            <h2 className="font-mohave text-xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-[24px] font-medium text-left text-[#000000D1]">
              Services
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-2 items-center">
              <img src={Img5} alt="" />
              <img src={Img6} alt="" />
              <img src={Img7} alt="" />
              <img src={Img8} alt="" />
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
      <div className="relative flex flex-col items-center max-w-screen-xl mx-auto md:flex-row sm:px-6 gap-[60px]">
        <div className="flex items-center justify-end  max-w-[509px] h-[473px] w-full">
          <Swiper
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
              Family Rooms
            </h3>
            <h2 className="font-mohave text-xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-[24px] font-medium text-left text-[#000000D1]">
              Comfort and Space for the Whole Family
            </h2>
            <h2 className="font-mohave text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[44px] font-medium leading-10 text-left text-[#000000D1]"></h2>
            <p className="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[18px] font-normal leading-6 text-left text-[#444444]">
              Traveling with family doesn’t mean compromising on comfort. Our
              Family Rooms are designed with both space and relaxation in mind.
              These rooms offer ample room for parents and children, ensuring
              everyone enjoys their stay in complete comfort.
            </p>
            <h2 className="font-mohave text-xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-[24px] font-medium text-left text-[#000000D1]">
              Services
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-2 items-center">
              <img src={Img1} alt="" />
              <img src={Img2} alt="" />
              <img src={Img3} alt="" />
              <img src={Img4} alt="" />
              <button className="p-[7px] text-[15px] rounded-[10px] rounded border-[1px] bg-[#CB9A6F] text-white">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white dark:bg-gray-900 max-w-screen-xl mx-auto">
        <div className="py-10 mx-auto">
          <h3 className="text-[#CB9A6F] text-[28px] font-[600]">
            In-Room Amenities
          </h3>
          <p className="text-[#000000] text-[18px] font-[400]">
            Traveling with family doesn’t mean compromising on comfort. Our
            Family Rooms are designed with both space and relaxation in mind.
            These rooms offer ample room for parents and children, ensuring
            everyone enjoys their stay in complete comfort.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-12 gap-2 items-center mt-5">
            <img src={SerImg1} alt="" />
            <img src={SerImg2} alt="" />
            <img src={SerImg3} alt="" />
            <img src={SerImg4} alt="" />
            <img src={SerImg5} alt="" />
            <img src={SerImg6} alt="" />
            <img src={SerImg7} alt="" />
            <img src={SerImg8} alt="" />
            <img src={SerImg9} alt="" />
            
          </div>
        </div>
      </section>
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
