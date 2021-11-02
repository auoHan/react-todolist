import React, {Component} from 'react';
import Header from "./components/Header/Header.jsx";
import List from "./components/List/List.jsx";
import Footer from "./components/Footer/Footer.jsx";
import './App.css'

class App extends Component {
  state = {
    todos: [
      {id: '001', name: '吃饭', done: true},
      {id: '002', name: '玩游戏', done: true},
      {id: '003', name: '睡觉', done: false},
      {id: '004', name: '敲代码', done: false}
    ]
  }
  addTodo = (todoObj) => {
    let newTodos = [todoObj, ...this.state.todos]
    this.setState(() => {
      return {todos: newTodos}
    })
  }
  changeTodo = (id, done) => {
    let newTodos = this.state.todos.map(item => {
      if (item.id === id) {
        /*item.done = done
        return item*/
        return {...item, done}
      }
      return item
    })
    this.setState(() => {
      return {todos: newTodos}
    })
  }
  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter(item => {
      return item.id !== id
    })
    this.setState(() => {
      return {todos: newTodos}
    })
  }
  clearAllTodos = () => {
    const newTodos = this.state.todos.filter(item => {
      return !item.done
    })
    this.setState(() => {
      return {todos: newTodos}
    })
  }
  checkAllTodo = (done) => {
    const newTodos = this.state.todos.map(item => {
      return {...item, done}
    })
    this.setState(() => {
      return {todos: newTodos}
    })
  }

  render() {
    let {todos} = this.state
    return (
        <>
          <div className="todo-container">
            <div className="todo-wrap">
              <Header addTodo={todoObj => this.addTodo(todoObj)}/>
              <List todos={todos} changeTodo={(id, done) => {
                this.changeTodo(id, done)
              }} deleteTodo={id => this.deleteTodo(id)}/>
              <Footer todos={todos} clearAllTodos={() => this.clearAllTodos()}
                      checkAllTodo={done => this.checkAllTodo(done)}/>
            </div>
          </div>
        </>
    );
  }
}

export default App;