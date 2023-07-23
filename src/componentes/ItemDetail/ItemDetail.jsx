import { useState,useContext } from 'react'
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { CarritoContext } from '../../context/CarritoContext'

const ItemDetail = ({id,nombre,detalle,precio,img, maximoStock}) => {

  const [agregarCantidad,setAgregarCantidad]=useState(0);


  const {agregarProducto} = useContext(CarritoContext);

  const manejadorCantidad =(cantidad)=>{
    setAgregarCantidad(cantidad);
    const item = {id,nombre,precio};
    agregarProducto(item, cantidad);


  }
  return (
    <div className='cardProductoDetail'>
        <h2>Nombre:{nombre}</h2>
        <p>Precio:${precio}</p>
        <p className='pProductoDetail'>{detalle} </p>
        <p>Id:{id}</p>
        <img className='imgProductoDetail' src={img} alt={nombre} />

        { agregarCantidad > 0 ? (<Link to="/cart"><button>Terminar Compra</button></Link>): (<ItemCount inicial={1} maximoStock={maximoStock} funcionAgregar={manejadorCantidad} />)}
        
    </div>
  )
}

export default ItemDetail