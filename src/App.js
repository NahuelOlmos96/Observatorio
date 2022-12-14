import "./App.css";
import {Route, Link, Routes, HashRouter } from "react-router-dom";
import { Inicio } from "./componentes/inicio";
import { Noticias } from "./componentes/Noticias";
import { Nosotros } from "./componentes/Nosotros";
import logoSecOb from "./imagenes/logoSecOb.png";
import Gacetillas from "./componentes/gacetilla";
import Programas from "./componentes/programas";
import Reuniones from "./componentes/Reuniones";
import { Capacitaciones } from "./componentes/capasitaciones";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <div className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <div className="logoSecretaria navbar-brand  ">
              <img src={logoSecOb} className="img-fluid" alt="" />
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link  " to="/">
                  inicio
                </Link>
                <Link className="nav-link " to="/nosotros">
                  nosotros
                </Link>
                <Link className="nav-link " to="/noticias">
                  noticias
                </Link>
                <Link className="nav-link " to="/gacetillas">
                  Gacetillas
                </Link>
                <Link className="nav-link " to="/capacitaciones">
                  Capacitaciones
                </Link>
                <Link className="nav-link " to="/programas">
                  Programas
                </Link>
                <Link className="nav-link " to="/reuniones">
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
          <Route path="/gacetillas" element={<Gacetillas />}></Route>
          <Route path="/programas" element={<Programas />}></Route>
          <Route path="/reuniones" element={<Reuniones />}></Route>
          <Route path="/capacitaciones" element={<Capacitaciones />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
