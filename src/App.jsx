import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const link = "https://www.google.com";

  return (
    <Router>
      <div className="h-screen mx-28 my-5">
        {/* Nav is always there no matter the route */}
        <Navbar/>
        <div>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
