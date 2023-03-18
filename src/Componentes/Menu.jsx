import React from 'react'
import "./estilos.css";

const Menu = ({setContador,setInicio}) => {
    const modoInicio=()=>{
        setInicio(true)
        
    }

    const modoCount=()=>{
        setInicio(false)
        
    }
  return (
    <nav class="nav">

      <div class="container">
        <div class="row">
          <div class="col-sm-3" >
          
          </div>
          <div class="col-sm-3" >
          <h6  onClick={modoInicio}>Inicio</h6>
          </div>
          <div class="col-sm-3" >
          
          </div>
          <div class="col-sm-3" >
          <h6  onClick={modoCount}>Insertar</h6>
          </div>
        </div>
      </div>
      
    </nav>
  )
}

export default Menu