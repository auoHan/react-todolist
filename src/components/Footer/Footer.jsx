import React, {Component} from 'react';
import './Footer.css'

class Footer extends Component {
  /*render() {
    const {todos} = this.props
    const completedTodos = todos.filter(item=> {
      return item.done === true
    })
    const incompleteTodos = todos.filter(item=> {
      return item.done === false
    })
    return (
      <>
        <div className="todo-footer">
          <label>
            <input type="checkbox" checked={todos.length !== 0 && completedTodos.length === todos.length}/>
          </label>
          <span>
            <span>已完成{completedTodos.length}</span> / 全部{todos.length}
          </span>
            <button onClick={()=>{this.deleteCompleted(incompleteTodos)}} className="btn btn-danger">清除已完成任务</button>
          </div>
      </>
    );
  }*/
  render() {
    const {todos} = this.props
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    const total = todos.length
    return (
        <>
          <div className="todo-footer">
            <label>
              <input type="checkbox" onChange={(e) => {
                this.handleCheckAll(e)
              }} checked={total !== 0 && doneCount === total}/>
            </label>
            <span>
            <span>已完成{doneCount}</span> / 全部{total}
          </span>
            <button onClick={() => {
              this.handleClearAll()
            }} className="btn btn-danger">清除已完成任务
            </button>
          </div>
        </>
    );
  }

  handleClearAll = () => {
    this.props.clearAllTodos()
  }

  handleCheckAll = (e) => {
    this.props.checkAllTodo(e.target.checked)
  }
}

export default Footer;