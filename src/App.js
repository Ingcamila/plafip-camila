import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppNav from "./AppNav";
import AppHome from "./AppHome";
import AppFotter from "./AppFooter";
import AppLogin from "./AppLogin";
import AppForgettenPassword from "./AppForgottenPassword";
import AppSignUp from "./AppSignUp";
import AppMovimientos from "./AppMovimientos";
import AppProyecciones from "./AppProyecciones";
import "./styles/App.css";

const imagen='https://www.dropbox.com/s/f8rx0khsdsfy95y/Plafip.png'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={imagen} className="App-logo" alt="logo" />
          <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
      </header>

        <AppNav />
        <Switch>
          <Route path="/" component={AppHome} exact />
          <Route path="/home" component={AppHome} exact />
          <Route path="/login" component={AppLogin} exact />
          <Route path="/recordar-clave" component={AppForgettenPassword} exact />
          <Route path="/registrar-usuario" component={AppSignUp} exact />
          <Route path="/movimientos" component={AppMovimientos} exact />
          <Route path="/proyecciones" component={AppProyecciones} exact />
        </Switch>
        <AppFotter />
      </div>
    </BrowserRouter>
  );
}

export default App;
