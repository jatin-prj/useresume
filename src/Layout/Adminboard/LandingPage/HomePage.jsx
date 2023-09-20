import {
  mainHeadingCss,
  subHeadingCss,
} from "../../../Components/TailwindCss/tailwindCss";

export default function HomePage() {
  return (
    <>
      <div className="w-full">
        <div className="bg-slate-100 h-96 p-2">
          <div className="text-center">
            <p className={`${mainHeadingCss}`}>Welcome to useResume Site.</p>
            <p className={`${subHeadingCss}`}>
              Build Your Resume and Customize it.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
