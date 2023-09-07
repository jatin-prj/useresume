export default function Education() {
  return (
    <>
      <div className="w-full h-full">
        <h2 className="text-lg font-poppins font-bold text-top-color ">
          Education
        </h2>
        <div className="border-2 w-20 border-gray-300 rounded "></div>

        <div className="flex flex-col ">
          <div className="flex flex-col ">
            <p className="text-lg font-bold text-gray-700 ">
              Netcracker Technology | Software Engineer
            </p>
            <p className="font-semibold text-sm text-gray-700 ">
              2021 - Present
            </p>
            <p className="font-semibold text-sm text-gray-700 mt-2 mb-1 ">
              Key Responsibilities
            </p>
            <ul className="text-sm list-disc pl-4 space-y-1 ">
              <li>Working on customer facing product</li>
              <li>Deliverying highly efficient solutions</li>
              <li>Solving critical bugs</li>
            </ul>
          </div>

          <div className="flex flex-col mt-8 ">
            <p className="text-lg font-bold text-gray-700 ">
              Amazon.com | Lead
            </p>
            <p className="font-semibold text-sm text-gray-700 ">2020-2021</p>
            <p className="font-semibold text-sm text-gray-700 mt-2 mb-1 ">
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
