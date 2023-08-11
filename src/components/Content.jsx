import { Slider } from "./Slider";
import { Promotion } from "./Promotion";
import { Recommendation } from "./Recommendation";

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
