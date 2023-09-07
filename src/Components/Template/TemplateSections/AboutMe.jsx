import { useSelector } from "react-redux";

export default function AboutMe() {
  const About = useSelector((state) => state?.ResumeDetails?.about);
  console.log("about", About);
  return (
    <div
      // className={`${className}`}
      // id={id}
      // draggable={draggable}
      // onDragStart={(e) => onDragStart(e)}
      // onDragEnd={(e) => onDragEnd(e)}
      // onDragOver={(e) => onDragOver(e)}
      // onDrop={(e) => onDrop(e)}
    >
      <h2 className="text-3xl font-bold">About Me</h2>
      {About?.about}
    </div>
  );
}
