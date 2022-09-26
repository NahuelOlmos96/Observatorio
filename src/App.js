import bootstrap from "bootstrap";
import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { Inicio } from "./componentes/inicio";
import { Noticias } from "./componentes/Noticias";
import { Nosotros } from "./componentes/Nosotros";
import logoSecOb from "./imagenes/logoSecOb.png";
import Programas from "./componentes/Programas";
import Capacitaciones from "./componentes/Capacitaciones";
import Reuniones from "./componentes/Reuniones";
function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <div className="container">
          <div className="row">
            <div className="logoSecretaria  col-xl-5">
              <img src={logoSecOb} className="img-fluid" alt="" />
            </div>
            <div className="navbar-nav col-xl-7 ">
              <div className="nav-item  row  itemLinks text-center">
                <Link className="nav-link col-xl col-xs-12 " to="/">
                  inicio
                </Link>
                <Link className="nav-link col-xl col-xs-12" to="/nosotros">
                  nosotros
                </Link>
                <Link className="nav-link col-xl col-xs-12" to="/noticias">
                  noticias
                </Link>
                <Link className="nav-link col-xl col-xs-12" to="/programas">
                  programas
                </Link>
                <Link
                  className="nav-link col-xl col-xs-12"
                  to="/capacitaciones"
                >
                  capacitaciones
                </Link>
                <Link className="nav-link col-xl col-xs-12" to="/reuniones">
                  reuniones
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/nosotros" element={<Nosotros />}></Route>
          <Route path="/noticias" element={<Noticias />}></Route>
          <Route path="/programas" element={<Programas />}></Route>
          <Route path="/capacitaciones" element={<Capacitaciones />}></Route>
          <Route path="/reuniones" element={<Reuniones />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
