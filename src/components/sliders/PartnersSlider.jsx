import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../hero/Hero.css";

import ashena1Image from "../../assets/partners/ashena-1.png";
import ashena2Image from "../../assets/partners/ashena-2.png";
import ashena3Image from "../../assets/partners/ashena-3.png";
import ashena4Image from "../../assets/partners/ashena-4.png";
import ashena5Image from "../../assets/partners/ashena-6.png";

const PartnerSlider = () => {
  const partners = [
    { id: "1", imageURL: ashena1Image },
    { id: "2", imageURL: ashena2Image },
    { id: "3", imageURL: ashena3Image },
    { id: "4", imageURL: ashena4Image },
    { id: "4", imageURL: ashena5Image },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    slidesToShow: 5,
    arrows: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="py-12 px-8 lg:px-0">
      <h2 className="text-center text-2xl lg:text-4xl font-bold mb-2 text-slate-700 dark:text-white lg:pb-10">
        همکاران ما در سهم آشنا
      </h2>
      <Slider
        {...sliderSettings}
        className="shadow-lg dark:shadow-[#eeeeee20] bg-white dark:bg-slate-800 rounded-lg py-2"
      >
        {partners.map(item => (
          <div key={item.id}>
            <img
              key={item.id}
              src={item.imageURL}
              alt={`Partner ${item.id}`}
              className="mx-auto transition-all hover:scale-105 hover:opacity-50"
              width={140}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default PartnerSlider;
