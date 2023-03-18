import React from 'react'
import "./estilos.css";
const Carta = (props) => {
    return (
    
        <div class="col-lg-4 col-md-6">
          <div class="borde">
        <div class="text-center card-box">
          <div class="member-card pt-2 pb-2">
            <div class="thumb-lg member-thumb mx-auto">
              <img
                src={props.img}
                class="img-fluid"
                alt="profile-image"
               
              />
            </div>
            <div class="">
              <h4 class="titulo">{props.name}</h4>
              <p class="text">{props.text}</p>
              <h6 class="cont">categoria: {props.categoria}  </h6>
            </div>
          </div>
        </div>
      </div>
      </div>
    
      )
}

export default Carta