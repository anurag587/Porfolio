const Resume = () => {
  const handleSumbit = () => {
    window.open(
      "https://drive.google.com/file/d/1cTah4AHKo_x--YuqLgdve4Vf1Z9oZNdk/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <div
      id="resume"
      className="flex  w-full flex-col
  items-center  gap-16 p-4 md: px-8 md: py-12"
    >
      <h1 className="text-4xl font-light text-white md:text-6x1">Resume</h1>
      <button
        onClick={handleSumbit}
        className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
      >
        View
      </button>
    </div>
  );
};

export default Resume;
