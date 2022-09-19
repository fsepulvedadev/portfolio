import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Contacto from "./pages/Contacto/Contacto";
import Proyectos from "./pages/Proyectos/Proyectos";
import About from "./pages/About/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <App />,

  document.getElementById("root")
);
