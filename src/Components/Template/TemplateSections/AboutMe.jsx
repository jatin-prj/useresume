import { useSelector } from "react-redux";

export default function AboutMe() {
  const About = useSelector((state) => state?.ResumeDetails?.about);
  console.log("about", About);

  return (
    <div className="w-full h-full">
      <h2 className="text-xl font-bold">About Me</h2>
      <div className="border-2 w-20 border-gray-300 rounded project"></div>
      {About?.about && (
        <div>
          <p> {About?.about}</p>
        </div>
      )}
    </div>
  );
}
