export default function Experience({
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
        // className={`py-3 experience ${className}`}
        // id={id}
        // draggable={draggable}
        // onDragStart={(e) => onDragStart(e)}
        // onDragEnd={(e) => onDragEnd(e)}
        // onDragOver={(e) => onDragOver(e)}
        // onDrop={(e) => onDrop(e)}
      >
        <h2 className="text-lg font-poppins font-bold text-top-color experience">
          Experience
        </h2>
        <div className="border-2 w-20 border-gray-300 rounded experience"></div>

        <div className="flex flex-col experience">
          <div className="flex flex-col experience">
            <p className="text-lg font-bold text-gray-700 experience">
              Netcracker Technology | Software Engineer
            </p>
            <p className="font-semibold text-sm text-gray-700 experience">
              2021 - Present
            </p>
            <p className="font-semibold text-sm text-gray-700 mt-2 mb-1 experience">
              Key Responsibilities
            </p>
            <ul className="text-sm list-disc pl-4 space-y-1 experience">
              <li>Working on customer facing product</li>
              <li>Deliverying highly efficient solutions</li>
              <li>Solving critical bugs</li>
            </ul>
          </div>

          <div className="flex flex-col mt-8 experience">
            <p className="text-lg font-bold text-gray-700 experience">
              Amazon.com | Lead
            </p>
            <p className="font-semibold text-sm text-gray-700 experience">
              2020-2021
            </p>
            <p className="font-semibold text-sm text-gray-700 mt-2 mb-1 experience">
              Key Responsibilities
            </p>
            <ul className="text-sm list-disc pl-4 space-y-1 experience  ">
              <li>Developed usable components</li>
              <li>Solving complex problems</li>
              <li>Solving critical bugs</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
