import React from "react";
import Navbar from "../components/Header/navbar";
import GateImg1 from "../assets/blog-img1.png";
import GateImg2 from "../assets/blog-img2.png";
import GateImg3 from "../assets/blog-img3.png";
import GateImg4 from "../assets/blog-img4.png";
import GateImg5 from "../assets/blog-img5.png";
import GateImg6 from "../assets/blog-img6.png";
import GateImg7 from "../assets/blog-img7.png";

const Sandi = () => {
  return (
    <>
      {/* <div className="bg-[url('assets/bheader-img.png')] h-[684px] bg-cover bg-no-repeat flex justify-center items-center"> */}
      <div className="relative bg-[url('assets/bheader-img.png')] h-[684px] bg-cover bg-no-repeat flex justify-center items-center">
        <div className="absolute top-0 w-full">
          <Navbar />
        </div>
        <div>
          <h2 className="font-mohave text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[94px] font-semibold leading-tight sm:leading-[3rem] md:leading-[4rem] lg:leading-[5rem] xl:leading-[112px] tracking-[0.14em] text-left text-white">
            Sandi Yaseen
          </h2>
        </div>
      </div>
      <section className="bg-[#FAF5F1BD] dark:bg-gray-900">
        <div className="container px-6 py-10 max-w-screen-xl mx-auto">
          <h3 className="text-[#000000D1] text-[28px] font-[600]">
            Sandi Village – A Journey Through Time, Culture, and Adventure
          </h3>
          <p className="text-[#444444] text-[18px] font-[400]">
            Just steps away from Jivana Hotel and Resort, Sandi Village is a
            tranquil retreat that beautifully blends history, culture, and
            adventure. Located in the heart of the picturesque Yasin Valley,
            Sandi offers a unique opportunity to experience life as it has been
            for centuries while exploring the natural beauty and thrilling
            activities that make this region unforgettable.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4 md:mt-8 md:grid-cols-3 max-w-screen-xl mx-auto">
          <div className="overflow-hidden">
            <img
              className="object-cover w-full h-[400px]"
              src={GateImg1}
              alt="Article"
            />

            <div className="p-4">
              <p className="font-open-sans text-[24px] font-semibold text-center">
                Sandhi People
              </p>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              className="object-cover w-full h-[400px]"
              src={GateImg2}
              alt="Article"
            />

            <div className="p-4">
              <p className="font-open-sans text-[24px] font-semibold text-center">
                Historic Place
              </p>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              className="object-cover w-full h-[400px]"
              src={GateImg3}
              alt="Article"
            />

            <div className="p-4">
              <p className="font-open-sans text-[24px] font-semibold text-center">
                Culture
              </p>
            </div>
          </div>
        </div>
      </section>
      <div class="relative flex flex-col items-center max-w-screen-xl mx-auto md:flex-row  gap-[60px] py-10">
        <div class="flex items-center py-5 flex-1 md:py-10 px-5 md:px-0 gap-4">
          <div class="text-left flex-1 flex flex-col gap-[10px]">
            <h2 className="font-mohave text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[44px] font-medium leading-10 sm:leading-11 md:leading-12 lg:leading-[50px] xl:leading-[50px] text-left text-[#000000D1]">
              Visit 1,000-Year-Old Traditional Houses
            </h2>
            <p class="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[18px] font-normal leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[41px] text-left text-[#444444]">
              Just steps away from Jivana Hotel and Resort, Sandi Village is a
              tranquil retreat that beautifully blends history, culture, and
              adventure. Located in the heart of the picturesque Yasin Valley,
              Sandi offers a unique opportunity to experience life as it has
              been for centuries while exploring the natural beauty and
              thrilling activities that make this region unforgettable.
            </p>
            <h2 className="mt-5 font-mohave text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[44px] font-medium leading-10 sm:leading-11 md:leading-12 lg:leading-[50px] xl:leading-[50px] text-left text-[#000000D1]">
              Valley Views from Muduri
            </h2>
            <p class="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[18px] font-normal leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[41px] text-left text-[#444444]">
              For breathtaking views, take a short hike or drive to Muduri,
              where panoramic vistas of the Yasin Valley await. From this
              vantage point, you’ll see rivers snaking through lush fields,
              framed by the towering snow-capped peaks of the Himalayas. It’s a
              perfect spot for photography or simply soaking in the peaceful
              beauty of the valley.
            </p>
            <h2 className="mt-5 font-mohave text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[44px] font-medium leading-10 sm:leading-11 md:leading-12 lg:leading-[50px] xl:leading-[50px] text-left text-[#000000D1]">
              Explore Muduri Fort
            </h2>
            <p class="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[18px] font-normal leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[41px] text-left text-[#444444]">
              Perched high above the village, Muduri Fort is a must-see for
              history enthusiasts. This ancient fortress once played a key role
              in defending the Yasin Valley and now offers visitors a
              fascinating glimpse into the region’s strategic past. Enjoy the
              stunning views from the fort’s hilltop location while learning
              about the battles and events that shaped the valley’s history.
            </p>
            <h2 className="mt-5 font-mohave text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[44px] font-medium leading-10 sm:leading-11 md:leading-12 lg:leading-[50px] xl:leading-[50px] text-left text-[#000000D1]">
              Cycling, Hiking, and Sightseeing
            </h2>
            <p class="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[18px] font-normal leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[41px] text-left text-[#444444]">
              The peaceful paths of Sandi and the surrounding Yasin Valley are
              perfect for cycling, hiking, and sightseeing. Ride through the
              village’s winding roads, hike to secret viewpoints, or simply take
              in the beauty of the valley’s rivers, fields, and mountains. Every
              turn offers something new to discover, from local wildlife to
              stunning natural vistas.
            </p>
            <h2 className="mt-5 font-mohave text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[44px] font-medium leading-10 sm:leading-11 md:leading-12 lg:leading-[50px] xl:leading-[50px] text-left text-[#000000D1]">
              Rafting in the Sandi River
            </h2>
            <p class="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[18px] font-normal leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[41px] text-left text-[#444444]">
              For an adrenaline rush, embark on a white-water rafting adventure
              along the Sandi River. Navigate through exciting rapids as you
              pass by towering cliffs and lush forests, surrounded by the
              valley’s untamed beauty. Whether you're a seasoned rafter or a
              beginner, this experience is perfect for thrill-seekers looking to
              connect with the valley’s natural wonders. Our professional guides
              ensure a safe and exhilarating journey.
            </p>
            <h2 className="mt-5 font-mohave text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[44px] font-medium leading-10 sm:leading-11 md:leading-12 lg:leading-[50px] xl:leading-[50px] text-left text-[#000000D1]">
              Leisurely Village Walks
            </h2>
            <p class="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[18px] font-normal leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[41px] text-left text-[#444444]">
              Experience the charm of Sandi Village on foot. As you stroll
              through the village, observe locals working in their fields,
              weaving traditional fabrics, or enjoying the calm pace of life.
              Meet the villagers, learn about their customs, and indulge in
              traditional Yasin delicacies such as freshly baked bread, apricot
              jams, and dried meats. The warm hospitality of the village makes
              every interaction memorable.
            </p>
            <h2 className="mt-5 font-mohave text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[44px] font-medium leading-10 sm:leading-11 md:leading-12 lg:leading-[50px] xl:leading-[50px] text-left text-[#000000D1]">
              A Living Heritage
            </h2>
            <p class="font-open-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[18px] font-normal leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[41px] text-left text-[#444444]">
              Sandi Village is a living tapestry of the Yasin Valley’s cultural
              and natural treasures. Whether you’re trekking to remote corners
              of the valley, cycling through scenic trails, rafting down the
              Sandi River, or exploring ancient homes and fortresses, this
              village offers something for everyone. Sandi is not just a
              destination—it’s an immersive journey into the heart of the Yasin
              Valley, where history, adventure, and natural beauty converge to
              create an unforgettable experience.
            </p>
          </div>
          <div class="flex flex-col items-end justify-center  max-w-[530px] gap-4  w-full">
            <img className="w-full" src={GateImg4} alt="" />
            <img className="w-full" src={GateImg5} alt="" />
            <img className="w-full" src={GateImg6} alt="" />
            <img className="w-full" src={GateImg7} alt="" />                                                                                                                                                                
          </div>
        </div>
      </div>
    </>
  );
};

export default Sandi;
