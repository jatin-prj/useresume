import { useSelector } from "react-redux";
import { sectionHeadingCss } from "Components/TailwindCss/tailwindCss";

export default function AboutMe() {
  const About = useSelector((state) => state?.ResumeDetails?.about);
  return (
    <div className="p-2">
      {About?.about && (
        <div>
          <h2 className={`${sectionHeadingCss}`}>About Me</h2>
          <p className="">{About?.about}</p>
        </div>
      )}
    </div>
  );
}
