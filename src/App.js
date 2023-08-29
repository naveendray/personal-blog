import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import Test from './Test';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = "https://www.google.com"

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
