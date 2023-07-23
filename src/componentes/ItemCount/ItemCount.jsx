import { useState } from "react"

const ItemCount = ({inicial,maximoStock,funcionAgregar}) => {

    
    const [contador,setContador]=useState(inicial);

    const aumentarContador = () => {
        if (contador < maximoStock) {
          setContador(contador + 1);
        }
      };
    
    const disminuirContador = () =>{
        if (contador > inicial){
            setContador(contador - 1);
        }

    }

  return (
    <>
    
    <h4>
        <button onClick={disminuirContador}>-</button>
          {contador}  
        <button onClick={aumentarContador}>+</button>
    </h4>
    <button onClick={()=> funcionAgregar(contador)}>Agregar al Carrito</button>
    </>
  )
}

export default ItemCount