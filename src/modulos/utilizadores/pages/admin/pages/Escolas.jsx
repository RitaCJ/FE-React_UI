import {useState} from "react";
import './Escola.css';
import {Container, Row, Col, Card, Form, Button, Table} from 'react-bootstrap';

function Escolas(){

    return(
        <main className={"escolasPage"}>
            <Container fluid>
                <div className={"escolasHeader"}>
                    <div className={"escola-icon"}>
                        <i className={"bi bi-buildings"}></i>
                    </div>
                    <h1>Gestão de escolas</h1>
                    <p>Consulte, registe e faça a gestão de escolas</p>

                    <button className={"escolas-add-button"} onClick={""}>Nova escola</button>
                </div>

                <Row className={"mb-4"}>
                    <Col md={4} lg={3}>
                        <Card className={"escolas-total-card"}>
                            <Card.Body>
                                <div className={"escolas-total-icon"}>
                                    <i className={"bi bi-building-fill-add"}></i>
                                </div>

                                {/*escolas.length*/}
                                <h3>--</h3>
                                <p>Total de escolas registadas</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} lg={3}>
                        <Card className={"escolas-excluidas-card"}>
                            <Card.Body>
                                <div className={"escolas-excluidas-icon"}>
                                    <i className={"bi bi-building-fill-dash"}></i>
                                </div>

                                {/*escolas.length*/}
                                <h3>--</h3>
                                <p>Total de escolas registadas</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Card className={"escolas-table-card"}>
                    <Card.Body>
                        <div className={"list-icon"}>
                            <i className={"bi bi-list-check"}></i>
                        </div>
                        <div className={"table.title"}>
                           <h2>Escolas registadas</h2>
                            <span>here</span>
                        </div>
                    </Card.Body>

                    <div className={"escolas-toolbar"}>
                        <Form.Control type={"text"}
                        placeholder={"Pesquisar por escola"}
                        value={Pesquisa} onChange={(e) => setPesquisa(e.target.value)} className={"escola-search"}
                        />

                        <


                    </div>
                </Card>




            </Container>
        </main>
    )

}

export default Escolas