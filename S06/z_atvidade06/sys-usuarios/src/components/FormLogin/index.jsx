import {useForm, useCo} from 'react-hook-form'
import authentication from '../../api/auth.js'
import {useContext} from 'react'
import 'dotenv/config'
import { AuthContext } from '../../App.js'
import history from '../../history.js'

export const FormLogin = ()=>{
    const {register, handleSubmit} = useForm();
    const auth = useContext(AuthContext);
    const submeter =  (user)=>{
        authentication.login(user)
            .then(res=>{
                auth.setAuth(res.data)
                history.push('/')
            })
            .catch(e=>{
                console.error(e)
                history.push('/login')
            })
       
            
            
       
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