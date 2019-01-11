import React, { Component } from 'react'
import {InputBox, InputButton} from './styles'

class Input extends Component {
  constructor() {
    super()
    this.state = {
      input: "",
      filter: ""
    }
    this.updateText = this.updateText.bind(this)
  }

  updateText(event) {
    this.setState({ input: event.target.value})
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <InputBox type='text' placeholder='add' onChange={this.updateText} />
          <InputButton onClick={() => this.props.addTodo(this.state.input)}>+</InputButton>
        </div>
        <InputBox type='text' placeholder='filter' onChange={this.props.setQuery} />
      </React.Fragment>

    )
  }

}

export default Input;
