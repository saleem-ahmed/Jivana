import React from "react";
import Navbar from "../components/Header/navbar";
const Home = () => {
  return (
    <>
      <div className="bg-[url('assets/header-img.png')] h-[948px] bg-cover bg-no-repeat">
        <div>
          <Navbar />
        </div>
      </div>
      <h2>Home</h2>
    </>
  );
};

export default Home;
