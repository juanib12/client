import "./PaperPayment.css";
import Button from "@mui/material/Button";

const PaperPayment = () => {
  return (
    <div className="row-card">
      <div className="card-paper">
        <div className="paper">
          <div className="container-paper">
            {" "}
            <div className="circle">
              {/* icon */}
              <i class="bx bxs-credit-card-front"></i>
            </div>
            <div className="payment">
              {/* payment */}
              <h1>Targeta de Crédito</h1>
            </div>
          </div>

          <div className="container-paper">
            <div className="circle">
              {/* icon */}
              <i class="bx bxs-credit-card"></i>
            </div>
            <div className="payment">
              {/* payment */}
              <h1>Targeta de Débito</h1>
            </div>
          </div>

          <div className="container-paper">
            <div className="circle">
              {/* icon */}
              <i class="bx bx-money"></i>
            </div>
            <div className="payment">
              {/* payment */}
              <h1>Efectivo</h1>
            </div>
          </div>

          <div className="container-paper">
            <div className="circle">
              {/* icon */}
              <i class="bx bxl-paypal"></i>
            </div>
            <div className="payment">
              {/* payment */}
              <h1>PayPal</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperPayment;
