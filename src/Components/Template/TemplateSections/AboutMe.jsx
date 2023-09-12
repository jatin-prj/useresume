import { useSelector } from "react-redux";

export default function AboutMe() {
  const About = useSelector((state) => state?.ResumeDetails?.about);
  console.log("about", About);
  return (
    <div className="p-2">
      <h2 className="text-3xl font-bold">About Me</h2>
      {About?.about}
    </div>
  );
}
