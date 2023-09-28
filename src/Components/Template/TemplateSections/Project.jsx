import { useSelector } from "react-redux";
import {
  sectionHeadingCss,
  sectionSubHeadingCss,
} from "../../TailwindCss/tailwindCss";

export default function Project() {
  const Project = useSelector((state) => state?.ResumeDetails?.project);
  // console.log("pro", Project);
  return (
    <>
      <div className="w-full h-full p-2">
        {Project?.projectData && (
          <div>
            <h2 className={`${sectionHeadingCss}`}>Projects</h2>

            <div className="project">
              <div className="flex flex-col space-y-1 education">
                {Project?.projectData?.map((project, index) => (
                  <div className="flex flex-col education" key={index}>
                    <p className={`${sectionSubHeadingCss}`}>
                      {project?.projectName}
                    </p>
                    <ul className="list-disc ml-5 font-normal text-sm mb-1 pl-2 project">
                      <li>{project?.projectDetail}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
