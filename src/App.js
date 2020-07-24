import React from "react";
// import logo from './logo.svg'
import Todos from "./components/Todos";
import "./App.css";
import About from './components/About'
import Header from "./components/layouts/Header";
import AddToDo from "./components/AddToDo";
import { v4 as uuid } from "uuid";
import { filter } from "minimatch";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "Learn C++ STL",
        description: "I learnt C++ STl",
        isdone: false
      },
      {
        id: uuid(),
        title: "Learn React.js",
        description: "I learnt React.js",
        isdone: false
      },
      {
        id: uuid(),
        title: "Learn Recursion",
        description: "I learnt Recursion",
        isdone: false
      }
    ]
  };

  markascomplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (id === todo.id) {
          todo.isdone = !todo.isdone;
        }

        console.log(id);
        return todo;
      })
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addToDo = (title, description) => {
    const newTodo = {
      id: uuid(),
      title: title,
      description: description,
      isdone: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    console.table(this.state.todos);
    return (
      <Router>
        <div className="App">
          <h2>
            <Header />

            <Route exact path= "/" render = {props => (

              <React.Fragment>

<AddToDo addToDo={this.addToDo} />
            <Todos
              todos={this.state.todos}
              markascomplete={this.markascomplete}
              deleteTodo={this.deleteTodo}
            />


              </React.Fragment>



            )} />

              <Route path="/about" component ={About}   />



            
          </h2>
        </div>
      </Router>
    );
  }
}

export default App;
