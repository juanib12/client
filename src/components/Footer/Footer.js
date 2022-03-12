import { ButtonUnstyled } from "@mui/base";
import { Button, Input, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="container--footer">
        {/* <div class="container__separator"></div> */}

        <div className="center-footer">
          <div className="center-news">
            <h2>Shopty</h2>
            <h6>Ingresá en nuestro newsletter!</h6>
            <p>No spam.</p>
            <TextField label="Email" variant="outlined" />
            <Button variant="contained">Suscribirse</Button>
          </div>
        </div>

        <div className="links-footer">
          <div className="link-follow">
            <h6>Seguinos!</h6>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>

        <div className="links-footer">
          <div className="link">
            <h6>Sobre Nosotros!</h6>
            <a href="#">Cómo comprar</a>
            <a href="#">Glosario de Moda</a>
            <a href="#">Política de privacidad</a>
            <a href="#">Plazos de entrega</a>
            <a href="#">Promociones bancarias</a>
            <a href="#">Términos y condiciones</a>

          </div>
        </div>

        <div className="links-footer">
          <div className="link">
            <h6>Empresa</h6>
            <a href="#">Sobre nosotros</a>
            <a href="#">Atención al cliente</a>
            <a href="#">Dudas frecuentes</a>
            <a href="#">Cambios y devoluciones</a>
            <a href="#">Sea nuestro proveedor</a>
            <Link to="../add_product">Vendé con nosotros</Link>
          </div>
        </div>

        <div className="links-footer">
          <div className="link">
            <h6>Medios de pago</h6>
            <img src="https://img.icons8.com/color/120/000000/mastercard.png" width="30"/>
            <img src="https://img.icons8.com/fluency/120/000000/visa.png" width="30"/>
            <img src="https://img.icons8.com/office/120/000000/cash.png" width="30"/>
            <img src="https://img.icons8.com/fluency/120/000000/paypal.png" width="30"/>
            <img src="https://img.icons8.com/color/120/000000/bitcoin--v1.png" width="30"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
