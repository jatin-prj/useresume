import { useSelector } from "react-redux";
export default function Project() {
  const Project = useSelector((state) => state?.ResumeDetails?.project);
  // console.log("pro", Project);
  return (
    <>
      <div className="w-full h-full">
        {Project?.projectData && (
          <div>
            <h2 className={`sectionHeading`}>Projects</h2>

            <div className="project">
              <div className="flex flex-col space-y-1 education">
                {Project?.projectData?.map((project, index) => (
                  <div className="flex flex-col education" key={index}>
                    <p className={`sectionSubHeading`}>
                      {project?.projectName}
                    </p>
                    <ul className="list-disc ml-5 font-normal text-sm mb-1 pl-2 ">
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
