import {useState} from "react";
import {useAuth} from "../authContext/AuthContext.jsx";
import {useNavigate} from "react-router-dom";
import { Form, Button, Card, Alert, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import {responsivePropType} from "react-bootstrap/createUtilityClasses";
import './LoginForm.css'
export default function LoginForm() {

    //Estados do formulário
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    //Autenticação e navegação
    const {login: autenticar} = useAuth();
    const navigate = useNavigate();

    //Submissão do formulário
    const submit = async (e) => {
       //Impedir o recarregamento
        e.preventDefault();
        //Limpar os erros anteriores
        setErro('');

            const res = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    login,
                    senha
                })
            });

        console.log('Status:', res.status)

        if(!res.ok){
            setErro('Credenciais inválidas');
            return;
        }


        const token = await res.text();

        console.log("Here: ", token)
        //Receber a resposta do backend
        //Desestruturação de objectos
        //atob() -> decodifica o payload


        //Separar o token por partes


        if (!token) {
            setErro("Token não recebido do servidor");
            return;
        }

        const payload = JSON.parse(atob(token.split('.')[1]));
        const perfil = payload.perfil;

        console.log("PAYLOAD JWT:", perfil);


        if (typeof perfil !== "string") {
            setErro("Perfil não encontrado no token");
            return;
        }

        const perfilNormalizado = perfil.toLowerCase();

        const rotas = {
            aluno: '/alunos',
            professor: '/professores',
            encarregado: '/encarregados',
            admin: '/admin',
            admin_escola: '/admin_escola'
        }

        if(!rotas[perfilNormalizado]){
            setErro("Perfil desconhecido");

        }

        autenticar(token, perfilNormalizado);
        navigate(rotas[perfilNormalizado]);
    };


    return (
        <Container className={"login-form-container"}>
            <Row className={"justify-content-center"}>
                <Col md={8} lg={6} xl={5}>
                    <Card className={"login-card shadow"}>
                        <Card.Body>
                            {/*Icon*/}
                            <div className={"login-icon"}>
                                <i className={"bi bi-person-circle"}></i>
                            </div>

                            {/*Cabeçalho*/}
                            <div className={"login-header"}>
                                <h2>LOGIN</h2>
                                <p> Bem-vindo! Entre na sua conta para continuar </p>

                            </div>

                            {erro && (
                                <Alert variant={"danger"}>
                                    {erro}
                                </Alert>
                            )}

                            <Form onSubmit={submit}>
                                <Form.Group className={"login-field"}>
                                    <Form.Label className={"login-label"}>
                                        Nome de utilizador ou email
                                    </Form.Label>

                                    <Form.Control className={"login-input"} type={"text"} placeholder={"Escreva o seu nome de utilizador ou email"}
                                                  value={login} onChange={(e) => setLogin(e.target.value)}
                                                  required >
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className={"login-field"}>
                                    <Form.Label className={"login-label"}>
                                        Senha
                                    </Form.Label>

                                    <Form.Control className={"login-input"} type={"password"} placeholder={"Escreva a sua senha"} value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    required >
                                    </Form.Control>
                                </Form.Group>

                                <Button variant={"primary"} type={"submit"} className={"w-100 login-button"}>
                                    Entrar
                                </Button>
                            </Form>

                            <div className={"login-register"}>
                                <p> Ainda não tem uma conta? </p>
                                <a href={"/registo"}>Criar uma conta</a>
                            </div>


                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

