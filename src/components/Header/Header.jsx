import React, {Component} from 'react';
import {nanoid} from "nanoid";
import './Header.css'

class Header extends Component {

  handleKeyUp = (e) => {
    const {keyCode, target} = e
    if (keyCode !== 13) return
    if (target.value.trim() === '') {
      alert("不能输入空内容")
      return
    }
    let todoObj = {id: nanoid(), name: target.value, done: false}
    this.props.addTodo(todoObj)
    target.value = ''
  }

  render() {
    return (
        <>
          <div className="todo-header">
            <input onKeyUp={(e) => {
              this.handleKeyUp(e)
            }} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
          </div>
        </>
    );
  }
}

export default Header;