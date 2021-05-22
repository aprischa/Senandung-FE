
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from '../src/page/homepage'
import Detail from '../src/page/detail'



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/:search" component={(props) => <HomePage {...props} />}>
        </Route>
        <Route path="/detail/:id" component={(props) => <Detail {...props} />}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;