import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navigation/Navbar';
import TodoApp from './components/TodoApp/TodoMain';
import NavReact from './components/Navigation/NavReact';
import LoginPage from './components/LoginForm/LogForm';

function App() {
  
  return(

    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path ='/' exact component={LoginPage}/>
          <Route path ='/TodoApp' exact component={TodoApp}/>
          <Route path ='/NavReact' exact component={NavReact}/>
        </Switch>
      </Router>
    </div>
  );
}
  
export default App;
