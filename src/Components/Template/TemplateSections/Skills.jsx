import { useSelector } from "react-redux";
export default function Skills() {
  const skill = useSelector((state) => state?.ResumeDetails?.skill);
  // console.log("skill", skill);
  return (
    <div className="w-full h-full ">
      <h2 className={`sectionHeading`}>Skills</h2>

      <div className="">
        {skill?.skillData?.map((skillElem, index) => (
          <div className=" mt-1 mx-5" key={index}>
            <div className={`sectionSubHeading flex gap-2 mt-2`}>
              <div className="w-28">{skillElem?.rating}: &nbsp;</div>
              <div className="flex flex-wrap ">
                {skillElem?.skill?.map((element, skillIndex) => (
                  <div className="text-base font-normal" key={skillIndex}>
                    {element},&nbsp;
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
