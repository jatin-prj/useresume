import { useSelector } from "react-redux";
export default function Education() {
  const Education = useSelector((state) => state?.ResumeDetails?.education);
  return (
    <div className="w-full h-full ">
      <h2 className={`sectionHeading`}>Education Background</h2>

      <div className="flex flex-col space-y-1 flex-wrap ml-3">
        {Education?.educationData?.map((education, index) => (
          <div className="flex flex-col p-2" key={index}>
            <p>
              <span className={`sectionSubHeading`}>
                {education?.instituteName}
              </span>
              , {education?.course}
            </p>
            {education?.percentage && (
              <p className="font-normal text-sm">
                Percentage: {education?.percentage}
              </p>
            )}
            <p className="font-normal text-sm">
              {education?.startYear} -{" "}
              {education?.endYear ? education?.endYear : "Present"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
