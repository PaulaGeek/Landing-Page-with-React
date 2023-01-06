import React from "react";

const Card = () => {
	return (
<div className="card col-3 my-3" >
  <img src="https://www.notevagustar.com/img/disco-luz.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Luz</h5>
    <p className="card-text">Luz es el décimo álbum de estudio de la banda uruguaya No Te Va Gustar. Fue publicado el 7 de mayo de 2021 a través de Elefante Blanco.</p>
    <a href="#" className="btn btn-primary bg-dark text-white" >Escuchar álbum</a>
  </div>
</div>

	);
};

export default Card;