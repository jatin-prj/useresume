/* eslint-disable react-hooks/exhaustive-deps */

import React, { Fragment, useRef, useState } from "react";
import Moveable from "react-moveable";
import { RiDragMove2Fill } from "react-icons/ri";
const MoveableElement = ({
  container,
  box,
  index,
  handleClick,
  currentTarget,
}) => {
  const moveableRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  console.log("isHovering", isHovering);

  // console.log(">>>>>>>>>>>>>>", container);

  return (
    <Fragment key={index}>
      <Moveable
        key={index + 100}
        target={currentTarget === moveableRef && moveableRef.current}
        container={container}
        origin={false}
        keepRatio={false}
        edge={true}
        snappable={true}
        snapThreshold={5}
        snapCenter={false}
        bounds={
          container
            ? container.getBoundingClientRect()
            : { left: 20, top: 20, bottom: 620, right: 320 }
        }
        verticalGuidelines={[100, 200, 300]}
        horizontalGuidelines={[0, 100, 200]}
        draggable={true}
        onDrag={(e) => {
          e.target.style.transform = e.transform;
        }}
        throttleDrag={1}
        resizable={true}
        onResize={(e) => {
          e.target.style.width = `${e.width}px`;
          e.target.style.height = `${e.height}px`;
          e.target.style.transform = e.drag.transform;
        }}
        throttleResize={1}
      />

      <div
        ref={moveableRef}
        id={`box-${box._id}`}
        className={
          "overflow-hidden border-2 border-white hover:border-2 hover:border-sky-500"
        }
        onClick={() => handleClick(moveableRef)}
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      >
        {/* {isHovering && ( */}
        <div className="relative w-5 bg-gray-400 ">
          <RiDragMove2Fill />
        </div>
        {/* )} */}
        {box.name}
      </div>
    </Fragment>
  );
};

export default MoveableElement;
