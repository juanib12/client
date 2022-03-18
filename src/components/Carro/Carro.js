import { Button } from "@mui/material";
import HeaderDetails from "../HeaderDetails/HeaderDetails";

const Carro = () => {
  return (
    <div>
      <HeaderDetails />
      <div className="container-carro">
        <div className="card">
          <h2>Carro</h2>
          <div className="products-carro">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th></th>
                  <th>Nombre</th>
                  <th>Tipo</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <img src="a" width="40" height="40" />
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><Button variant="contained">Comprar</Button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carro;
