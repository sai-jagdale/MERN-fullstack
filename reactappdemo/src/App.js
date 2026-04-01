import {BrowserRouter as Router , Link , Switch , Route} from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import Products from './Product';
import List from './List';

// React  js introduces a new synatx for wriiting presentation
// logic for component using 
// JSX ---- JavaScript extension for XML
function App() {
  return (
    <div className="App">
      <hr/>
      <BasicRouting></BasicRouting>
    </div>
  );
}

function BasicRouting(){
  return(
    <div>
      <h1>Basic Routing</h1>
      <Router>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        
        {/* Switch was used in React Router v5 and below.
            It is not used in v6. Switch rendered only one route at a time. */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={List} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

//function Component 
function Home(){
  return(
    <div>
      <div className="jumbotron text-center">
        <h1 className="display-4">Transflower Learning Pvt. Ltd.</h1>
        <p className="lead">Mentor as a Service</p>
        <p>React JS Learning is a fun</p>
      </div>
      <hr/>
      <div className="container">
        <div className="row">
          
          <div className="col-sm-4">
            <h3>Flowers</h3>
            <p>We have a wide variety of flowers</p>
          </div>

          <div className="col-sm-4">
            <h3>Plants</h3>
            <p>We have a wide variety of plants</p>
          </div>

          <div className="col-sm-4">
            <h3>Gardening Tools</h3>
            <p>We have a wide variety of gardening tools</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App;
