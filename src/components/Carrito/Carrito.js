import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const Carrito = () => {
    const [getProd, setGetProd] = useState([]);
    const [modalCarro, setModalCarro] = useState(false);
    
    //carro
    const abrirCerrarModalCarro = () => {
      setModalCarro(!modalCarro);
    };
    
    const abrirCarro = () =>{
      abrirCerrarModalCarro();
    }
    
    useEffect(() => {
      const getProducts = async () => {
        const response = await fetch(
          "http://localhost:3002/api/product/articles_by_type?type=Remeras&array"
        );
        const data = await response.json();
        setGetProd(data);
      };
      getProducts();
    }, []);

    return(
        <Modal isOpen={modalCarro}>
        <ModalHeader>Carro</ModalHeader>
        <ModalBody>
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
                {getProd.map((gestor) => (
                  <tr key={gestor._id}>
                    <img src={gestor.images} width="40" height="40" />
                    <td>{gestor.name}</td>
                    <td>{gestor.description}</td>
                    <td>{gestor.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-danger"
            onClick={() => abrirCerrarModalCarro()}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    )
}

export default Carrito