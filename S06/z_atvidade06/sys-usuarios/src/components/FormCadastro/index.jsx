import './index.css'
import {useForm} from 'react-hook-form'
import auth from '../../api/auth.js'
import history from '../../history';
export const FormCadastro = ()=>{
    const {register, handleSubmit} = useForm();
    
    const submeter = async (user)=>{
        const res = await auth.cadastrar(user)
        if(res)
            history.push('/login')
        else
            history.push('/cadastrar')

       
    }

    return(
        <form onSubmit={handleSubmit(submeter)}>
            <h2>Cadastrar Usuário: </h2>
            <div className='field'>
                <label htmlFor="nome">Nome:</label>
                <input required type="text" nome='nome' id='nome' {...register("nome")} />
            </div>
            <div className='field'>
                <label htmlFor="nome">Email:</label>
                <input required type="email" nome='email' id='email' {...register("email")}/>
            </div>
            <div className='field'>
                <label htmlFor="senha">Senha:</label>
                <input required type="password" name="senha" id="senha" {...register("senha")}/>
            </div>

            <button>Cadastrar</button>
        </form>
    )
}