import { useSelector } from "react-redux";
export default function Skills() {
  const skill = useSelector((state) => state?.ResumeDetails?.skill);
  console.log("skill", skill);
  return (
    <div className="w-full skills" id="skills">
      <h2 className="text-lg font-poppins font-bold text-top-color skills">
        Skills
      </h2>

      <div className="">
        {skill?.skillData?.map((skillElem, index) => (
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
  );
}
