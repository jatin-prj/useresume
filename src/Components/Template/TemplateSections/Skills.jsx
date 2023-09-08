import { useSelector } from "react-redux";
export default function Skills() {
  const Skill = useSelector((state) => state?.ResumeDetails?.skill);
  console.log("Skills", Skill);
  return (
    <>
      <div className="w-full skills">
        <h2 className="text-lg font-poppins font-bold text-top-color skills">
          Skills
        </h2>
        <div className="border-2 w-20 border-gray-300 rounded skills"></div>

        <div className="flex justify-between w-full flex-wrap">
          {Skill?.skillData.map((skillEle, index) => (
            <>
              <div key={index} className="w-2/5 mx-5">
                <div className="mb-1 text-base font-medium skills">
                  {skillEle?.skill}
                </div>
                <div className="w-full  rounded-full h-2.5 mb-4 bg-gray-700 skills">
                  <div
                    className=" bg-blue-500 p-0.3 text-center  h-2.5  rounded-full text-xs  leading-none skills"
                    style={{ width: `${parseInt(skillEle?.rating)}%` }}
                  >
                    {skillEle?.rating}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
