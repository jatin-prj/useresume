import { useSelector } from "react-redux";

export default function Experience() {
  const Experience = useSelector((state) => state?.ResumeDetails?.experience);
  console.log("Exe", Experience);
  return (
    <>
      <div className="py-3 ">
        <h2 className="text-lg font-poppins font-bold text-top-color ">
          Experience
        </h2>
        <div className="border-2 w-20 border-gray-300 rounded "></div>

        <div className="flex justify-between w-full flex-wrap  ">
          <div className="flex flex-col w-1/2 ">
            <p className="text-lg font-bold text-gray-700 ">
              {Experience?.companyName}
            </p>
            <p className="font-semibold text-sm text-gray-700 ">
              {Experience?.workYear} - Present
            </p>
            <p className="font-semibold text-sm text-gray-700 mt-2 mb-1 ">
              Key Responsibilities
            </p>
            <ul className="text-sm list-disc pl-4 space-y-1 ">
              {Experience?.workOn.map((ele, index) => (
                <li key={index}>{ele}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col w-1/2 ">
            <p className="text-lg font-bold text-gray-700 ">
              Amazon.com | Lead
            </p>
            <p className="font-semibold text-sm text-gray-700 ">2020-2021</p>
            <p className="font-semibold text-sm text-gray-700 mt-2 mb-1 ">
              Key Responsibilities
            </p>
            <ul className="text-sm list-disc pl-4 space-y-1   ">
              <li>Developed usable components</li>
              <li>Solving complex problems</li>
              <li>Solving critical bugs</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
