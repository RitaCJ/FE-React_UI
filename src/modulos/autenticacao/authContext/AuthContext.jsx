import{createContext, useContext, useState} from 'react';

//Criar o contexto (Poderá partilhar informações entre componentes)
const AuthContext = createContext(null);

//O provider disponibiliza a autenticação à aplicação
export function AuthProvider({children}){
    //Estado token
    const [token, setToken] = useState(localStorage.getItem('token'));
   //Estado perfil
    const[perfil, setPerfil] = useState(localStorage.getItem('perfil'));

    //Guardar os valores do token no navegador e do guarda perfil do utilizador
    const login = (token, perfil) => {
        localStorage.setItem('token', token);
        localStorage.setItem('perfil', perfil);
        //Atualizar o estado token e do perfil no React
        setToken(token);
        setPerfil(perfil);
    };

    //Função de logout
    const logout = () => {
        //Apaga todos os dados do localStorage
        //localStorage.clear();
        //Remover apenas os dados relacionados com a autenticação
        localStorage.removeItem('token');
        localStorage.removeItem('perfil');
        //Limpa o token e o perfil do React
        setToken(null);
        setPerfil(null);
    };

    //Disponibilizar os dados e as funções de autenticação
    //ao resto da aplicação
    const autenticado = !!token;
    return(
        <AuthContext.Provider value={{token, perfil, login, logout, autenticado}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);