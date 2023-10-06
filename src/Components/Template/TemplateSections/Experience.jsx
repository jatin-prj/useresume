import { useSelector } from "react-redux";
export default function Experience() {
  const Experience = useSelector((state) => state?.ResumeDetails?.experience);
  return (
    <div className="w-full h-full ">
      <h2 className={`sectionHeading`}>Experience</h2>

      <div className="flex flex-col w-full flex-wrap ml-5">
        {Experience?.experienceData?.map((ele, index) => (
          <div className="flex flex-col w-1/2 p-2" key={index}>
            <div>
              <p className={`sectionSubHeading`}>{ele?.companyName}</p>

              <p className="font-semibold text-sm mt-1 mb-1 ">
                Key Responsibilities
              </p>
              <ul className="text-sm list-disc pl-4 space-y-1 ">
                <li>{ele?.workOn}</li>
              </ul>
              <p className="font-normal text-sm">
                {ele?.startYear} - {ele?.endYear ? ele?.endYear : "Present"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
