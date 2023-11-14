import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Slide1 from "/images/Smartphone - iPhone14ProMax.jpg";
import Slide2 from "/images/Laptop - MacbookAir2023.jpg";
import Slide3 from "/images/Accessories - AppleAirPods.jpg";
import Slide4 from "/images/PC - MacMini.jpg";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState(false);

  const sample = [
    {
      imageUrl: Slide1,
      url: "/Smartphone/4s",
      title: "iPhone 14 Pro Max",
      key: 0,
    },
    {
      imageUrl: Slide2,
      url: "/Laptop/4l",
      title: "Macbook Air 2023",
      key: 1,
    },
    {
      imageUrl: Slide3,
      url: "/Accessories/1a",
      title: "AirPods",
      key: 2,
    },
    {
      imageUrl: Slide4,
      url: "/PC/3p",
      title: "Mac Mini",
      key: 3,
    },
  ];

  const goToLeft = () => {
    setActive(true);
    setTimeout(() => {
      if (currentIndex === 0) setCurrentIndex(sample.length - 1);
      else setCurrentIndex((prev) => prev - 1);
    }, 200);
    setActive(false);
  };

  const goToRight = () => {
    setActive(true);
    setTimeout(() => {
      if (currentIndex === sample.length - 1) setCurrentIndex(0);
      else setCurrentIndex((prev) => prev + 1);
    }, 200);
    setActive(false);
  };

  const activeStyle = {
    opacity: !active ? "1" : "0",
    transition: "opacity 0.2s ease",
  };

  useEffect(() => {
    const autoplay = setTimeout(() => goToRight(), 10000);

    document
      .querySelectorAll(".dot")
      .forEach((el) => el.classList.remove("dotActive"));
    document
      .querySelector(`.dot[data-key="${currentIndex}"]`)
      .classList.add("dotActive");

    return () => {
      clearTimeout(autoplay);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <>
      <div className="text-center sm:text-left text-gray-700 text-2xl font-bold tracking-tighter py-5  mx-[10vw]">
        NEW PRODUCTS
      </div>
      <div className="bg-gray-100 w-[1vw] h-[42vh] absolute py-2 border-l rounded-lg sm:mx-[10vw] shadow-lg z-20"></div>
      <div className="bg-gray-100 w-[1vw] h-[42vh] absolute right-0 py-2 border-r rounded-lg sm:mx-[10vw] shadow-lg z-20"></div>
      <div className="border-x-transparent py-2 border-y rounded-lg sm:mx-[10vw] mb-10 shadow-sm">
        <div className="w-[40vw] h-[40vh] relative my-0 mx-auto">
          <div
            className="text-gray-300 hover:text-gray-600 text-7xl font-semibold w-[5vw] h-[5vh] absolute top-[35%] -left-28 sm:-left-20 scale-y-125 active:translate-x-[-0.25rem] cursor-pointer z-10 select-none"
            onClick={goToLeft}
          >
            {"<"}
          </div>
          <div
            className="text-gray-300 hover:text-gray-600 text-7xl font-semibold w-[5vw] h-[5vh] absolute top-[35%] -right-20 scale-y-125 active:translate-x-1 cursor-pointer z-10 select-none"
            onClick={goToRight}
          >
            {">"}
          </div>
          <Link
            to={sample[currentIndex].url}
            className="bg-transparent w-[30vw] h-[30vh] absolute left-12 top-12"
          />
          <img
            id="sliderImage"
            className="w-full h-full object-scale-down"
            style={activeStyle}
            src={sample[currentIndex].imageUrl}
            loading="lazy"
          />
          <div className="flex justify-center gap-4 relative bottom-5 left-[0] z-10">
            {sample.map((slide) => (
              <div
                key={slide.key}
                data-key={slide.key}
                className="dot bg-transparent w-4 h-4 border border-gray-400 rounded-lg cursor-pointer"
                onClick={() => {
                  setCurrentIndex(slide.key);
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export { Slider };
