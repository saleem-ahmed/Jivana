import React from "react";
import Navbar from "../components/Header/navbar";
import ResttImg from "../assets/rest-img1.png";
import ResttImg2 from "../assets/rest-img2.png";

const Resturant = () => {
  return (
    <>
      <div className="relative bg-[url('assets/rheader-img.png')] h-[684px] bg-cover bg-no-repeat flex justify-center items-center">
        <div className="absolute top-0 w-full">
          <Navbar />
        </div>
        <div>
          <h2 className="font-mohave text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[94px] font-semibold leading-tight sm:leading-[3rem] md:leading-[4rem] lg:leading-[5rem] xl:leading-[112px] tracking-[0.14em] text-left text-white">
            Resturant
          </h2>
        </div>
      </div>
      <div class="relative flex flex-col items-center max-w-screen-xl mx-auto md:flex-row  gap-[60px] py-10">
        <div class="flex items-center justify-end  max-w-[609px] h-[500px] w-full">
          <img className="w-full h-full" src={ResttImg} alt="" />
        </div>
        <div class="flex items-center py-5 flex-1 md:py-10 px-5 md:px-0">
          <div class="text-left flex flex-col gap-[20px]">
            <p class="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[18px] font-normal leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[41px] text-left text-[#444444]">
              At Jivana Hotel and Resort, dining is an essential part of the
              experience, offering a culinary journey that beautifully combines
              the rich flavors of the Yasin Valley with international gourmet
              delights. Our restaurant emphasizes farm-to-table freshness,
              prioritizing locally sourced ingredients from nearby farms and
              orchards to ensure every dish is vibrant, flavorful, and
              nutritious. From the valley’s renowned apricots and walnuts to
              seasonal herbs and vegetables, each bite captures the purity and
              richness of the region’s produce.
            </p>
          </div>
        </div>
      </div>
      <div class="relative flex flex-col items-center max-w-screen-xl mx-auto md:flex-row  gap-[60px] py-10">
        <div class="flex items-center justify-end  max-w-[609px] h-[500px] w-full">
          <img className="w-full h-full" src={ResttImg2} alt="" />
        </div>
        <div class="flex items-center py-5 flex-1 md:py-10 px-5 md:px-0">
          <div className="text-left flex flex-col items-start gap-[20px]">
            <h2 className="font-mohave text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[44px] font-medium leading-10 sm:leading-11 md:leading-12 lg:leading-[50px] xl:leading-[50px] text-left text-[#000000D1]">
              Dining Experiences
            </h2>
            <p className="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[18px] font-normal leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[41px] text-left text-[#444444]">
              At Jivana, we offer a variety of dining options to suit your mood:
              Indoor Dining: Dine in our elegantly designed restaurant, which
              features large windows that offer sweeping views of the
              surrounding mountains and valley. Outdoor Dining: For a more
              intimate experience, choose our outdoor seating area where you can
              enjoy your meal under the stars with the sounds of the Sandi River
              flowing nearby. Private Dining: For special occasions, we offer
              personalized, private dining experiences, whether on your balcony
              or a secluded spot within the resort.
            </p>
            <button className="p-[7px] text-lg rounded-[10px] rounded border-transparent border-[1px] bg-[#CB9A6F] text-white">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resturant;
