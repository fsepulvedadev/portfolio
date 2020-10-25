import React from 'react';
import './Contacto.css'
import Typical from 'react-typical'
import { useState, useEffect } from 'react';

function Contacto() {

	const [success, setSuccess] = useState(false);

	function handleClickAlert () {
		setSuccess(false);
	}

	function handleSubmit() {
		
		setSuccess(true);
		
	}


  return (

    <div className="contacto d-flex flex-column justify-content-center align-items-center mx-0 px-0">
      <div className="container text-monospace ">
    <div className="row text-center">
      <div className="col">
      <h1 className="my-4">
      <Typical
          
          wrapper='b'
          steps={[
            ' Enviame tu consulta! 📲',
            3000
           
          ]}
          />
      </h1>
        
      </div>
    </div>
          <div className="row ">
            <div className="col-12 col-md-6 offset-md-3">

      <form name="contact" action="./contacto" method="POST">
		  					<input type="hidden" name="form-name" value="contact"/>
							<div class="form-row">
								<div class="form-group col-12 col-md-6">
									<input
										required
										type="text"
										class="form-control formulario"
										name="name"
										placeholder="Nombre"
									/>
								</div>
								<div class="form-group col-12 col-md-6">
									<input
										required
										type="text"
										class="form-control"
										name="apellido"
										placeholder="Apellido"
									/>
								</div>
							</div>
							<div class="form-row">
								<div class="form-group col-12 col-md-12">
									<input
										required
										type="text"
										class="form-control"
										name="email"
										placeholder="Email"
									/>
								</div>
							</div>
					
							<div class="form-row">
								<div class="form-group form-group-lg col-12">
									<textarea

										class="form-control bg-negro"
										id="exampleFormControlTextarea1"
										placeholder="Escribime tu consulta"
										name="message"
										rows="3"
									></textarea>
								</div>
							</div>
							<div class="form-row">
								<div class="form-group col">
									<button 
									type="submit" 
									class="btn btn-block btn-outline-success btn-panchi"
									onClick={handleSubmit}
									>
										Enviar
									</button>
								</div>
							</div>
							{success && (
			  <div class="alert alert-success fade show" role="alert">
			  Mensaje enviado! Gracias por contactarte!
			  <button type="button" class="close" onClick={handleClickAlert} >
			  <span aria-hidden="true">&times;</span>
  </button>
			</div>
		  )}
						</form>
            </div>
          </div>
		
          <div className="row">
            <div className="col text-center">
              <h4 className="mt-4">Tambien podes escribirme en cualquiera de mis redes aqui abajo! 😉</h4>
            </div>
          </div>
      </div>

    </div>
  );
}

export default Contacto;
