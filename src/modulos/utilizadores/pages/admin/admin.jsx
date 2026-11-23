import {Navbar} from "react-bootstrap";
import NavbarAdmin from './components/NavbarAdmin.jsx'
import HomeAdmin from './pages/HomeAdmin.jsx'
import Footer from '../../../../components/Footer.jsx'
import {Routes, Route} from 'react-router-dom'
import Escolas from './pages/Escolas.jsx'

function Admin(){
    return(
        <div className={"admin-layout"}>
            <NavbarAdmin />
            <Routes>
                <Route path={"/"} element={<HomeAdmin />}/>
                <Route path={"/escolas"} element={<Escolas />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Admin