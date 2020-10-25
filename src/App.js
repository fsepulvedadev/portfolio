import React from 'react';
import './App.css';
import Typical from 'react-typical'
import {Col, Row, } from 'react-bootstrap'


function App() {


  return (
  

      <Row className="px-0 m-0 w-100">
          <Col className="mt-4 p-0 mx-2">

      <div className="App text-left pl-4">
     
        <div className="d-flex justify-content-center align-items-center main">

          <h1 className="d-none d-xl-block">
            <span className="blueConsole">

              fsepulveda@FS~${' '} 
            </span>
        </h1> 
        

        <h1 className="text-monospace text-break">
          {' '}
          <Typical
          loop={Infinity}
          wrapper='b'
          steps={[
            'Hola! Soy Francisco;',
            1000,
            'Estoy aprendiendo programación;',
            1000,
            'De forma autodidacta hace 1 año; ',
            1000,
            'Estoy en búsqueda laboral activa! 🤞',
            2000
          ]}
          />
        </h1>
        </div>
  
      </div>
          </Col>
      </Row>

    );
}

export default App;
