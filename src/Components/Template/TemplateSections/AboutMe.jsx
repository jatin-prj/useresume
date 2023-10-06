import { useSelector } from "react-redux";

export default function AboutMe() {
  const About = useSelector((state) => state?.ResumeDetails?.about);

  return (
    <div className="w-full h-full">
      {About?.about && (
        <>
          <h2 className={`sectionHeading`}>About Me</h2>
          <p className="">{About?.about}</p>
        </>
      )}
    </div>
  );
}
