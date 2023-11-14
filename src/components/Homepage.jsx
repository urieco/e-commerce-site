import { Header } from "../containers/header/Header";
import { Content } from "./pageComponent/Content";
import { Footer } from "./pageComponent/Footer";

function Homepage() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export { Homepage };
