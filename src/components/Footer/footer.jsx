import React from "react";
import Map from "../../assets/map.png";
import BlogImg1 from "../../assets/fblog-img.png";
import FacebookIcon from "../../assets/facebook.png";
import InstagramIcon from "../../assets/instagram.png";
import LinkedinIcon from "../../assets/linkedin.png";
import TwitterIcon from "../../assets/twitter.png";
const Footer = () => {
  return (
    <>
      <div className="relative footer pb-10">
        <div className="bg-white mx-auto max-w-screen-xl flex flex-col lg:flex-row items-center lg:items-start gap-[80px] p-10 custom-shadow">
          <div className="flex flex-col items-center lg:items-start gap-[30px]">
            <h2 className="font-mohave text-2xl font-medium leading-[50px] text-left text-black/80">
              Find Us On Google Map
            </h2>
            <div className="map">
              <img src={Map} className="max-w-[402px] w-full" alt="" />
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-[30px]">
            <h2 className="font-mohave text-2xl font-medium leading-[50px] text-left text-black/80">
              Menu
            </h2>
            <ul className="flex flex-col gap-[20px]">
              <li>
                <a
                  href=""
                  className="font-sans text-[16px] font-semibold leading-[50px] text-[#444444]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="font-sans text-[16px] font-semibold leading-[50px] text-[#444444]"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="font-sans text-[16px] font-semibold leading-[50px] text-[#444444]"
                >
                  Restaurant
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="font-sans text-[16px] font-semibold leading-[50px] text-[#444444]"
                >
                  Accommodation
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-[30px]" >
            <h2 className="font-mohave text-2xl font-medium leading-[50px] text-left text-black/80">
              Blogs
            </h2>
            <div className="flex flex-col gap-[20px]">
              <div className="flex gap-[10px]">
                <img className="w-[77px] h-[77px]" src={BlogImg1} alt="" />
                <div className="flex flex-col gap-[20px]">
                  <h3 className="font-mohave text-lg font-semibold text-black/80">
                    Moduri Fort Yasin
                  </h3>
                  <p className="font-sans text-[16px] font-normal  text-[#444444]">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <img className="w-[77px] h-[77px]" src={BlogImg1} alt="" />
                <div>
                  <h3 className="font-mohave text-lg font-semibold  text-black/80">
                    Moduri Fort Yasin
                  </h3>
                  <p className="font-sans text-[16px] font-normal  text-[#444444]">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <img className="w-[77px] h-[77px]" src={BlogImg1} alt="" />
                <div>
                  <h3 className="font-mohave text-lg font-semibold  text-black/80">
                    Moduri Fort Yasin
                  </h3>
                  <p className="font-sans text-[16px] font-normal text-[#444444]">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[30px] items-center lg:items-start">
            <h2 className="font-mohave text-2xl font-medium text-black/80 single-line">
              Social Media
            </h2>

            <ul className="flex flex-col gap-[30px]">
              <li>
                <a href="" target="_blank">
                  <img className="w-[40.19px]" src={FacebookIcon} alt="" />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <img className="w-[40.19px]" src={InstagramIcon} alt="" />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <img className="w-[40.19px]" src={TwitterIcon} alt="" />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <img className="w-[40.19px]" src={LinkedinIcon} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
