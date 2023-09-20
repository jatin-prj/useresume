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
