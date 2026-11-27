import {Link} from "react-router-dom";
import {useState} from "react";
import {useAuth} from "../../../../../autenticacao/authContext/AuthContext.jsx";
import './RegistarEscola.css';

function RegistarEscola(){

    const [nome, setNome] = useState("");
    const [endereco, setEndereco] = useState("");
    const [telefone, setTefone] = useState("");
    const [email, setEmail] = useState("");

    const [erro, setErro] = useState("");
    const [sucesso, setSucesso] = useState("");

    const {token} = useAuth();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setErro("");
        setSucesso("");

        try{
            const res = await fetch("http://localhost:8080/api/escolas", {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome, endereco, telefone, email})
            });

                if(!res.ok){
                    throw new Error("Não foi possível registar a escola");
                }

                setSucesso("Escola registada com sucesso!");

                //Limpar formulario
                setNome("");
                setEndereco("");
                setTefone("");
                setEmail("");

        }catch (error){
            console.error(error);
            setErro(error.message);
        }
    };

    return(
        <main className={"container"}>
            <div className={"formHeader"}>
                <div className={"formHeader-info"}>
                    <div className={"addEscola-icon"}>
                        <i className={"bi bi-building-add"}></i>
                    </div>
                    <div className={"formHeader-text"}>
                        <h1>Adicionar nova Escola</h1>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className={"formMain"}>
                <label htmlFor={"nome"}>Nome:</label>
                <input type={"text"}
                       id={"nome"}
                       name={"nome"}
                       required
                       value={nome}
                       onChange={e => setNome(e.target.value)}/>

                <label htmlFor={"endereco"}>Endereço:</label>
                <input type={"text"}
                       id={"endereco"}
                       name={"endereco"}
                       required
                       value={endereco}
                       onChange={e => setEndereco(e.target.value)}/>

                <label htmlFor={"telefone"}>Telefone:</label>
                <input type={"text"}
                       id={"telefone"}
                       name={"telefone"}
                       required
                       value={telefone}
                       onChange={e => setTefone(e.target.value)}/>

                <label htmlFor={"email"}>Email:</label>
                <input type={"text"}
                       id={"email"}
                       name={"email"}
                       required
                       value={email}
                       onChange={e => setEmail(e.target.value)} />
                {/*{email.length===0 && <span className={"errMsg"}>Por favor insira o email</span>}*/}

                {erro && <p className={"errMsg"}>{erro}</p>}
                {sucesso && <p>{sucesso}</p>}

                <div>
                    <button type={"submit"} className={"btn btn-save"}>
                        Registar
                    </button>

                    <Link to={"/admin/escolas"} className={"btn btn-back"}>
                        Voltar
                    </Link>
                </div>
            </form>
        </main>
    )
}

export default RegistarEscola