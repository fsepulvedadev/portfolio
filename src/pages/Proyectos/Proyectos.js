import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typical from 'react-typical'
import './Proyectos.css'
import { Card, CardGroup } from 'react-bootstrap'
import sya from '../../assets/img/syaweb.png'
import modular from '../../assets/img/modularweb.png'
import Github from '../../assets/img/github.svg'
import website from '../../assets/img/web.svg'
import html5  from '../../assets/img/html5.svg'
import css  from '../../assets/img/css3.svg'
import node from '../../assets/img/node.svg'
import bootstrap from '../../assets/img/bootstrap.svg'
import js from '../../assets/img/javascript.svg'
import portfolio from '../../assets/img/screen-portfolio.png'
import ReactIcon from '../../assets/img/icon-react.svg'



function App() {
  return (
    <div className="container">
    <div className="row main-proyect d-none d-md-flex justify-content-center align-items-end">
        <div className="col">

        
        <h1 className="text-monospace text-break text-center">
          {' '}
          <Typical
          
          wrapper='p'
          steps={[
            ' Portfolio',
            3000
           
          ]}
          />
        </h1>
        </div>
    </div>
    <div className="row main-proyect submain-proyect">

        <div className="col">
        <h1 className="text-monospace text-break text-center align-self-start">
          {' '}
          <Typical
          loop={Infinity}
          wrapper='p'
          steps={[
            ' Estos son algunos de mis proyectos',
            3000,
            'Estoy trabajando en varios mas 🚀',
            3000
           
          ]}
          />
        </h1>
        </div>
    </div>
          <div className="row cards align-items-start justify-content-around text-monospace">
            <CardGroup>
            <div className=" col-12 col-md-4 ">
                      <Card bg="dark" border="success" style={{ width: '20rem' }}>
              <Card.Img className="green-filter" variant="top" src={sya} />
              <Card.Body>
                <Card.Title>Website S & A</Card.Title>
                <Card.Text>
                 Landing page para empresa de transporte, desarrollado con HTLM, CSS, BOOTSTRAP en el backend Node.js con NodeMailer.

                </Card.Text>
                <Card.Text>

                <hr/>
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
               
                <hr/>
                </Card.Text>
               
               <ul className="list-inline d-flex justify-content-around lista-proyect">
                 
                 <li className="list-inline-item">
                       <a href="https://github.com/panchixnrc"><img style={{ width: "25px"}} src={Github} alt="Github logo"/></a> 

                    </li>
                 <li className="list-inline-item">
                       <a target="_blank" rel="noopener noreferrer" href="https://web-sya-mailer.herokuapp.com/"><img style={{ width: "25px"}} src={website} alt="Live demo" /></a> 

                    </li>
                
               </ul>
              </Card.Body>
            </Card>
            </div>
            <div className="col-12 col-md-4 ">
                      <Card bg="dark" border="success" style={{ width: '20rem' }}>
              <Card.Img className="green-filter" variant="top" src={modular} />
              <Card.Body>
                <Card.Title>Website Modular Espacios</Card.Title>
                <Card.Text>
                 Web para emprendimiento de construccion con contenedores. Cuenta con un form de contacto con NodeMailer y una galeria para mostrar productos.
                </Card.Text>
                <hr/>
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
                <hr/>
               <ul className="list-inline d-flex justify-content-around lista-proyect">
                 
                 <li className="list-inline-item">
                       <a target="_blank" rel="noopener noreferrer" href="https://github.com/panchixnrc"><img style={{ width: "25px"}} src={Github} alt="Github logo"/></a> 

                    </li>
                 <li className="list-inline-item">
                       <a target="_blank" rel="noopener noreferrer" href="https://www.modularneuquen.com"><img style={{ width: "25px"}} src={website} alt="Live demo" /></a> 

                    </li>
                
               </ul>
              </Card.Body>
            </Card>
            </div>
            <div className="col-12 col-md-4 ">
                      <Card bg="dark" border="success" style={{ width: '20rem' }}>
              <Card.Img className="green-filter" variant="top" src={portfolio} />
              <Card.Body>
                <Card.Title>Este Portfolio</Card.Title>
                <Card.Text>
                 Este portfolio esta desarrollado en React, usando varias de sus herramientas como React Router, para los estilos utiliza Bootstrap y para el contacto NodeMailer.
                </Card.Text>
                <hr/>
                <ul className="list-inline lista-tec d-flex justify-content-around align-items-center">
                  <li className="list-inline-item">
                      <img src={ReactIcon} alt="React"/>
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
                <hr/>
               <ul className="list-inline d-flex justify-content-around lista-proyect">
                 
                 <li className="list-inline-item">
                       <a target="_blank" rel="noopener noreferrer" href="https://github.com/panchixnrc/portfolio-react"><img style={{ width: "25px"}} src={Github} alt="Github logo"/></a> 

                    </li>
                 <li className="list-inline-item">
                       <a target="_blank" rel="noopener noreferrer" href="https://web-sya-mailer.herokuapp.com/"><img style={{ width: "25px"}} src={website} alt="Live demo" /></a> 

                    </li>
                
               </ul>
              </Card.Body>
            </Card>
            </div>
         

        </CardGroup>


          </div>
         
      </div>
    
  );
}

export default App;
