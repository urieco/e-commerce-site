
import { Promotion } from "./Promotion";
import { Recommendation } from "./Recommendation";
import { Slider } from "./Slider";

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
