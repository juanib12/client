import { Button, Modal } from "@mui/material";
import { useState } from "react";
import "./Adicionales.css";

const Adicionales = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  return (
    <div className="container-adic">
      <div className="card-adic">
        <i class="bx bx-credit-card"></i>
        <h4>Elegí como pagar</h4>
        <p>
          Podés pagar con tarjeta, débito, efectivo o con PayPal.
        </p>
        <Button onClick={handleOpen3}>Cómo pagar tus compras</Button>
      </div>

      <div className="card-adic">
        <i class="bx bxs-package"></i>
        <h4>Envío gratis desde $ 4.000</h4>
        <p>
          Solo por estar registrado en Shopty tenés envíos gratis en
          miles de productos.
        </p>
        <Button onClick={handleOpen2}>Conocé más sobre este beneficio</Button>
      </div>

      <div className="card-adic-end">
        <i class="bx bx-check-shield"></i>
        <h4>Seguridad, de principio a fin</h4>
        <p>
          ¿No te gusta? ¡Devolvelo! En Shopty, no hay nada que no puedas
          hacer, porque estás siempre protegido.
        </p>
        <Button onClick={handleOpen}>Cómo te protegemos</Button>
      </div>

      <Modal open={open} onClose={handleClose}>
        <div className="modal-container">
          <div className="form-modal">
            <h3>¿Cómo te protegemos?</h3>
            <h5>¿No te gusta lo que compraste?</h5>
            <h6>¡Devolvelo Gratis!</h6>
            <p>Sos libre de cambiar de opinión</p>
            <div className="row-modal">
              <div className="card-modal">
                <div className="circle-item">
                  <i class="bx bx-check-square"></i>
                </div>
                <h6>Cuidamos tus datos</h6>
              </div>
              <div className="card-modal">
                <div className="circle-item">
                  <i class="bx bx-credit-card-front"></i>
                </div>
                <h6>Protejemos tu dinero</h6>
              </div>
              <div className="card-modal">
                <div className="circle-item">
                  <i class="bx bx-package"></i>
                </div>
                <h6>Monitoreamos tu envío</h6>
              </div>
            </div>
            <Button variant="outlined" onClick={handleClose}>
              Cerrar
            </Button>
          </div>
        </div>
      </Modal>

      <Modal open={open2} onClose={handleClose2}>
        <div className="modal-container">
          <div className="form-modal">
            <h3>¡Envíos gratis desde $4.000!</h3>
            <h5>
              ¡Si! Disponemos de envio gratis en productos apartir de $4.000!
            </h5>
            <h6>¿Qué esperas?</h6>
            <p>Hacé tu pedido ya mismo!</p>
            <div className="row-modal">
              <div className="card-modal">
                <div className="circle-item">
                  <i class="bx bxs-badge-dollar"></i>
                </div>
                <h6>No te lo pierdas!</h6>
              </div>
            </div>
            <Button variant="outlined" onClick={handleClose2}>
              Cerrar
            </Button>
          </div>
        </div>
      </Modal>

      <Modal open={open3} onClose={handleClose3}>
        <div className="modal-container">
          <div className="form-modal">
            <h3>Elegí el que más te convenga</h3>
            <h5>
              Pagá tus compras y suscripciones con cualquiera de estos medios{" "}
            </h5>
            <div className="row-modal">
              <div className="card-modal">
                <div className="circle-item">
                  <i class="bx bx-dollar"></i>
                </div>
                <h6>¿Preferís pagar en efectivo?</h6>
                <p>
                  Cuando compres, te daremos un código para que puedas pagar en
                  cualquier sucursal.
                </p>
              </div>
              <div className="card-modal">
                <div className="circle-item">
                  <i class="bx bxs-credit-card-front"></i>
                </div>
                <h6>Tarjeta de crédito o débito</h6>
                <p>
                  Pagá en cuotas sin interés o hacelo al contado con tu tarjeta
                  de débito.
                </p>
              </div>
              <div className="card-modal">
                <div className="circle-item">
                  <i class="bx bxs-bank"></i>
                </div>
                <h6>Transferí desde tu homebanking</h6>
                <p>
                  Es tan simple que podés hacerlo desde el sillón de tu casa.
                </p>
              </div>
              <div className="card-modal">
                <div className="circle-item">
                  <i class="bx bxl-paypal"></i>
                </div>
                <h6>Dinero en tu cuenta de PayPal</h6>
                <p>
                  Ingresá dinero en tu cuenta con cualquier medio de pago en
                  efectivo y cuando pagués tu compra, la acreditación será
                  instantánea.
                </p>
              </div>
            </div>
            <Button variant="outlined" onClick={handleClose3}>
              Cerrar
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Adicionales;
