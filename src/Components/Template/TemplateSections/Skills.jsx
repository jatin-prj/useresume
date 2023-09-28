import { useSelector } from "react-redux";
import {
  sectionHeadingCss,
  sectionSubHeadingCss,
} from "../../TailwindCss/tailwindCss";
export default function Skills() {
  const skill = useSelector((state) => state?.ResumeDetails?.skill);
  // console.log("skill", skill);
  return (
    <div className="w-full h-full p-2">
      <h2 className={`${sectionHeadingCss}`}>Skills</h2>

      <div className="">
        {skill?.skillData?.map((skillElem, index) => (
          <div className=" mt-1 mx-5" key={index}>
            <div className={`${sectionSubHeadingCss}`}>
              {skillElem?.rating}: &nbsp;
              <span>
                {skillElem?.skill?.map((element, skillIndex) => (
                  <span className="text-base font-normal" key={skillIndex}>
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
