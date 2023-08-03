import { CountdownClock } from "./CountdownClock";

import PromotionalAd from "/images/promotionalAd.png";
import PromotionPieceLaptop from "/images/promotionalPiece.png";
import PromotionPieceBackpack from "/images/promotionalPiece2.png";

function Promotion() {
  return (
    <>
      <div className="bg-sky-100 py-10 px-[10vw] shadow-lg">
        <CountdownClock />
        <div className="flex">
          <img
            src={PromotionPieceLaptop}
            alt="LaptopPromo"
            className="w-[25vw] object-contain drop-shadow-md"
          />
          <div>
            <img
              src={PromotionalAd}
              alt="promotional-ad"
              className="w-[50vw] m-auto"
            />
            <div className="text-[1.75vw] text-center font-thin tracking-wider mt-4">
              <span className="text-primary_1">20% </span>
              OFF FOR LENOVO THINKPAD
              <br />
              ACCOMPANIED BY A STYLISH BACKPACK
            </div>
          </div>
          <img
            src={PromotionPieceBackpack}
            alt="BackpackPromo"
            className="w-[18vw] drop-shadow-md"
          />
        </div>
      </div>
    </>
  );
}

export { Promotion };
