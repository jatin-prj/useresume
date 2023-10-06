import HeroImage4 from "Assests/Img/HeroImage4.jpg";

export default function HomePage() {
  return (
    <>
      <div className="w-full ">
        <div className="fixed w-full h-[33rem]">
          <img
            src={HeroImage4}
            className="block w-full h-full object-cover"
            alt="..."
          />
          <div className="absolute bottom-[12rem] 2xl:left-[70rem] xl:left-[45rem] lg:left-[33rem] sm:left-[30rem] sm:w-[19rem] md:w-auto  py-5 text-center ">
            <h5 className="text-xl text-gray-700 font-bold">
              Designing is the Silent Ambassdor of Your Brand
            </h5>
          </div>
        </div>
        <div className="text-center relative top-[33rem] xl:text-[3.5rem] text-cyan-700 w-autom sm:text-[2rem] ">
          <p
            className={`hero-heading`}
            data-split="Build Your Resume and Customize it"
          >
            Build Your Resume and Customize it
          </p>
        </div>
      </div>
    </>
  );
}