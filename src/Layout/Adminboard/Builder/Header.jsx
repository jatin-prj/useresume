/* eslint-disable jsx-a11y/alt-text */
export default function Header() {
  return (
    <>
      <div className="flex rounded-t-lg bg-top-color p-2 border mb-5  bg-blue-500 w-full ">
        <div className="h-20 w-20 overflow-hidden rounded-full  border ml-5 ">
          <img src="" />
        </div>

        <div className="w-2/3  pl-5 mt-2  text-center">
          <p className="font-poppins font-bold text-heading  text-2xl">
            Amit Panchal
          </p>
          <p className="text-heading">Software Engineer</p>
        </div>
      </div>
    </>
  );
}
