import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router";
import {Cadastro} from "./components/cadastro/cadastro";
import {Login} from "./components/login/login";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route index element={<App />}/>
            <Route path="/cadastro" element={<Cadastro />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
