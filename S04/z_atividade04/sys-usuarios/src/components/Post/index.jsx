import './index.css'



export function Post(props){


    return (
        <div className='post'>
            <h4 className='post-user'>{props.nomeUsuario}</h4>
            <span className='post-comment'>{props.texto}</span>
            <span className='post-like'>{props.qtdLikes} likes</span>
            <button>Curtir</button>
        </div>
    )
}