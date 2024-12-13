import React from "react";
const JobFinder = () => {
  return (
    <div className="w-11/12 mx-auto pb-20">
      <div className="lg:flex gap-10">
        <div className="border">
          <img className="w-full" src="https://img.freepik.com/premium-photo/3d-render-character-man-hands-typing-keyboard-laptop-computer-isolated-white-background-t_820340-29807.jpg?ga=GA1.1.1662778785.1716400131&semt=ais_hybrid" alt="" />
        </div>
        <div className="flex items-center">
          <div className="">
            <div className="flex items-center">
              <h2 className="text-8xl font-bold text-[#0f71c2ae]">3</h2>
              <div className="">
                <h2 className="font-bold text-4xl">Easy Steps To Apply</h2>
                <p className="text-[#b5b7bb] p-2">
                  Apply To Your Dream Jobs in just three steps way
                </p>
              </div>
            </div>
            <div className="space-y-6 py-6">
              <div className="flex gap-3 items-center text-[#090e18]">
                <div className="">
                  <h2 className="bg-gradient-to-r from-[#0f70c2] to-[#55a1ffda] w-9 h-9 rounded-full flex justify-center items-center">
                    <i class="fa-solid fa-check text-white"></i>
                  </h2>
                </div>
                <h2>Search For relevant Jobs in Your Field</h2>
              </div>
              <div className="flex gap-3  items-center text-[#090e18]">
                <div className="">
                  <h2 className="bg-gradient-to-r from-[#0f70c2] to-[#55a1ffda] w-9 h-9 rounded-full flex justify-center items-center">
                    <i class="fa-solid fa-check text-white"></i>
                  </h2>
                </div>
                <h2>Fill Application Form and Attach Resume</h2>
              </div>
              <div className="flex gap-3 items-center text-[#090e18]">
                <div className="">
                  <h2 className="bg-gradient-to-r from-[#0f70c2] to-[#55a1ffda] w-9 h-9 rounded-full flex justify-center items-center">
                    <i class="fa-solid fa-check text-white"></i>
                  </h2>
                </div>
                <h2>Use Out Expert Advice and Follow Up</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFinder;
