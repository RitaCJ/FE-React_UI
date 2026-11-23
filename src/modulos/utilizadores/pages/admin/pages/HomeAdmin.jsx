import {Card, Row, Col} from 'react-bootstrap';
import './HomeAdmin.css';
import {Link} from "react-router-dom";
function HomeAdmin() {
    return(
        <main className={"home-admin"}>
           <div className={"home-header"}>
               <h1>Bem-vindo(a), Admin</h1>
               <p>Aqui pode gerir e acompanhar suas atividades</p>
           </div>

            <section className={"dashboard-section"}>
                <div className={"section-title"}>
                    <h2>Visão geral</h2>
                    <span></span>
                </div>

                <Row className={"g-4 justify-content-center"} >
                    <Col md={6} xl={3}>
                        <Card className={"dashboard-card"}>
                            <Card.Body>
                                <i className={"bi bi-building dashboard-icon"}></i>
                                <h3>--</h3>
                                <p>Escolas</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={3}>
                        <Card className={"dashboard-card"}>
                            <Card.Body>
                                <i className={"bi bi-person-fill-gear dashboard-icon"}></i>
                                <h3>--</h3>
                                <p>Administradores</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={3}>
                        <Card className={"dashboard-card"}>
                            <Card.Body>
                                <i className={"bi bi-clipboard2-check-fill dashboard-icon"}></i>
                                <h3>--</h3>
                                <p>Tarefas</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={3}>
                        <Card className={"dashboard-card"}>
                            <Card.Body>
                                <i className={"bi bi-book dashboard-icon"}></i>
                                <h3>--</h3>
                                <p>Professores</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={3}>
                        <Card className={"dashboard-card"}>
                            <Card.Body>
                                <i className={"bi bi-backpack dashboard-icon"}></i>
                                <h3>--</h3>
                                <p>Alunos</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={3}>
                        <Card className={"dashboard-card"}>
                            <Card.Body>
                                <i className={"bi bi-person-hearts dashboard-icon"}></i>
                                <h3>--</h3>
                                <p>Psicólogos</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={3}>
                        <Card className={"dashboard-card"}>
                            <Card.Body>
                                <i className={"bi bi-file-earmark-bar-graph dashboard-icon"}></i>
                                <h3>--</h3>
                                <p>Relatórios</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={3}>
                        <Card className={"dashboard-card"}>
                            <Card.Body>
                                <i className={"bi bi-people-fill dashboard-icon"}></i>
                                <h3>--</h3>
                                <p>Encarregados</p>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            </section>

            <section className={"quick-access"}>
                <div className={"section-title"}>
                    <h2>Acesso rápido</h2>
                    <span></span>
                </div>

                <p className={"section-description"}>
                    Aceda rapidamente as funcionalidades
                </p>

                <Row className={"g-4 justify-content-center"}>
                    <Col md={6} lg={3}>
                        <Link to={"/admin/escolas"} className={"quick-card-link"}>
                            <Card className={"quick-card"}>
                                <Card.Body>
                                    <i className={"bi bi-building-add"}></i>
                                    <h5>Escolas</h5>
                                    <p>Gerir escolas</p>
                                    <span>Aceder <i className={"bi bi-arrow-right"}></i></span>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>

                    <Col md={6} lg={3}>
                        <Link to={"/admin/adminstradores"} className={"quick-card-link"}>
                            <Card className={"quick-card"}>
                                <Card.Body>
                                    <i className={"bi bi-person-add"}></i>
                                    <h5>Adminstradores das escolas</h5>
                                    <p>Gerir adminstradores de escola</p>
                                    <span>Aceder <i className={"bi bi-arrow-right"}></i></span>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>

                    <Col md={6} lg={3}>
                        <Link to={"/admin/tarefas"} className={"quick-card-link"}>
                            <Card className={"quick-card"}>
                                <Card.Body>
                                    <i className={"bi bi-clipboard2-check-fill"}></i>
                                    <h5>Tarefas</h5>
                                    <p>Disponibilização de tarefas</p>
                                    <span>Aceder<i className={"bi bi-arrow-right"}></i></span>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </section>

        </main>
    )
}

export default HomeAdmin