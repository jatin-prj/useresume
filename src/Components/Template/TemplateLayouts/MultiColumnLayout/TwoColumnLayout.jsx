import React from "react";

// import "./styles.css";

export default function TwoColumnLayout() {
  const myList = [
    { name: "one", color: "green" },
    { name: "two", color: "blue" },
    { name: "three", color: "red" },
    { name: "four", color: "lightgreen" },
    { name: "five", color: "lightblue" },
    { name: "six", color: "cyan" },
  ];
  const handleClick = () => {
    console.log("mylist: ", myList);
  };

  return (
    <div className="flex justify-center ">
      <div class="bg-gray-100 p-4">
        <div class="border-1 shadow-lg shadow-gray-700 rounded-lg">
          <div class="flex rounded-t-lg bg-top-color sm:px-2 w-full">
            <div class="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
              <img src="https://media.licdn.com/dms/image/C4D03AQH8qidO0nb_Ng/profile-displayphoto-shrink_800_800/0/1615696897070?e=2147483647&v=beta&t=ia3wfE2J7kVLdBy9ttkgUDAA_ul29fymykhQo0lABDo" />
            </div>

            <div class="w-2/3 sm:text-center pl-5 mt-10 text-start">
              <p class="font-poppins font-bold text-heading sm:text-4xl text-2xl">
                Amit Pachange
              </p>
              <p class="text-heading">Software Engineer</p>
            </div>
          </div>

          <div class="p-5">
            <div class="flex flex-col sm:flex-row sm:mt-10">
              <div class="flex flex-col sm:w-1/3">
                <div class="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
