import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './modulos/autenticacao/pages/Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={"app"}>
        <Login />
      </div>
    </>
  )
}

export default App
