import { useSelector } from "react-redux";

export default function Education() {
  const Education = useSelector((state) => state?.ResumeDetails?.education);
  console.log("Edu", Education);
  return (
    <>
      <div className="py-3 education">
        <h2 className="text-lg font-poppins font-bold text-top-color education">
          Education Background
        </h2>
        <div className="border-2 w-20 border-gray-300 rounded mb-2 education"></div>

        <div className="flex flex-col space-y-1 education">
          {Education?.educationData?.map((education, index) => (
            <>
              <div className="flex flex-col education">
                <p className="font-semibold text-xs text-gray-700 education">
                  {education?.passingYear}
                </p>
                <p className="text-sm font-medium education">
                  <span className="text-green-700 education">
                    {education?.cource}
                  </span>
                  , {education?.instituteName}.
                </p>
                <p className="font-bold text-xs text-gray-700 mb-2 education">
                  Percentage: {education?.percentage}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
