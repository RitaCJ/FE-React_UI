import {Card, Row, Col} from 'react-bootstrap';
import './HomeAdmin.css';
import {Link} from "react-router-dom";
function HomeAdmin() {
    return(
        <main className={"homeAdmin"}>
           <div className={"homeHeader"}>
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
                                <div className={"dashboard-card-icon"}>
                                    <i className={"bi bi-building"}></i>
                                </div>

                                <div className={"dashboard-card-info"}>
                                    <h3>--</h3>
                                    <p>Escolas</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={3}>
                        <Card className={"dashboard-card"}>
                            <Card.Body>
                                <div className={"dashboard-card-icon"}>
                                    <i className={"bi bi-person-fill-gear "}></i>
                                </div>

                                <div className={"dashboard-card-info"}>
                                    <h3>--</h3>
                                    <p>Adminstradores</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={3}>
                        <Card className={"dashboard-card"}>
                            <Card.Body>
                                <div className={"dashboard-card-icon"}>
                                    <i className={"bi bi-clipboard2-check-fill"}></i>
                                </div>

                                <div className={"dashboard-card-info"}>
                                    <h3>--</h3>
                                    <p>Tarefas</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={3}>
                        <Card className={"dashboard-card"}>
                            <Card.Body>
                                <div className={"dashboard-card-icon"}>
                                    <i className={"bi bi-book"}></i>
                                </div>

                                <div className={"dashboard-card-info"}>
                                    <h3>--</h3>
                                    <p>Professores</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={3}>
                        <Card className={"dashboard-card"}>
                            <Card.Body>
                                <div className={"dashboard-card-icon"}>
                                    <i className={"bi bi-backpack"}></i>
                                </div>

                                <div className={"dashboard-card-info"}>
                                    <h3>--</h3>
                                    <p>Alunos</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={3}>
                        <Card className={"dashboard-card"}>
                            <Card.Body>
                                <div className={"dashboard-card-icon"}>
                                    <i className={"bi bi-person-hearts"}></i>
                                </div>

                                <div className={"dashboard-card-info"}>
                                    <h3>--</h3>
                                    <p>Psicólogos</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={3}>
                        <Card className={"dashboard-card"}>
                            <Card.Body>
                                <div className={"dashboard-card-icon"}>
                                    <i className={"bi bi-file-earmark-bar-graph"}></i>
                                </div>

                                <div className={"dashboard-card-info"}>
                                    <h3>--</h3>
                                    <p>Relatórios</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={3}>
                        <Card className={"dashboard-card"}>
                            <Card.Body>
                                <div className={"dashboard-card-icon"}>
                                    <i className={"bi bi-people-fill"}></i>
                                </div>

                                <div className={"dashboard-card-info"}>
                                    <h3>--</h3>
                                    <p>Encarregados</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*== Fim da Secção de Dasboards ==*/}
            </section>

            {/*== Inicio da Secção de Quick-access ==*/}
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
                        <Link to={"/admin/adminstradoresEscola"} className={"quick-card-link"}>
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
                {/*== Fim da Secção de Quick access ==*/}
            </section>
        </main>
    )
}

export default HomeAdmin