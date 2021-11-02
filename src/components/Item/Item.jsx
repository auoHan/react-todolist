import React, {Component} from 'react';
import './Item.css'

class Item extends Component {
  state = {
    mouse: false
  }

  render() {
    let {id, name, done} = this.props
    return (
        <>
          <li style={{backgroundColor: this.state.mouse ? "#ddd" : "#fff"}} onMouseEnter={() => {
            this.handleMouse(true)
          }} onMouseLeave={() => {
            this.handleMouse(false)
          }}>
            <label>
              <input type="checkbox" checked={done} onChange={(e) => {
                this.handleCheck(e, id)
              }}/>
              <span>{name}</span>
            </label>
            <button onClick={() => {
              this.handleDelete(id)
            }} className="btn btn-danger" style={{display: this.state.mouse ? "block" : "none"}}>删除
            </button>
          </li>
        </>
    );
  }

  handleMouse = (flag) => {
    this.setState(() => {
      return {mouse: flag}
    })
  }

  handleCheck = (e, id) => {
    this.props.changeTodo(id, e.target.checked)
  }

  handleDelete = (id) => {
    if (window.confirm("你确定删除吗？")) {
      this.props.deleteTodo(id)
    }
  }
}

export default Item;