
import { useState } from 'react';
import LoginForm from '/src/modulos/autenticacao/components/LoginForm'
import './Login.css'
function Login(){
   return(
       <main className={"login-page"}>
           <LoginForm />
       </main>
   )


}

export default Login