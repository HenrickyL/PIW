export const Cabecalho = (props)=>(
    <header className='cabecalho'>
      <h1 className='logo'>Matricula UFC Quixadá</h1>
      <span className='pagina-atual'>Você está na {props.paginaAtual}</span>
    </header>
  
)