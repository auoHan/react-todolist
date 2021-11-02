import React, {Component} from 'react';
import Item from "../Item/Item.jsx";
import './List.css'

class List extends Component {
  render() {
    let {todos, changeTodo, deleteTodo} = this.props
    return (
        <>
          <ul className="todo-main">
            {todos.map(item => {
              return <Item key={item.id} {...item} changeTodo={(id, done) => {
                changeTodo(id, done)
              }} deleteTodo={id => deleteTodo(id)}/>
            })}
          </ul>
        </>
    );
  }

}

export default List;