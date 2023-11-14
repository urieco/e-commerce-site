import { Slider } from "../../containers/promotion/Slider";
import { Promotion } from "../promotion/Promotion";
import { Recommendation } from "../promotion/Recommendation";

function Content() {
  return (
    <>
      <main className="mt-10">
        <Slider />
        <Promotion />
        <Recommendation />
      </main>
    </>
  );
}

export { Content };
