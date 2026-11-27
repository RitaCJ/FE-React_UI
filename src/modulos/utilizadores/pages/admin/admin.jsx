import {Navbar} from "react-bootstrap";
import NavbarAdmin from './components/NavbarAdmin.jsx'
import HomeAdmin from './pages/Home/HomeAdmin.jsx'
import Footer from '../../../../components/Footer.jsx'
import {Routes, Route} from 'react-router-dom'
import Escolas from './pages/Escola/Escolas.jsx'
import SideBarAdmin from "./components/SideBarAdmin.jsx"
import './admin.css'
import RegistarEscola from "./pages/Escola/RegistarEscola.jsx";


function Admin(){
    return(
        <div className={"adminLayout"}>
            <div className={"adminContainer"}>
                {/*==BARRA LATERAL==*/}
                <SideBarAdmin />
                {/*==ÁREA PRINCIPAL==*/}
                <div className={"adminMain"}>
                    {/*==BARRA DO TOPO==*/}
                    <NavbarAdmin />
                    {/*==PÁGINAS==*/}
                    <Routes>
                        <Route path={"/"} element={<HomeAdmin />}/>
                        <Route path={"/escolas"} element={<Escolas />} />
                        <Route path={"/escolas/registar"} element={<RegistarEscola />} />
                    </Routes>
                </div>
            </div>
            {/*==RODAPÉ==*/}
            <Footer />
        </div>
    )
}

export default Admin