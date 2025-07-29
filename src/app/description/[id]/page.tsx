import { CalendarDays,Calendar, Clock4, PlusCircle , MapPin, CheckCircle, Key } from "lucide-react";
import { jobs } from "@/data/data";

export default function JobDescription({params}: {params: {id:string}}) {
  const job = jobs.find((j) => j.id == params.id)
  return (
    <main className="min-h-screen flex bg-white text-black p-[32px] gap-[62px] mx-auto w-[1229px] h-[1064px] font-sans">
      <section className=" w-[815px] h-[1000px] py-[46px] space-y-16 gap-[55px]">
        <div className=" w-[815px] h-[140px] gap-[16px]  ">
          <h2 className=" w-[147px] h-[29px] mb-2 text-[24px] leading-[120%] font-black ">
            Description
          </h2>
          <p className=" w-[815px] h-[130px] text-[16px] leading-[160%] ">
            {job?.description}
          </p>
        </div>

        <div className="w-[815px]  font-black">
          <h2 className="w-[202px] text-[24px] leading-[120%] mb-2">
            Responsibilities
          </h2>

          <ul className="w-[815px] list-disc list-inside space-y-3 leading-relaxed">
            {job?.responsibilities.map((text, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle
                  className="text-[#56CDAD] mt-[4px] min-w-[18px]"
                  size={18}
                />
                <span className="text-[16px] font-[400]">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className=" w-[815px] h-[265px]  gap-[16px] ">
          <h2 className="text-[24px] leading-[120%] font-bold w-[310px] mb-4 h-[29px] ">
            Ideal Candidate we want
          </h2>
          <ul className="list-disc list-inside space-y-2 w-[815px] h-[220px] text-[16px] ">
            <li>
              Young ({job?.ideal_candidate.age} year old){" "}
              {job?.ideal_candidate.gender} social media manager
            </li>
            {job?.ideal_candidate.traits.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">When & Where</h2>
          <div className="flex items-start gap-2">
            <MapPin className="text-blue-600 mt-1" size={18} />
            <p>{job?.when_where}</p>
          </div>
        </div>
      </section>

      <aside className=" w-[293.5px] h-[674px] gap-[20px] ">
        <div>
          <h3 className="text-lg font-semibold">About</h3>
          <ul className="text-sm space-y-3 mb-7">
            <li className="flex items-center gap-3 w-[142px] ">
              <div className="p-2 rounded-full border-[1px] border-[#D6DDEB] ">
                <PlusCircle className="text-[#26A4FF] " size={16} />
              </div>
              <span>
                <h4 className="text-[#515B6F] ">Posted On:</h4>{" "}
                <h4 className=" text-black ">{job?.about.posted_on}</h4>
              </span>
            </li>
            <li className="flex items-center w-[146px] h-[52px] gap-[16px]">
              <div className=" p-2 rounded-full border-[1px] border-[#D6DDEB]">
                <CalendarDays className="text-[#26A4FF]" size={16} />
              </div>
              <span>
                <h4 className="text-[#515B6F] ">Deadline:</h4>
                <h4 className=" text-black ">{job?.about.deadline}</h4>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className=" p-2 rounded-full border-[1px] border-[#D6DDEB]">
                <MapPin className="text-[#26A4FF]" size={16} />
              </div>
              <span>
                <h4 className="text-[#515B6F] ">Location:</h4>
                <h4 className=" text-black">{job?.about.location}</h4>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className=" p-2 rounded-full border-[1px] border-[#D6DDEB]">
                <CalendarDays className="text-[#26A4FF]" size={16} />
              </div>
              <span>
                <h4 className="text-[#515B6F] ">Start Date:</h4>
                <h4 className=" text-black ">{job?.about.start_date}</h4>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className=" p-2 border-[1px] rounded-full border-[#D6DDEB]">
                <CalendarDays className="text-[#26A4FF]" size={16} />
              </div>
              <span>
                <h4 className="text-[#515B6F] ">End Date:</h4>
                <h4 className=" text-black ">{job?.about.end_date}</h4>
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Categories</h3>
          <div className="flex gap-2 mb-7 text-sm">
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">
              {job?.about.categories[0]}
            </span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
              {job?.about.categories[1]}
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Required Skills</h3>
          <div className="flex flex-wrap gap-2 mb-2 text-sm">
            {job?.about.required_skills.map((item, index) => (
              <span
                key={index}
                className="bg-purple-100 text-purple-800 px-2 py-1 rounded"
              >
                {item}
              </span>
            ))}
          </div>
          {/* <div className="flex flex-wrap gap-2 mb-4 text-sm">
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">
              Social Media Marketing
            </span>
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">
              English
            </span>
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">
              Copywriting
            </span>
          </div> */}
        </div>
      </aside>
    </main>
  );
}
