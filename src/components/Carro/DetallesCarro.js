import { Component } from "react";

class DetallesCarro extends Component {
  render() {
    const { carro } = this.props;
    console.log(carro);
    return (
      <div className="detallesCarro">
        <ul className="ul">
          {carro.map((x) => (
            <li className="producto" key={x.name}>
              <img alt={x.name} src={x.img} width="50" height="32" />
              {x.name} <span>{x.cantidad}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DetallesCarro
