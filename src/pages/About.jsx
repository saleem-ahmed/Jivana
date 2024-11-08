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
            <p className="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[16px] font-normal leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[41px] text-left text-[#444444]">
              Welcome to Jivana Hotel and Resort, a sanctuary of peace and
              rejuvenation in the heart of Gilgit Baltistan’s mystical Yasin
              Valley. Nestled along the quiet banks of the Sandi River and
              encircled by the majestic peaks of the Himalayas, Jivana is far
              more than a hotel—it is an experience that immerses guests in the
              profound beauty and heritage of this untouched region. At Jivana,
              we embrace a philosophy of celebrating life. Our name, rooted in
              the Sanskrit word Jivana, meaning "life" and "vitality," reflects
              our commitment to nurturing the spirit and honoring the natural
              world. Here, every detail is designed to embody harmony with
              nature, offering an authentic and enriched experience of the Yasin
              Valley. Our guests are invited not only to stay but to live fully
              in the presence of pristine landscapes and vibrant cultural
              traditions.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center max-w-screen-xl mx-auto md:flex-row  gap-[60px] py-10">
        <div className="flex items-center py-5 flex-1 md:py-10 px-5 md:px-0">
          <div className="text-left flex flex-col gap-[20px]">
            <p className="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[16px] font-normal leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[41px] text-left text-[#444444]">
              The architecture of Jivana is a seamless blend of the ancient and
              the modern. Thoughtfully crafted with local materials such as
              wood, mud, and stone, the resort pays homage to centuries-old
              building practices that define the valley’s heritage. Our design
              reflects the warmth and character of traditional mountain homes,
              enhanced by contemporary comforts that prioritize both luxury and
              sustainability. This approach creates a space that is both
              timeless and inviting—a place where elegance meets authenticity.
              Jivana is an immersive journey, designed to connect our guests
              with the soul of the Yasin Valley. From the serenity of our
              natural surroundings to the rich history embedded in each
              structure, Jivana provides a deeply fulfilling escape. Here,
              guests find a unique opportunity to slow down, reconnect with
              themselves, and embrace the beauty of simplicity. This is more
              than just a stay—it is an invitation to experience life at its
              most vibrant and harmonious.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end  max-w-[609px] h-[421px] w-full">
          <img className="w-full h-full" src={AboutImg1} alt="" />
        </div>
      </div>
      {/*  */}
      <div className="max-w-screen-xl bg-[url('assets/visit-back.png')] py-7 md:py-0 h-full md:h-[535px] mx-auto bg-cover bg-no-repeat rounded-[10px] flex flex-col justify-center items-center px-4 lg:px-0">
        <p className="text-white text-center text-xl sm:text-2xl font-semibold sm:text-4xl">
          Why Jivana?
        </p>
        <p className="text-blue-100 mt-3 text-center  px-4">
          Jivana Hotel and Resort is a sanctuary of wellness, culture, and
          renewal, rooted in the pioneering legacy of Sukh Chan Wellness Club.
          Building on Sukh Chan’s holistic approach, Jivana offers restorative
          spa treatments, yoga, and mindfulness retreats in the serene Yasin
          Valley. Beyond wellness, Jivana is a center of excellence for
          promoting the valley’s rich history, art, and culture. Through
          immersive programs, guests engage with local artisans, experience
          traditional crafts, and connect deeply with the heritage of the Yasin
          Valley. Every visit to Jivana is more than a stay; it’s a journey
          toward vitality and balance, where guests feel at one with nature and
          culture—a place you’ll wish to linger.
        </p>
        <button className="py-[7px] px-7 text-lg rounded-[10px] rounded border-[1px] bg-[#CB9A6F] text-white mt-4">
          Book Now
        </button>
      </div>
      <div className="bg-[#FAF5F1BD]">
        <div className="max-w-screen-xl mx-auto flex flex-wrap py-24">
          <div className="xl:w-[50%] lg:w-[50%] md:w-full px-8 py-6 border-none flex flex-col items-center gap-[20px]">
            <img className="w-[51.26px] h-[50px]" src={MissionImg} alt="" />
            <h2 className="text-lg sm:text-xl text-[#CB9A6F] font-medium title-font mb-2">
              Mission
            </h2>
            <p className="leading-relaxed text-center mb-4">
              At Jivana Hotel and Resort, our mission is to harmoniously blend
              luxury, culture, and wellness, offering an immersive experience
              that nourishes the mind, body, and soul. Nestled in the beautiful
              Yasin Valley, we provide a retreat into nature and holistic
              well-being, where guests can disconnect from their fast-paced
              lives. Guided by the visionary philosophy of Ms. Nina Akbar’s Sukh
              Chan Wellness Club, we integrate holistic health principles into
              our spa treatments, yoga sessions, and cultural immersions. We
              empower local communities to share their rich heritage, creating a
              deep connection to the spirit of the Yasin Valley. At Jivana, we
              inspire a lifelong commitment to wellness and cultural
              appreciation in a nurturing environment that uplifts and
              rejuvenates.
            </p>
          </div>
          <div className="xl:w-[50%] lg:w-[50%] md:w-full px-8 py-6 border-l-2 border-[#000000] border-opacity-60 flex flex-col items-center gap-[20px]">
            <img className="w-[51.26px] h-[50px]" src={VisionImg} alt="" />
            <h2 className="text-lg sm:text-xl text-[#CB9A6F] font-medium title-font mb-2">
              Vision
            </h2>
            <p className="leading-relaxed text-center mb-4">
              At Jivana Hotel and Resort, we envision a vibrant cultural hub
              that transcends luxury to become a global symbol of wellness and
              sustainability. Our oasis allows guests to immerse themselves in
              the rich heritage of the Yasin Valley while fostering creativity
              and open dialogue. Committed to empowering local artists and
              facilitating cultural exchange, we blend traditional architecture
              with modern comforts to redefine luxury hospitality in Pakistan.
              Building on the Sukh Chan Wellness Club's foundation, we support
              female education and implement sustainable practices, aiming to be
              a beacon of responsible luxury that values individual well-being
              and community impact.
            </p>
          </div>
        </div>
      </div>

      <section className=" box-border">
        <div className="ps-0 lg:ps-28 mx-auto ">
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
