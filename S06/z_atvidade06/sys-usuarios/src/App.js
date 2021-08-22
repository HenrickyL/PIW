import { PaginaFeed } from "./pages/PaginaFeed";
import {Router,Route} from 'react-router-dom'
import history from './history.js'
import { PaginaPostar } from "./pages/PaginaPostar";
import { PaginaCadastro } from "./pages/PaginaCadastro";
import { PaginaLogin } from "./pages/PaginaLogin";
import { createContext } from "react";

export const AuthContext = createContext(null)
function App() {
  return (
    <AuthContext.Provider value={{ token:'123'}}>

      <Router history={history}>
        <Route exact path='/' component={PaginaFeed} />
        <Route exact path='/postar' component={PaginaPostar} />
        <Route exact path='/cadastrar' component={PaginaCadastro} />
        <Route exact path='/login' component={PaginaLogin} />

      </Router>
    </AuthContext.Provider>
  );
}

export default App;
