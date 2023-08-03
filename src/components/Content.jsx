import { Slider } from "./Slider";
import { Promotion } from "./Promotion";
import { Recommendation } from "./Recommendation";

function Content() {
  return (
    <>
      <div className="mt-10">
        <Slider />
        <Promotion />
        <Recommendation />
      </div>
    </>
  );
}

export { Content };
