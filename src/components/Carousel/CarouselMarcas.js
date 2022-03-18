import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";
import Adidas from "../images/adidas.png";
import Converse from "../images/converse.png";
import Mizuno from "../images/mizuno.png";
import NB from "../images/newbalance.png";
import Nike from "../images/nike.png";
import Puma from "../images/puma.png";
import Reebook from "../images/reebok.png";
import './CarouselMarcas.css'

const CarouselMarcas = () => {
  return (
    <div className="color-marcas">
      <div class="container-title">
        {/* <!-- Text --> */}
        <div class="container___content">
          <h2>MARCAS</h2>  
        </div>

        {/* <!-- Separator line --> */}
        {/* <div class="container__separator"></div> */}
      </div>
      <Carousel className="carousel2">
        <Carousel.Item>
          <div className="container-marcas">
            <img className="item-marcas" src={Adidas} alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-marcas">
            <img className="item-marcas" src={Converse} alt="Second slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-marcas">
            <img className="item-marcas" src={Mizuno} alt="Third slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-marcas">
            <img className="item-marcas" src={NB} alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-marcas">
            <img className="item-marcas" src={Nike} alt="Second slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-marcas">
            <img className="item-marcas" src={Puma} alt="Third slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-marcas">
            <img className="item-marcas" src={Reebook} alt="Third slide" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselMarcas;
