import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navigation/Navbar';
import TodoApp from './components/TodoApp/TodoMain';


function App() {
  
  return(

    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path ='/ToDoApp' exact component={TodoApp}/>
        </Switch>
      </Router>
      
    </div>
  );
}
  
export default App;
