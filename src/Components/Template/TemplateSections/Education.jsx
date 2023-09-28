import { useSelector } from "react-redux";
import {
  sectionHeadingCss,
  sectionSubHeadingCss,
} from "../../TailwindCss/tailwindCss";

export default function Education() {
  const Education = useSelector((state) => state?.ResumeDetails?.education);
  // console.log("Edu", Education);
  return (
    <div className="w-full h-full p-2">
      <h2 className={`${sectionHeadingCss}`}>Education Background</h2>

      <div className="flex flex-col space-y-1 flex-wrap ml-3">
        {Education?.educationData?.map((education, index) => (
          <div className="flex flex-col p-2" key={index}>
            <p>
              <span className={`${sectionSubHeadingCss}`}>
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
