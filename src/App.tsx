import "./App.css";
import About from "./component/About";
import Features from "./component/Features";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Menu from "./component/Menu";
import NewArrivals from "./component/NewArrivals";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Menu />
      <NewArrivals />
      <Features />
      <Footer />
    </>
  );
}

export default App;
