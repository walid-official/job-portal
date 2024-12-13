import React from "react";
import bannerImg from "../../assets/banner2.png";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#0f70c2] to-[#55a1ffda] "
      // style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)' }}
      // style={{
      //   backgroundImage: `url(https://img.freepik.com/premium-photo/blue-background-with-light-blue-background_835197-1865.jpg)`,
      // }}
    >
      <div className="hero md:py-[152px] py-[100px] ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-6">
          <motion.div
            animate={{ y: 20, x: 20 }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-full flex justify-center"
          >
            <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
          </motion.div>
          <div className="w-full">
            {/* <h1 className="text-5xl leading-tight text-white font-bold">
            Find Your Dream Job
          </h1> */}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Find Your Dream Job",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Find Your Ideal Career",
                1000,
                "Find Your Perfect Role",
                1000,
                "Find Your Career Goal",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "3em",
                color: "white",
                fontWeight: "bold",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
            {/* <h1 className="text-5xl leading-tight text-white font-bold">
            Find Your Dream Job, Hire The Perfect Talent!
          </h1> */}
            <p className="py-6 text-white">
            Bridging opportunities and talent, our platform empowers job seekers to land their dream roles and helps employers connect with the right professionals to grow their teams. Whether you're an individual striving to kickstart your career, a seasoned professional aiming for the next big opportunity.
            </p>
            <div className="md:w-[80%]">
              <label className="input input-bordered rounded-sm flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  placeholder="Search By Title"
                />
                <div className="">
                  <button className="btn rounded-sm bg-gradient-to-r from-[#0f70c2] to-[#55a1ffda] hover:bg-[#0f70c2] text-white ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Search
                  </button>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
