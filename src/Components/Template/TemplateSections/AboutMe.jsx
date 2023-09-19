import { useSelector } from "react-redux";

export default function AboutMe() {
  const About = useSelector((state) => state?.ResumeDetails?.about);
  console.log("about", About);
  return (
    <div>
      {About?.length > 0 && (
        <div>
          <h2 className="text-xl font-bold">About Me</h2>
          <p> {About?.about}</p>
        </div>
      )}
      
    </div>
  );
}
