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
          <div className="flex flex-col education">
            <p className="font-semibold text-xs text-gray-700 education">
              {Education?.passingYear}
            </p>
            <p className="text-sm font-medium education">
              <span className="text-green-700 education">
                {Education?.cource}
              </span>
              , {Education?.instituteName}.
            </p>
            <p className="font-bold text-xs text-gray-700 mb-2 education">
              Percentage: {Education?.percentage}
            </p>
          </div>
          <div className="flex flex-col education">
            <p className="font-semibold text-xs text-gray-700 education">
              2017
            </p>
            <p className="text-sm font-medium education">
              <span className="text-green-700 education">HSC</span>, RAJARSHI
              SHAHU COLLEGE, LATUR.
            </p>
            <p className="font-bold text-xs text-gray-700 mb-2 education">
              Percentage: 80.77
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-xs text-gray-700 education">
              2015
            </p>
            <p className="text-sm font-medium education">
              <span className="text-green-700 education">SSC</span>, DNYANESHWAR
              HIGH SCHOOL, LATUR.
            </p>
            <p className="font-bold text-xs text-gray-700 mb-2 education">
              Percentage: 93.80
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
