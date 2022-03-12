import { Button } from "@mui/material";
import "./Adicionales.css";

const Adicionales = () => {
  return (
    <div className="container-adic">
      <div className="card-adic">
        <i class="bx bx-credit-card"></i>
        <h4>Elegí como pagar</h4>
        <p>
          Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin
          tarjeta con Mercado Crédito.
        </p>
        <Button>Cómo pagar tus compras</Button>
      </div>

      <div className="card-adic">
        <i class="bx bxs-package"></i>
        <h4>Envío gratis desde $ 4.000</h4>
        <p>
          Solo por estar registrado en Mercado Libre tenés envíos gratis en
          miles de productos. Es un beneficio de Mercado Puntos.
        </p>
        <Button>Conocé más sobre este beneficio</Button>
      </div>

      <div className="card-adic-end">
        <i class="bx bx-check-shield"></i>
        <h4>Seguridad, de principio a fin</h4>
        <p>
          ¿No te gusta? ¡Devolvelo! En Mercado Libre, no hay nada que no puedas
          hacer, porque estás siempre protegido.
        </p>
        <Button>Cómo te protegemos</Button>
      </div>
    </div>
  );
};

export default Adicionales;
