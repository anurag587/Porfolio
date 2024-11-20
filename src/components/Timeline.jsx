const Timeline = () => {
  return (
    <div
      id="education"
      className="flex  w-full flex-col
items-center  gap-16 p-4 md: px-8 md: py-12"
    >
      <h1 className="text-4xl font-light text-white md:text-6x1">Education</h1>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
          {/* <!-- Stack 1 --> */}
          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
              <h1 className="text-white text-xl font-medium py-2 text-right">
                2024
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs text-right">
              <strong>Masters of Computer Application(SE) </strong>
                <br></br>
                <span>University School of Information, Communication and Technology(GGSIPU), Dwarka</span> <br></br>
                <span>CGPA : 8.32</span><br></br>
                {/* <strong>Achievement :Physics Topper </strong>  */}
                </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-300"></div>
            <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
              1
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>

          {/* <!-- Stack 2 --> */}
          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-300"></div>
            <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
              2
            </div>
          </div>
          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
              <h1 className="text-white text-xl font-medium py-2 text-left">
                2021
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs">
              <strong>Bachelors of Science(HONS) Physics </strong>
                <br></br>
                <span>Rajdhani College(DU), Delhi</span> <br></br>
                <span>CGPA : 8.297</span><br></br>
                {/* <strong>Achievement :Physics Topper </strong>  */}
              </p>
            </div>
          </div>

          {/* <!-- Stack 3 --> */}
          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full bg-indigo-400 rounded-md p-2 md:pl-4">
              <h1 className="text-white text-xl font-medium py-2 text-right">
                2018
              </h1>
              <p className="text-gray-100 sm:text-sm text-xs text-right">
                <strong>Class 12th</strong>
                <br></br>
                <span>Hansraj Smarak Senior Secondary School, Delhi</span> <br></br>
                <span>Percentage : 92.66 (PCM)</span><br></br>
                <strong>Achievement :Physics Topper </strong> 
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-300"></div>
            <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">
              3
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
