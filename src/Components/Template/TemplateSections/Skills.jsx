import { useSelector } from "react-redux";
export default function Skills() {
  const skill = useSelector((state) => state?.ResumeDetails?.skill);
  // const a = Skill?.map((e) => e?.skill);
  // console.log(
  //   "Skills",
  //   a?.map((e) => e)
  // );
  console.log("skill", skill);
  return (
    <>
      <div className="w-full skills">
        <h2 className="text-lg font-poppins font-bold text-top-color skills">
          Skills
        </h2>
        <div className="border-2 w-20 border-gray-300 rounded skills"></div>

        <div className="">
          {skill?.map((skillElem, index) => (
            <div className=" mt-1 mx-5" key={index}>
              <div>
                {skillElem?.rating}: &nbsp;
                <span>
                  {skillElem?.skill?.map((element, skillIndex) => (
                    <span
                      className="mb-0 text-base font-medium "
                      key={skillIndex}
                    >
                      {element},&nbsp;
                    </span>
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
