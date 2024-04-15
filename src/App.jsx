// Custom Components
import Header from "./components/navigation/Header";
import Hero from "./components/hero/Hero";
import PartnersSlider from "./components/sliders/PartnersSlider";
import CampCard from "./components/CampCard/CampCard";
import NewsLetter from "./components/newsLetter/NewsLetter";
import Footer from "./components/footer/Footer";

import hekmatFundImage from "./assets/lastImage.png";

import "./App.css";

// Data
import { campeigns } from "./data/campeigns.json";

const App = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-white overflow-x-hidden">
      <Header />
      <main className="container mx-auto ">
        <Hero />
        <PartnersSlider />

        <section className="py-10">
          <h2 className="text-center text-2xl lg:text-4xl font-bold mb-2 text-slate-700 dark:text-white">
            کمپین های برگزار شده در سهم آشنا
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-10">
            {campeigns.map(item => {
              return (
                <CampCard
                  key={item.id}
                  title={item.title}
                  description={item.descritpion}
                  url={item.url}
                  photoURL={item.photoURL}
                />
              );
            })}
          </div>

          <div className="flex justify-center">
            <a href="" className="btn  btn-link text-lg">
              مشاهده همه
            </a>
          </div>
        </section>

        {/* Introduce Last Campeign */}
        <section className="grid lg:grid-cols-2 lg:gap-20 pb-20 ">
          <div className=" overflow-visible relative">
            <div className="curveGreenBg absolute rotate-45 w-[350px] h-[350px] top-[20%] left-[10%]"></div>
            <div className="lastCampImage absolute w-[350px] h-[350px] top-[20%] left-[10%]"></div>
            <img
              src={hekmatFundImage}
              alt="آخرین کمپین"
              width={700}
              className="mx-auto z-20 relative"
            />
          </div>
          <div className="flex flex-col justify-center lg:px-0 px-4 lg:mt-0 mt-10">
            <h2 className="text-2xl lg:text-4xl font-bold mb-2 text-slate-700 dark:text-white">
              آخرین کمپین
            </h2>
            <p className="text-justify leading-7 text-gray-600 font-medium">
              ایـن صنـدوق با تقسیـم سـود ماهانـه در پانزدهـم هرمـاه مناسـب
              کسـانی اسـت که انتظـار دارنـد ، سـود سـرمایه گـذاری خـود را در
              اواسـط هـر مـاه دریافـت کننـد. سـود بیشتـر از سپـرده بانکـی،
              روزشمـار و معـاف از مالیـات بـودن و بـدون جریمـه برداشـت و امکـان
              سـرمایه‌گـذاری مجـدد از مزایـای ایـن صنـدوق دوسـت‌ داشتنـی اسـت که
              با سابقـه ای 14 سالـه، توانستـه اسـت ضمـن جلـب اعتمـاد و رضایـت
              سـرمایه گـذاران، با ایجـاد بازدهـی معـادل 28.7% موثـر سالیـانه، در
              میـان پر بـازده تریـن صنـدوق هـای درآمـد ثابـت مبتنـی بر صـدور و
              ابطـال بـازار قـرار گرفتـه اسـت.
            </p>
          </div>
        </section>
        {/* Introduce Last Campeign */}

        <NewsLetter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
