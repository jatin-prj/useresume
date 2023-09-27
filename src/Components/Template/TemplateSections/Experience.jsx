import { useSelector } from "react-redux";

export default function Experience() {
  const Experience = useSelector((state) => state?.ResumeDetails?.experience);
  // console.log("Exe", Experience);
  return (
    <div className="py-3">
      <h2 className="text-lg font-poppins font-bold text-top-color ">
        Experience
      </h2>

      <div className="flex justify-between w-full flex-wrap">
        {Experience?.experienceData?.map((ele, index) => (
          <div className="flex flex-col w-1/2 " key={index}>
            <p className="text-lg font-bold ">{ele?.companyName}</p>
            <p className="font-semibold text-sm ">
              {ele?.startYear} - {ele?.endYear ? ele?.endYear : "Present"}
            </p>
            <p className="font-semibold text-sm mt-2 mb-1 ">
              Key Responsibilities
            </p>
            <ul className="text-sm list-disc pl-4 space-y-1 ">
              <li>{ele?.workOn}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
