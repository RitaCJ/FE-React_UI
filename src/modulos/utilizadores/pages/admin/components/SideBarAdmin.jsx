import './SidebarAdmin.css'
import {useState} from 'react';
import {Link} from 'react-router-dom'
import logo from '../../../../../assets/mortarboard.png'
import {Dropdown} from 'react-bootstrap'
import {useLocation} from "react-router-dom";

function SideBarAdmin(){

    const location = useLocation();

    const menuItems = [
        {name: "Home", path: "/admin", icon: "bi-house-door-fill"},
        {name: "Escolas", path: "/admin/escolas", icon: "bi-building-fill"},
        {name: "Administradores", path: "/admin/adminstradoresEscola", icon: "bi-person-fill-gear"},
        {name: "Tarefas", path: "/admin/tarefas", icon: "bi-clipboard2-check-fill"}
    ];

    return(
        <aside className={"adminSidebar"}>

            <Link to={"/admin"} className={"navBarLogo"} >
                <img src={logo}
                     alt={"Logotipo"}
                     className={'logo'} />
            </Link>

            {/*==MENU==*/}
            <ul className={"navMenu"}>
                {menuItems.map(item => (
                    <li key={item.path}>
                        <Link to={item.path} className={location.pathname === item.path ? "active" : ""}>
                            <i className={`bi ${item.icon}`}></i>
                            <span>{item.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
)
}

export default SideBarAdmin