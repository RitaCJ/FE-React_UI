import {useState, useEffect} from "react";
import './Escola.css';
import {Container, Row, Col, Card, Form, Button, Table} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {useAuth} from "../../../../../autenticacao/authContext/AuthContext.jsx";

function Escolas(){

    const [escolas, setEscolas] = useState([]);
    const[carregando, setCarregando] = useState(true);
    const[erro, setErro] = useState('');

    const{token} = useAuth();

    useEffect(() => {
        const carregarEcolas = async () => {
            try{
                setCarregando(true);
                setErro('');

                const res = await fetch('http://localhost:8080/api/escolas', {
                    method: 'GET',
                    header: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                console.log("Estado da resposta:", res.status);

                if(!res.ok){
                    throw new Error('Errro ao carregar as escola');
                }

                const dados = await res.json();

                setEscolas(dados);

            }catch (error){
                console.error(error);
                setErro('Desculpe! Não foi possível carregas as escolas');
            }finally {
                setCarregando(false);
            }
        };
        carregarEcolas();
    }, [token]);



    return(
        <main className={"escolaLayout"}>
            {/*==Cabeçalho==*/}
            <div className={"escolaHeader"}>
                <div className={"escolaHeader-info"}>
                    <div className={"escola-icon"}>
                        <i className={"bi bi-buildings"}></i>
                    </div>

                    <div className={"escolaHeader-text"}>
                        <h1>Gestão de escolas</h1>
                        <p>Consulte, registe e faça a gestão de escolas</p>
                    </div>
                </div>

               <Link to={"/admin/escolas/registar"} className={"escolaAdicionar-btn"}>
                   <i className={"bi bi-plus-lg"}></i>
                   Nova escola
               </Link>
            </div>

            {/*==Cartões==*/}
            <Row className={"mb-4 g-4"}>
                <Col md={6} lg={3}>
                    <Card className={"escola-total-card"}>
                        <Card.Body>
                            <div className={"escola-total-icon"}>
                                <i className={"bi bi-building-fill-add"}></i>
                            </div>
                            {/*escolas.length*/}
                            <h3>--</h3>
                            <p>Total de escolas registadas</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/*==Tabela de escolas==*/}
            <Card className={"escola-table-card"}>
                <Card.Body>
                    <div className={"table-header"}>
                        <div className={"list-icon"}>
                            <i className={"bi bi-list-check"}></i>
                        </div>

                        <div className={"table-title"}>
                            <h2>Escolas</h2>
                        </div>
                    </div>
                </Card.Body>

                {/*==Barra de pesquisa==*/}
                <div className={"escola-searchBar"}>
                    <Form.Control type={"text"} placeholder={"Pesquisar por escola"} className={"escola-search"}/>
                </div>

                {/*==Conteúdo da tabela==*/}
                <div className={"tabela-container"}>
                    <div className={"tableEscola"}>
                        <table className={"table"}>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Endereço</th>
                                    <th>Email</th>
                                    <th>Telefone</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {carregando ? (
                                    <tr>
                                        <td colSpan={"5"}>
                                            A carregar escolas...
                                        </td>
                                    </tr>
                                ) : erro ? (
                                    <tr>
                                        <td colSpan={"5"}>
                                            {erro}
                                        </td>
                                    </tr>
                                ) : escolas.length === 0 ? (
                                    <tr>
                                        <td colSpan={"5"}>
                                            Não há escolas registadas.
                                        </td>
                                    </tr>
                                ) : (
                                    escolas.map((escola) => (
                                        <tr key={escola.id}>
                                            <td>{escola.nome}</td>
                                            <td>{escola.endereco}</td>
                                            <td>{escola.email}</td>
                                            <td>{escola.telefone}</td>

                                            <td className={"table-actions"}>
                                                <Link to={""} className={"btn btn-info"}>
                                                    <i className={"bi bi-eye"}></i>
                                                    Consultar
                                                </Link>
                                                <Link to={""} className={"btn btn-primary"}>
                                                    <i className={"bi bi-pencil-square"}></i>
                                                    Atualizar
                                                </Link>
                                                <Link to={""} className={"btn btn-danger"}>
                                                    <i className={"bi bi-trash"}></i>
                                                    Apagar
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Card>
        </main>
    )
}

export default Escolas