import React from 'react';
import Typical from 'react-typical'
import perfil from '../../assets/img/fotomia2.jpg'
import './About.css'
import html5  from '../../assets/img/html5.svg'
import css  from '../../assets/img/css3.svg'
import node from '../../assets/img/node.svg'
import bootstrap from '../../assets/img/bootstrap.svg'
import js from '../../assets/img/javascript.svg'

function About() {
  return (

    <div className="About text-monospace">
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <div className="row text-center">
          <div className="col">

            <h1 className="my-4">
            <Typical
                
                wrapper='b'
                steps={[
                  ' Hola! Soy Francisco! 👋',
                  3000
                
                ]}
                />
            </h1>
          </div>
        </div>
        <div className="row text-center text-md-left">
          <div className="col-12 col-md-4 offset-md-2 perfil my-4">
            <img src={perfil} alt="Foto propia"/>
          </div>
          <div className="col-12 col-md-4 ">
            <p>Tengo 27 años, soy de Neuquen, Argentina y estoy aprendiendo programacion web de forma autodidacta desde hace mas de un año y medio.</p>
            <p>En este tiempo he logrado adquirir conocimientos en varias tecnologias como:
            </p>
                <ul className="list-inline lista-tec d-flex justify-content-around align-items-center">
                  <li className="list-inline-item">
                      <img src={html5} alt="html"/>
                  </li>
                  <li className="list-inline-item">
                      <img src={css} alt="css"/>
                  </li>
                  <li className="list-inline-item">
                      <img src={js} alt="javascript"/>
                  </li>
                  <li className="list-inline-item">
                      <img src={node} alt="node"/>
                  </li>
                  <li className="list-inline-item">
                      <img src={bootstrap} alt="bootstrap"/>
                  </li>
                  
                </ul>
                <p>Actualmente me estoy especializando en React y buscando trabajo para poder empezar mi carrera como desarrollador profesional.</p>

               
          </div>
        </div>

      </div>

     
    </div>
  );
}

export default About;
