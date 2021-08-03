import './index.css'
import {useState,useEffect} from 'react'
import classNames from 'classnames' 
import { infoComments } from '../../utils/data'
import { Comment } from '../Comment'


export function Post(props){
    const [likes,setLikes]=useState(props.qtdLikes)
    const [viewComment,setView]=useState(false)
    const [deactive,setDeactive]=useState(true)
    const [isLike,setISLike]=useState(props.active)
    const [currentComments,setCurrComment] = useState(infoComments.filter(x=> props.id ==x.idPost))
    const [currText, setCurrText] = useState('')
    const handdleChange =(e)=>{
        setCurrText(e.target.value)
        
    }
    const haddleSubmit = (e)=>{
        infoComments.push({
            id:infoComments.length+1,
            idPost:props.id,
            nomeUsuario:"Henricky",
            texto: currText,
            qtdLikes:0,
            active:false
    
        })
        let coments=infoComments.filter(x=> props.id ==x.idPost)
        setCurrComment(coments)
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
                <h4 className='post-user'>{props.nomeUsuario}</h4>
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
               
               <form className='inp-mensage' onSubmit={(e)=>{e.preventDefault()}}>

                    <textarea onChange={handdleChange} placeholder='Digite um Comentário ...' required/>
                    <button onClick={haddleSubmit} type="submit">Comentar</button>
                </form>
           </div>
            
        </div>
        
    )
}