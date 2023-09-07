import { useSelector } from "react-redux";

export default function Project() {
  const Project = useSelector((state) => state?.ResumeDetails?.project);
  console.log("pro", Project);
  return (
    <>
      <div className="py-3 project">
        <h2 className="text-lg font-poppins font-bold text-top-color project">
          Projects
        </h2>
        <div className="border-2 w-20 border-gray-300 rounded project"></div>

        <div className="project">
          <div className="project">
            <p className="text-lg font-semibold text-gray-700 project">
              {Project?.projectName}
            </p>
            <p className="font-normal text-sm text-gray-700 mb-1 pl-2 project">
              {Project?.projectDetail}
            </p>
          </div>
          <div className="project">
            <p className="text-lg font-semibold text-gray-700 project">
              Parking Automation System
            </p>
            <p className="font-normal text-sm text-gray-700 mb-1 pl-2 project">
              it’s a web application which helps you to book your slot for your
              car just like booking a movie ticket from home.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
