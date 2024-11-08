import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
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
import BlogImg1 from "../assets/hblog-img1.png";
import BlogImg2 from "../assets/hblog-img2.png";
import BlogImg3 from "../assets/hblog-img3.png";
import person1 from "../assets/person2.svg";
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
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const swiperRef = React.useRef(null);
  const swiperRef1 = React.useRef(null);

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

  const handleReadMore = () => {
    navigate("/gateway");
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  return (
    <>
      {/* header section */}
      <div className="relative bg-[url('assets/header-img.png')] px-4 lg:px-0 py-[60px] lg:py-0 h-full lg:h-[948px] bg-cover bg-no-repeat flex justify-center items-center">
        <div className="w-full absolute top-0">
          <Navbar />
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-[100px] mx-auto max-w-screen-xl">
          <div className="px-3 lg:px-0">
            <h2 className="font-mohave text-3xl mt-5 lg:mt-0 sm:text-4xl text-center md:text-5xl lg:text-6xl lg:text-left xl:text-[94px] font-semibold text-white">
              Your Home Away From Home
            </h2>
            <p className="text-white text-center lg:text-left mt-[30px]">
              Welcome to Jivana Hotel and Resort, a sanctuary of peace and
              rejuvenation in the heart of Gilgit Baltistan’s mystical Yasin
              Valley.
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
                  className="flex items-center gap-[10px] font-open-sans text-[18px] font-semibold leading-[30px] tracking-[0.14em] text-left text-[#444444]"
                >
                  <img
                    className="w-[20px] h-[20px]"
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
                  className="flex items-center gap-[10px] font-open-sans text-[18px] font-semibold leading-[30px] tracking-[0.14em] text-left text-[#444444]"
                >
                  <img className="w-[20px] h-[20px]" src={GuestIcon} alt="" />
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
                  className="flex items-center gap-[10px] font-open-sans text-[18px] font-semibold leading-[30px] tracking-[0.14em] text-left text-[#444444]"
                >
                  <img
                    className="w-[20px] h-[20px]"
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
                  className="flex items-center gap-[10px] font-open-sans text-[18px] font-semibold leading-[30px] tracking-[0.14em] text-left text-[#444444]"
                >
                  <img className="w-[20px] h-[20px]" src={RoomtIcon} alt="" />
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

      <div className="relative flex flex-col items-center max-w-screen-xl mx-auto lg:flex-row px-5 lg:px-0 gap-[30px] lg:gap-[50px] pt-[40px]">
        <div className="flex items-center flex-1 md:py-10">
          <div className="text-left flex flex-col gap-[20px]">
            <h3 className="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] font-semibold leading-7 sm:leading-8 md:leading-9 lg:leading-10 xl:leading-[50px] tracking-[0.18em] text-left text-[#CB9A6F]">
              ABOUT
            </h3>
            <h2 className="font-mohave text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[44px] font-medium leading-10 sm:leading-11 md:leading-12 lg:leading-[50px] xl:leading-[50px] text-left text-[#000000D1]">
              Our Story
            </h2>
            <p className="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[18px] font-normal leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[41px] text-left text-[#444444]">
              Welcome to Jivana Hotel and Resort, a sanctuary of peace and
              rejuvenation in the heart of Gilgit Baltistan’s mystical Yasin
              Valley. Nestled along the quiet banks of the Sandi River and
              encircled by the majestic peaks of the Himalayas, Jivana is far
              more than a hotel—it is an experience that immerses guests in the
              profound beauty and heritage of this untouched region.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end  max-w-[569px] h-auto lg:h-[470px] w-full">
          <img className="w-full h-full" src={AboutImg} alt="" />
        </div>
      </div>

      <div className="relative flex flex-col items-center max-w-screen-xl mx-auto lg:flex-row px-6 md:px-0 gap-[60px]  py-[80px]">
        <div className="flex items-center justify-end max-w-[609px] h-auto lg:h-[473px] w-full relative">
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
            <img
              className="w-[50px] h-[50px] object-cover"
              src={left1}
              alt=""
            />
          </div>
          <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer after:hidden w-max">
            <img
              className="w-[50px] h-[50px] object-cover"
              src={right1}
              alt=""
            />
          </div>
        </div>

        <div className="flex items-center py-5 flex-1 md:py-10 px-5 lg:px-0">
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
              At Jivana Hotel and Resort, every room is designed to reflect the
              natural beauty of the surrounding Himalayan landscape while
              offering the modern comforts that make your stay truly
              unforgettable. Our rooms provide a perfect blend of traditional
              craftsmanship and contemporary elegance, ensuring that your stay
              is both luxurious and deeply connected to the unique cultural
              heritage of the Yasin Valley.
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
          <div className="w-full flex flex-col items-start gap-[20px] px-3 lg:px-0">
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
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3 lg:gap-12 flex flex-col md:flex-row">
            <div>
              <div className="p-4 flex flex-col items-start justify-center gap-4">
                <span className="font-open-sans text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-semibold leading-[30px] sm:leading-[40px] md:leading-[50px] tracking-[0.1em] sm:tracking-[0.12em] md:tracking-[0.15em] lg:tracking-[0.18em] text-left sm:text-center md:text-left text-[#CB9A6F]">
                  Why Choose Us
                </span>
                <h3 className="font-mohave text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[28px] font-medium text-[#000000D1]">
                  An Unparalleled Experience of Luxury and Nature
                </h3>
                <p className="text-[16px]">
                  Jivana Hotel and Resort is a sanctuary of wellness, culture,
                  and renewal, rooted in the pioneering legacy of Sukh Chan
                  Wellness Club. Building on Sukh Chan’s holistic approach,
                  Jivana offers restorative spa treatments, yoga, and
                  mindfulness retreats in the serene Yasin Valley. Beyond
                  wellness, Jivana is a center of excellence for promoting the
                  valley’s rich history, art, and culture. Through immersive
                  programs, guests engage with local artisans, experience
                  traditional crafts, and connect deeply with the heritage of
                  the Yasin Valley. Every visit to Jivana is more than a stay;
                  it’s a journey toward vitality and balance, where guests feel
                  at one with nature and culture—a place you’ll wish to linger.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col items-center lg:items-start lg:flex-row gap-3">
              <img className="max-w-[500px] w-full" src={chooseImg} alt="" />
              <div className="flex flex-col items-between px-4 lg:px-0">
                <div className="flex flex-col gap-[10px]">
                  <h3 className="flex items-center gap-3">
                    <img className="w-[23px] h-[23px]" src={C1} alt="" />
                    <span className="font-open-sans text-[12px] sm:text-[20px] md:text-[24px] font-semibold text-[#444444]">
                      Our Customer
                    </span>
                  </h3>
                  <p className="font-open-sans text-[14px] sm:text-[16px] md:text-[18px] font-normal text-[#444444]">
                    Experience a transformative journey at Jivana Hotel and
                    Resort, where luxury, culture, and wellness unite in the
                    heart of the Yasin Valley.
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
                    Experience unparalleled comfort and tranquility in our
                    beautifully appointed rooms at Jivana Hotel and Resort,
                    where luxury meets the breathtaking beauty of the Yasin
                    Valley.
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
                    Experience a diverse array of exceptional services at Jivana
                    Hotel and Resort, where programs, and cultural immersions
                    enhance your stay in the stunning Yasin Valley.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonals */}
      <section className="mt-10 box-border">
        <div className="ps-0 lg:ps-28 mx-auto ">
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
                      <h3 className="text-[18px] font-[600] text-[#E1B524] pt-4">
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
                      <h3 className="text-[18px] font-[600] text-[#E1B524] pt-4">
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
                      <h3 className="text-[18px] font-[600] text-[#E1B524] pt-4">
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
                      <h3 className="text-[18px] font-[600] text-[#E1B524] pt-4">
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
          <div className="items-center gap-x-12 sm:px-4 lg:px-0 flex flex-col md:flex-row">
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
              <div className="p-4 flex flex-col items-start justify-center gap-4">
                <span className="font-open-sans text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-semibold leading-[30px] sm:leading-[40px] md:leading-[50px] tracking-[0.1em] sm:tracking-[0.12em] md:tracking-[0.15em] lg:tracking-[0.18em] text-left sm:text-center md:text-left text-[#CB9A6F]">
                  Restaurant
                </span>
                <h3 className="font-mohave text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[28px] font-medium leading-[40px] sm:leading-[45px] md:leading-[50px] text-left text-[#000000D1]">
                  Our Awesome Restaurant
                </h3>
                <p className="text-[18px]">
                  At Jivana Hotel and Resort, dining is an essential part of the
                  experience, offering a culinary journey that beautifully
                  combines the rich flavors of the Yasin Valley with
                  international gourmet delights. Our restaurant emphasizes
                  farm-to-table freshness, prioritizing locally sourced
                  ingredients from nearby farms and orchards to ensure every
                  dish is vibrant, flavorful, and nutritious. From the valley’s
                  renowned apricots and walnuts to seasonal herbs and
                  vegetables, each bite captures the purity and richness of the
                  region’s produce.
                </p>
                <button className="p-[7px] text-lg rounded-[10px] rounded border-[1px] bg-[#CB9A6F] text-white">
                  Book Now
                </button>
              </div>
            </div>
            <div className="flex-1 mt-4 sm:mt-0  flex justify-center md:justify-end items-center">
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
                Explore the hidden gems surrounding Jivana Hotel and Resort.
                Each gateway offers a unique blend of adventure, culture, and
                natural beauty, providing you with an unforgettable experience
                in the heart of the Yasin Valley.
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
                      <img src={BlogImg1} alt="" />
                    </div>
                    <div className="flex flex-col justify-center items-start px-[16px] py-[10px]">
                      <h3 className="text-[18px] font-[600] text-[#E1B524] pt-4">
                        Moduri Fort Yasin
                      </h3>

                      <p className="  text-[14px] font-[400] leading-[27px] text-[#444444]">
                        Visit the historic Muduri Fort for breathtaking valley
                        views, and experience the thrill of rafting down the
                        Sandi River.
                      </p>
                      <button
                        onClick={() => handleReadMore()}
                        className="p-[7px] text-lg rounded-[10px] rounded border-[1px] bg-[#CB9A6F] text-white text-[14px]"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" relative w-full h-fit shadow-lg bg-[#FAF5F1] rounded-[10px]">
                    <div className="flex flex-col justify-center items-center">
                      <img src={BlogImg2} alt="" />
                    </div>
                    <div className="flex flex-col justify-center items-start px-[16px] py-[10px]">
                      <h3 className="text-[18px] font-[600] text-[#E1B524] pt-4">
                        Lalak Jan Shaheed (NH) 1999
                      </h3>

                      <p className="  text-[14px] font-[400] leading-[27px] text-[#444444]">
                        Rich in history and pride, Hundur Village is home to
                        monuments honoring legendary warriors like Lalik Jan
                        Shaheed.
                      </p>
                      <button
                        onClick={() => handleReadMore()}
                        className="p-[7px] text-lg rounded-[10px] rounded border-[1px] bg-[#CB9A6F] text-white text-[14px]"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" relative w-full h-fit shadow-lg bg-[#FAF5F1] rounded-[10px]">
                    <div className="flex flex-col justify-center items-center">
                      <img src={BlogImg3} alt="" />
                    </div>
                    <div className="flex flex-col justify-center items-start px-[16px] py-[10px]">
                      <h3 className="text-[18px] font-[600] text-[#E1B524] pt-4">
                        Darkut Pass
                      </h3>

                      <p className="  text-[14px] font-[400] leading-[27px] text-[#444444]">
                        Darkut Valley offers rugged treks, including the famous
                        Darkut Pass, a high-altitude adventure with panoramic
                        views of the Himalayas.
                      </p>
                      <button
                        onClick={() => handleReadMore()}
                        className="p-[7px] text-lg rounded-[10px] rounded border-[1px] bg-[#CB9A6F] text-white text-[14px]"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" relative w-full h-fit shadow-lg bg-[#FAF5F1] rounded-[10px]">
                    <div className="flex flex-col justify-center items-center">
                      <img src={BlogImg1} alt="" />
                    </div>
                    <div className="flex flex-col justify-center items-start px-[16px] py-[10px]">
                      <h3 className="text-[18px] font-[600] text-[#E1B524] pt-4">
                        Moduri Fort Yasin
                      </h3>

                      <p className="  text-[14px] font-[400] leading-[27px] text-[#444444]">
                        Visit the historic Muduri Fort for breathtaking valley
                        views, and experience the thrill of rafting down the
                        Sandi River.
                      </p>
                      <button
                        onClick={() => handleReadMore()}
                        className="p-[7px] text-lg rounded-[10px] rounded border-[1px] bg-[#CB9A6F] text-white text-[14px]"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" relative w-full h-fit shadow-lg bg-[#FAF5F1] rounded-[10px]">
                    <div className="flex flex-col justify-center items-center">
                      <img src={BlogImg2} alt="" />
                    </div>
                    <div className="flex flex-col justify-center items-start px-[16px] py-[10px]">
                      <h3 className="text-[18px] font-[600] text-[#E1B524] pt-4">
                        Darkut Pass
                      </h3>

                      <p className="  text-[14px] font-[400] leading-[27px] text-[#444444]">
                        Darkut Valley offers rugged treks, including the famous
                        Darkut Pass, a high-altitude adventure with panoramic
                        views of the Himalayas.
                      </p>
                      <button
                        onClick={() => handleReadMore()}
                        className="p-[7px] text-lg rounded-[10px] rounded border-[1px] bg-[#CB9A6F] text-white text-[14px]"
                      >
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
      <div className="max-w-screen-xl bg-[url('assets/visit-back.png')] py-7 md:py-0 h-full md:h-[535px] mx-auto bg-cover bg-no-repeat rounded-[10px] flex flex-col justify-center items-center px-4 lg:px-0">
        <p className="text-white text-center text-xl sm:text-2xl font-semibold sm:text-4xl">
          Lets Visit Jivana Hotel and Resort and Enjoy
        </p>
        <p className="text-blue-100 mt-3 text-center  px-4">
          Jivana Hotel and Resort, a sanctuary of peace and rejuvenation in the
          heart of Gilgit Baltistan’s mystical Yasin Valley.
        </p>
        <form
          // action=""
          // method="post"
          className="mt-[30px] flex flex-col items-center gap-[40px] w-full"
        >
          <div className="flex justify-center flex-col md:flex-row flex-wrap gap-[10px] w-full">
            <div className="flex flex-col gap-[10px] w-full  md:w-[150px]">
              <input
                type="date"
                className="h-[45px] border border-solid rounded-lg border-[#CECECE] outline-0 w-full px-3"
              />
            </div>
            <div className="flex flex-col gap-[10px] w-full  md:w-[150px]">
              <input
                type="date"
                className="h-[45px] border border-solid border-[#CECECE] rounded-lg outline-0 w-full px-3"
              />
            </div>
            <div className="flex flex-col gap-[10px] ">
              <div className="relative z-20">
                <select className=" w-full md:w-[150px] z-20 rounded-lg appearance-none border border-stroke border-[#CECECE]  py-[10px] px-5 text-dark-6 outline-none transition">
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
                <select className=" w-full md:w-[150px] z-20 rounded-lg appearance-none border border-stroke border-[#CECECE]  py-[10px] px-5 text-dark-6 outline-none transition">
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
          <div className="gap-12 justify-between flex flex-col px-4 lg:px-0">
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
                    <label className="font-[600] flex items-center gap-1">
                      <img className="w-[20px] h-[20px]" src={user} alt="" />
                      Full name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-[600] flex items-center gap-1">
                      <img className="w-[20px] h-[20px]" src={mail} alt="" />
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="font-[600] flex items-center gap-1">
                      <img className="w-[20px] h-[20px]" src={mail} alt="" />
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
