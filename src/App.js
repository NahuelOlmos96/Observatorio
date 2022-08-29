import bootstrap from "bootstrap";
import "./App.css";
import {
  BrowserRouter,
  Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { Home } from "./componentes/Home";
import { Quines } from "./componentes/Quines";
function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link to="/">Home</Link>
                  <Link to="/quines">quines somos</Link>
                </div>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/quines" element={<Quines/>}></Route>
          </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
