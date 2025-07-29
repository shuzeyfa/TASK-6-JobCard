// app/components/JobCard.tsx
"use client";

import React from "react";
import Link from "next/link"; 

type li = {
  id: string
  title: string
  description: string
  responsibility: string[]
  ideal: {
    age: string
    gender: string
    traits: string[]

  }
  where: string
  about: {
    posted_on: string
    deadline: string
    location: string
    start_date: string
    end_date: string
    categories: string[]
    required_skills: string[]
  }
  company: string
  image: string
}

export default function JobCard({id,title,description,responsibility,ideal,where,about,company,image}: li) {
  return (
    <Link href={`/description/${id}`} className="block">
      <div className="mt-4 border  border-gray-300 w-fit flex justify-between rounded-[30px] items-center h-[266px] p-[24px] bg-white">
        <div className="flex w-[844px] h-[218px] gap-[24px]">
          <img
            src={image}
            alt="used image"
            className="w-[66px] h-[59px] object-contain mt-2 rounded-4xl"
          />
          <div className="w-[755px] h-[218px]">
            <h1 className="w-fit h-[24px]   text-[20px] font-semibold text-[#25324B]">
              {title}
            </h1>
            <h3 className="text-[#7C8493]">
              <span className="w-[265px] h-[26px]">
                {company}
              </span>{" "}
              <span className="w-[4px] h-[4px]">·</span>
              <span className="w-[169px] h-[26px]">Addis Ababa, Ethiopia</span>
            </h3>
            <h4 className="w-[714px] h-[112px] text-[#25324B] text-sm mt-2 leading-relaxed">
              As a Social Media Assistant, you will work closely with the social
              media manager or marketing team to execute social media strategies
              and campaigns. You will be responsible for assisting in the
              creation and scheduling of engaging content, monitoring social
              media channels, and interacting with followers.
            </h4>
            <div className="flex w-[242px] h-[31px] gap-[8px] mt-5 items-center text-xs font-medium">
              <span className="w-[96px] h-[31px] pt-1 px-3 rounded-[80px] text-green-500 text-center bg-[#56CDAD1A]">
                In Person
              </span>
              <span>|</span>
              <span className="w-[111px] h-[31px] pt-1 px-3 rounded-[80px] text-[#FFB836] text-center border border-[#FFB836]">
                Education
              </span>
              <span className="w-[60px] h-[31px] pt-1 px-3 rounded-[80px] text-[#000000] text-center border border-[#4640DE]">
                IT
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
