import { CountdownClock } from "./CountdownClock";

import PromotionalAd from "/images/promotionalAd.png";
import PromotionPieceLaptop from "/images/promotionalPiece.png";
import PromotionPieceBackpack from "/images/promotionalPiece2.png";

function Promotion() {
  return (
    <section className="relative">
      <div className="bg-sky-100 py-10 sm:px-[10vw] shadow-lg">
        <CountdownClock />
        <div className="sm:flex">
          <img
            src={PromotionPieceLaptop}
            alt="LaptopPromo"
            className="w-[25vw] absolute bottom-20 -right-5 sm:static object-contain drop-shadow-md z-20"
          />
          <div className="relative">
            <img
              src={PromotionalAd}
              alt="promotional-ad"
              className="w-[80vw] sm:w-[50vw] m-auto"
            />
            <div className="sm:text-[1.75vw] text-center font-thin tracking-wider mt-4">
              <span className="text-primary_1">20% </span>
              OFF FOR LENOVO THINKPAD
              <br />
              ACCOMPANIED BY A STYLISH BACKPACK
            </div>
          </div>
          <img
            src={PromotionPieceBackpack}
            alt="BackpackPromo"
            className="w-[18vw] absolute sm:static bottom-20 drop-shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export { Promotion };
