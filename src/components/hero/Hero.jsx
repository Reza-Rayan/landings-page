import "./Hero.css";

import HeroSlider from "../sliders/HeroSlider";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 lg:flex-row-reverse ">
      <div className="lg:mt-44 mt-20 px-6 order-last">
        <h1
          className="text-2xl md:text-4xl xl:text-6xl
             font-black lg:text-right text-center font-peyda  text-slate-700  dark:text-white"
          style={{ lineHeight: "80px" }}
        >
          محل نمایش لندنیگ کارگزاری آشنا
        </h1>
        <p className="text-slate-700 font-medium lg:pl-24 text-justify  mt-4 font-iransans text-[15px] dark:text-gray-100 ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          <br />
        </p>{" "}
        <a
          href="#"
          className="btn btn-primary mt-6 text-white font-bold text-lg"
        >
          با ما آشنا شوید
        </a>
      </div>
      {/* Hero Image Section */}
      <div className="lg:order-last">
        <HeroSlider />
      </div>
    </section>
  );
};

export default Hero;
