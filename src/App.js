import './index.css';
import Navbar from './Navbar';
import Home from './BakingHome';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Recipes from './Recipes';
import BotBar from './Botbar';
import Rolls from './Rolls';
import Browniess from './Brownies';
import Cakes from './Cakes';
import Cookis from './Cookies';
import Create from './Create_Resipe';

function App() {
  return (
  <Router>
    <div className="App">
        <Navbar />
        <div className="content">
        <Switch>
          <Route path='/homepage'>
          <Home />
          </Route>
          <Route path='/recipes'>
          <Recipes />
          </Route>
          <Route path='/rolls'>
          <Rolls />
          </Route>
          <Route path='/cakes'>
          <Cakes />
          </Route>
          <Route path='/cookies'>
          <Cookis />
          </Route>
          <Route path='/brownies'>
          <Browniess />
          </Route>
          <Route path='/create'>
          <Create />
          </Route>
        </Switch>
        </div>
        <BotBar />
    </div>
    </Router>
  );
}

export default App;