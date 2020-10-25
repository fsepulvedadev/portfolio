import React from 'react'
import Twitter from '../../assets/img/gorjeo.svg'
import Github from '../../assets/img/github.svg'
import Email from '../../assets/img/email.svg'
import './Footer.css'
import Typical from 'react-typical'






function Footer () {


    return (
        <div className="d-flex flex-column">
        <div className="container ">

          <div className="footer ">
              <div className="row">
                  <div className="col-12 col-md-6 offset-md-3 text-left">

        <h1 className="text-monospace text-break text-center ">
          {' '}
          <Typical
          
          wrapper='p'
          steps={[
            ' Contacto',
            3000
           
          ]}
          />
        </h1>
                  </div>
              </div>
            <div className="row w-100">
                <div className="col-12 col-md-6 offset-md-3 ">

                <ul className="d-flex flex-row justify-content-between lista-footer ">
                    <li>
                       <a href="//twitter.com/@panchisepulveda"> <img src={Twitter} alt="Twitter logo"/></a>
                    </li>
                    <li>
                       <a href="https://github.com/panchixnrc"><img  src={Github} alt="Github logo"/></a> 

                    </li>
                        <li>
                            <a href="mailto:panchinrc1993@gmail.com"><img src={Email} alt="Email logo"/></a>
                            
                            </li>
                </ul>
                </div>

            </div>
            <div className="row">
                <div className="col-12 text-center mt-4">
                <h5>Made with <span role="img">💚</span> for <a target="_blank" rel="noopener noreferrer" href="https://github.com/panchixnrc">Francisco Sepulveda</a></h5>

                </div>
            </div>
        </div>
        </div>

        </div>
    )
}

export default Footer