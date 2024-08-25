import React from "react";
import Navbar from "../components/Header/navbar";
import Map from "../assets/map.png";
import user from "../assets/user2.svg";
import mail from "../assets/mail.svg";
import Phone from "../assets/phone.png";
import Location from "../assets/location.png";

const FindUs = () => {
  return (
    <>
      <div className="relative bg-[url('assets/fheader-img.png')] h-[684px] bg-cover bg-no-repeat flex justify-center items-center">
        <div className="absolute top-0 w-full">
          <Navbar />
        </div>
        <div>
          <h2 className="font-mohave text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[94px] font-semibold leading-tight sm:leading-[3rem] md:leading-[4rem] lg:leading-[5rem] xl:leading-[112px] tracking-[0.14em] text-left text-white">
            Find Us
          </h2>
        </div>
      </div>
      {/* form */}
      <div className="py-10">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="gap-12 justify-between flex flex-col ">
            <div className="flex flex-col md:flex-row gap-[59px]">
              <div className="w-full">
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
      <div className="bg-[#FAF5F1BD]">
        <div className="max-w-screen-xl mx-auto flex flex-wrap py-24">
          <div className="xl:w-[33%] lg:w-[50%] md:w-full px-8 py-6 border-none flex flex-col items-center gap-[20px]">
            <img className="w-[51.26px] h-[50px]" src={Location} alt="" />
            <h2 className="text-lg sm:text-xl text-[#CB9A6F] font-medium title-font mb-2">
              Address
            </h2>
            <p className="leading-relaxed text-center mb-4">
              Sandhi Valley Yasin District Ghizer Near Taous
            </p>
            <p className="leading-relaxed text-center mb-4">
              Sandhi Valley Yasin District Ghizer Near Taous
            </p>
          </div>
          <div className="xl:w-[33%] lg:w-[50%] md:w-full px-8 py-6 border-l-2 border-[#000000] border-opacity-60 flex flex-col items-center gap-[20px]">
            <img className="w-[51.26px] h-[50px]" src={Phone} alt="" />
            <h2 className="text-lg sm:text-xl text-[#CB9A6F] font-medium title-font mb-2">
              Contact Number
            </h2>
            <p className="leading-relaxed text-center mb-4">03555456200</p>
            <p className="leading-relaxed text-center mb-4">03142554524</p>
          </div>
          <div className="xl:w-[33%] lg:w-[50%] md:w-full px-8 py-6 border-l-2 border-[#000000] border-opacity-60 flex flex-col items-center gap-[20px]">
            <img className="w-[51.26px] h-[50px]" src={mail} alt="" />
            <h2 className="text-lg sm:text-xl text-[#CB9A6F] font-medium title-font mb-2">
              Email Address
            </h2>
            <p className="leading-relaxed text-center mb-4">
              jivanhotel@gmail.com
            </p>
            <p className="leading-relaxed text-center mb-4">
              jivanhotel@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindUs;
