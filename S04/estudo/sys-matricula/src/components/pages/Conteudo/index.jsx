import classNames from 'classnames'

import './index.css'

export default ()=>{
    
    const cadeiras  = [
        {
            nome: "LMS", 
            codigo:'QXD025',
            disponivel: true,
        },
            
        {
            nome: "PIW",
             codigo:'QXD086',
             disponivel:false,
        },
        {
            nome: "SOC",
             codigo:'QXD143',
             disponivel:true,
        },
    ]

    const Card = ({nome, codigo,disponivel})=>{
        let nomeClasses = classNames('card',{
            'indisponivel': !disponivel 
        })
        
        return(
        <div className={nomeClasses}>
                <h3 className='card-title'>{nome}</h3>
                <span className='card-code'>{codigo}</span>
        </div>
    )}
    return (<>
        <div className='conteudo-galeria'>
            

            {cadeiras.map((c,i)=>{
                 return (
                    <Card 
                        nome={c.nome} 
                        codigo={c.codigo} 
                        disponivel={c.disponivel}    
                    />
                 )
            })}
        </div>
    </>)


}
