import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contacto from './pages/Contacto/Contacto'
import Proyectos from './pages/Proyectos/Proyectos'
import About from './pages/About/About'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Layout } from './components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.render(
 
  
  <Router>
    <Layout>
    <Route exact path="/" component={App} />
    <Route  path="/about" component={About} />
    <Route  path="/proyectos" component={Proyectos} />
    <Route  path="/contacto" component={Contacto} />
  </Layout>
  </Router>
  
  ,
  document.getElementById('root')
);
