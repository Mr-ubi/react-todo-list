import React from 'react';
import {v1 as uuid} from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  React.state={
    items: [{id:1, title: "wake up"},{id:2, title: "make breakfast"}],
    id: uuid(),
    item: "",
    editItem: false
  };


  React.handleChange = (e) => {
    console.log("handle change");
  }
  React.handleSubmit = (e) => {
    console.log("handle submit");
  }
  React.clearList = () => {
    console.log("clear list");
  }
  React.handleDelete = (id) => {
    console.log("handle delete " + {id});
  }
  React.handleEdit = (id) => {
    console.log("handle edit " + {id});
  }

  return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">
              Todo Input
            </h3>
            <TodoInput item={React.state.item} handleChange={React.handleChange} handleSubmit={React.handleSubmit} editItem={React.state.editItem} />
            <TodoList items={React.state.items} clearList={React.clearList} handleDelete={React.handleDelete} handleEdit={React.handleEdit}/>
          </div>
        </div>
      </div>
  );
}

export default App;
