import React, {useContext, useState} from 'react'
import { Contexto } from '../contexto/Contexto'


const Count = () => {
    const [nombre, setNombre] = useState('')
    const [img, setImg] = useState('')
    const [text, setText] = useState('')
    const [categoria, setCategoria] = useState('')
    const [id, setId] = useState(0)
    const {lista, setLista}=useContext(Contexto)
    const guardarDatos = (e) => {

      if (!nombre.trim() || !img.trim() || !text.trim() || !categoria.trim()) return alert('Datos incompletos')

          setLista([
              ...lista,
              { id: id, name: nombre, img: img, text:text, categoria:categoria }
          ])

      setId(id + 1)
      e.target.reset()
      e.preventDefault()
        setNombre('')
        setText('')
        setImg('')
        setCategoria('')
         alert('Agregado Exitosamente!')
  }

  return (
    <div>

<div class="container">
        <div class="row">
          <div class="col-sm-4" > </div>
          <div class="col-sm-4" >
          <div class="borde">
                <div class="text-center card-box">
                  <div class="member-card pt-2 pb-2">

                    <div><h1>Insertar Tarjeta</h1></div>
                    <div class="thumb-lg member-thumb mx-auto">
                    <form onSubmit={guardarDatos}>
                        <input  value={nombre} type="text" placeholder='Ingrese nombre' className='form-control '
                            onChange={(e) => setNombre(e.target.value)} />
                        <input value={img} type="text" placeholder='Ingrese url' className='form-control'
                            onChange={(e) => setImg(e.target.value)} />
                            <input value={text} type="text" placeholder='Ingrese descripcion' className='form-control'
                            onChange={(e) => setText(e.target.value)} />

                            <div  onChange={(e) => setCategoria(e.target.value)}>
                          <select className='form-control' name='categoria' id='cat1'>
                            <option value="todos">Seleccione una categoria</option>
                            <option value="equipos">Equipos</option>
                            <option value="carros">Carros</option>
                            <option value="mesas">Mesas</option>
                          </select>

                          </div>
                            
                        <div className='d-grip gap-2 d-md block'>
                            <button className='m-3 btn btn-info' type='submit'>Agregar</button>
                        </div>

                    </form>
                      
                    
                    </div>     
                  </div>
                </div>
              </div>
            </div>
          <div class="col-sm-4" > </div>
        </div>
      </div>
        



        
    </div>
  )
}

export default Count