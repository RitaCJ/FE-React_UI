import './NavbarAdmin.css'
import {useState} from 'react';
import {Link} from 'react-router-dom'
import logo from '../../../../../assets/mortarboard.png'
import {Dropdown, NavLink} from 'react-bootstrap'

function NavbarAdmin(){

    return(
        <nav className={"navBar"}>

            <Link to={"/admin"} className={"navbar-logo"}>
                <img src={logo}
                     alt={"Logotipo"}
                     className={'logo'} />
            </Link>

            <ul className={"navMenu"}>
                <li><Link to={"/admin"}>Home</Link></li>
                <li><Link to={"/admin/escolas"}>Escolas</Link></li>
                <li><Link to={"/admin/administrators"}>Adminstradores</Link></li>
                <li><Link to={"/admin/tarefas"}>Tarefas</Link></li>
            </ul>

            <Dropdown align={"end"} className={"user-dropdown"}>
                <Dropdown.Toggle variant={"light"} id={"user-dropdown"}>
                    <i className={"bi bi-person-circle"}></i>
                    <span>User</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>

                    {/*
                    <Dropdown.Item>
                        <i className={"bi bi-box-arrow-down-right me-2"}></i>
                        PErfil
                    </Dropdown.Item>*/}

                    <Dropdown.Item>
                        <i className={"bi bi-box-arrow-down-right me-2"}></i>
                        Terminar sessão
                    </Dropdown.Item>

                    {/*<Dropdown.Divider />*/}

                    {/*<Dropdown.Item>*/}
                    {/*    <i className={"bi bi-box-arrow-down-right me-2"}></i>*/}
                    {/*    Terminar sessão*/}
                    {/*</Dropdown.Item>*/}

                </Dropdown.Menu>
            </Dropdown>

        </nav>
    )
}

export default NavbarAdmin