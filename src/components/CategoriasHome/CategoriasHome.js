import "./CategoriasHome.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CategoriasHome = () => {
  return (
    <div>
      <div class="container-title-categ">
        {/* <!-- Text --> */}
        <div class="container___content">
          <h2>CATEGORÍAS POPULARES</h2>
        </div>
        {/* <!-- Separator line -->
        <div class="container__separator"></div> */}
      </div>

      <div className="center-categ">
        <div className="row-card-categ">
          <Link to="../remeras" className="link-header">
            <div class="card-categ">
              {/* <!-- Cover --> */}
              <div class="card__cover-categ">
                <i class="bx bxs-t-shirt item-categ"></i>
              </div>
              {/* <!-- Content --> */}
              <div className="card_img-categ">
                <img src="" />
              </div>
              <div class="card__content-categ">
                <p>Remeras</p>
                {/* <Button variant="contained" color="secondary">
              Ver más
            </Button> */}
              </div>
            </div>
          </Link>

          <Link to="../pantalones" className="link-header">
            <div class="card-categ">
              {/* <!-- Cover --> */}
              <div class="card__cover-categ">
                <img src="https://img.icons8.com/ios-filled/50/000000/trousers.png" />
              </div>
              {/* <!-- Content --> */}
              <div className="card_img-categ">
                <img src="" />
              </div>
              <div class="card__content-categ">
                <p>Pantalones</p>
                {/* <Button variant="contained" color="secondary">
              Ver más
            </Button> */}
              </div>
            </div>
          </Link>

          <Link to="../buzos-camperas" className="link-header">
            <div class="card-categ">
              {/* <!-- Cover --> */}
              <div class="card__cover-categ">
                <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-hoodie-clothes-vitaliy-gorbachev-fill-vitaly-gorbachev.png" />
              </div>
              {/* <!-- Content --> */}
              <div className="card_img-categ">
                <img src="" />
              </div>
              <div class="card__content-categ">
                <p>Buzos y camperas</p>
                {/* <Button variant="contained" color="secondary">
              Ver más
            </Button> */}
              </div>
            </div>
          </Link>

          <Link to="../zapatillas" className="link-header">
            <div class="card-categ">
              {/* <!-- Cover --> */}
              <div class="card__cover-categ">
                <img src="https://img.icons8.com/external-photo3ideastudio-solid-photo3ideastudio/64/000000/external-shoes-travel-checklist-photo3ideastudio-solid-photo3ideastudio.png" />
              </div>
              {/* <!-- Content --> */}
              <div className="card_img-categ">
                <img src="" />
              </div>
              <div class="card__content-categ">
                <p>Zapatillas y Zapatos</p>
                {/* <Button variant="contained" color="secondary">
              Ver más
            </Button> */}
              </div>
            </div>
          </Link>

          <Link to="../deportivo" className="link-header">
            <div class="card-categ">
              {/* <!-- Cover --> */}
              <div class="card__cover-categ">
                <img src="https://img.icons8.com/ios-filled/50/000000/exercise.png" />
              </div>
              {/* <!-- Content --> */}
              <div className="card_img-categ">
                <img src="" />
              </div>
              <div class="card__content-categ">
                <p>Deportivo</p>
                {/* <Button variant="contained" color="secondary">
              Ver más
            </Button> */}
              </div>
            </div>
          </Link>

          <Link to="../moda" className="link-header">
            <div class="card-categ">
              {/* <!-- Cover --> */}
              <div class="card__cover-categ">
                <img src="https://img.icons8.com/ios-filled/50/000000/shirt.png" />
              </div>
              {/* <!-- Content --> */}
              <div className="card_img-categ">
                <img src="" />
              </div>
              <div class="card__content-categ">
                <p>Moda</p>
                {/* <Button variant="contained" color="secondary">
              Ver más
            </Button> */}
              </div>
            </div>
          </Link>

          <Link to="../hombre" className="link-header">
            <div class="card-categ">
              {/* <!-- Cover --> */}
              <div class="card__cover-categ">
                <img src="https://img.icons8.com/ios-filled/50/000000/men-age-group-4.png" />
              </div>
              {/* <!-- Content --> */}
              <div className="card_img-categ">
                <img src="" />
              </div>
              <div class="card__content-categ">
                <p>Hombre</p>
                {/* <Button variant="contained" color="secondary">
              Ver más
            </Button> */}
              </div>
            </div>
          </Link>

          <Link to="../mujer" className="link-header">
            <div class="card-categ">
              {/* <!-- Cover --> */}
              <div class="card__cover-categ">
                <img src="https://img.icons8.com/ios-filled/50/000000/women-age-group-5.png" />
              </div>
              {/* <!-- Content --> */}
              <div className="card_img-categ">
                <img src="" />
              </div>
              <div class="card__content-categ">
                <p>Mujer</p>
                {/* <Button variant="contained" color="secondary">
              Ver más
            </Button> */}
              </div>
            </div>
          </Link>

          <Link to="../invierno" className="link-header">
            <div class="card-categ">
              {/* <!-- Cover --> */}
              <div class="card__cover-categ">
                <img src="https://img.icons8.com/ios-filled/50/000000/winter.png" />
              </div>
              {/* <!-- Content --> */}
              <div className="card_img-categ">
                <img src="" />
              </div>
              <div class="card__content-categ">
                <p>Edición invierno</p>
                {/* <Button variant="contained" color="secondary">
              Ver más
            </Button> */}
              </div>
            </div>
          </Link>

          <Link to="../verano" className="link-header">
            <div class="card-categ">
              {/* <!-- Cover --> */}
              <div class="card__cover-categ">
                <img src="https://img.icons8.com/external-phatplus-solid-phatplus/64/000000/external-summer-weather-phatplus-solid-phatplus.png" />
              </div>
              {/* <!-- Content --> */}
              <div className="card_img-categ">
                <img src="" />
              </div>
              <div class="card__content-categ">
                <p>Edición verano</p>
                {/* <Button variant="contained" color="secondary">
              Ver más
            </Button> */}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriasHome;
