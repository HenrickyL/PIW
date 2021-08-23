import { PaginaFeed } from "./pages/PaginaFeed";
import {Router,Route, Redirect} from 'react-router-dom'
import history from './history.js'
import { PaginaPostar } from "./pages/PaginaPostar";
import { PaginaCadastro } from "./pages/PaginaCadastro";
import { PaginaLogin } from "./pages/PaginaLogin";
import { createContext,useState,useContext } from "react";

export const AuthContext = createContext(null)

const RouteAuth = (props)=>{
  const {auth} = useContext(AuthContext)
  return(
    auth.token?
      <Route exact path={props.path} component={props.component} />
      :
      <Redirect to='/login' />

  )
}

const defaultValue = {
  token: localStorage.getItem('token'),
  nome: localStorage.getItem('nome'),
  id: localStorage.getItem('id')
}


  function App() {
  const [auth, setAuth] = useState(defaultValue);
  const setLocalAuth =(newAuth)=>{
    //base
    setAuth(newAuth)
    //local
    localStorage.setItem('token',newAuth.token)
    localStorage.setItem('nome',newAuth.nome)
    localStorage.setItem('id',newAuth.id)

  }

  return (
    <AuthContext.Provider value={{ auth: auth, setAuth:setLocalAuth}}>

      <Router history={history}>
        <RouteAuth exact path='/' component={PaginaFeed} />
        <RouteAuth exact path='/postar' component={PaginaPostar} />
        <Route exact path='/cadastrar' component={PaginaCadastro} />
        <Route exact path='/login' component={PaginaLogin} />
        <Route exact path='/logout' component={()=>{
          localStorage.removeItem('token')
          localStorage.removeItem('nome')
          localStorage.removeItem('id')
          // localStorage.clear()
          setAuth(defaultValue)
          history.push('/')
          return(
            <h1>Deslogando</h1>
          )
        }} />;

      </Router>
    </AuthContext.Provider>
  );
}

export default App;
