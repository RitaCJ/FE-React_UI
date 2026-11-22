import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {AuthProvider} from "./modulos/autenticacao/authContext/AuthContext";
import {BrowserRouter} from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <AuthProvider>
              <App />
          </AuthProvider>
      </BrowserRouter>
  </StrictMode>,
);
