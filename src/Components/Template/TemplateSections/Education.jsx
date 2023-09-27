import { useSelector } from "react-redux";

export default function Education() {
  const Education = useSelector((state) => state?.ResumeDetails?.education);
  // console.log("Edu", Education);
  return (
    <div className="py-3 " id="">
      <h2 className="text-lg font-poppins font-bold text-top-color ">
        Education Background
      </h2>

      <div className="flex flex-col space-y-1 ">
        {Education?.educationData?.map((education, index) => (
          <div className="flex flex-col pl-5 " key={index}>
            <p className="font-semibold text-xs  ">
              {education?.startYear} -{" "}
              {education?.endYear ? education?.endYear : "Present"}
            </p>
            <p className="text-sm font-medium ">
              <span className=" ">{education?.course}</span>,{" "}
              {education?.instituteName}
            </p>
            {education?.percentage && (
              <p className="font-bold text-xs  mb-2 ">
                Percentage: {education?.percentage}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
