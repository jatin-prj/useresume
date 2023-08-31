import { useState, useRef } from "react";
// import Moveable from "react-moveable";
import "./styles.css";
import MoveableElement from "./MoveavleElements";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Experience from "./Experience";
import Project from "./Project";
import Skills from "./Skills";
import Header from "./Header";

// This is am individual element
// this is the container handling all events.
// We could move event handling to inside the element itself and then do changes within the store state

const Builder = () => {
  const [currentTarget, setCurrentTarget] = useState();

  const components = [
    {
      name: <AboutMe />,
    },
    {
      name: <Contact />,
    },
    {
      name: <Experience />,
    },
    {
      name: <Project />,
    },
    {
      name: <Skills />,
    },
    {
      name: <Header />,
    },
  ];

  const parentRef = useRef(null);

  const handleClick = (e) => {
    console.log("EEEEEEE", e);
    setCurrentTarget(e);
  };

  // const [width, setWidth] = useState(0);
  // const [height, setHeight] = useState(0);

  // useLayoutEffect(() => {
  //   setWidth(parentRef.current.offsetTop);
  //   setHeight(parentRef.current.offsetHeight);
  // }, []);
  // console.log("<><><?<?>>?", width, height);
  return (
    // <div className="App">
    <div
      className={`bg-white h-auto w-3/6 mx-auto hover:cursor-move ${
        currentTarget && `hover:cursor-move`
      }`}
      ref={parentRef}
    >
      {components &&
        components.map((box, i) => (
          <MoveableElement
            container={parentRef && parentRef.current}
            box={box}
            index={i}
            key={i}
            handleClick={(e) => handleClick(e)}
            currentTarget={currentTarget}
          />
        ))}
    </div>
    // </div>
  );
};

export default Builder;
