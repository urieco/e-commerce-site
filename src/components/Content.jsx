import { Promotion } from "./Promotion";
import { Slider } from "./Slider";

function Content () {
  return (
    <>
      <div className="mt-10">
        <Slider/>
        <Promotion/>
      </div>
    </>
  );
}

export { Content };