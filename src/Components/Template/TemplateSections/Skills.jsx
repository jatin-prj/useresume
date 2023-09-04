export default function Skills({
  className,
  id,
  draggable,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDrop,
}) {
  return (
    <>
      <div
        // className={`w-full  ${className}`}
        // id={id}
        // draggable={draggable}
        // onDragStart={(e) => onDragStart(e)}
        // onDragEnd={(e) => onDragEnd(e)}
        // onDragOver={(e) => onDragOver(e)}
        // onDrop={(e) => onDrop(e)}
      >
        <h2 className="text-lg font-poppins font-bold text-top-color skills">
          Skills
        </h2>
        <div className="border-2 w-20 border-gray-300 rounded skills"></div>

        <div>
          <div className="mb-1 text-base font-medium skills">Java</div>
          <div className="w-full  rounded-full h-2.5 mb-4 bg-gray-700 skills">
            <div
              className=" bg-blue-500 p-0.3 text-center  h-2.5  rounded-full text-xs  leading-none skills"
              style={{ width: "45%" }}
            >
              45%
            </div>
          </div>

          <div className="mb-1 text-base font-medium skills">Tailwind CSS</div>
          <div className="w-full  rounded-full h-2.5 mb-4 bg-gray-700 skills">
            <div
              className=" bg-blue-500 p-0.3 text-center  h-2.5  rounded-full text-xs  leading-none skills"
              style={{ width: "45%" }}
            >
              45%
            </div>
          </div>

          <div className="mb-1 text-base font-medium skills">Andoid</div>
          <div className="w-full  rounded-full h-2.5 mb-4 bg-gray-700 skills">
            <div
              className=" bg-blue-500 p-0.3 text-center  h-2.5  rounded-full text-xs  leading-none skills"
              style={{ width: "45%" }}
            >
              45%
            </div>
          </div>

          <div className="mb-1 text-base font-medium skills">Html, Css, JS</div>
          <div className="w-full  rounded-full h-2.5 mb-4 bg-gray-700 skills">
            <div
              className=" bg-blue-500 p-0.3 text-center  h-2.5  rounded-full text-xs  leading-none skills"
              style={{ width: "90%" }}
            >
              90%
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
