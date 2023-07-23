import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem";





const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return(
        <>
            <h2>No hay productos en carrito</h2>
            <Link to="/">Ver Productos</Link>
        </>
         )
    }

    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id} {...producto}/> )}
            <h3>Total: ${total} </h3>
            <h3>Cantidad total: {cantidadTotal} </h3>
            <button onClick={()=> vaciarCarrito()}>Vaciar Carrito</button>
            <button></button><Link to={"/checkout"}><button>Finalizar Compra</button></Link>
        </div>
    )
}

export default Cart