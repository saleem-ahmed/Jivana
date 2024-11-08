import React from "react";
import Navbar from "../components/Header/navbar";
import CeoImg from "../assets/ceo.png";
import DDImg from "../assets/dd.png";
import IAImg from "../assets/ia.png";
const Story = () => {
  return (
    <>
      <div className="relative bg-[#816449AB] h-[684px] bg-cover bg-no-repeat flex justify-center items-center">
        <div className="absolute top-0 w-full">
          <Navbar />
        </div>
        <div>
          <h2 className="font-mohave text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[74px] font-semibold leading-tight sm:leading-[3rem] md:leading-[4rem] lg:leading-[5rem] xl:leading-[112px] tracking-[0.14em] text-left text-white">
            Our Team – Passionate, <br /> Visionary, and Driven
          </h2>
        </div>
      </div>
      <section className="bg-white dark:bg-gray-900 max-w-screen-xl mx-auto">
        <div className="container py-5 mx-auto">
          <h3 className="text-[#000000D1] text-[28px] font-[600]">
            Our Team – Passionate, Visionary, and Driven
          </h3>
          <p className="text-[#444444] text-[18px] font-[400]">
            At Jivana Hotel and Resort, our success is fueled by a team of
            dedicated leaders who bring their passion for hospitality, wellness,
            and social impact into everything they do. Led by a dynamic
            entrepreneur and a skilled team of professionals, Jivana is more
            than just a luxury resort—it’s a mission to create enriching
            experiences and make a positive difference.
          </p>
        </div>
        <div className="relative flex flex-col items-center max-w-screen-xl mx-auto lg:flex-row px-5 lg:px-0 gap-[30px] lg:gap-[50px] pt-[40px]">
          <div className="flex items-center justify-end  max-w-[534px] h-auto lg:h-[661px] w-full rounded-[8px]">
            <img className="w-full h-full object-cover" src={CeoImg} alt="" />
          </div>
          <div className="flex items-center flex-1 md:py-5">
            <div className="text-left flex flex-col gap-[20px]">
              <h2 className="font-mohave text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[35px] font-medium leading-10 sm:leading-11 md:leading-12 lg:leading-[50px] xl:leading-[50px] text-left text-[#000000D1]">
                Founder and CEO: Ms. Nina Akbar
              </h2>
              <p className="font-open-sans text-base sm:text-lg md:text-lg lg:text-lg xl:text-[16px] font-normal leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[41px] text-left text-[#444444]">
                Ms. Nina Akbar is a renowned entrepreneur and philanthropist
                from Lahore, with an illustrious career in the fitness and
                hospitality industry. As the owner of Sukh Cha’n Wellness Club
                and the majority shareholder in the Salt’n Pepper restaurant
                chain, Ms. Nina has built a legacy of excellence, dedication,
                and vision. Her holistic approach to wellness has made Sukh
                Cha’n a pioneering facility in Pakistan, inspiring communities
                to pursue long-term health, fitness, and beauty. Ms. Nina is not
                only admired for her business acumen but also for her
                compassionate approach to leadership. A champion of feminism,
                she fosters a workplace environment rooted in equal opportunity
                employment, ensuring women have the space and resources to
                succeed. Her philanthropic efforts extend to supporting female
                education in northern Pakistan, providing financial aid to
                meritorious children in Gilgit-Baltistan to help them continue
                their education. Her entrepreneurial spirit is complemented by
                her love for adventure, travel, and literature. Ms. Nina is
                passionate about exploring new cultures and enriching her life
                with global experiences. Her energy, kindness, and visionary
                mindset set the tone for Jivana’s commitment to both luxurious
                hospitality and social responsibility.
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center max-w-screen-xl mx-auto lg:flex-row px-5 lg:px-0 gap-[30px] lg:gap-[50px] pt-[40px]">
          <div className="flex items-center flex-1 md:py-5">
            <div className="text-left flex flex-col gap-[20px]">
              <h2 className="font-mohave xl:text-[20px] font-medium leading-10 sm:leading-11 md:leading-12 lg:leading-[50px] xl:leading-[50px] text-left text-[#000000D1]">
                Co-Founder and Managing Director: Syed Fahmeed Kamil
              </h2>
              <p className="font-open-sans text-base sm:text-lg md:text-lg lg:text-lg xl:text-[16px] font-normal leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[41px] text-left text-[#444444]">
                As Co-Founder and Managing Director, Syed Fahmeed Kamil plays a
                pivotal role in overseeing the daily operations of Jivana Hotel
                and Resort. With his expertise in hospitality management and
                keen attention to detail, Fahmeed ensures that every guest
                enjoys an exceptional and memorable stay. His vision is to make
                Jivana a hallmark of luxury, sustainability, and cultural
                immersion, ensuring that guests experience the best of the Yasin
                Valley.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end  max-w-[534px] h-auto lg:h-[327px] w-full rounded-[8px]">
            <img className="w-full h-full object-cover" src={DDImg} alt="" />
          </div>
        </div>
        <div className="relative flex flex-col items-center max-w-screen-xl mx-auto lg:flex-row px-5 lg:px-0 gap-[30px] lg:gap-[50px] pt-[40px]">
          <div className="flex items-center justify-end  max-w-[534px] h-auto lg:h-[327px] w-full rounded-[8px]">
            <img className="w-full h-full object-cover" src={IAImg} alt="" />
          </div>
          <div className="flex items-center flex-1 md:py-5">
            <div className="text-left flex flex-col gap-[20px]">
              <h2 className="font-mohave xl:text-[20px] font-medium leading-10 sm:leading-11 md:leading-12 lg:leading-[50px] xl:leading-[50px] text-left text-[#000000D1]">
                Investment Advisor: Syed Surush  Kamil
              </h2>
              <p className="font-open-sans text-base sm:text-lg md:text-lg lg:text-lg xl:text-[16px] font-normal leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-[41px] text-left text-[#444444]">
                Syed Surush Ul Kamil, our Investment Advisor, brings years of
                experience in financial strategy and investment management to
                the team. He is responsible for guiding Jivana’s financial
                growth, ensuring long-term sustainability, and making strategic
                decisions that align with the resort's mission and goals. His
                expertise helps Jivana thrive as a financially sound and
                socially impactful business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Story;
