import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './modulos/autenticacao/pages/Login.jsx'
import Admin from './modulos/utilizadores/pages/admin/admin.jsx'
import AdminEscola from './modulos/utilizadores/pages/admin_escola/admin_escola.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
          <Routes>
              <Route path={"/"} element={<Login />} />

              <Route path={"/admin/*"} element={<Admin />} />

              <Route path={"/adminEscola/*"} element={<AdminEscola />} />
          </Routes>
  )
}

export default App
