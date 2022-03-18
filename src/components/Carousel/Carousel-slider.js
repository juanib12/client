import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";

const CarouselSlider = () => {
  return (
    <div>
      <Carousel className="carousell">
        <Carousel.Item>
          <img
            className="item-img"
            src="https://http2.mlstatic.com/D_NQ_833572-MLA49275978364_032022-OO.webp"
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="item-img"
            src="https://http2.mlstatic.com/D_NQ_725117-MLA49190916740_022022-OO.webp"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="item-img"
            src="https://http2.mlstatic.com/D_NQ_980952-MLA49214692970_022022-OO.webp"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselSlider;
