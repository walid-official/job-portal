import React from "react";
import jobFinder from "../../assets/jobFinder.png";
const JobFinder = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <img src={jobFinder} alt="" />
        </div>
        <div className="">
            <h2 className="text-4xl font-bold">3</h2>
            <div className="">
                <h2>Easy Steps To Apply</h2>
                <p>Apply To Your Dream Jobs in just three steps way</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default JobFinder;
