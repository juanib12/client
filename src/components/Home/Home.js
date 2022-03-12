
import "../Carousel/carousel.css";
import CarouselSlider from "../Carousel/Carousel-slider";
import Features from "../Features/Features";
import PaperPayment from "../PaperPayment/PaperPayment";
import CarouselMarcas from "../Carousel/CarouselMarcas";
import CategoriasHome from '../CategoriasHome/CategoriasHome'
import Adicionales from "../Adicionales/Adicionales";
import Footer from "../Footer/Footer";
import '../App.css'
import Header from "../Header/Header";

function Home() {
  return (
    <div className="main">
      <Header />
      <CarouselSlider />
      <PaperPayment />
      <Features />
      <CarouselMarcas />
      <CategoriasHome />
      <Adicionales />
      <Footer />
    </div>
  );
}

export default Home;
