import { ProductDisplay } from "./ProductDisplay";
import { Promotion } from "./Promotion";
import { Slider } from "./Slider";

function Content () {
  return (
    <>
      <div className="mt-10">
        <Slider/>
        <Promotion/>
        <ProductDisplay />
      </div>
    </>
  );
}

export { Content };