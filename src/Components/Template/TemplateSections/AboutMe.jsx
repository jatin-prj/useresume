import { useSelector } from "react-redux";

export default function AboutMe() {
  const About = useSelector((state) => state?.ResumeDetails?.about);
  return (
    <div>
      {About?.about && (
        <div>
          <h2 className="text-xl font-bold">About Me</h2>
          <p> {About?.about}</p>
        </div>
      )}
    </div>
  );
}
