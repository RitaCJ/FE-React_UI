
import { useState } from 'react';
export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erro, setErro] = useState('')
    const { login } = useAuth();

    cons submit = async (e) => {
        e.preventDefault();
        setErro('')
        const res = await fetch('api/login', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({email, password})
        });

        if(!res.ok){
            setErro('Credenciais inválidas');
            return;
        }

        const { token } = await res.json();
        const { role } = JSON.parse(atob(token.split('.')[1]));
        login(token, role);
        navigate(role === 'ALUNO' ? '/aluno' : '/docente');
    };

    return ()

}