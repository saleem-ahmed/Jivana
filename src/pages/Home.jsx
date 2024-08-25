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
import AboutImg from "../assets/about-img.png";
import serImg1 from "../assets/home-ser1.png";
import serImg2 from "../assets/home-ser2.png";
import serImg3 from "../assets/home-ser3.png";
import serImg4 from "../assets/home-ser4.png";
import serImg5 from "../assets/home-ser5.png";
import Serlide from "../assets/serv-slide1.png";
import chooseImg from "../assets/choose-img.png";
import C1 from "../assets/c-img1.png";
import C2 from "../assets/c-img2.png";
import C3 from "../assets/c-img3.png";
import left from "../assets/left.png";
import left1 from "../assets/left1.png";
import right from "../assets/right.png";
import right1 from "../assets/right1.png";
import comma from "../assets/cooma.svg";
import person1 from "../assets/person1.svg";
import person2 from "../assets/person1.png";
import img1 from "../assets/g-img1.png";
import img2 from "../assets/g-img2.png";
import img3 from "../assets/g-img3.png";
import img4 from "../assets/g-img4.png";
import img5 from "../assets/g-img5.png";
import img6 from "../assets/g-img6.png";
import user from "../assets/user2.svg";
import mail from "../assets/mail.svg";
import Map from "../assets/map.png";
import AboutImg1 from "../assets/about-img2.png";
const Home = () => {
  const swiperRef = React.useRef(null);
  const swiperRef1 = React.useRef(null);
  const swiperRef2 = React.useRef(null);

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

  const handlePrev1 = () => {
    if (swiperRef1.current && swiperRef1.current.swiper) {
      swiperRef1.current.swiper.slidePrev();
    }
  };

  const handleNext1 = () => {
    if (swiperRef1.current && swiperRef1.current.swiper) {
      swiperRef1.current.swiper.slideNext();
    }
  };

  return (
    <>
      <div className="relative bg-[url('assets/header-img.png')] px-4 lg:px-0 py-[60px] lg:py-0 h-full lg:h-[948px] bg-cover bg-no-repeat flex justify-center items-center">
        <div className="w-full absolute top-0">
          <Navbar />
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-[100px] mx-auto max-w-screen-xl">
          <div className="px-3 lg:px-0">
            <h2 className="font-mohave text-3xl mt-5 lg:mt-0 sm:text-4xl text-center md:text-5xl lg:text-6xl lg:text-left xl:text-[94px] font-semibold text-white">
              Your Home Away From Home
            </h2>
            <p className="text-white text-center lg:text-left">
              Sukh Cha'n Wellness Club's mission is to provide a conducive and
              congenial environment to everyone and stand out in the wellnes
            </p>
          </div>
          <div className="max-w-[421px] w-full pt-[30px] pr-[20px] pb-[30px] pl-[20px] gap-[30px] rounded-[10px] bg-white">
            <h2 className="font-open-sans text-[22] text-center md:text-[28px] font-bold leading-[50px] tracking-[0.18em] text-[#CB9A6F]">
              Booking Your Hotel
            </h2>
            <form
              // action=""
              // method="post"
              className="mt-[30px] flex flex-col gap-[10px]"
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
        <div className="flex items-center py-5 flex-1 md:py-10 px-5 md:px-0">
          <div className="text-left flex flex-col gap-[20px]">
            <h3 className="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] font-semibold leading-7 sm:leading-8 md:leading-9 lg:leading-10 xl:leading-[50px] tracking-[0.18em] text-left text-[#CB9A6F]">
              ABOUT
            </h3>
            <h2 className="font-mohave text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[44px] font-medium leading-10 sm:leading-11 md:leading-12 lg:leading-[50px] xl:leading-[50px] text-left text-[#000000D1]">
              Discover Our Story
            </h2>
            <p className="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[18px] font-normal leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[41px] text-left text-[#444444]">
              This is yours to reach—a place of peace and opulence, the most
              exclusive retreat on the river bank of the mystical Yasin Valley,
              the Ghizer District. The resort has been harmoniously interwoven
              with traditional local architecture and the high Himalayan
              landscapes to ooze elegance through modern design. Jivana means
              celebrating life and exuberance, doled out to you in an immersive
              manner, promising to rejuvenate the senses with cultural opulence
              at every step.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end  max-w-[569px] h-[470px] w-full">
          <img className="w-full h-full" src={AboutImg} alt="" />
        </div>
      </div>
      <div className="relative flex flex-col items-center max-w-screen-xl mx-auto md:flex-row sm:px-6 gap-[60px]">
        <div className="flex items-center justify-end max-w-[609px] h-[473px] w-full relative">
          <Swiper
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper w-full"
          >
            <SwiperSlide>
              <img src={Serlide} alt="Slide 1" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={Serlide} alt="Slide 2" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={Serlide} alt="Slide 3" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={Serlide} alt="Slide 4" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={Serlide} alt="Slide 5" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={Serlide} alt="Slide 6" />
            </SwiperSlide>
          </Swiper>

          <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer after:hidden w-max">
            <img className="w-[50px] h-[50px] object-cover" src={left1} alt="" />
          </div>
          <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer after:hidden w-max">
            <img className="w-[50px] h-[50px] object-cover" src={right1} alt="" />
          </div>
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
              <img src={serImg1} alt="Service 1" />
              <img src={serImg2} alt="Service 2" />
              <img src={serImg3} alt="Service 3" />
              <img src={serImg4} alt="Service 4" />
              <img src={serImg5} alt="Service 5" />
              <button className="p-[7px] text-[15px] rounded-[10px] rounded border-[1px] bg-[#CB9A6F] text-white">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('assets/home-about.png')] bg-cover bg-no-repeat h-[850px] flex flex-col justify-center items-start">
        <div className="max-w-screen-xl mx-auto flex">
          <div className="w-full flex flex-col items-start gap-[20px] px-3 md:px-0">
            <h2 className="font-mohave text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[44px] font-medium leading-10 sm:leading-11 md:leading-12 lg:leading-[50px] xl:leading-[50px] text-left text-[#fff]">
              Jivana Hotel and Resort
            </h2>
            <p className="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[18px] font-normal leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[41px] text-left text-[#fff]">
              As the Sanskrit term Jivana means life and vitality, the resort is
              designed with an essence of the traditional materials of wood,
              mud, and stones together with the surroundings to perfectly
              harmoniously and complement nature. In seeking to define the ideal
              resort, guests will find a modern sanctuary that reflects both
              local heritage and architectural wisdom.
            </p>
            <button className="p-[7px] text-lg rounded-[10px] rounded border-transparent border-[1px] bg-[#CB9A6F] text-white">
              Book Now
            </button>
          </div>
          <div className=" md:w-[40%]"></div>
        </div>
      </div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 flex flex-col md:flex-row">
            <div>
              <div className="p-4 flex flex-col items-start justify-center gap-4">
                <span className="font-open-sans text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-semibold leading-[30px] sm:leading-[40px] md:leading-[50px] tracking-[0.1em] sm:tracking-[0.12em] md:tracking-[0.15em] lg:tracking-[0.18em] text-left sm:text-center md:text-left text-[#CB9A6F]">
                  Why Choose Us
                </span>
                <h3 className="font-mohave text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[28px] font-medium leading-[40px] sm:leading-[45px] md:leading-[50px] text-left text-[#000000D1]">
                  An Exceptionally Unique Experience Tailored To You
                </h3>
                <p className="text-[18px]">
                  Sukh Cha'n Wellness Club is a pioneering wellness center that
                  offers a unique and holistic approach to health and fitness.
                  Established in 2005, the club is located in the heart of
                  Lahore, Pakistan, and provides a variety of facilities under
                  one roof to help members achi-art facility that caters to
                  individuals who seek an exclusive wellness experience.
                </p>
                <button className="p-[7px] text-lg rounded-[10px] rounded border-[1px] bg-[#CB9A6F] text-white">
                  Book Now
                </button>
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col items-center md:items-start lg:flex-row gap-3">
              <img className="max-w-[500px] w-full" src={chooseImg} alt="" />
              <div className="flex flex-col items-between px-4 md:px-0">
                <div className="flex flex-col gap-[10px]">
                  <h3 className="flex items-center gap-3">
                    <img className="w-[23px] h-[23px]" src={C1} alt="" />
                    <span className="font-open-sans text-[12px] sm:text-[20px] md:text-[24px] font-semibold text-[#444444]">
                      Our Customer
                    </span>
                  </h3>
                  <p className="font-open-sans text-[14px] sm:text-[16px] md:text-[18px] font-normal text-[#444444]">
                    Sukh Cha'n Wellness Club is a pioneering wellness center
                    that offers a unique and holistic approach to health and
                    fitness. Established in n
                  </p>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="flex items-center gap-3">
                    <img className="w-[23px] h-[23px]" src={C2} alt="" />
                    <span className="font-open-sans text-[12px] sm:text-[20px] md:text-[24px] font-semibold text-[#444444]">
                      Our Rooms
                    </span>
                  </h3>
                  <p className="font-open-sans text-[14px] sm:text-[16px] md:text-[18px] font-normal text-[#444444]">
                    Sukh Cha'n Wellness Club is a pioneering wellness center
                    that offers a unique and holistic approach to health and
                    fitness. Established in n
                  </p>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="flex items-center gap-3">
                    <img className="w-[23px] h-[23px]" src={C3} alt="" />
                    <span className="font-open-sans text-[12px] sm:text-[20px] md:text-[24px] font-semibold text-[#444444]">
                      Our Services
                    </span>
                  </h3>
                  <p className="font-open-sans text-[14px] sm:text-[16px] md:text-[18px] font-normal text-[#444444]">
                    Sukh Cha'n Wellness Club is a pioneering wellness center
                    that offers a unique and holistic approach to health and
                    fitness. Established in n
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonals */}
      <section className="mt-10 box-border">
        <div className="ps-0 md:ps-28 mx-auto ">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-[52px]">
            <div className="px-4 px-md-0 py-10 md:py-[113px] max-w-[395px] w-full relative testimonals-swiper">
              <h5 className="text-[24px] font-[600] text-[#E1B524]">
                Testimonals
              </h5>
              <p className="text-[38px] font-[500] leading-[50px] text-[#000000] mt-4">
                Testimonial Don't Believe Me Check What Client Think Of Us
              </p>
              <div className="flex items-center mt-10">
                <div className="relative flex gap-[16px]">
                  <button
                    className="swiper-button-prev after:hidden"
                    onClick={handlePrev1}
                    style={{ all: "unset", cursor: "pointer" }}
                  >
                    <img className="w-[24px] h-[24px]" src={left} alt="" />
                  </button>
                  <button
                    className="swiper-button-next after:hidden"
                    style={{ all: "unset", cursor: "pointer" }}
                    onClick={handleNext1}
                  >
                    <img className="w-[24px] h-[24px]" src={right} alt="" />
                  </button>
                </div>
                <p className="text-[18px] text-[#444444] font-[400] ps-10">
                  There are many variations
                </p>
              </div>
            </div>
            <div className="flex-1 px-4 px-md-0 bg-[#CB9A6F1A] w-full lg:w-1/3 ps-4 md:ps-16 ">
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
                ref={swiperRef1}
                className="mySwiper2 pt-24 pb-16  max-w-[900px] w-full"
              >
                <SwiperSlide>
                  <div className="pb-[49px] relative w-full h-fit px-6 shadow-lg bg-white rounded-[10px]">
                    <div className="flex flex-col justify-center items-center">
                      <img
                        className="absolute -top-[60px] z-20 !w-[129px] !h-[129px] object-contain"
                        src={person1}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center  pt-16">
                      <img
                        className=" !h-[18px] object-contain"
                        src={comma}
                        alt=""
                      />
                      <h3 className="text-[24px] font-[600] text-[#E1B524] pt-4">
                        David Werner
                      </h3>
                      <p className="text-[16px] font-[400] text-[#444444] leading-[37px]">
                        hsdjhabdjhasvdjhsavd
                      </p>
                      <p className="text-center pt-6 text-[18px] font-[400] leading-[37px] text-[#444444]">
                        Sukh Cha'n Wellness Club is a pioneering wellness center
                        that offers a unique and holistic a
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="pb-[49px] relative w-full h-fit px-6 shadow-lg bg-white rounded-[10px]">
                    <div className="flex flex-col justify-center items-center">
                      <img
                        className="absolute -top-[60px] z-20 !w-[129px] !h-[129px] object-contain"
                        src={person1}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center  pt-16">
                      <img
                        className=" !h-[18px] object-contain"
                        src={comma}
                        alt=""
                      />
                      <h3 className="text-[24px] font-[600] text-[#E1B524] pt-4">
                        David Werner
                      </h3>
                      <p className="text-[16px] font-[400] text-[#444444] leading-[37px]">
                        hsdjhabdjhasvdjhsavd
                      </p>
                      <p className="text-center pt-6 text-[18px] font-[400] leading-[37px] text-[#444444]">
                        Sukh Cha'n Wellness Club is a pioneering wellness center
                        that offers a unique and holistic a
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="pb-[49px] relative w-full h-fit px-6 shadow-lg bg-white rounded-[10px]">
                    <div className="flex flex-col justify-center items-center">
                      <img
                        className="absolute -top-[60px] z-20 !w-[129px] !h-[129px] object-contain"
                        src={person1}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center  pt-16">
                      <img
                        className=" !h-[18px] object-contain"
                        src={comma}
                        alt=""
                      />
                      <h3 className="text-[24px] font-[600] text-[#E1B524] pt-4">
                        David Werner
                      </h3>
                      <p className="text-[16px] font-[400] text-[#444444] leading-[37px]">
                        hsdjhabdjhasvdjhsavd
                      </p>
                      <p className="text-center pt-6 text-[18px] font-[400] leading-[37px] text-[#444444]">
                        Sukh Cha'n Wellness Club is a pioneering wellness center
                        that offers a unique and holistic a
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="pb-[49px] relative w-full h-fit px-6 shadow-lg bg-white rounded-[10px]">
                    <div className="flex flex-col justify-center items-center">
                      <img
                        className="absolute -top-[60px] z-20 !w-[129px] !h-[129px] object-contain"
                        src={person1}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center  pt-16">
                      <img
                        className=" !h-[18px] object-contain"
                        src={comma}
                        alt=""
                      />
                      <h3 className="text-[24px] font-[600] text-[#E1B524] pt-4">
                        David Werner
                      </h3>
                      <p className="text-[16px] font-[400] text-[#444444] leading-[37px]">
                        hsdjhabdjhasvdjhsavd
                      </p>
                      <p className="text-center pt-6 text-[18px] font-[400] leading-[37px] text-[#444444]">
                        Sukh Cha'n Wellness Club is a pioneering wellness center
                        that offers a unique and holistic a
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* gallery */}
      <div className="flex flex-col items-center justify-center py-10">
        <div className="w-[84%] px-5">
          <h3 className="text-[#E1B524] text-[16px] md:text-[24px] font-semibold">
            Gallery
          </h3>
          <p className="text-[25px] md:text-[51px] font-[400] text-[#000000] pb-4">
            Beautiful places for discerning travelers
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1 w-[84%] mx-auto">
          <div className="flex flex-wrap w-full md:w-1/3">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-[246.49px] object-cover object-center block rounded-md"
                src={img1}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-[246.49px] object-center block rounded-md"
                src={img2}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-[246.49px] object-center block rounded-md"
                src={img3}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-full md:w-1/3">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full md:h-[515.66px] object-cover object-center block rounded-md"
                src={img4}
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap w-full md:w-1/3">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full object-cover h-[246.49px] object-center block rounded-md"
                src={img5}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full object-cover h-[246.49px] object-center block rounded-md"
                src={img6}
              />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <section className="bg-[#CB9A6F1A]">
        <div className="max-w-screen-xl mx-auto py-10">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
              <div className="p-4 flex flex-col items-start justify-center gap-4">
                <span className="font-open-sans text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-semibold leading-[30px] sm:leading-[40px] md:leading-[50px] tracking-[0.1em] sm:tracking-[0.12em] md:tracking-[0.15em] lg:tracking-[0.18em] text-left sm:text-center md:text-left text-[#CB9A6F]">
                  Restaurant
                </span>
                <h3 className="font-mohave text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[28px] font-medium leading-[40px] sm:leading-[45px] md:leading-[50px] text-left text-[#000000D1]">
                  Our Awesome Restaurant
                </h3>
                <p className="text-[18px]">
                  Sukh Cha'n Wellness Club is a pioneering wellness center that
                  offers a unique and holistic approach to health and fitness.
                  Established in 2005, the club is located in the heart of
                  Lahore, Pakistan, and provides a variety of facilities under
                  one roof to help members achi-art facility that caters to
                  individuals who seek an exclusive wellness experience.
                </p>
                <button className="p-[7px] text-lg rounded-[10px] rounded border-[1px] bg-[#CB9A6F] text-white">
                  Book Now
                </button>
              </div>
            </div>
            <div
              className="flex-1 mt-4 sm:mt-0 sm:hidden flex justify-center md:justify-end items-center"
            >
              <img
                src={AboutImg1}
                className="max-w-[483px] w-full sm:rounded-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* Blogs  */}
      <section className="mt-10 box-border">
        <div className="ps-0 md:ps-28 mx-auto ">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-[52px]">
            <div className="px-4 px-md-0 py-10 md:py-[113px] max-w-[395px] w-full relative testimonals-swiper">
              <h5 className="text-[24px] font-[600] text-[#E1B524]">Blogs</h5>
              <p className="text-[38px] font-[500] leading-[50px] text-[#000000] mt-4">
                Recent Blog Posts
              </p>
              <p>
                Sukh Cha'n Wellness Club is a pioneering wellness center that
                offers a unique and holistic approach to health and fitness.
                Established in 2005, the club is
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
                  There are many articles
                </p>
              </div>
            </div>
            <div className="flex-1 px-4 md:px-0 mb-4 md:mb-0 w-full lg:w-1/3 ">
              <Swiper
                loop={true}
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                  1100: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                navigation={false}
                modules={[Navigation]}
                ref={swiperRef}
                className="mySwiper  w-full"
              >
                <SwiperSlide>
                  <div className=" relative w-full h-fit shadow-lg bg-[#FAF5F1] rounded-[10px]">
                    <div className="flex flex-col justify-center items-center">
                      <img src={person2} alt="" />
                    </div>
                    <div className="flex flex-col justify-center items-start px-[16px] py-[10px]">
                      <h3 className="text-[24px] font-[600] text-[#E1B524] pt-4">
                        David Werner
                      </h3>

                      <p className="  text-[18px] font-[400] leading-[37px] text-[#444444]">
                        Sukh Cha'n Wellness Club is a pioneering wellness center
                        that offers a unique and holistic a
                      </p>
                      <button className="p-[7px] text-lg rounded-[10px] rounded border-[1px] bg-[#CB9A6F] text-white">
                        Read More
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" relative w-full h-fit shadow-lg bg-[#FAF5F1] rounded-[10px]">
                    <div className="flex flex-col justify-center items-center">
                      <img src={person2} alt="" />
                    </div>
                    <div className="flex flex-col justify-center items-start px-[16px] py-[10px]">
                      <h3 className="text-[24px] font-[600] text-[#E1B524] pt-4">
                        David Werner
                      </h3>

                      <p className="  text-[18px] font-[400] leading-[37px] text-[#444444]">
                        Sukh Cha'n Wellness Club is a pioneering wellness center
                        that offers a unique and holistic a
                      </p>
                      <button className="p-[7px] text-lg rounded-[10px] rounded border-[1px] bg-[#CB9A6F] text-white">
                        Read More
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" relative w-full h-fit shadow-lg bg-[#FAF5F1] rounded-[10px]">
                    <div className="flex flex-col justify-center items-center">
                      <img src={person2} alt="" />
                    </div>
                    <div className="flex flex-col justify-center items-start px-[16px] py-[10px]">
                      <h3 className="text-[24px] font-[600] text-[#E1B524] pt-4">
                        David Werner
                      </h3>

                      <p className="  text-[18px] font-[400] leading-[37px] text-[#444444]">
                        Sukh Cha'n Wellness Club is a pioneering wellness center
                        that offers a unique and holistic a
                      </p>
                      <button className="p-[7px] text-lg rounded-[10px] rounded border-[1px] bg-[#CB9A6F] text-white">
                        Read More
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" relative w-full h-fit shadow-lg bg-[#FAF5F1] rounded-[10px]">
                    <div className="flex flex-col justify-center items-center">
                      <img src={person2} alt="" />
                    </div>
                    <div className="flex flex-col justify-center items-start px-[16px] py-[10px]">
                      <h3 className="text-[24px] font-[600] text-[#E1B524] pt-4">
                        David Werner
                      </h3>

                      <p className="  text-[18px] font-[400] leading-[37px] text-[#444444]">
                        Sukh Cha'n Wellness Club is a pioneering wellness center
                        that offers a unique and holistic a
                      </p>
                      <button className="p-[7px] text-lg rounded-[10px] rounded border-[1px] bg-[#CB9A6F] text-white">
                        Read More
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" relative w-full h-fit shadow-lg bg-[#FAF5F1] rounded-[10px]">
                    <div className="flex flex-col justify-center items-center">
                      <img src={person2} alt="" />
                    </div>
                    <div className="flex flex-col justify-center items-start px-[16px] py-[10px]">
                      <h3 className="text-[24px] font-[600] text-[#E1B524] pt-4">
                        David Werner
                      </h3>

                      <p className="  text-[18px] font-[400] leading-[37px] text-[#444444]">
                        Sukh Cha'n Wellness Club is a pioneering wellness center
                        that offers a unique and holistic a
                      </p>
                      <button className="p-[7px] text-lg rounded-[10px] rounded border-[1px] bg-[#CB9A6F] text-white">
                        Read More
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
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
          className="mt-[30px] flex flex-col items-center gap-[40px]"
        >
          <div className="flex flex-row flex-wrap gap-[10px]">
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
              <div className="relative z-20 ">
                <select className="w-[150px] z-20 rounded-lg appearance-none border border-stroke border-[#CECECE]  py-[10px] px-5 text-dark-6 outline-none transition">
                  <option value="" className="dark:bg-dark-2">
                    Guest
                  </option>
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
            <div className="flex flex-col gap-[10px]">
              <div className="relative z-20">
                <select className="w-[150px] z-20 rounded-lg appearance-none border border-stroke border-[#CECECE]  py-[10px] px-5 text-dark-6 outline-none transition">
                  <option value="" className="dark:bg-dark-2">
                    Rooms
                  </option>
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
          </div>
          <button className="px-7 py-2 text-white font-medium bg-[#CB9A6F] rounded-lg duration-150">
            Book now
          </button>
        </form>
      </div>
      {/* form */}
      <div className="py-10">
        <div className="max-w-screen-xl mx-auto text-gray-600 ">
          <div className="gap-12 justify-between flex flex-col px-4 md:px-0">
            <div className="flex flex-col md:flex-row gap-[59px]">
              <div className="w-full ">
                <h3 className="text-[#E1B524] text-[16px] md:text-[24px] font-semibold">
                  Contact
                </h3>
                <h2 className="text-[44px] font-[500] font-montserrat">
                  Get In Touch
                </h2>
                <p className="text-[18px] font-[400] text-[#000000] pb-4 md:pb-[45px]">
                  Reach out for any inquiry
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-5"
                >
                  <div>
                    <label className="font-[600] flex gap-1">
                      <img src={user} alt="" />
                      Full name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-[600] flex gap-1">
                      <img src={mail} alt="" />
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="font-[600] flex gap-1">
                      <img src={mail} alt="" />
                      Message
                    </label>
                    <textarea
                      required
                      className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    ></textarea>
                  </div>
                  <button className="px-7 py-2 text-white font-medium bg-[#CB9A6F] rounded-lg duration-150">
                    Submit
                  </button>
                </form>
              </div>
              <div className="w-full">
                <img className="h-full md:h-[626px]" src={Map} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
