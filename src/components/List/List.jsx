import React, {Component} from 'react';
import Item from "../Item/Item.jsx";
import './List.css'

class List extends Component {
  render() {
    let {todos, changeTodo, deleteTodo} = this.props
    return (
        <>
          {todos.length===0 ? <div style={{textAlign:'center',padding:'10px 0'}}>已完成全部</div> : <ul className="todo-main">
            {todos.map(item => {
              return <Item key={item.id} {...item} changeTodo={(id, done) => {
                changeTodo(id, done)
              }} deleteTodo={id => deleteTodo(id)}/>
            })}
          </ul>}
        </>
    );
  }

}

export default List;
