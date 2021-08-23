import './index.css'
import {useState,useEffect, useContext} from 'react'
import classNames from 'classnames' 
import { infoComments } from '../../utils/data'
import { Comment } from '../Comment'
import postsAPI from '../../api/postsAPI'
import { AuthContext } from '../../App'
import { useForm } from 'react-hook-form'
import history from '../../history'


export function Post(props){
    const {register, handleSubmit} = useForm();
    const {auth} = useContext(AuthContext)
    const [likes,setLikes]=useState(props.likes)
    const [viewComment,setView]=useState(false)
    const [deactive,setDeactive]=useState(true)
    const [isLike,setISLike]=useState(props.active)
    const [currentComments,setCurrComment] = useState([])
    const [currText, setCurrText] = useState('')
    const [update,setUpdate] = useState(true)
    const [curUserName,setCurUserName]=useState(props.username)
    const handdleChange =(e)=>{
        setCurrText(e.target.value)
        
    }
    useEffect(()=>{
        //pegar comentarios
        postsAPI.getComment(auth,props.id).then(res=>{
            setCurrComment(res)
            
        }).catch(e=>{
            console.error(e)
        })
        // //pegar o usuário
        // postsAPI.getUser(auth)
        //     .then(res=>{
                
        //         let  curr = res.filter(x=>x.id == props.usuario.id)[0]
        //         console.log('user:',curr)
        //         setCurUserName(curr.nome)
        //     }).catch(e=>{
        //         console.error(e)
        //     })
    },[update])

    const submeter = (data)=>{
        setTimeout(()=>{
            setUpdate(!update)
        },500)
        //setarComentario
        postsAPI.setComment(auth,{
            id_post:props.id,
            texto: currText,
            likes:0,
        }).then(res=>{
            console.log(res)
            setCurrText('')
            history.push('/')
        }).catch(e=>{
            console.error(e)
        })
        
    }
    const handdleClick = (e)=>{
        let aux = 1;
        if(isLike){
            aux=-1;
        }else{
            aux=1;
        }
        setLikes(likes+aux)
        setISLike(!isLike)

    }
    const toggleComments = (e)=>{
        
        setDeactive(!deactive)
        setView(!viewComment)
    }
    return (
        <div className={classNames('post post-main',{active:viewComment},{deactive:deactive})}>
            <div className='post hide'>
                <h4 className='post-user'>{curUserName}</h4>
                <span className='post-comment'>{props.texto}</span>
                <span className='post-like'>{likes} likes</span>
                <button className={classNames('btLike',{active:isLike})} onClick={handdleClick}>Curtir</button>
                <img className={classNames({active:viewComment})} src="/seta.svg" alt="view comments" onClick={toggleComments} />
            </div>
           <div className='comentarios-box'>
               <div className='comentarios'>
               {
                    currentComments
                        .map((c,i)=>{
                        console.log(c)
                                return (<Comment  key={i} {...c} />)
                        })
               }
               </div>
               
               <form className='inp-mensage' onSubmit={handleSubmit(submeter)}>

                    <input 
                        type='text' 
                        className='inpt-text' 
                        id='texto' 
                        name='texto'  
                        onChange={handdleChange} 
                        placeholder='Digite um Comentário ...' 
                        required/>

                    <button>Comentar</button>
                </form>
           </div>
            
        </div>
        
    )
}