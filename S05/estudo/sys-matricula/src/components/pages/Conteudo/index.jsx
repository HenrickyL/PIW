import classNames from 'classnames'
import history from '../../../history.js'
import './index.css'

export default ()=>{
    
    const cadeiras  = [
        {
            id:'123',
            nome: "LMS", 
            codigo:'QXD025',
            disponivel: true,
        },
            
        {
            id:'235',
            nome: "PIW",
             codigo:'QXD086',
             disponivel:false,
        },
        {
            id:'345',
            nome: "SOC",
             codigo:'QXD143',
             disponivel:true,
        },
    ]

    const Card = ({disciplina})=>{
        let nomeClasses = classNames('card',{
            'indisponivel': !disciplina.disponivel 
        })
        function haddleClick(e){
            history.push('/disciplinas/'+disciplina.id)
        }
        return(
        <div className={nomeClasses} onClick={haddleClick}>
                <h3 className='card-title'>{disciplina.nome}</h3>
                <span className='card-code'>{disciplina.codigo}</span>
        </div>
    )}
    return (<>
        <div className='conteudo-galeria'>
            

            {cadeiras.map((d,i)=>{
                 return (
                    <Card key={i}
                        disciplina={d} 
                          
                    />
                 )
            })}
        </div>
    </>)


}
