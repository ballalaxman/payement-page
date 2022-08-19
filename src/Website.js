import Mainsection from "./components/Main-section";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Website() {
  return (
    <div className="App">
      <Navbar />
      <Mainsection />
      <Footer />
    </div>
  );
}
