const Timer = () => {
  return (
    <section className="py-20">
      <h2 className="text-center text-4xl font-bold mb-2 text-slate-700">
        زمان شروع کمپین بعدی
      </h2>

      <div className=" grid-flow-col gap-5 text-center auto-cols-max flex justify-center mt-10">
        <div className="flex flex-col px-3 py-5 shadow-lg bg-sky-800 rounded-lg text-white rotate-12 scale-110">
          <span className="countdown iransans-font  text-5xl">
            <span style={{ "--value": 15 }}></span>
          </span>
          <span className="text-xl font-semibold"> روز</span>
        </div>
        <div className="flex flex-col px-3 py-5 shadow-lg bg-sky-800  rounded-lg text-white transition-all hover:rotate-12">
          <span className="countdown iransans-font text-5xl">
            <span style={{ "--value": 10 }}></span>
          </span>
          <span className="text-xl font-semibold"> ساعت</span>
        </div>
        <div className="flex flex-col px-3 py-5 shadow-lg bg-sky-800  rounded-lg text-white transition-all hover:rotate-12">
          <span className="countdown iransans-font text-5xl">
            <span style={{ "--value": 24 }}></span>
          </span>
          <span className="text-xl font-semibold"> دقیقه</span>
        </div>
        <div className="flex flex-col px-3 py-5 shadow-lg bg-sky-800  rounded-lg text-white transition-all hover:rotate-12">
          <span className="countdown iransans-font text-5xl">
            <span style={{ "--value": 49 }}></span>
          </span>
          <span className="text-xl font-semibold"> ثانیه</span>
        </div>
      </div>
    </section>
  );
};

export default Timer;
