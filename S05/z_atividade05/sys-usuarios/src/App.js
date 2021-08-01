import { PaginaFeed } from "./pages/PaginaFeed";
import {Router,Route} from 'react-router-dom'
import history from './history.js'
import { PaginaPostar } from "./pages/PaginaPostar";
function App() {
  return (
    <Router history={history}>
      <Route exact path='/' component={PaginaFeed} />
      <Route exact path='/postar' component={PaginaPostar} />

    </Router>
  );
}

export default App;
