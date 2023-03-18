import React, {useContext, useState} from 'react'
import { Contexto } from '../contexto/Contexto'
import Carta from './Carta';


const Inicio = () => {
  
  const {lista, setLista}=useContext(Contexto)
  const [filtrado, setfiltrado]=React.useState(false)
  const [arrayFiltrado, setarrayfiltrado]=React.useState([])

  const filtrar=(e)=>{
    const seleccion = e.target.value;
    if(seleccion!=='todos'){
      setfiltrado(true)
      const arrayFiltrado = lista.filter((elemento)=>elemento.categoria == seleccion)
      setarrayfiltrado(arrayFiltrado)
      return
    }
    
    setfiltrado(false)
    
    
  }

  return (

   
        <div >
          <nav class="nav">

<div class="container">
        <div class="row">
          <div class="col-sm-4" > </div>
          <div class="col-sm-4" >
          <div id='select' className='hijo'>
                  <div className='filtro' onChange={filtrar}>
                        <select className='form-control'  name='categoria' id='cat1'>
                          <option value="todos">Seleccione una categoria</option>
                          <option value="equipos">Equipos</option>
                          <option value="carros">Carros</option>
                          <option value="mesas">Mesas</option>
                        </select>

                  </div>
                </div>
          </div>
          <div class="col-sm-4" > </div>
        </div>
      </div>

</nav>
          

          <div className='hijo'>

            {

                filtrado ? <div className="row">
                            {arrayFiltrado.map((p) => {
                              return (
                                <Carta
                                  key={p.id}
                                  name={p.name}
                                  img={p.img}
                                  text={p.text}
                                  categoria={p.categoria}
                                />
                              );
                            })}
                        </div>
            :
            
                <div className="row">
                {lista.map((p) => {
                  return (
                    <Carta
                      key={p.id}
                      name={p.name}
                      img={p.img}
                      text={p.text}
                      categoria={p.categoria}
                    />
                  );
                })}
                </div>


            }

          </div>
              


        </div>
    
  )
}

export default Inicio