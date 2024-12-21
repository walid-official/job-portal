import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Job from "./Job";

const Jobs = () => {
    const [jobs,setJobs] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/jobs").then((data) => {
        setJobs(data.data);
    });
  }, []);
  return (
    <div className="w-11/12 mx-auto">
      <div className="">
        <h2 className="text-center font-bold text-4xl pb-6">Jobs of <span className="text-[#0f71c2ae]" >the Day</span></h2>
        <p className="text-center md:w-[50%] mx-auto">
          Discover the latest and most exciting job opportunities of the day
          across various industries. From tech and design to marketing and
          management, find roles tailored to your skills and career goals. Don’t
          miss your chance to apply today!
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 py-20">
      {
        jobs.map((job,index) => <Job key={index} job={job}></Job> )
      }
      </div>
    </div>
  );
};

export default Jobs;
