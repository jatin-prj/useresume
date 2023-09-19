import { useSelector } from "react-redux";

export default function AboutMe() {
  const About = useSelector((state) => state?.ResumeDetails?.about);
  // console.log("about", About);
  // const handleClick = (e) => {
  //   const bound = e.target.id;
  //   console.log(">>>>>..", e.target);
  // };
  // const ref = useRef();
  // useEffect(() => {
  //   console.log(ref.current, ref.current.getBoundingClientRect());
  // }, []);
  return (
    <div className="" id="about-me">
      <h2 className="text-3xl font-bold">About Me</h2>
      <div className="about">{About?.about}</div>
    </div>
  );
}
