import "./Features.css";
import Button from "@mui/material/Button";
import ImgDescubri from "../images/descubri.svg";
import ImgOff from "../images/ofertas.svg";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="row-card">
      <Link to="../get_product" class="card">
        {/* <!-- Cover --> */}
        <div class="card__cover">
          <h1>DESCUBRÍ</h1>
        </div>
        {/* <!-- Content --> */}
        <div className="card_img">
          <img src={ImgDescubri} />
        </div>
        <div class="card__content">
          <p>Recomendaciones para ti!</p>
          <Button variant="contained" color="secondary">
            Ver más
          </Button>
        </div>
      </Link>

      <div class="card">
        {/* <!-- Cover --> */}
        <div class="card__cover">
          <h1>OFERTAS</h1>
        </div>
        {/* <!-- Content --> */}
        <div className="card_img">
          <img src={ImgOff} />
        </div>
        <div class="card__content">
          <p>Las mejores ofertas!</p>
          <Button variant="contained" color="secondary">
            Ver más
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Features;
