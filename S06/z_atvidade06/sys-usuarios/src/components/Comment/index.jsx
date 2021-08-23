import classNames from "classnames"
import { useState } from "react"

export const Comment = (props)=>{
    const [likes,setLikes]=useState(props.likes)
    const [deactive,setDeactive]=useState(null)
    const [isLike,setISLike]=useState(props.active)

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
    return (

        <div className='comment'>
            <h4 className='comment-user'>{props.username}</h4>
                <span className='comment-text'>{props.texto}</span>
                <span className='comment-like'>{likes} likes</span>
                <button className={classNames('btLike',{active:isLike})} onClick={handdleClick}>Curtir</button>
        </div>
    )
}