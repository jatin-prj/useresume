import { useSelector } from "react-redux";
import {
  sectionHeadingCss,
  sectionSubHeadingCss,
} from "Components/TailwindCss/tailwindCss";

export default function Experience() {
  const Experience = useSelector((state) => state?.ResumeDetails?.experience);
  // console.log("Exe", Experience);
  return (
    <div className="w-full h-full p-2">
      <h2 className={`${sectionHeadingCss}`}>Experience</h2>

      <div className="flex flex-col w-full flex-wrap ml-5">
        {Experience?.experienceData?.map((ele, index) => (
          <div className="flex flex-col w-1/2 p-2" key={index}>
            <p className={`${sectionSubHeadingCss}`}>{ele?.companyName}</p>
            <div>
              <p className="font-semibold text-sm mt-1 mb-1 ">
                Key Responsibilities
              </p>
              <ul className="text-sm list-disc pl-4 space-y-1 ">
                <li>{ele?.workOn}</li>
              </ul>
            </div>
            <p className="font-normal text-sm">
              {ele?.startYear} - {ele?.endYear ? ele?.endYear : "Present"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
