export default function Project({
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
        // className={`py-3 project ${className}`}
        // id={id}
        // draggable={draggable}
        // onDragStart={(e) => onDragStart(e)}
        // onDragEnd={(e) => onDragEnd(e)}
        // onDragOver={(e) => onDragOver(e)}
        // onDrop={(e) => onDrop(e)}
      >
        <h2 className="text-lg font-poppins font-bold text-top-color project">
          Projects
        </h2>
        <div className="border-2 w-20 border-gray-300 rounded project"></div>

        <div className="project">
          <div className="project">
            <p className="text-lg font-semibold text-gray-700 project">
              Used Books mobile app
            </p>
            <p className="font-normal text-sm text-gray-700 mb-1 pl-2 project">
              A platform to sell as well as to buy used books only for PCCoE
              College due to this reuse of books will be there beneficial for
              environment also indirectly helps increase communication between
              juniors and seniors.
            </p>
          </div>
          <div className="project">
            <p className="text-lg font-semibold text-gray-700 project">
              Parking Automation System
            </p>
            <p className="font-normal text-sm text-gray-700 mb-1 pl-2 project">
              it’s a web application which helps you to book your slot for your
              car just like booking a movie ticket from home.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
