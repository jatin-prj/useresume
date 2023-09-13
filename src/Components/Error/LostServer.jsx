/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import LostPage from "../../Assests/Img/LostPage.png";
export default function LostServer() {
  return (
    <section className={`bg-white dark:bg-gray-900`}>
      <div className="flex flex-col justify-center items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="w-[39rem]">
          <img
            src={LostPage}
            alt="Oops! lost"
            className="w-full relative top-[5rem]    "
          />
        </div>
        <div className="mx-auto max-w-screen-sm text-center">
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <Link
            to={"/"}
            className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
