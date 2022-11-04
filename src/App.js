
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
    <div className="App">
      <BrowserRouter>
        <div className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <div className="logoSecretaria navbar-brand  ">
              <img src={logoSecOb} className="img-fluid" alt="" />
            </div >
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
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
                <Link className="nav-link " to="/programas">
                  programas
                </Link>
                <Link
                  className="nav-link "
                  to="/capacitaciones"
                >
                  capacitaciones
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
          <Route path="/programas" element={<Programas />}></Route>
          <Route path="/capacitaciones" element={<Capacitaciones />}></Route>
          <Route path="/reuniones" element={<Reuniones />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
