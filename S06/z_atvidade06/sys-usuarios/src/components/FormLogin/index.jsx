import {useForm, useFormContext} from 'react-hook-form'
import authentication from '../../api/auth.js'
import 'dotenv/config'
import { AuthContext } from '../../App.js'

export const FormLogin = ()=>{
    const {register, handleSubmit} = useForm();
    const url = "http://localhost:3002/api/usuarios/login"//process.env.REACT_APP_URL + process.env.REACT_APP_URL_USER
    const auth = useFormContext(AuthContext);
    const submeter = async (user)=>{
        const res = await authentication.login(url,user)
        console.log(res)
        
            
            
       
    }

    return(
        <form onSubmit={handleSubmit(submeter)}>
            <h2>Login</h2>
           
            <div className='field'>
                <label htmlFor="nome">Email:</label>
                <input required type="email" nome='email' id='email' {...register("email")}/>
            </div>
            <div className='field'>
                <label htmlFor="senha">Senha:</label>
                <input required type="password" name="password" id="senha" {...register("senha")}/>
            </div>
            

            <button>Logar</button>
        </form>
    )
}