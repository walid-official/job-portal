import React from "react";
import bannerImg from "../../assets/banner-3.png";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div
      className=" bg-center bg-cover h-screen"
      // style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)' }}
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="hero  md:py-[100px] py-[100px] ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-6 bg-no-repeat bg-right">
          <div
            // animate={{ y: 20, x: 20 }}
            // transition={{
            //   duration: 3,
            //   ease: "easeInOut",
            //   repeat: Infinity,
            //   repeatType: "reverse",
            // }}
            className="w-full bg-center bg-cover flex justify-center"
          >
            <img
              src="https://cutesolution.com/html/techvia/assets/img/home-font.png"
              className="max-w-xl rounded-lg"
            />
          </div>
          <div className="w-full">
            <h2 className="text-white text-xl pb-3">
              Empowering Careers, Building Teams
            </h2>
            <h1 className="font-bold text-white text-5xl leading-tight">
              Find Your Next Job or Hire the Ideal Candidate
            </h1>
          
            <p className="py-6 text-white">
              Bridging opportunities and talent, our platform empowers job
              seekers to land their dream roles and helps employers connect with
              the right professionals to grow their teams. Whether you're
              starting your career or seeking your next big opportunity.
            </p>
            <div className="flex gap-8 mt-40 ml-14">
              <div className="relative group  w-[35%]">
                <div className="card  bg-base-100 py-10 text-[#090505] shadow-xl overflow-hidden duration-700">
                  {/* Content Container */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <h2 className="font-bold text-4xl">120K</h2>
                    <h2 className="text-2xl font-bold py-3">Got Jobs</h2>
                  </div>

                  {/* Hover Background */}
                  <div className="absolute top-full left-0 w-full h-full bg-transparent transition-all duration-1000 group-hover:top-0 group-hover:bg-gradient-to-r from-[#07023127] to-[#07023178] z-0"></div>
                </div>
              </div>
              <div className="relative group w-[35%]">
                <div className="card bg-base-100 py-10 shadow-xl overflow-hidden duration-700">
                  {/* Content Container */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <h2 className="font-bold text-4xl">130K</h2>
                    <h2 className="text-2xl font-bold py-3 text-center">
                      Hired Talent
                    </h2>
                  </div>

                  {/* Hover Background */}
                  <div className="absolute top-full left-0 w-full h-full bg-transparent transition-all duration-1000 group-hover:top-0 group-hover:bg-gradient-to-r from-[#07023127] to-[#07023178] group-hover:text-white text z-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
