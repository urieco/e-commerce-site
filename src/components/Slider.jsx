import { useEffect, useState } from "react";
import Slide1 from "../images/Smartphone - iPhone14ProMax.jpg";
import Slide2 from "../images/Laptop - MacbookAir2023.jpg";
import Slide3 from "../images/Accessories - AppleAirPods.jpg";
import Slide4 from "../images/PC - MacMini.jpg";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeLeft, setSwipeLeft] = useState(true);

  const sample = [
    { url: Slide1, title: "iPhone 14 Pro Max", key: 0 },
    { url: Slide2, title: "Macbook Air 2023", key: 1 },
    { url: Slide3, title: "AirPods", key: 2 },
    { url: Slide4, title: "Mac Mini", key: 3 },
  ];

  const goToLeft = () => {
    setSwipeLeft(true);
    const slider = document.getElementById("slider");
    setTimeout(() => {
      if (currentIndex === 0) setCurrentIndex(sample.length - 1);
      else setCurrentIndex((prev) => prev - 1);
    }, 500);
    slider.classList.add("swipeLeft");
  };

  const goToRight = () => {
    setSwipeLeft(false);
    const slider = document.getElementById("slider");
    setTimeout(() => {
      if (currentIndex === sample.length - 1) setCurrentIndex(0);
      else setCurrentIndex((prev) => prev + 1);
    }, 500);
    slider.classList.add("swipeRight");
  };

  useEffect(() => {
    let addedStyle = swipeLeft ? "swipeLeft" : "swipeRight";
    setTimeout(
      () => document.getElementById("slider").classList.remove(addedStyle),
      100
    );

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
  }, [currentIndex]);

  return (
    <div className="border rounded-lg mx-[10vw] mb-10">
      <div className="w-[40vw] h-[40vh] relative my-0 mx-auto">
        <div
          className="text-gray-400 hover:text-gray-700 text-7xl font-semibold w-[5vw] h-[5vh] absolute top-[35%] -left-4 scale-y-125 active:translate-x-[-0.25rem] cursor-pointer z-10 select-none"
          onClick={goToLeft}
        >
          {"<"}
        </div>
        <div
          className="text-gray-400 hover:text-gray-600 text-7xl font-semibold w-[5vw] h-[5vh] absolute top-[35%] -right-4 scale-y-125 active:translate-x-1 cursor-pointer z-10 select-none"
          onClick={goToRight}
        >
          {">"}
        </div>
        <div
          id="slider"
          className={`bg-transparent w-[70vw] h-[38vh] absolute ${
            swipeLeft ? "-right-[50rem]" : "-left-[50rem]"
          } m-auto`}
        ></div>
        <img
          className="w-full h-full object-scale-down"
          src={sample[currentIndex].url}
          loading="lazy"
        />
        <div className="flex justify-center gap-4 absolute bottom-1 left-[35%]">
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
  );
}

export { Slider };
