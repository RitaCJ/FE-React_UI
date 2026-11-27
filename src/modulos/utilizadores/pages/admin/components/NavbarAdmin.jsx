import './NavbarAdmin.css'
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import logo from '../../../../../assets/mortarboard.png'
import {Dropdown} from 'react-bootstrap'
import {useLocation} from "react-router-dom";
import {useAuth} from "../../../../autenticacao/authContext/AuthContext.jsx";

function NavbarAdmin(){

    const location = useLocation();
    const navigate = useNavigate();

    const {perfil, logout} = useAuth();

    const menuItems = [
        {name: "Home", path: "/admin", icon: "bi-house-door-fill"},
        {name: "Escolas", path: "/admin/escolas", icon: "bi-building-fill"},
        {name: "Administradores", path: "/admin/adminstradoresEscola", icon: "bi-person-fill-gear"},
        {name: "Tarefas", path: "/admin/tarefas", icon: "bi-clipboard2-check-fill"}
    ];

    const currentPage = menuItems.find(
        item => item.path === location.pathname
    );

    const handleLogout = () => {
        logout();
        navigate("/login");
    }

    return(
        <nav className={"adminTopBar"}>
            {/*Consoante a mudança do menu, mudará também o titulo no top bar*/}
            <h4 className={"pageTitle"}>
                {currentPage?.name || "Home"}
            </h4>

            <div className={"topBarRight"}>

                {/*Barra de pesquisa*/}
                <div className={"searchBar"}>
                    <i className={"bi bi-search"}></i>
                    <input type={"text"} placeholder={"Pesquisar"} />
                </div>

                {/*Utilizador logado*/}
                <Dropdown align={"end"} className={"userDropdown"}>
                    <Dropdown.Toggle variant={"light"} id={"userDropdown"}>
                        <i className={"bi bi-person-circle"}></i>
                        <span>{perfil || "Utilizador"}</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {/*Perfil do utilizador*/}
                        <Dropdown.Item>
                            <i className={"bi bi-person me-2"}></i>
                            Perfil
                        </Dropdown.Item>

                        <Dropdown.Divider />

                        {/*Logout*/}
                        <Dropdown.Item onClick={handleLogout}>
                            <i className={"bi bi-box-arrow-down-right me-2"}></i>
                            Sair
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </nav>
    )
}

export default NavbarAdmin