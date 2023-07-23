import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"




const CardWidget = () => {
    const {cantidadTotal} = useContext(CarritoContext);
    const carrito = "../img/carrito.png"




  return (
    <div>
      <Link to="/cart"> 
      <img className='carrito' src={carrito} alt="una imagen de carrito" />
      {
        cantidadTotal > 0 && <strong>{cantidadTotal} </strong>
      }
      
      </Link>
    </div>
  )
}

export default CardWidget