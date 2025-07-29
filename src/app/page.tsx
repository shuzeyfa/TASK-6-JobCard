"use client"
import React, {useState,useEffect} from "react";
import JobCard from "../component/jobCard";

import {jobs} from "../data/data"
const criteria = ["Alphabetic", "recent", "start_date"];
export default function page({params} : {params: {id: string}}) {

  const [jobList, setJobs] = useState(jobs);
  const [sorttype, setSortType] = useState(criteria[0]);
  

  function check(type: string){
    let sorted = [...jobList]
    if (type === "Alphabetic") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (type === "start_date") {
      sorted.sort(
        (a, b) =>
          new Date(a.about.start_date).getTime() -
          new Date(b.about.start_date).getTime()
      );
    } else {
      sorted.sort(
        (a, b) =>
          new Date(a.about.posted_on).getTime() -
          new Date(b.about.posted_on).getTime()
      );
    }

    setJobs(sorted);
    setSortType(type);
  }

  useEffect(() => {
    let sorted = [...jobs];
    sorted.sort((a,b) => a.title.localeCompare(b.title));

    setJobs(sorted);
  },[]);


  return (
    <>
      <div className="w-[1392px]  min-h-screen mx-auto pr-[123px] pb-[72px] pl-[124px] gap-[40px] pt-[72px]">
        <div className=" w-[919px]  ">
          <div className=" w-[919px] h-[68px] ">
            <div className="flex justify-between">
              <span className="font-black text-[32px] w-[236px] h-[38px] leading-[120%] tracking-[0%] font-poppins">
                Opportunities
              </span>
              <div className="pr-12">
                <label className="text-gray-400">sorted by:- </label>
                <select className="w-[180px] h-[26px]  rounded border-[1px] border-gray-300 gap-[12px] rotate-0 opacity-100"
                value={sorttype}
                onChange={(e) => check(e.target.value)}
                >
                  {criteria.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </select>
              </div>
            </div>

            <h2 className=" text-[#7C8493] w-[146px] h-[26px] font-epilogue ">
              showing {jobs.length} result
            </h2>
          </div>

          {jobList.map((job) => (
            <JobCard
              key={job.id}
              id={job.id}
              title={job.title}
              description={job.description}
              responsibility={job.responsibilities}
              ideal={job.ideal_candidate}
              where={job.when_where}
              about={job.about}
              company={job.company}
              image={job.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}
