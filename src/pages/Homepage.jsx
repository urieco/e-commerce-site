import { Header } from "../components/Header";
import { Content } from "../components/Content";
import { Footer } from "../components/Footer";

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
