import "./App.css";

// imports components
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Offers from "./components/Offers/Offers";
import Destinations from "./components/Destinations/Destinations";
import Book from "./components/Book/Book";
import Testimonials from "./components/Testimonials/Testimonials";
import Brands from "./components/Brands/Brands";
import SubscribeAd from "./components/SubscribeAd/SubscribeAd";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <Offers />
        <Destinations />
        <Book />
        <Testimonials />
        <Brands />
        <SubscribeAd />
        <Footer />
      </main>
    </>
  );
}

export default App;
