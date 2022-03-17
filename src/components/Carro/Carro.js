import {Component} from 'react'
import BubbleAlert from './BubbleAlert';
import DetallesCarro from '../Carro/DetallesCarro'


class Carro extends Component{
    render(){
        const { carro, esCarroVisible, mostrarCarro} = this.props;
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        return(
            <div>
                <span className='bubble'>
                    {cantidad !== 0
                    ? <BubbleAlert value={cantidad} />
                    : null}
                </span>
                <button onClick={mostrarCarro} className="carro">Carro</button>
                {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
            </div>
        )
    }
}

export default Carro