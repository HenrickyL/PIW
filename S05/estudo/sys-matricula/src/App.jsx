import {BrowserRouter,Router,Route} from  'react-router-dom'
import './App.css';
import PaginaPrincipal from './components/pages/PaginaPrincipal';
import PaginaListarMatriculas from './components/pages/PaginaListarMatriculas'
import { PaginaDetalhesMatriculas } from './components/pages/PaginaDetalheMAtricula';
import history from './history.js'
import { PaginaDetalheDisciplina } from './components/pages/PaginaDetalheDisciplina';

function App() {
  return (
    <Router history={history}>
    
      <Route exact path='/' component={PaginaPrincipal}/>
      <Route exact path='/matriculas' component={PaginaListarMatriculas}/>
      <Route 
        path='/matriculas/:id' 
          component={PaginaDetalhesMatriculas}
        />
        <Route exact
        path='/disciplinas/:id' 
          component={PaginaDetalheDisciplina}
        />

    </Router>
  
  );
}

export default App;
