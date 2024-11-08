import React, { useState } from "react";
import Navbar from "../components/Header/navbar";
import GateImg from "../assets/gat-img1.png";
import GateImg1 from "../assets/gate-img1.png";
import GateImg2 from "../assets/gate-img2.png";
import GateImg3 from "../assets/gate-img3.png";
import GateImg4 from "../assets/gate-img4.png";
import { useNavigate } from "react-router-dom";

const Gateway = () => {
  const navigate = useNavigate();

  const [content, setContent] = useState({
    img: GateImg,
    title: "Sandhi",
    description: `Discover the charm of Sandi Village, where 1,000-year-old
      traditional houses await exploration. Walk through ancient stone
      homes, visit the historic Muduri Fort for breathtaking valley
      views, and experience the thrill of rafting down the Sandi River.
      Enjoy serene village walks and immerse yourself in local culture,
      food, and hospitality.`,
    link: "/sandi",
  });

  const contentData = {
    darkut: {
      img: GateImg1,
      title: "Darkut Valley – Adventure Awaits",
      ctitle: "Darkut Valley",
      description: `For thrill-seekers, Darkut Valley offers rugged treks, including the famous Darkut Pass, a high-altitude adventure with panoramic views of the Himalayas. Visit historic sites like the George Hayward Monument and soak in the therapeutic natural hot springs after a day of exploration.`,
      // link: "/darkut",
    },
    nazbar: {
      img: GateImg2,
      title: "Nazbur Valley – Nature’s Hidden Gem",
      ctitle: "Nazbur Valley",
      description: `A lush, tranquil escape, Nazbur Valley offers lush meadows, dense forests, and stunning wildlife. Perfect for hiking and nature lovers, this peaceful valley provides spectacular views, serene picnic spots, and opportunities to reconnect with untouched wilderness.`,
      // link: "/nazbar",
    },
    hundur: {
      img: GateImg3,
      title: "Hundur Village – A Legacy of Heroes",
      ctitle: "Hundur Village",
      description: `Rich in history and pride, Hundur Village is home to monuments honoring legendary warriors like Lalik Jan Shaheed. Stroll through fruit orchards, sample local produce, and experience the village’s deep connection to the region’s storied past.`,
      // link: "/hundur",
    },
    thoi: {
      img: GateImg4,
      title: "-Thoi Valley – A Remote Paradise",
      ctitle: "-Thoi Valley",
      description: `Escape to the quiet beauty of Thoi Valley, where pristine nature reigns. Hike to the stunning Thoi Glacier, camp under the stars, and enjoy the peaceful isolation of this unspoiled valley—a perfect retreat for adventurers and solitude seekers.`,
      // link: "/thoi",
    },
    Gupis: {
      img: GateImg1,
      title: "Gupis Yasin District – Where History Meets Beauty",
      ctitle: "Gupis Valley",
      description: `The wider Gupis Yasin District offers a rich blend of history and natural beauty. Visit the serene Khalter Lake, explore the ancient Mudori Fort, or participate in local festivals that celebrate the vibrant culture and traditions of the Yasin Valley.`,
      // link: "/thoi",
    },
  };

  const handleClick = (value) => {
    setContent(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      <div className="relative flex flex-col items-center max-w-screen-xl mx-auto md:flex-row sm:px-6 gap-[60px]">
        <div className="flex max-w-[569px] h-full w-full">
          <img src={content.img} alt={content.title} />
        </div>
        <div className="flex items-center py-5 flex-1 md:py-10 px-5 md:px-0">
          <div className="text-left flex flex-col items-start gap-[20px]">
            <h2 className="font-mohave text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[44px] font-medium leading-10 sm:leading-11 md:leading-12 lg:leading-[50px] xl:leading-[50px] text-left text-[#000000D1]">
              {content.title}
            </h2>
            <p className="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[18px] font-normal leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[41px] text-left text-[#444444]">
              {content.description}
            </p>
            <button
              onClick={() => navigate(content.link)}
              className="p-[7px] text-lg rounded-[10px] rounded border-transparent border-[1px] bg-[#CB9A6F] text-white"
            >
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
            Explore the hidden gems surrounding Jivana Hotel and Resort. Each
            gateway offers a unique blend of adventure, culture, and natural
            beauty, providing you with an unforgettable experience in the heart
            of the Yasin Valley.
          </p>
          <div className="grid grid-cols-1 gap-4 mt-4 md:mt-8 md:grid-cols-4">
            {Object.entries(contentData).map(([key, value]) => (
              <div
                key={key}
                className="overflow-hidden"
                onClick={() => handleClick(value)}
              >
                <img
                  className="object-cover w-full h-[400px]"
                  src={value.img}
                  alt={value.ctitle}
                />
                <div className="p-4">
                  <p className="font-open-sans text-[24px] font-semibold text-center">
                    {value.ctitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gateway;
